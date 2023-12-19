class HomePage {
     


    visitHomePage(){
        cy.fixture('test-data.json').then((data)=>{
            cy.visit(data.url)
         })

        
    }

    getCategoryElem(){
       return cy.fixture('test-data.json').then((data)=>{
             cy.get(data.elements.getCategoryElem)
         })
    }

    seletCategory(catName){
        return cy.fixture('test-data.json').then((data)=>{
            cy.get('.CategoryButton-Item.CategoryButton-Item_isMobileBrowse_undefined').each(($element, index) => {
                const catElementText = $element.text()
                if(catElementText===catName){
                    cy.wrap($element).click()
                    cy.log($element.text(), ' is selected')
                }
                //let elementText=$element.text()
              })
        })
    }


}

export default HomePage

