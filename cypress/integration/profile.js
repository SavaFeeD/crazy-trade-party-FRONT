describe('Authorization', function () {

  it("open auth", function () {
    cy.visit("http://localhost:8080/login")
  })

  it("check open auth", function () {
    cy.contains('Login')
  })

  it("input auth data (true data)", function () {
    cy.log('Ввожу действительные данные')
    cy.get(`#email`).type('shachnev.02@mail.ru')
    cy.get(`#password`).type('asd')
    cy.get(`button.full.d-flex.justify-content-center.mt-4`).click()
  })
})

describe('Exit', function () {
  it('logout', function () {
    cy.log('Выхожу из аккаунта')

    cy.get('#profile_href').click()
    cy.contains('Exit').click()
    cy.contains('Yes').click()
  })

  it('check logout', function () {
    cy.contains(' Вы успешно вышли')
  })
})
