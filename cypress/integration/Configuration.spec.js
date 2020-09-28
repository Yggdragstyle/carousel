function getSelector(selector, type, value) {
  return {
    selectors: { [selector]: { type, value } },
  }
}

context('Configuration of Carousel', () => {
  beforeEach(() => cy.visitDemo())

  // Constructor
  describe('Dynamic selectors and attributes', () => {
    it('The active class name must be "visible"', () => {
      cy.getCarousel('#first_carousel', getSelector('active', 'classname', 'visible')).applyMethod(['Enable'])
      cy.get('#first_carousel .carousel-slide:first-of-type').should('have.class', 'visible')
    })

    it('The slide of Carousel must use "slide" class name and not throw an error', () => {
      cy.window()
        .then(({ Carousel, document }) => {
          const conf = getSelector('slide', 'classname', 'slide')
          return () => new Carousel(document.querySelector('#second_carousel'), conf)
        })
        .should((fn) => expect(fn).not.to.throw())
      cy.get('#second_carousel .slide').should('have.length', 6)
    })

    it('The Carousel must use "enable" class name instead data-carousel-enable attribute', () => {
      cy.getCarousel('#first_carousel', getSelector('enable', 'classname', 'enable')).applyMethod(['Enable'])
      cy.get('#first_carousel').should('have.class', 'enable').notHaveAttribute('data-carousel-enable')
    })

    it('Hidden Slides must use hidden classname instead hidden attribute', () => {
      cy.getCarousel('#first_carousel', getSelector('hidden', 'classname', 'hidden')).applyMethod(['Enable'])
      cy.get('#first_carousel .carousel-slide.hidden').should('have.length', 5)
      cy.get('#first_carousel .carousel-slide[hidden]').should('have.length', 0)
    })

    it('The data-carousel-loop attribute must allow to Prev negative', () => {
      cy.getCarousel('#third_carousel').applyMethod(['Prev', 2]).indexShouldEqual(4)
    })
  })

  // Autoplay
  describe('Autoplay', () => {
    it('autoplay must be disabled', () => {
      cy.getCarousel('#first_carousel').autoplayShouldEqual(false)
    })

    it('autoplay millisecond value must be equal to 3000', () => {
      cy.getCarousel('#first_carousel', { setups: { autoplay: 3e3 } }).autoplayShouldEqual(3000)
    })

    it('The autoplay millisecond value must be equal to 5000', () => {
      cy.getCarousel('#third_carousel').autoplayShouldEqual(5000)
    })

    it('The autoplay millisecond value must be equal to 7000', () => {
      cy.getCarousel('#third_carousel', { setups: { autoplay: 7e3 } }).autoplayShouldEqual(7000)
    })

    it('The autoplay millisecond value must be equal to 4000', () => {
      cy.getCarousel('#four_carousel').autoplayShouldEqual(4000)
    })

    it('The autoplay millisecond value must be equal to 60 000', () => {
      cy.getCarousel('#five_carousel').autoplayShouldEqual(60_000)
    })

    it('autoplay millisecond value must be equal to 5000', () => {
      cy.getCarousel('#first_carousel', { setups: { autoplay: true } }).autoplayShouldEqual(5000)
    })
  })
})
