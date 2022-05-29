const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

function isLoginValid(login) {
    return login.length > 3 && login.length < 17;
}

function isLoginUnique(allLogins, login) {
    return !allLogins.includes(login);
}

function addLogin(allLogins, login) {
    
    if (isLoginValid(login)) {
        
        if (isLoginUnique(allLogins, login)) {
            allLogins.push(login);
            return "Логін успішно доданий!";
        }
        return "Такий логін уже використовується!";
    }
    return "Помилка! Логін повинен бути від 4 до 16 символів";    

}

console.log(addLogin(logins, 'Ajax'));
console.log(addLogin(logins, 'robotGoogles'));
console.log(addLogin(logins, 'Zod'));
console.log(addLogin(logins, 'jqueryisextremelyfast'));

console.log(logins);
