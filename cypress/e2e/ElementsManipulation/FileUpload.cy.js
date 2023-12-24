describe('Cypress File Upload Test', () =>{

    it('Verify File Uploaded', () => {
        cy.visit('/upload');

        /*
        1-npm-install - dev cypress-file-upload
        2-import the function
        3- add file to fixture
        */ 

        cy.get('#file-upload').attachFile('cat-960x540.jpg');
        cy.get('#file-submit').click();
        //assertion that is uploaded
        cy.get('#uploaded-files').then(() => {
            cy.contains('cat-960x540.jpg').should ('be.visible');
        })
    })

   
})