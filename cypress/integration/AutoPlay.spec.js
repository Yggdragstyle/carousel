const carouselParams = ['#first_carousel', { setups: { loop: true } }]

context('Auto play', () => {
  beforeEach(() => cy.visitDemo())

  //   Get autoplay
  // TODO: remove this line or move it into Configuration.spec.js
  //   describe('Get autoplay', () => {})

  //   Play
  describe('Play', () => {
    it('Each slide must be "active" one by one', () => {
      cy.getCarousel('#third_carousel', { setups: { autoplay: 1e3 } })
        .applyMethod('Enable')
        .then({ timeout: 16000 }, ({ carousel }) => {
          return new Cypress.Promise((resolve, reject) => {
            let counter = 0
            const slides = []

            setTimeout(() => {
              const error = new Error('Echec to give six active slides:' + slides.join(', '))
              reject(error)
            }, 15e3)

            carousel.$container.addEventListener('change', (e) => {
              if (carousel.$active.classList.contains('active')) {
                slides.push(carousel.activeIndex)
              }
              if (5 === counter++) {
                resolve(expect(slides).to.deep.eq([1, 2, 3, 4, 5, 0]))
              }
            })
          })
        })
    })

    // it('Change Event must be trigger by sliding', () => {
    //   cy.getCarousel().applyMethod('Enable', 'Next')
    //   cy.get('#first_carousel').should('emit', 'change')
    // })
  })

  //   Pause
  describe('Pause', () => {})

  //   Stop
  describe('Stop', () => {})
})
