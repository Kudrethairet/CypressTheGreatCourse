describe('first api test', ()=>{

    it('api test', ()=>{

        cy.request('GET', 'https://api.publicapis.org/entries').then((respons)=>{
            expect(respons.status).to.equal(200)
            cy.log(respons.status)

        })
        

    })





})