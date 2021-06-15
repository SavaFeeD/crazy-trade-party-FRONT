describe('Authorization', function () {

  it("open auth", function () {
    cy.visit("http://localhost:8080/login")
  })

  it("check open auth", function () {
    cy.contains('Login')
  })

  it("input auth data (false data)", function () {
    cy.log('Ввожу ложные данные')

    cy.get(`#email`).type('test@falsedata.ru')
    cy.get(`#password`).type('false')
    cy.get(`button.full.d-flex.justify-content-center.mt-4`).click()

    cy.contains(' Не правильный логин или пароль')
  })

  it('clean inputs', function () {
    cy.get(`#email`).clear()
    cy.get(`#password`).clear()
  })

  it("input auth data (true data)", function () {
    cy.log('Ввожу действительные данные')
    cy.get(`#email`).type('shachnev.02@mail.ru')
    cy.get(`#password`).type('asd')
    cy.get(`button.full.d-flex.justify-content-center.mt-4`).click()
  })

  it('exit account', function () {
    cy.log('Выхожу из аккаунта')

    cy.get('#profile_href').click()
    cy.contains('Exit').click()
    cy.contains('Yes').click()
  })

})


describe('Registration', function () {

  it("open auth", function () {
    cy.visit("http://localhost:8080/login")
    cy.contains('Login')
  })


  it("redirect to register", function () {
    cy.contains('new account').click()
    cy.contains('Register')
  })

  it("input register data (false data)", function () {
    cy.log('Ввожу не все данные правильно')

    cy.get(`#username`)
    cy.get(`#email`).type('test@false.ru')
    cy.get(`#password`).type('false')
    cy.get(`#password2`).type('false')
    cy.get(`button.full.d-flex.justify-content-center.mt-4`).click()

    cy.contains(' The given data was invalid.')
  })

  it('clean inputs', function () {
    cy.get(`#username`).clear()
    cy.get(`#email`).clear()
    cy.get(`#password`).clear()
    cy.get(`#password2`).clear()
  })

  it("input register data (true data)", function () {
    cy.log('Ввожу все данные правильно')

    cy.get(`#username`).type('test')
    cy.get(`#email`).type('test@asd.ru')
    cy.get(`#password`).type('false')
    cy.get(`#password2`).type('false')
    cy.get(`button.full.d-flex.justify-content-center.mt-4`).click()
  })

})
