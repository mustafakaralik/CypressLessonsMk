export class NavigateTo{
    loginPage(){
        cy.visit(Cypress.env('login'));  // this line goes to vomfig js page and  look for env 
        //cy.visit('https://la3eb.com/en-sa')
    }
}

export const navigateTo =new NavigateTo();