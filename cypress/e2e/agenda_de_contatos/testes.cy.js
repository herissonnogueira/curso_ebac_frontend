/// <reference types="cypress" />

describe('testando funcionalidades', () => {
    it('testando a renderização', () => {
        cy.visit("https://agenda-contatos-react.vercel.app/")
        cy.get('h1').first().should('have.text', 'Agenda de  contatos')
    })
})

describe('testando inclusão de contato', () => {
    beforeEach(() => {
        cy.visit("https://agenda-contatos-react.vercel.app/")
    })
    it('Contato adicionado com sucesso', () => {
        cy.get('input[placeholder*="Nome"]').should('be.visible').type('Herisson')
        cy.get('input[placeholder*="E-mail"]').should('be.visible').type('herisson@gmail.com')
        cy.get('input[placeholder*="Telefone"]').should('be.visible').type('12345678910')
        cy.get('button[type="submit"]').should('be.visible').click()
    })
})

describe('testando alteração de contato', () => {
    beforeEach(() => {
        cy.visit("https://agenda-contatos-react.vercel.app/")
    })
    it('Contato editado com sucesso', () => {
        cy.get('.edit').should('be.visible').first().click()
        cy.get('input[placeholder*="Nome"]').focus().clear()
        cy.get('input[placeholder*="Nome"]').should('be.visible').type('Herisson Nogueira')
        cy.get('input[placeholder*="E-mail"]').focus().clear()
        cy.get('input[placeholder*="E-mail"]').should('be.visible').type('herisson@hotmail.com')
        cy.get('button[type="submit"]').should('be.visible').click()
    })
})

describe('testando a função de deletar', () => {
    beforeEach(() => {
        cy.visit("https://agenda-contatos-react.vercel.app/")
    })
    it('Contato deletado com sucesso', () => {
        cy.get('.delete').should('be.visible').click({ multiple: true })
    })
})