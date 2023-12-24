/*const username =`user${Math.floor(Math.random() * 100000 + 100000)  // to create ramdom user name
            .toString()
            .substring(1)}`;
*/

const username ='mkaralik1234';        
const passWord ='Test123456!';

    describe('E2E - Test API Integrated with UI',() => {
  
        beforeEach('create auser and generate a token from API and set cookies', () => {
            //following API request is for creating user and setting cookies for the test
            cy.request({
                method: 'POST',
                url: `${Cypress.env('apiUrl')}${Cypress.env('generateUser')}`,  //we will get it from config fileusing backtick instead hardcoded like this one "https://demoqa.com/BookStore/v1/Books"
                body: {
                    userName: username,
                    password: passWord,
                },

            }).then((response)=> {
            cy.setCookie('userID',response.body.userID);
            cy.setCookie('userName',response.body.username); 
            });
            //following request is for creating Token aand storing in to cookies
            cy.request({
                method: 'POST',
                url: `${Cypress.env('apiUrl')}${Cypress.env('generateToken')}`,  //we will get it from config fileusing backtick instead hardcoded like this one "https://demoqa.com/BookStore/v1/Books"
                body: {
                    userName: username,
                    password: passWord,
                },

            }).then((response)=> {
                cy.setCookie('token',response.body.token);
                cy.setCookie('expires',response.body.expires); 
            });
        });

        afterEach('Deleting USER created for testing by using API request',()=>{
            //we are chaining API requests to login then delete
            cy.request({
                method: 'POST',
                url: `${Cypress.env('apiUrl')}${Cypress.env('loginAPI')}`,  //we will get it from config fileusing backtick instead hardcoded like this one "https://demoqa.com/BookStore/v1/Books"
                body: {
                    userName: username,
                    password: passWord,
                },

            }).then((response)=> {
                cy.request({
                    method : 'DELETE',
                    headers : {
                        authorization: `Bearer ${response.body.token}`,
                    },
                    url:  `${Cypress.env('apiUrl')}${Cypress.env('generateUser')}/${response.body.userID}`, 
                });
            });
    
        });

        it('Check if user logged in from UI environment',{ baseUrl:"https://demoqa.com/"},() => {
            cy.visit('/profile');
            cy.get('#userName-value').contains(username).should('be.visible');
    
        });

    });
