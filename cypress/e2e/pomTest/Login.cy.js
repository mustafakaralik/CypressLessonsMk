import { navigateTo } from "../../support/pages/Navigation";
import { auth } from "../../support/pages/Auth";

//import { locators } from"../../support/pages/Auth";
 const LoginLocators = require('../../support/pages/Auth'); // another way to import a class to anothet file

describe('Auth: Login user with different ways', () =>{

   
    beforeEach(() => {
        cy.clearAllCookies();
        navigateTo.loginPage();  //called it from POM
    })


    it('Happy path login scenario', () => {  //--> withe custom function 
        cy.fixture('user').then((user) => {
            auth.login(user.user2.username, user.user2.password);

        })

        cy.textExists('You logged into a secure area!');
/*
        auth.logout;

        cy.textExists('!You logged out of the secure area!');
 */      
    })

    it('Happy path login scenario with page locators', () => {  //--> with a POM
        cy.fixture('user').then((user) => {   //we need yo import fixture first 
            LoginLocators.locators.userName.type(user.user2.username);
            LoginLocators.locators.password.type(user.user2.password);
            LoginLocators.locators.submit.click();
        

            cy.textExists('You logged into a secure area!');

        })
    })
})