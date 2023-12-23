describe('Button Element Manupialtion', () => {

    beforeEach(() => {
        cy.clearCookies();
        cy.visit('/multiple_buttons');
    })

    it('Check Different Button Locators and actions', () => {
            // By CSS locator Cypress can not alllowe xpath locators
           //    locate an element with text and do action on it
           cy.contains('Button 2').should('be.visible').click();
       
           // assert that we clicked
           cy.contains('Clicked on button two!').should('be.visible');
        //Locate all button  with Class attribute and select button 3 and click
            cy.get('.btn.btn-primary').then((buttons) => {
                cy.wrap(buttons).eq(2).click();
                cy.contains('Clicked on button three!').should('be.visible');
            })
            
            //verify locate all button with tagname and verify each of them has attribute onclick
            cy.get('button').each((item, index, list) => {
                //verify we have 6 buttons
                expect(list).to.have.length(6);
                expect(item).to.have.attr('onclick');

            })
    })

    xit('Verify element text of buttons', () => {
        cy.get('button').each((item)=> {
            if(item.text()=== 'Button 4'){ 
                cy.wrap(item).click(); //this is still JQuerry element ı need to convert it to Cypress element
                cy.contains('Clicked on button four!').should('be.visible');
            }
        })

    })

})