const el = require('./elements').ELEMENTS;

class Account{
    validateSuccess(){
        cy.get(el.buttonAccount).should('be.visible');
    }

    signOut(){
        cy.get(el.buttonSignOut).click();
    }
}

export default new Account();