class NewRandomValue{

    static get(length: {}[]){
        let randomIndex = Math.floor(Math.random() * length.length);
        return length[randomIndex];
    }

}

export default NewRandomValue