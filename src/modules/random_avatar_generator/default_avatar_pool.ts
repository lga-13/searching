import chat1 from '../../public/static/img/chat1.svg';
import chat2 from '../../public/static/img/chat2.svg';
import chat3 from '../../public/static/img/chat3.svg';
import chat4 from '../../public/static/img/chat4.svg';
import chat5 from '../../public/static/img/chat5.svg';
import chat6 from '../../public/static/img/chat6.svg';
import chat7 from '../../public/static/img/chat7.svg';
import NewRandomValue from "../../utils/getRandomItem.ts";


const avatarPool = [chat1, chat2, chat3, chat4, chat5, chat6, chat7]




class Memory {

    _memory: {}

    constructor(
    ) {
        this._memory = []
    }


    get(key: number){
        return this._memory[key]
    }

    set(key: number, value: {}){
        this._memory[key] = value
    }

    exist(key) {
        return key in this._memory
    }

}

const avatarMemory = new Memory()


class RandomAvatar{

    static get(user_id: number){
        if (!avatarMemory.exist(user_id)){
            avatarMemory.set(user_id, NewRandomValue.get(avatarPool))
        }
        return avatarMemory.get(user_id)
    }

}

export default RandomAvatar