describe('All products', function () {

  it("open market", function () {
    cy.visit("http://localhost:8080/market/all")
  })

  it("view product", function () {
    cy.get(`a[href="/product/2"]`).click()
  })

})

describe('Category products', function () {

  it("[open market] transition to category NLP", function () {
    cy.visit("http://localhost:8080/market/all")
    cy.wait(2000)
    cy.get('a[href="/market/category/1"]').click()
    cy.contains("NLP")
  })

  it("redirect to Home", function () {
    cy.get('a[href="/"].up_menu').click()
    cy.contains("Open data market")
  })

})

describe('Products', function () {

  it("open market", function () {
    cy.visit("http://localhost:8080/market/all")
  })

  it("view product", function () {
    cy.get(`a[href="/product/1"]`).click()
  })

  it("check attrs product", function () {
    cy.log('Поиск Названия товара')
    cy.contains("Alicia Hickle")

    cy.log('Поиск Описания товара')
    cy.contains("King. On this the whole party look so grave and anxious.) Alice.")

    cy.log('Поиск Категории товара')
    cy.contains("no-category")

    cy.log('Поиск Краткого описания товара')
    cy.contains("There seemed to be.")
  })

})
