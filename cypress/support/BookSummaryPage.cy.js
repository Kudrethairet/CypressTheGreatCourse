class BookSummaryPage{

    verifyBookName(bookName){

        cy.fixture('test-data.json').then((data)=>{

        cy.get(data.elements.bookNameElem).find('h1').invoke('text').should('eq', bookName)
        })
    }
   
   
   verifyBookAuthor(bookAuthor){
        cy.fixture('test-data.json').then((data)=>{
        cy.get(data.elements.bookNameElem).find('strong').invoke('text').should('eq', bookAuthor)
    })

   }

   verifyBookWithMultipleAuthor(attribute, bookAuthor){
    cy.fixture('test-data.json').then((data)=>{
    cy.get(data.elements.bookNameElem).find(attribute).invoke('text').should('eq', bookAuthor)
})

}

   verifyAddToCardButtonIsDisable(){

    cy.fixture('test-data.json').then((data)=>{

    cy.get(data.elements.addToCardElem).should('be.disabled')

    })
   }
   verifyAddToCardButtonIsEnabled(){

    cy.fixture('test-data.json').then((data)=>{

    cy.get(data.elements.addToCardElem).should('be.enabled')

    })
   }

   instantVideoElem(){
    return cy.fixture('test-data.json').then((data)=>{

    cy.get(data.elements.instantVideoElem).eq(0)
    })
   }

   DVDElem(){
    return cy.fixture('test-data.json').then((data)=>{

    cy.get(data.elements.instantVideoElem).eq(1)
    })
   }

}
export default BookSummaryPage
