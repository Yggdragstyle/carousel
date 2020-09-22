const port = Cypress.env('LOCAL_DEMO_PORT') || 3000

context('Carousel component', () => {
  beforeEach(() => {
    cy.log(`Go to on : "http://localhost:${port}"`)
    cy.visit(`http://localhost:${port}`)
  })

  // Constructor
  describe('Constructor', () => {
    it('Carousel must have 6 slides', () => {
      cy.window()
        .then(({ Carousel, document }) => {
          return new Carousel(document.querySelector('#first_carousel'))
        })
        .should((carousel) => {
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
      cy.window().then(({ Carousel, document }) => {
        new Carousel(document.querySelector('#first_carousel')).Enable()
      })

      cy.get('#first_carousel').should('have.attr', 'data-carousel-enable').and('eq', 'true')
    })
  })

  // Disable
  describe('Disable', () => {
    it('Carousel doesnt have data-carousel-enable property', () => {
      cy.window().then(({ Carousel, document }) => {
        const carousel = new Carousel(document.querySelector('#first_carousel'))
        carousel.Enable()
        carousel.Disable()
      })

      cy.get('#first_carousel').should('not.have.attr', 'data-carousel-enable')
    })

    it('All slides must be visibles', () => {
      cy.window()
        .then(({ Carousel, document }) => {
          const carousel = new Carousel(document.querySelector('#first_carousel'))
          carousel.Enable()
          carousel.Disable()

          return document
        })
        .should((document) => {
          const slides = Array.from(document.querySelectorAll('#first_carousel .carousel-slide'))
          expect(slides.every((slide) => !slide.hidden)).to.equal(true)
        })
    })

    it('All slides must doesnt have active class name', () => {
      cy.window().then(({ Carousel, document }) => {
        const carousel = new Carousel(document.querySelector('#first_carousel'))
        carousel.Enable()
        carousel.Disable()
      })

      cy.get('#first_carousel .carousel-slide').should('not.have.class', 'active')
    })
  })

  // Disable
  describe('Destroy', () => {
    it('Carousel doesnt have data-carousel-enable property', () => {
      cy.window().then(({ Carousel, document }) => {
        const carousel = new Carousel(document.querySelector('#first_carousel'))
        carousel.Enable()
        carousel.Destroy()
      })

      cy.get('#first_carousel').should('not.have.attr', 'data-carousel-enable')
    })
  })
})
