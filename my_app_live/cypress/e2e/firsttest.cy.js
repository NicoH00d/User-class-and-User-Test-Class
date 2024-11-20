///<reference types="cypress" />

describe('My First Test', () => {
    it("Should find components", () => {
        cy.visit('http://localhost:3000/todo');
        cy.get('input')
        cy.get('input').type('Hello World');

        cy.get('input').should('have.value', 'Hello World');
    });
});