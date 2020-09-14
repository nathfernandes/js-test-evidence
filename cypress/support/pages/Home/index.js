const el = require('./elements').ELEMENTS;

class Home{
    signIn(){
        cy.get(el.buttonSignIn).click();
    }
}

export default new Home();