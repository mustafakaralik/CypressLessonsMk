describe('Navigate to different base URL to test Web tables',{baseUrl:"https://demoqa.com/" }, () =>{
    
    beforeEach(() => {
        cy.clearCookies();
        cy.visit('/webtables');
    })

   

    it('Chech finding and editing a record', () =>{
        cy.get('.rt-tbody')
        .contains('.rt-tr-group','Alden')
        .then((row)=> {
            cy.wrap(row).find('#edit-record-2').click();
            cy.get('#firstName').clear().type('Mustafa');
            cy.get('#lastName').clear().type('Kara');
            cy.get('#userEmail').clear().type('mustafakara@gmail.com');
            cy.get('#submit').click();
            //made changes however stayed inside same row 
            cy.wrap(row).find('.rt-td').eq(0).should('contain','Mustafa');
            cy.wrap(row).find('.rt-td').eq(1).should('contain','Kara');
            cy.wrap(row).find('.rt-td').eq(3).should('contain','mustafakara@gmail.com');
        })
    })

    it ('Check finding and deletind a record',() => {
        cy.get('.rt-tbody')
        .contains('.rt-tr-group','Alden')
        .then((row)=> {
            cy.wrap(row).find('[title="Delete"]').click();
         })
         cy.get('.rt-tbody').should('not.contain', 'Alden');
         cy.get('#searchBox').type('Alden');
         cy.get('.rt-noData').should('contain', 'No rows found').should('be.visible');
    })

    xit ('Check different age group exist or not',() => {
        const ageGroup = [29,39,45,77];
        //loop through each age
        cy.wrap(ageGroup).each((age) => {
            cy.get('#searchBox').clear().type(age);
            if(age === 77){
                 //negative test scenario
                 cy.get('.rt-tbody').find('.rt-tr-group').first().should('not.contain',age);
                 cy.get('.rt-noData').should('contain', 'No rows found').should('be.visible');
            }else{
                 //positive test scenario
                 cy.get('.rt-tbody').find('.rt-tr-group').first().should('contain',age);
                 cy.get('.rt-tbody').contains('.rt-tr-group', age).should('have.length', 1);
            }
        })
    })
    

    it ('Adding another record with a user input from fixture -> Better Approach',() => {
        //click on add button
        cy.get('#addNewRecordButton').click();
        cy.fixture('user').then((user)=>{
         const columnNames = Object.keys(user.user1);
         const userData = Object.values(user.user1);
         cy.wrap(columnNames).each((columnName, index)=> {
            cy.get (`#${columnName}`).type(`${userData[index]}`) // back tick used for to store varaible names 
         });
         cy.get('#submit').click();

         //assert that new record is added
         cy.get('.rt-tbody')
        .contains('.rt-tr-group',userData[0])
        .then((row)=>{
            cy.wrap(userData).each((value,index)=> {
                cy.wrap(row).find('.rt-td').eq(index).should('contain', value);
            })
        })
        })
    })

  

})