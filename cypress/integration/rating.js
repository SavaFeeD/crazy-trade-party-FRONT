describe('Rating', function () {

  it("open rating", function () {
    cy.visit("http://localhost:8080/rating")
  })

  it("check open rating", function () {
    cy.contains('Rating')
  })

  it("view product", function () {
    cy.get(`a[href="/product/6"]`).click()
  })

  it("check open product", function () {
    cy.contains('Dataset')
  })

})
