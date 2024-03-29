export const Validator = {

    validateName: function(name: string): boolean {
        const re: RegExp = /^[А-ЯA-Z][А-Яа-яA-Za-z\-]*$/;
        const result: boolean= re.test(name);
        if (!result) {
            console.log("- Имя должно начинаться с заглавной буквы\n" +
                        "- Имя может содержать только буквы и дефисы");
        }
        return result
    },

    validateLogin: function(login: string): boolean {
        console.log("Валидатор login", login)
        const re: RegExp = /^[a-zA-Z][a-zA-Z0-9_-]{2,18}$/;
        const result: boolean = re.test(login);
        if (!result) {
            console.log("- Логин должен начаться с алфавитного символа\n" +
                        "- Логин должен содержать от 2 до 19 символов\n" +
                        "- Логин может содержать только алфавитные символы, цифры, подчеркивания и дефисы");
        }
        return result
    },

    validateEmail: function(email: string): boolean {
        const re: RegExp = /^[a-zA-Z0-9_-]+@[a-zA-Z]+\.[a-zA-Z]+$/;
        const result: boolean = re.test(email)
        if (!result) {
            console.log("- Электронная почта должна быть формата text@text.text\n" +
                        "- Могут использоваться только алфавитные символы, цифры, подчеркивания и дефисы в адресе электронной почты");
        }
        return result
    },

    validatePassword: function(password: string): boolean {
        const re: RegExp = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/;
        const result: boolean =  re.test(password);
        if (!result) {
            console.log("- Длина пароля должна быть от 8 до 40 символов\n" +
                        "- Пароль должен содержать хотя бы одну цифру\n" +
                        "- Пароль должен содержать хотя бы одну заглавную букву\n" +
                        "- Пароль может содержать только латинские буквы и цифры (никаких специальных символов или пробелов)");
        }
        return result
    },

    validatePhone: function(phone: string): boolean {
        const re: RegExp = /^\+?\d{10,15}$/;
        const result: boolean = re.test(phone);
        if (!result) {
            console.log("- Номер телефона должен содержать от 10 до 15 цифр\n" +
                        "- Номер телефона может начинаться с ведущего '+', но это не обязательно");
        }
        return result
    },

    validateMessage: function(message: string): boolean {
        const result: boolean = message.trim().length > 0;
        if (!result) {
            console.log("- Сообщение не должно быть пустым или состоять только из пробелов");
        }
        return result
    }
}