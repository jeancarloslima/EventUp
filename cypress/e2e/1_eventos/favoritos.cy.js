/// <reference types="cypress" />

describe("Adição, visualização e remoção de eventos favoritos", () => {

    it("Adição de evento aos favoritos", () => {
        cy.visit('http://localhost:3000/');

        cy.get('.event-list-container .card-container .btn-favorite').first().click()
        cy.get('.event-list-container .card-container').first().should('have.class', 'card-favorited');
    });

    it("Visualização de eventos salvos como favoritos", () => {
        cy.visit('http://localhost:3000/');

        cy.get('.event-list-container .card-container .btn-favorite').first().click()
        cy.get('.header-container .btn-open-favorites').click();
        cy.get('.favorite-event-list-container .card-favorited').should('be.visible');
    });

    it("Remoção de evento dos favoritos", () => {
        cy.visit('http://localhost:3000/');

        cy.get('.event-list-container .card-container .btn-favorite').first().click()
        cy.get('.header-container .btn-open-favorites').click();
        cy.get('.favorite-event-list-container .card-favorited .btn-favorite').click();
        cy.get('.header-container .btn-open-favorites').click();
        cy.get('.favorite-event-list-container p').should('have.text', "Nenhum evento encontrado");
    });
});