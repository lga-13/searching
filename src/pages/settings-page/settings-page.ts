import "./settings-page.css";
import Block from "../../components/base/block.ts";
import Img from "../../components/img/img.ts";
import Link from "../../components/link/link.ts";
import greetings from "../settings-page/settings-page-template.ts";
import Plug from "../../components/plug/plug.ts";
import Button from "../../components/button/button.ts";
import {changePasswordForm} from "../../blocks/change-password-form/change-password-form-build.ts";
import {settingsPage} from "./settings-page-build.ts";
import Title from "../../components/title/title.ts";
import Form from "../../blocks/form/form.ts";
import {ErrorMessages, Validator} from "../../utils/field_validator.ts";


export default class SettingsPage extends Block {
    constructor(
        props: {
            className: string,
            settings: {
                withInternalID: boolean},
            settingsImg: Img,
            settingsLinkImg: Link,
            settingsLoginTitle: Title,
            settingsNameTitle: Title,
            settingsSecondNameTitle: Title,
            settingsEmailTitle: Title,
            settingsPhoneTitle: Title,
        }) {
        props.changeDataForm = new Form(
            {
                className: 'change-data-form',
                button: {
                    className: 'change-data-form__button',
                    typeName: 'submit',
                    text: 'Сохранить'
                },
                fields: [
                    {
                        label: {
                            className: 'change-data-form__label',
                            text: "Логин",
                            settings: {withInternalID: true}
                        },
                        input: {
                            className: 'change-data-form__input',
                            name: 'login',
                            placeholder: '',
                            inputType: "text",
                            settings: {withInternalID: true},
                            events: {
                                click: () => {}
                            }
                        },
                        errorMessage: {
                            className: 'change-data-form__error-message',
                            text: ErrorMessages.validateLogin,
                            settings: {withInternalID: true}
                        },
                        validator: Validator.validateLogin,
                    },
                    {
                        label: {
                            className: 'change-data-form__label',
                            text: "Имя",
                            settings: {withInternalID: true}
                        },
                        input: {
                            className: 'change-data-form__input',
                            name: 'first_name',
                            placeholder: '',
                            inputType: "text",
                            settings: {withInternalID: true},
                            events: {
                                click: () => {}
                            }
                        },
                        errorMessage: {
                            className: 'change-data-form__error-message',
                            text: ErrorMessages.validateName,
                            settings: {withInternalID: true}
                        },
                        validator: Validator.validateName,
                    },
                    {
                        label: {
                            className: 'change-data-form__label',
                            text: "Фамилия",
                            settings: {withInternalID: true}
                        },
                        input: {
                            className: 'change-data-form__input',
                            name: 'second_name',
                            placeholder: '',
                            inputType: "text",
                            settings: {withInternalID: true},
                            events: {
                                click: () => {}
                            }
                        },
                        errorMessage: {
                            className: 'change-data-form__error-message',
                            text: ErrorMessages.validateName,
                            settings: {withInternalID: true}
                        },
                        validator: Validator.validateName,
                    },
                    {
                        label: {
                            className: 'change-data-form__label',
                            text: "Почта",
                            settings: {withInternalID: true}
                        },
                        input: {
                            className: 'change-data-form__input',
                            name: 'email',
                            placeholder: '',
                            inputType: "email",
                            settings: {withInternalID: true},
                            events: {
                                click: () => {}
                            }
                        },
                        errorMessage: {
                            className: 'change-data-form__error-message',
                            text: ErrorMessages.validateEmail,
                            settings: {withInternalID: true}
                        },
                        validator: Validator.validateEmail,
                    },
                    {
                        label: {
                            className: 'change-data-form__label',
                            text: "Телефон",
                            settings: {withInternalID: true}
                        },
                        input: {
                            className: 'change-data-form__input',
                            name: 'phone',
                            placeholder: '',
                            inputType: "email",
                            settings: {withInternalID: true},
                            events: {
                                click: () => {}
                            }
                        },
                        errorMessage: {
                            className: 'change-data-form__error-message',
                            text: ErrorMessages.validateEmail,
                            settings: {withInternalID: true}
                        },
                        validator: Validator.validateEmail,
                    },
                ],
            })
        props.changeDataForm.hide()
        props.changePasswordForm = new Form(
            {

                className: 'change-password-form',

                button: {
                    className: 'change-password-form__button',
                    typeName: 'submit',
                    text: 'Сохранить'
                },

                fields: [
                    {
                        label: {
                            className: 'change-password-form__label',
                            text: "Старый пароль",
                            settings: {withInternalID: true}
                        },
                        input: {
                            className: 'change-password-form__input',
                            name: 'password',
                            placeholder: '',
                            inputType: "password",
                            settings: {withInternalID: true},
                            events: {
                                click: () => {}
                            }
                        },
                        errorMessage: {
                            className: 'change-password-form__error-message',
                            text: ErrorMessages.validatePassword,
                            settings: {withInternalID: true}
                        },
                        validator: Validator.validatePassword,
                    },
                    {
                        label: {
                            className: 'change-password-form__label',
                            text: "Новый пароль",
                            settings: {withInternalID: true}
                        },
                        input: {
                            className: 'change-password-form__input',
                            name: 'new_password',
                            placeholder: '',
                            inputType: "password",
                            settings: {withInternalID: true},
                            events: {
                                click: () => {}
                            }
                        },
                        errorMessage: {
                            className: 'change-password-form__error-message',
                            text: ErrorMessages.validatePassword,
                            settings: {withInternalID: true}
                        },
                        validator: Validator.validatePassword,
                    },
                    {
                        label: {
                            className: 'change-password-form__label',
                            text: "Повторите новый пароль",
                            settings: {withInternalID: true}
                        },
                        input: {
                            className: 'change-password-form__input',
                            name: 'repeat_password',
                            placeholder: '',
                            inputType: "password",
                            settings: {withInternalID: true},
                            events: {
                                click: () => {}
                            }
                        },
                        errorMessage: {
                            className: 'change-password-form__error-message',
                            text: ErrorMessages.validatePassword,
                            settings: {withInternalID: true}
                        },
                        validator: Validator.validatePassword,
                    },
                ],
            }
        )
        props.changePasswordForm.hide()


        const settingsPlug = new Plug(
            {
                className: "plug",
                plugLink: {
                    className: 'settings-window__link',
                    href: '#',
                    text: 'Выберите, какие изменения хотите внести.',
                }
            }
        )

        props.settingsPlug = settingsPlug


        const settingsDataLink = new Link(
            {
                className: 'settings__change-data',
                href: '#',
                text: 'Изменить личные данные',
                settings: {withInternalID: true},
                events: {
                    click: () => {
                        settingsPage.showChangeDataForm()
                    }
                }
            }
        )
        props.settingsDataLink = settingsDataLink

        const settingsPasswordLink = new Link(
            {
                className: 'settings__change-password',
                href: '#',
                text: 'Сменить пароль',
                settings: {withInternalID: true},
                events: {
                    click: () => {
                        settingsPage.showChangePasswordForm()
                    }
                }
            }
        )
        props.settingsPasswordLink = settingsPasswordLink

        const settingsExitLink = new Link(
            {
                className: 'settings__change-exit',
                href: '#',
                text: 'Выйти из аккаунта',
                settings: {withInternalID: true}
            }
        )
        props.settingsExitLink = settingsExitLink

        const buttonBlueBack = new Button(
            {
                className: 'settings__btn-back',
                typeName: 'button',
                text: '',
                settings: {withInternalID: true},
                events: {click: () => {
                        this.hideSettings()
                    }},
            }
        )
        props.buttonBlueBack = buttonBlueBack

        super('div', props);
    }



    showChangeDataForm() {
        this.children.changePasswordForm.hide()
        this.children.changeDataForm.show()
        this.children.settingsPlug.hide()
        }

    showChangePasswordForm() {
        this.children.changeDataForm.hide()
        this.children.changePasswordForm.show()
        this.children.settingsPlug.hide()
    }

    hideSettings() {
        this.children.changeDataForm.hide()
        this.children.changePasswordForm.hide()
        this.children.settingsPlug.show()
    }

    render() {
        return this.compile(greetings, this.props);
    }
}