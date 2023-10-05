describe('Sistema da petFlix deve', () => {
    // acessar o site
    it('Exibir a home do site', () => {
        cy.visit('http://localhost:5173/')
    })
    // acessar um filme
    it('Acessar um time', () => {
        cy.visit('http://localhost:5173/')
        cy.get('[href="/Jogadores/263"]').click();
    })
    

})