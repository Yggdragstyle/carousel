const port = Cypress.env('LOCAL_DEMO_PORT') || 3000

context('Set active slide', () => {
  beforeEach(() => {
    cy.log(`Go to on : "http://localhost:${port}"`)
    cy.visit(`http://localhost:${port}`)
  })

  describe('Goto', () => {
    it('Active index must be 4', () => {
      cy.window()
        .then(({ Carousel, document }) => {
          const carousel = new Carousel(document.querySelector('#first_carousel'))
          carousel.Goto(4)
          return carousel
        })
        .should((carousel) => {
          expect(carousel.activeIndex).to.equal(4)
        })
    })
    it('Active index must be 5', () => {
      cy.window()
        .then(({ Carousel, document }) => {
          const carousel = new Carousel(document.querySelector('#first_carousel'))
          carousel.Goto(5)
          return carousel
        })
        .should((carousel) => {
          expect(carousel.activeIndex).to.equal(5)
        })
    })
    it('Go to index 6 (that greater than slider length) must be equal to 0', () => {
      cy.window()
        .then(({ Carousel, document }) => {
          const carousel = new Carousel(document.querySelector('#first_carousel'))
          carousel.Goto(6)
          return carousel
        })
        .should((carousel) => {
          expect(carousel.activeIndex).to.equal(0)
        })
    })
    it('Go to index 8 (that greater than slider length) must be equal to 2', () => {
      cy.window()
        .then(({ Carousel, document }) => {
          const carousel = new Carousel(document.querySelector('#first_carousel'))
          carousel.Goto(8)
          return carousel
        })
        .should((carousel) => {
          expect(carousel.activeIndex).to.equal(2)
        })
    })
    it('Go to index -1 must be equal to 5', () => {
      cy.window()
        .then(({ Carousel, document }) => {
          const carousel = new Carousel(document.querySelector('#first_carousel'))
          carousel.Goto(-1)
          return carousel
        })
        .should((carousel) => {
          expect(carousel.activeIndex).to.equal(5)
        })
    })
    it('Go to index -7 must be equal to 5', () => {
      cy.window()
        .then(({ Carousel, document }) => {
          const carousel = new Carousel(document.querySelector('#first_carousel'))
          carousel.Goto(-7)
          return carousel
        })
        .should((carousel) => {
          expect(carousel.activeIndex).to.equal(5)
        })
    })
    it('Go to index -6 must be equal to 0', () => {
      cy.window()
        .then(({ Carousel, document }) => {
          const carousel = new Carousel(document.querySelector('#first_carousel'))
          carousel.Goto(-6)
          return carousel
        })
        .should((carousel) => {
          expect(carousel.activeIndex).to.equal(0)
        })
    })
  })

  describe('Next', () => {
    it('Next action must be set index to 1', () => {
      cy.window()
        .then(({ Carousel, document }) => {
          const carousel = new Carousel(document.querySelector('#first_carousel'))
          carousel.Next()
          return carousel
        })
        .should((carousel) => {
          expect(carousel.activeIndex).to.equal(1)
        })
    })
    it('Next action with arg 2 must be set index to 2', () => {
      cy.window()
        .then(({ Carousel, document }) => {
          const carousel = new Carousel(document.querySelector('#first_carousel'))
          carousel.Next(2)
          return carousel
        })
        .should((carousel) => {
          expect(carousel.activeIndex).to.equal(2)
        })
    })
  })

  describe('Prev', () => {
    it('Prev action must be set index to 5', () => {
      cy.window()
        .then(({ Carousel, document }) => {
          const carousel = new Carousel(document.querySelector('#first_carousel'))
          carousel.Prev()
          return carousel
        })
        .should((carousel) => {
          expect(carousel.activeIndex).to.equal(5)
        })
    })
    it('Prev action with arg 2 must be set index to 4', () => {
      cy.window()
        .then(({ Carousel, document }) => {
          const carousel = new Carousel(document.querySelector('#first_carousel'))
          carousel.Prev(2)
          return carousel
        })
        .should((carousel) => {
          expect(carousel.activeIndex).to.equal(4)
        })
    })
    it('Prev action with arg 0 must be set index to 0', () => {
      cy.window()
        .then(({ Carousel, document }) => {
          const carousel = new Carousel(document.querySelector('#first_carousel'))
          carousel.Prev(0)
          return carousel
        })
        .should((carousel) => {
          expect(carousel.activeIndex).to.equal(0)
        })
    })
  })
})
