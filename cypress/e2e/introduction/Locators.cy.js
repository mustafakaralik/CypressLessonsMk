    describe('Find  or Get Elemenets by using Different Locators', () => {
    beforeEach('Navigate to Login Page',() =>{
       cy.clearCookies();
       cy.visit('login');
    })
    it('Check Different Locator Strategies', () => {
 // By CSS locator
    //     cy.get("input[name='username']") // this statement creates an object that can be chained
    cy.get("input[name='username']").type('CydeoStudent');

    // locate the same element with attribute name  and value then clear the box
    cy.get("[type='text']").clear();

    //when we get multiple elements with a tagname tag
    cy.get('input').each((item,index, list) => {
        expect(list).to.have.length(2);
        expect(item).to.have.attr('type');

    })

    // locate login button with using text
    cy.get('button').should('contain','Login').click();
    })

    it('Check finding elements by travelling through Document Object Model', ()=>{
    //locate username box, go up to parent form then navigate to child Login button
    cy.get("input[name='username']")
      .parents('form')
      .find('button')
      .should('contain', 'Login')
      .click();

    })

    it('Check Different Type of Assertions',() => {
        //implicit assertion  also call them 'shoul Assertions
        cy.get('#wooden_spoon').should('contain','Login').and('have.class','btn btn-primary'); //these comes from cypress librarry no need to memorize all
  

        //expilicit: expect() assertions
        cy.get('#wooden_spoon').then((buttonElementThatWeGaveName) => {
            expect(buttonElementThatWeGaveName).to.have.text('Login');
            expect(buttonElementThatWeGaveName).to.have.class('btn btn-primary');
        })
    })
})