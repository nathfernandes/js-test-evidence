const el = require('./elements').ELEMENTS;

class SignIn{
    fillForm(email, password){
        cy.get(el.emailInput).type(email);
        cy.get(el.passwordInput).type(password);

        cy.get(el.buttonSignIn).click();
    }
}

export default new SignIn();