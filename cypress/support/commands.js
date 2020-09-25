const port = Cypress.env('LOCAL_DEMO_PORT') || 3000
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('visitDemo', () => {
  cy.log(`Go to on : "http://localhost:${port}"`)
  cy.visit(`http://localhost:${port}`)
})

Cypress.Commands.add('getCarousel', (selector = '#first_carousel', configuration = {}) => {
  return cy.window().then((window) => ({
    window,
    carousel: new window.Carousel(window.document.querySelector(selector), configuration),
  }))
})

Cypress.Commands.add('applyMethod', { prevSubject: true }, (wrap, ...methods) => {
  methods.forEach(([method, ...args]) => {
    wrap.carousel[method](...args)
  })

  return wrap
})

Cypress.Commands.add('indexShouldEqual', { prevSubject: true }, ({ carousel }, expected) => {
  expect(carousel.activeIndex).to.equal(expected)
})

Cypress.Commands.add('notHaveAttribute', { prevSubject: true }, ($elmts, attributeName) => {
  const hasNotAttribute = $elmts.toArray().every(($elmt) => false === $elmt.hasAttribute(attributeName))
  expect(hasNotAttribute).to.equal(true)
})
