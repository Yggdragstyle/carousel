context('Slide component', () => {
  beforeEach(() => cy.visitDemo())

  // Constructor
  describe('Not enable', () => {
    it('Goto must no change hidden attribute of slides', () => {
      cy.getCarousel()
      cy.get('#first_carousel .carousel-slide[hidden]').should('have.length', 0)
    })
  })

  // Constructor
  describe('Hide & Display', () => {
    it('Each slide must be hidden except the first', () => {
      cy.getCarousel().applyMethod(['Enable'])
      cy.get('#first_carousel .carousel-slide:not(:first-of-type)').should('have.attr', 'hidden')
    })

    it('Each slide must be hidden except the four', () => {
      cy.getCarousel().applyMethod(['Enable'], ['Goto', 3])
      cy.get('#first_carousel .carousel-slide:not(:nth-child(4))').should('have.attr', 'hidden')
    })

    it('First slide (was active) must be visible', () => {
      cy.getCarousel().applyMethod(['Enable'])
      cy.get('#first_carousel .carousel-slide:first-of-type').notHaveAttribute('hidden')
    })

    it('First slide (was active) must have class active', () => {
      cy.getCarousel().applyMethod(['Enable'])
      cy.get('#first_carousel .carousel-slide:first-of-type').should('have.class', 'active')
    })

    it('Each slide must doesnt have active class name, except the first', () => {
      cy.getCarousel().applyMethod(['Enable'])
      cy.get('#first_carousel .carousel-slide:not(:first-of-type)').should('not.have.class', 'active')
    })

    it('Each slide must doesnt have active class name, except the third', () => {
      cy.getCarousel().applyMethod(['Enable'], ['Goto', 2])
      cy.get('#first_carousel .carousel-slide:not(:nth-child(3))').should('not.have.class', 'active')
    })
  })
})
