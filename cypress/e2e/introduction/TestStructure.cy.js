describe('Context: My first Test on Cypress', () =>{

    before(() =>{
        cy.log('runs once before all test cases in this describe block');
    })
    after(() =>{
        cy.log('runs once after all test cases in this describe block');
    })
    
    beforeEach(() => {
        cy.log('runs before each  test cases ');
    })

    afterEach(() => {
        cy.log('runs after each  test cases ');
    })

    it('Openining a web applicaiton', () =>{
        cy.visit('/registration_form');
    })

    it ('Test2',() => {
        expect(false).to.equal(false);
    })

    xit ('Test3',() => {
        expect(true).to.equal(true);
    })

    it ('Test4',() => {
        expect(false).not.to.equal(true);
    })

    it ('Test5',() => {
        expect(5).to.equal(5);
    })

    it.skip('Test6',() => {
        expect(true).to.equal('5' == 5);
    })
})