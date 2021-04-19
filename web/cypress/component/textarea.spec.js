/// <reference types="cypress" />

import React from 'react'
import Textarea from '../../src/components/Textarea'
import { mount } from 'cypress-react-unit-test'

import { BrowserRouter as Router } from 'react-router-dom'

context('Textarea Component', () => {
    const baseCss = '/__root/src/assets/styles/global.css'
    const indexCss = '/__root/src/components/Textarea/styles.css'
    it('deve ser renderizado com sucesso', () => {
        const name = "Bio Teste de Componente Módulo Três"
        const label = "Biografia"
        
        mount(
            <Router><Textarea
                name= {name}
                label= {label}
                value={name}
                onChange={(e) => { setBio(e.target.value) }}
            />
            </Router>,
            {
                stylesheet: [baseCss, indexCss]
            }

        ),

        cy.get('label').as('label');
        cy.get('textarea').as('name');

        cy.get('textarea').should('have.text', name);
        cy.get('@label').should('have.text', label);

        cy.get('textarea').then(($elemento) => {
            //cy.log($elemento.css('background-color'))
            expect($elemento.css('background-color')).to.be.equal('rgb(248, 248, 252)');
            expect($elemento.css('resize')).to.be.equal('vertical');
        })

    });
});