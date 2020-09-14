/// <reference types="cypress" />

import Home from '../support/pages/Home';
import SignIn from '../support/pages/SignIn';
import Account from '../support/pages/Account';

const creds = require('../fixtures/credentials.json');

describe('Automation Practice', () => {
    it('User must be able to login', () => {
        login(creds.validemail, creds.validpassword);
    });

    it('Test failure example', () => {
        login(creds.validemail, creds.invalidpassword);
    });
});

function login(email, password){
    Home.signIn();
    SignIn.fillForm(email, password);
    Account.validateSuccess();
    Account.signOut();
}