# ИИ - инструмент:  Deepseek

1.Ты — QA-инженер. Ниже приведены функция isValidPassword и ее
спецификация.
Требования: пароль — строка длиной не менее 8 символов,
содержит хотя бы одну букву и хотя бы одну цифру.
Во всех остальных случаях функция возвращает false.
Сгенерируй юнит-тесты на Jest:
- используй describe() и test();
- используй expect() с matchers toBe, toBeTruthy, toBeFalsy;
- проверь граничные значения: длина пароля 7 и 8 символов;
- проверь некорректные типы аргументов: null, undefined, число,
объект;
- не изменяй реализацию функции;
- добавь к каждому тесту комментарий с проверяемым требованием.

2.Ты – опытный веб-разработчик, проводящий code review. Ниже приведены модуль validators.js и спецификация функций. Найди: логические ошибки; отклонения от спецификации; непокрытые граничные случаи; проблемы с типами аргументов; возможные исключения. Для каждого замечания укажи конкретный входной аргумент, на котором проявляется проблема. Не предлагай изменений, не относящихся к спецификации.

Спецификация:

isValidEmail: true, если строка в формате email (локальная часть, @, домен, точка), иначе false.

isValidPassword: true, если строка длиной от 8 символов, содержит хотя бы одну букву и одну цифру, иначе false.

isValidAge: true, если целое число от 14 до 120, иначе false.

Код validators.js:

javascript
function isValidEmail(email) {
    if (typeof email !== 'string') return false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPassword(password) {
    if (typeof password !== 'string' || password.length < 8) return false;
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasDigit = /[0-9]/.test(password);
    return hasLetter && hasDigit;
}

function isValidAge(age) {
    return Number.isInteger(age) && age >= 14 && age <= 120;
}

module.exports = { isValidEmail, isValidPassword, isValidAge };
