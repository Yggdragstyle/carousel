context('Carousel component', () => {
  beforeEach(() => cy.visitDemo())

  // Constructor
  describe('Constructor', () => {
    it('Carousel must have 6 slides', () => {
      cy.getCarousel().should(({ carousel }) => {
        expect(carousel.length).to.equal(6)
      })
    })
    it('Carousel must throw an Error when doesnt contain slide', () => {
      cy.window()
        .then(({ Carousel, document }) => {
          return () => new Carousel(document.querySelector('#empty_carousel'))
        })
        .should((fn) => {
          expect(fn).to.throw()
        })
    })
  })

  // Container element of Carousel must be a HTML Element
  describe('Container element of Carousel must be a HTML Element', () => {
    it('Carousel must throw an error when container element was not HTML Element type', () => {
      cy.window()
        .then(({ Carousel, document }) => {
          return () => {
            new Carousel(document.querySelector('Not HTML Element'))
          }
        })
        .should((fn) => {
          expect(fn).to.throw()
        })
    })
  })

  // Only one Carousel by element
  describe('Only one Carousel by element', () => {
    it('Carousel must throw an error when instanciate it on same element', () => {
      cy.window()
        .then(({ Carousel, document }) => {
          new Carousel(document.querySelector('#first_carousel'))
          return () => {
            new Carousel(document.querySelector('#first_carousel'))
          }
        })
        .should((fn) => {
          expect(fn).to.throw()
        })
    })
  })

  // Enable
  describe('Enable', () => {
    it('Carousel must have data-carousel-enable property', () => {
      cy.getCarousel().applyMethod(['Enable'])
      // TODO: test if and() receive the attribute value or jQuery elmt
      // and(eq, true) is not necessary ?
      cy.get('#first_carousel').should('have.attr', 'data-carousel-enable').and('eq', 'true')
    })
  })

  // Disable
  describe('Disable', () => {
    it('Carousel doesnt have data-carousel-enable property', () => {
      cy.getCarousel().applyMethod(['Enable'], ['Disable'])
      cy.get('#first_carousel').notHaveAttribute('data-carousel-enable')
    })

    it('All slides must doesnt have hidden attribute', () => {
      cy.getCarousel().applyMethod(['Enable'], ['Disable'])
      cy.get('#first_carousel .carousel-slide[hidden]').should('have.length', 0)
    })

    it('All slides must doesnt have active class name', () => {
      cy.getCarousel().applyMethod(['Enable'], ['Disable'])
      cy.get('#first_carousel .carousel-slide').should('not.have.class', 'active')
    })
  })

  // Disable
  describe('Destroy', () => {
    it('Carousel doesnt have data-carousel-enable property', () => {
      cy.getCarousel().applyMethod(['Enable'], ['Destroy'])
      cy.get('#first_carousel').notHaveAttribute('data-carousel-enable')
    })

    it('Carousel instance must be deleted from static Carousels Mapping', () => {
      cy.getCarousel()
        .applyMethod(['Destroy'])
        .should(({ window }) => {
          const { length } = window.Carousel.instances
          expect(length).to.eq(0)
        })
    })
  })
})
