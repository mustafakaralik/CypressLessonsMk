describe('Testing Alerts in Cypress Environment ', {baseUrl:"https://demoqa.com/" }, () =>{
    
    beforeEach(() => {
        cy.clearCookies();
        cy.visit('/alerts');

    })
    it ('Check Alert confirmation ',() => {
        /*
        * Browser Commands : window:alert, window: confirmation, window: on etc..
        
        */
       const stub =cy.stub();
       cy.on('window:confirm',stub); // this action stores confirmation in to the stub function
        cy.get('#confirmButton')
        .click()
        .then(()=> {
            expect(stub.getCall(0)).to.be.calledWith('Do you confirm action?')
        });
        cy.on('window:confirm', ()=> true);  // user click Ok button
        cy.contains('You selected Ok').should('be.visible');
    })

    it ('Check Alert cancelation',() => {
        const stub =cy.stub();
        cy.on('window:confirm',stub); // this action stores confirmation in to the stub function
        cy.get('#confirmButton')
        .click()
        .then(()=> {
            expect(stub.getCall(0)).to.be.calledWith('Do you confirm action?')
        });
        cy.on('window:confirm', ()=> false); // user click cancel button
        cy.contains('You selected Cancel').should('be.visible');
    })
})

   
