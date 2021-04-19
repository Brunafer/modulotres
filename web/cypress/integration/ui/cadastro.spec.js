/// <reference types="cypress" />


context('Nova aula', () => {
    it('Cadastrar nova aula', () => {
        cy.visit('/give-classes')

        cy.get('#name').type('Modulo tres');
        cy.get('#avatar').type('https://www.bing.com/images/search?view=detailV2&ccid=icKjmMlg&id=10C3C88BA39D36A450CF89220541A4023CCD3F30&thid=OIP.icKjmMlglUFwKPzeibxYzgHaEK&mediaurl=https%3a%2f%2fwww.hdwallpaper.nu%2fwp-content%2fuploads%2f2017%2f11%2favatar-9.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR89c2a398c96095417028fcde89bc58ce%3frik%3dMD%252fNPAKkQQUiiQ%26pid%3dImgRaw&exph=1080&expw=1920&q=imagem+avatar&simid=608015125490325274&ck=97A861FE7FFC05559C9539E652368B77&selectedIndex=9&FORM=IRPRST');
        cy.get('#whatsapp').type("31987564878");
        cy.get('#bio').type("Eu sou aluna do Agilizei Bootcamp");
        cy.get('#subject').select('Biologia');
        cy.get('#cost').type("580,00");
        cy.get('#week_day').select('Domingo');
        cy.get('#from').type("14:28");
        cy.get('#to').type("15:28");
        cy.get('footer > button').click();


        cy.url().should('contain', 'give-classes')

    });
});


