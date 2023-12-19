class CategoryPage{
    
    
    verifyCatPageHeader(header){
        cy.fixture('test-data.json').then((data)=>{

        cy.get(data.elements.catPageHeaderElem).find('h1').find('span').invoke('text').should('eq', header)
      
    })
    }

    selectBookElem(expectedBookName){

         cy.fixture('test-data.json').then((data)=>{
        cy.get(data.elements.bookCardElemParent).each(($element)=>{
            const bookName = $element.text()
            if(bookName.includes(expectedBookName)){
                cy.wait(1000)
                cy.wrap($element).click()
                cy.log(bookName,' is selected')
            }
        })
       // cy.get(data.elements.bookCardElemParent).contains(bookName)
        })
    }


    getBooksNameList(){
        let booksName=[]
        cy.get('.CourseTile-Card').each(($element, index) => {
       // Log the text content of each matching element
       let elementText=$element.text()
       booksName.push(elementText)
     }).then(()=>{
       booksName.forEach((text, index)=>{
          cy.log(`Element ${index + 1} text: ${text}`)
       });
     })
    }

}


export default CategoryPage