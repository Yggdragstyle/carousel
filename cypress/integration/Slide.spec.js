const port = Cypress.env('LOCAL_DEMO_PORT') || 3000

context('Slide component', () => {
  beforeEach(() => {
    cy.log(`Go to on : "http://localhost:${port}"`)
    cy.visit(`http://localhost:${port}`)
  })

  // Constructor
  describe('Not enable', () => {
    it('Goto must no change hidden attribute of slides', () => {
      cy.window()
        .then(({ Carousel, document }) => {
          new Carousel(document.querySelector('#first_carousel')).Goto(0)
          return document
        })
        .should((document) => {
          const slides = Array.from(document.querySelectorAll('#first_carousel .carousel-slide'))
          expect(slides.every((slide) => !slide.hidden)).to.equal(true)
        })
    })
  })

  // Constructor
  describe('Hide & Display', () => {
    it('Each slide must be hidden except the first', () => {
      cy.window().then(({ Carousel, document }) => {
        new Carousel(document.querySelector('#first_carousel')).Enable()
      })

      cy.get('#first_carousel .carousel-slide:not(:first-of-type)').should('have.attr', 'hidden')
    })

    it('Each slide must be hidden except the four', () => {
      cy.window().then(({ Carousel, document }) => {
        const carousel = new Carousel(document.querySelector('#first_carousel'))
        carousel.Enable()
        carousel.Goto(3)
      })

      cy.get('#first_carousel .carousel-slide:not(:nth-child(4))').should('have.attr', 'hidden')
    })

    it('First slide (was active) must be visible', () => {
      cy.window()
        .then(({ Carousel, document }) => {
          new Carousel(document.querySelector('#first_carousel')).Enable()
          return document
        })
        .should((document) => {
          expect(document.querySelector('#first_carousel .carousel-slide:first-of-type').hidden).to.equal(false)
        })
    })

    it('First slide (was active) must have class active', () => {
      cy.window().then(({ Carousel, document }) => {
        new Carousel(document.querySelector('#first_carousel')).Enable()
      })

      cy.get('#first_carousel .carousel-slide:first-of-type').should('have.class', 'active')
    })

    it('Each slide must doesnt have active class name, except the first', () => {
      cy.window().then(({ Carousel, document }) => {
        new Carousel(document.querySelector('#first_carousel')).Enable()
      })

      cy.get('#first_carousel .carousel-slide:not(:first-of-type)').should('not.have.class', 'active')
    })

    it('Each slide must doesnt have active class name, except the third', () => {
      cy.window().then(({ Carousel, document }) => {
        const carousel = new Carousel(document.querySelector('#first_carousel'))
        carousel.Enable()
        carousel.Goto(2)
      })

      cy.get('#first_carousel .carousel-slide:not(:nth-child(3))').should('not.have.class', 'active')
    })
  })
})
