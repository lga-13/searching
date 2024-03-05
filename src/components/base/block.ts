import {v4 as makeUUID} from 'uuid';
import EventBus from "./event-bus.ts";
import Handlebars from 'handlebars';


type UUID = string & { isUUID: true };


export default class Block {
    static EVENTS: {INIT: string, FLOW_CDM: string, FLOW_RENDER: string, FLOW_CDU: string} = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_RENDER: "flow:render",
        FLOW_CDU: "flow:component-did-update"
    }


    _id: UUID | null = null;
    _element: HTMLElement | null = null
    _meta: {tagName: string, props: object} | null
    props: object

    eventBus: () => EventBus


    constructor(tagName: string = "div", propsAndChildren: object = {}) {

        // Создаем новый EventBus для этого компонента
        const eventBus = new EventBus();
        this.eventBus = () => eventBus;

        // Регистрация событий
        this._registerEvents(eventBus);


        // ПРИСВАИВАНИЕ ПРОПСОВ через _makePropsProxy

        // _makePropsProxy дернет за ниточку CDU

        // Производим отсеивание пропсов и детей
        const {children, props} = this._getChildren(propsAndChildren);
        this.children = children;
        console.log(children)
        // Запись в свойства
        this._meta = {
            tagName,
            props
        }
        if (props.settings && props.settings.withInternalID) {
            // Присваивание внутреннего uuid
            this._id = makeUUID();
            // Доабавление его в пропсы
            this.props = this._makePropsProxy({ ...props, __id: this._id });
        } else {
            this.props = this._makePropsProxy(props);
        }

        // Запуск цепочки событий при INIT
        eventBus.emit(Block.EVENTS.INIT);
    }

    _getChildren(propsAndChildren: {}) {

        // Метод отсеивания компоментов и обычных пропсов.

        const children = {};
        const props = {};

        Object.entries(propsAndChildren).forEach(([key, value]) => {
            if (value instanceof Block)  {
                children[key] = value;
            } else if (value instanceof Array && value.every((item) => item instanceof Block)) {
                children[key] = value;
            } else {
                props[key] = value;
            }
        });
        return { children, props };
    }

    _registerEvents(eventBus: EventBus): void {

        // Регистрация событий блока

        eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this.componentDidUpdate.bind(this));
    }

    _makePropsProxy(props) {

        // Установка прокси при инициализции

        const self = this;
        return new Proxy(props, {
            get(target, prop) {
                const value = target[prop];
                return typeof value === 'function' ? value.bind(target) : value;
            },
            set(target, prop, value) {

                // Копируем текущие пропсы
                const oldProps = { ...self.props };
                target[prop] = value;

                self.componentDidUpdate(oldProps, target)
                return true;
            },
            deleteProperty(target, prop) {
                throw new Error("нет доступа");
            },
        });
    }

    // ----------------------------------------Эмитится Block.EVENTS.INIT ----------------------------------------------
    _createDocumentElement(tagName: string) {

        // Процесс создания элемена в DOM

        // После создания процесса

        const element = document.createElement(tagName);

        if (element instanceof HTMLElement) {

            // Установим атрибут data_id элементу, если он задан
            if (this._id) {
                element.setAttribute('data-id', this._id);
            }
            return element;
        } else {
            throw new Error("Передан неверный тег элемента");
        }
    }

    _createResources() {

        // Создание элемента в DOM с тегом из _meta

        if (this._meta && this._meta.tagName) {
            const {tagName} = this._meta;
            // Процесс создания элемента
            this._element = this._createDocumentElement(tagName);
        } else {
            throw new Error("Нет данных для создания элемента.");
        }
    }

    _init() {

        // Создание элемента в DOM
        // Для создания элемента будет использован тег из _meta
        //
        this._createResources();
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
    // -----------------------------------------------------------------------------------------------------------------

    // ----------------------------------------Эмитится Block.EVENTS.FLOW_CDU ------------------------------------------
    componentDidUpdate(oldProps, newProps) {

        // Проверка изменились ли пропсы

        const response = oldProps !== newProps;
        if (response) {
            this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
        }
        return response;
    }
    // -----------------------------------------------------------------------------------------------------------------

    // ----------------------------------------Эмитится Block.EVENTS.FLOW_CDM ------------------------------------------

    dispatchComponentDidMount() {
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    }

    _componentDidMount() {
        this.componentDidMount();
        Object.values(this.children).forEach(child => {
            child.dispatchComponentDidMount();
        });
    }

    componentDidMount() {}
    // -----------------------------------------------------------------------------------------------------------------

    get element() {
        // Геттер элемента
        return this._element;
    }

    getContent() {
        // Внешний метод получения отрендеренного элемента
        return this.element;
    }

    setProps = nextProps => {
        if (!nextProps) {
            return;
        }
        Object.assign(this.props, nextProps);
    };

    // ----------------------------------------Эмитится Block.EVENTS.FLOW_RENDER ---------------------------------------
    _render() {
        const block = this.render(); // render теперь возвращает DocumentFragment

        this._removeEvents();
        this._element.innerHTML = ''; // удаляем предыдущее содержимое

        this._element.appendChild(block);

        this._addEvents();
    }

    render() {
        // Метод переопределяется пользователем для возврата разметки
    }


    compile(template, props) {

        // Копия пропсов
        const propsAndStubs = { ...props };

        Object.entries(this.children).forEach(([key, child]) => {
            if (child instanceof Block) {
                propsAndStubs[key] = `<div data_id="${child._id}"></div>`
            } else if (child instanceof Array) {
                const result: Block[] = []
                Object.values(child).forEach(child_object => {
                    result.push(`<div data_id="${child_object._id}"></div>`)
                })
                propsAndStubs[key] = result
            }
        });

        const fragment = this._createDocumentElement('template')

        const currentTemplate = Handlebars.compile(template)

        fragment.innerHTML = currentTemplate(propsAndStubs);
        Object.values(this.children).forEach(child => {
            if (child instanceof Block) {
                const stub = fragment.content.querySelector(`[data_id="${child._id}"]`);
                console.log(child)
                stub.replaceWith(child.getContent());
            } else if (child instanceof Array) {
                console.log("ЗАШЛИИИИИИИ")
                console.log(fragment.innerHTML)
                Object.values(child).forEach(child_object => {
                    const stub = fragment.content.querySelector(`[data_id="${child_object._id}"]`);
                    stub.replaceWith(child_object.getContent());
                })
                console.log("ЗАШЛИИИИИИИ")
                console.log(fragment)
            }
        });

        return fragment.content;
    }

    // -----------------------------------------------------------------------------------------------------------------


    show() {
        this.element.style.display = "block";
    }

    hide() {
        this.element.style.display = "none";
    }

    _addEvents() {
        const {events = {}} = this.props;

        Object.keys(events).forEach(eventName => {
            this._element.addEventListener(eventName, events[eventName]);
        });
        this._currentEvents = events;
    }

    _removeEvents() {

        // Метод для соблюдении инкапсуляции при удалении обрботчика

        if (this._currentEvents) {
            Object.keys(this._currentEvents).forEach(eventName => {
                this._element.removeEventListener(eventName, this._currentEvents[eventName]);
            });
        }
    }

}