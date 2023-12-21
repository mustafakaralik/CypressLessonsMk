
describe('Different type of ınput fields test', () => {
    beforeEach('Navigate to Login Page',() =>{
       cy.clearCookies();
       cy.visit('registration_form');
    })

    xit('Input Boxes', () => {
        cy.get('input[name="firstname"]').type('Mustafa');
        cy.get('input[name="lastname"]').type('kara');
        cy.get('input[name="username"]').type('blackness');
        cy.get('input[name="email"]').type('mustafakara@gmail.com');
        cy.get('input[name="password"]').type('76511027abc');
        cy.get('input[name="phone"]').type('5435844567');
    })

    xit('Check different radio button actions', ()=>{  //if we put X at the begining of it block this not will be run
        cy.get('.radio')
        .find('[type=radio]')
        .then((radioButtons)=>{
            //get all radio buttons, find the first one check it and assert that it is checked
            cy.wrap(radioButtons).first().check().should('be.checked');  // wrap method comes from cypres used for change JQuery element to Cypress elements
        
            
            //use index of the list element then check and verify
            cy.wrap(radioButtons).eq(1).check().should('be.checked');
            //verify that third one not checked
            cy.wrap(radioButtons).eq(2).should('not.be.checked').should('have.value','SDET');
        })
    })

    xit('Check Different Type of checkbox actions',() => {
        cy.get('[type="checkbox"]').then((checkbox) => {
            //check Java Box and verify checked
            cy.wrap(checkbox).eq(1).check().should('be.checked');
            //uncheck  and assert unchecked
            cy.wrap(checkbox).eq(1).uncheck().should('not.be.checked');
            //verify that third box value is JavaScript and check and assert
            cy.wrap(checkbox).eq(2).should('have.value','javascript').check().should('be.checked');

        })
    })

    it('Check select dropdown and select single choice', ()=> {
        // locate top select menu locator then use select function to select tab
        cy.get('select[name="job_title"]').select('SDET');


        //locate the select menu again and verify the value contains SDET
        cy.get('select[name="job_title"]').contains('SDET').should('have.value', 'SDET');

        cy.get('select[name="job_title"]').contains('SDET').should('have.value', 'QA'); // negative verification


    })
})