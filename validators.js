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