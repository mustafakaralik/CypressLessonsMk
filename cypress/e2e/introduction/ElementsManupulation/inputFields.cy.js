
describe('Different type of ınput fields test', () => {
    beforeEach('Navigate to Login Page',() =>{
       cy.clearCookies();
       cy.visit('registration_form');
    })

    it('Input Boxes', () => {
        cy.get('input[name="firstname"]').type('Mustafa');
        cy.get('input[name="lastname"]').type('kara');
        cy.get('input[name="username"]').type('blackness');
        cy.get('input[name="email"]').type('mustafakara@gmail.com');
        cy.get('input[name="password"]').type('76511027abc');
        cy.get('input[name="phone"]').type('5435844567');
    })

    it('Check different radio button actions', ()=>{  //if we put X at the begining of it block this not will be run
        cy.get('.radio')
        .find('[type=radio]')
        .then((radioButtons)=>{
            //get all radio buttons, find the first one check it and assert that it is checked
            cy.wrap(radioButtons).first().check().should('be.checked');  // wrap method comes from cypres used for change JQuery element to Cypress elements
        
            
            //use index of the list element then check and verify
            cy.wrap(radioButtons).eq(1).check().should('be.checked');
            //verify that third one not checked
            cy.wrap(radioButtons).eq(2).should('not.be.checked');
        })
    })

    it('Check Different Type of checkbox actions',() => {
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

        // cy.get('select[name="job_title"]').contains('SDET').should('have.value', 'QA'); // we used this line for negative verification


    })
 //we use JSON department JSON that we created before to select all dropdown element
    it('Check all of the Select Dropdown Options', ()=> {
       cy.fixture('departments').then((departments)=> {
         cy.get('select[name="department"] > option').each((option,index,allOptions) => {
         //get each option text
         const optionText = option.text();

         cy.get('select[name="department"]')
         .select(optionText)
         .should('have.value', option.val())
         .contains(departments[index])
         })
       })

    })
})
