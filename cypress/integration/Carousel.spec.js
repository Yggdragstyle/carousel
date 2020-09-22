const port = Cypress.env('LOCAL_DEMO_PORT') || 3000

context('Carousel component', () => {
  describe('Enabled Carousel', () => {
    it('Carousel must have data-carousel-enable property', () => {
      cy.visit(`http://localhost:${port}`)
      cy.get('#first_carousel').should('have.attr', 'data-carousel-enable').and('eq', 'true')
    })
  })
})
