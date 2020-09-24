const port = Cypress.env('LOCAL_DEMO_PORT') || 3000

context('Configuration of Carousel', () => {
  beforeEach(() => {
    cy.log(`Go to on : "http://localhost:${port}"`)
    cy.visit(`http://localhost:${port}`)
  })

  // Constructor
  describe('Dynamic selectors and attributes', () => {
    it('The active class name must be "visible"', () => {
      cy.window().then(({ Carousel, document }) => {
        const conf = {
          selectors: {
            active: { type: 'classname', value: 'visible' },
          },
        }
        new Carousel(document.querySelector('#first_carousel'), conf).Enable()
      })
      cy.get('#first_carousel .carousel-slide:first-of-type').should('have.class', 'visible')
    })

    it('The slide of Carousel must use "slide" class name', () => {
      cy.window()
        .then(({ Carousel, document }) => {
          const conf = {
            selectors: {
              slide: { type: 'classname', value: 'slide' },
            },
          }

          return () => new Carousel(document.querySelector('#second_carousel'), conf)
        })
        .should((fn) => expect(fn).not.to.throw())
    })

    it('The Carousel must use "enable" class name instead data-carousel-enable attribute', () => {
      cy.window().then(({ Carousel, document }) => {
        const conf = {
          selectors: {
            enable: { type: 'classname', value: 'enable' },
          },
        }

        new Carousel(document.querySelector('#first_carousel'), conf).Enable()
      })
      cy.get('#first_carousel').should('have.class', 'enable') //.and('not.have.attr', 'data-carousel-enable')
    })

    it('Hidden Slides must use hidden classname instead hidden attribute', () => {
      cy.window()
        .then(({ Carousel, document }) => {
          const conf = {
            selectors: {
              hidden: { type: 'classname', value: 'hidden' },
            },
          }
          const carousel = new Carousel(document.querySelector('#first_carousel'), conf)
          carousel.Enable()
          return document
        })
        .should((document) => {
          const { length } = document.querySelectorAll('#first_carousel .carousel-slide.hidden')
          expect(length).to.equal(5)
        })
        .and((document) => {
          const { length } = document.querySelectorAll('#first_carousel .carousel-slide[hidden]')
          expect(length).to.equal(0)
        })
    })
  })
})
