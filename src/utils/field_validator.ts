export const Validator = {
    validateName: function(name) {
        const re = /^[А-ЯA-Z][А-Яа-яA-Za-z\-]*$/;
        return re.test(name);
    },
    validateLogin: function(login) {
        const re = /^[a-zA-Z][a-zA-Z0-9_-]{2,19}$/;
        console.log("Ошибка: логин должен содержать от 2 до 19 символов или пароль содержит недопустимые символы.");
        return re.test(login);
    },
    validateEmail: function(email) {
        const re = /^[a-zA-Z0-9_-]+@[a-zA-Z]+\.[a-zA-Z]+$/;
        return re.test(email);
    },
    validatePassword: function(password) {
        const re = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/;
        console.log("Ошибка: пароль должен содержать от 8 до 40 символов или пароль содержит недопустимые символы.");
        return re.test(password);
    },
    validatePhone: function(phone) {
        const re = /^\+?\d{10,15}$/;
        return re.test(phone);
    },
    validateMessage: function(message) {
        return message.trim().length > 0;
    }
}