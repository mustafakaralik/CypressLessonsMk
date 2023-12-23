class Auth {
    login(user_name,password){
      cy.get('[name="username"]').type(user_name); 
      cy.get('[name="password"]').type(password);  
      cy.get('#wooden_spoon').click();
    }
/** 
    logout(){
        cy.get('a[href="/logout"]>i').click();
    }
    */
}

export const auth =new Auth();  //create an object of this class and export it to use in Login.cy.Js

class Locators {
    get userName(){
        return cy.get('[name="username"]', {timeout: 10000});
    }
    get password() {
        return cy.get('[name="password"]', {timeout: 10000});
    }
    get submit() {
        return cy.get('#wooden_spoon', {timeout: 10000});
    }
}

const locators = new Locators ();  // now we need to export both objects aut and locators object
 module.exports ={
    auth,
    locators,
 }
