describe('How to do API request with cypress',() => {
    it('verify Bookstore Books collection with GET requets',() => {
        cy.request({
            method: 'GET',
            url: `${Cypress.env('apiUrl')}${Cypress.env('apiBooks')}`,  //we will get it from config fileusing backtick instead hardcoded like this one "https://demoqa.com/BookStore/v1/Books"
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.equal(200);
            // verify body object
            expect(response.body.books[1].title).to.equal('Learning JavaScript Design Patterns');
            //verify headers
            expect(response.headers['content-type']).to.equal('application/json; charset=utf-8');
        })

    })
})