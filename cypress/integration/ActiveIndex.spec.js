const carouselParams = ['#first_carousel', { setups: { loop: true } }]

context('Set active slide', () => {
  beforeEach(() => cy.visitDemo())

  //   G O T O
  describe('Goto', () => {
    it('Active index must be 4', () => {
      cy.getCarousel().applyMethod(['Goto', 4]).indexShouldEqual(4)
    })

    it('Active index must be 5', () => {
      cy.getCarousel().applyMethod(['Goto', 5]).indexShouldEqual(5)
    })

    it('Go to index 6 (that greater than slider length) must be equal to 0', () => {
      cy.getCarousel().applyMethod(['Goto', 6]).indexShouldEqual(0)
    })

    it('Go to index 8 (that greater than slider length) must be equal to 2', () => {
      cy.getCarousel().applyMethod(['Goto', 8]).indexShouldEqual(2)
    })

    it('Go to index -1 must be equal to 5', () => {
      cy.getCarousel().applyMethod(['Goto', -1]).indexShouldEqual(5)
    })

    it('Go to index -7 must be equal to 5', () => {
      cy.getCarousel().applyMethod(['Goto', -7]).indexShouldEqual(5)
    })

    it('Go to index -6 must be equal to 0', () => {
      cy.getCarousel().applyMethod(['Goto', -6]).indexShouldEqual(0)
    })
  })

  //   N E X T
  describe('Next', () => {
    it('Next action must be set index to 1', () => {
      cy.getCarousel().applyMethod(['Next']).indexShouldEqual(1)
    })

    it('Next action with arg 2 must be set index to 2', () => {
      cy.getCarousel().applyMethod(['Next', 2]).indexShouldEqual(2)
    })

    it('Next action with arg 7 must be set index to 5 without loop', () => {
      cy.getCarousel().applyMethod(['Next', 7]).indexShouldEqual(5)
    })

    it('Next action with arg 7 must be set index to 1 with loop', () => {
      cy.getCarousel(...carouselParams)
        .applyMethod(['Next', 7])
        .indexShouldEqual(1)
    })
  })

  //   P R E V
  describe('Prev', () => {
    it('Prev action must be set index to 0 without loop', () => {
      cy.getCarousel().applyMethod(['Prev']).indexShouldEqual(0)
    })

    it('Prev action with arg 2 must be set index to 0 without loop', () => {
      cy.getCarousel().applyMethod(['Prev', 2]).indexShouldEqual(0)
    })

    it('Prev action with arg 0 must be set index to 0', () => {
      cy.getCarousel().applyMethod(['Prev', 0]).indexShouldEqual(0)
    })

    it('Prev action must be set index to 5', () => {
      cy.getCarousel(...carouselParams)
        .applyMethod(['Prev'])
        .indexShouldEqual(5)
    })

    it('Prev action with arg 2 must be set index to 4', () => {
      cy.getCarousel(...carouselParams)
        .applyMethod(['Prev', 2])
        .indexShouldEqual(4)
    })
  })
})
