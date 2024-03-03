export const Validator = {
    validateName: function(name) {
        const re = /^[А-ЯA-Z][А-Яа-яA-Za-z\-]*$/;
        console.log("- Имя должно начинаться с заглавной буквы\n" +
                    "- Имя может содержать только буквы и дефисы");
        return re.test(name);
    },
    validateLogin: function(login) {
        const re = /^[a-zA-Z][a-zA-Z0-9_-]{2,19}$/;
        console.log("- Логин должен начаться с алфавитного символа\n" +
                    "- Логин должен содержать от 2 до 19 символов\n" +
                    "- Логин может содержать только алфавитные символы, цифры, подчеркивания и дефисы");
        return re.test(login);
    },
    validateEmail: function(email) {
        const re = /^[a-zA-Z0-9_-]+@[a-zA-Z]+\.[a-zA-Z]+$/;
        console.log("- Электронная почта должна быть формата text@text.text\n" +
                    "- Могут использоваться только алфавитные символы, цифры, подчеркивания и дефисы в адресе электронной почты");
        return re.test(email);
    },
    validatePassword: function(password) {
        const re = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/;
        console.log("- Длина пароля должна быть от 8 до 40 символов\n" +
                    "- Пароль должен содержать хотя бы одну цифру\n" +
                    "- Пароль должен содержать хотя бы одну заглавную букву\n" +
                    "- Пароль может содержать только латинские буквы и цифры (никаких специальных символов или пробелов)");
        return re.test(password);
    },
    validatePhone: function(phone) {
        const re = /^\+?\d{10,15}$/;
        console.log("- Номер телефона должен содержать от 10 до 15 цифр\n" +
                    "- Номер телефона может начинаться с ведущего '+', но это не обязательно");
        return re.test(phone);
    },
    validateMessage: function(message) {
        console.log("- Сообщение не должно быть пустым или состоять только из пробелов");
        return message.trim().length > 0;
    }
}