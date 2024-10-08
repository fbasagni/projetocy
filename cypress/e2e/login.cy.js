/// <reference types="cypress" />

import commum_page from "../support/pages/commum_page"
import login_pages from "../support/pages/login_pages"
import { faker } from '@faker-js/faker';



describe('Login', () => {

  beforeEach('Login', () => {
    
    commum_page.acessarCadastroUsuario()

  })  
 
   it('Login com sucesso', async () => {

    const email = await faker.internet.email()

    login_pages.preenchelogin(email)
    login_pages.preencheSenha(123456)
    login_pages.clicarckbLembrar()
    login_pages.clicarLogin()
    
})


   it('Login sem senha', async () => {

  const email = await faker.internet.email()

  login_pages.preenchelogin(email)
  login_pages.clicarckbLembrar()
  login_pages.clicarLogin()
  login_pages.validarMensagemErro('Senha inválida.')

})



  it('Login sem email', () => {

  login_pages.preencheSenha(123456)
  login_pages.clicarckbLembrar()
  login_pages.clicarLogin()
  login_pages.validarMensagemErro('E-mail inválido.')

})


})
