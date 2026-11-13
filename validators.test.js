const { isValidEmail, isValidPassword, isValidAge } = require('./validators');

describe('Проверка Email', () => {
    test('Верный email', () => expect(isValidEmail('student@example.com')).toBeTruthy());
    test('Нет точки в домене', () => expect(isValidEmail('student@example')).toBeFalsy());
    test('Нет символа @', () => expect(isValidEmail('student.example.com')).toBeFalsy());
    test('Пустая строка', () => expect(isValidEmail('')).toBeFalsy());
    test('Не строка (null)', () => expect(isValidEmail(null)).toBeFalsy());
});

describe('Проверка Пароля', () => {
    test('Верный пароль (8 символов)', () => expect(isValidPassword('Pass1234')).toBeTruthy());
    test('Слишком короткий (7 символов)', () => expect(isValidPassword('Pass123')).toBeFalsy());
    test('Только буквы', () => expect(isValidPassword('Password')).toBeFalsy());
    test('Только цифры', () => expect(isValidPassword('12345678')).toBeFalsy());
    test('Не строка (undefined)', () => expect(isValidPassword(undefined)).toBeFalsy());
});

describe('Проверка Возраста', () => {
    test('Верный возраст (14)', () => expect(isValidAge(14)).toBeTruthy());
    test('Верный возраст (120)', () => expect(isValidAge(120)).toBeTruthy());
    test('Слишком маленький (13)', () => expect(isValidAge(13)).toBeFalsy());
    test('Слишком большой (121)', () => expect(isValidAge(121)).toBeFalsy());
    test('Дробное число (14.5)', () => expect(isValidAge(14.5)).toBeFalsy());
});