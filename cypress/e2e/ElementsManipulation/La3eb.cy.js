describe('Browser Actions', () =>{
    
    it ('open La3eb ',() => {
            cy.clearCookies();
            cy.visit('https://la3eb.com/en-sa');
    
    })
     
    it ('La3eb login',() => {
        cy.get('button').should('contain','Please login').click();
    })
    
    
})  
