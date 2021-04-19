/// <reference types="cypress" />
/// <reference types="@bahmutov/cy-api" />
context('Classes endopoint', () => {
    it('POST - Cadastrar um novo professor', () => {
        //Request URL: http://localhost:3333/classes
        //Request Method: POST
        //Status Code: 201 created
        cy.api({
            method: 'POST',
            url: `${Cypress.config().apiUrl}/classes`,
            body: {
                "name":"teste",
                "avatar":"https://st3.depositphotos.com/3369547/12852/v/950/depositphotos_128525628-stock-illustration-woman-female-avatar-isolated.jpg",
                "whatsapp":"3199971039",
                "bio":"testes bruna",
                "subject":"Inglês",
                "cost":580,
                "schedule":[
                     {
                        "week_day":0,
                        "from":"15:52",
                        "to":"17:52"
                    }
                ]
            }    
        }).then((response) => {
            expect(response.status).to.eq(201)
            expect(response.duration).lessThan(30)

           //não consegui validar o body pois estava dentro de um array

            expect(response.headers)
                .to.have.property('content-type')
                .an('string')
                .equal('application/json; charset=utf-8')

                                           
        })
        
    });
});