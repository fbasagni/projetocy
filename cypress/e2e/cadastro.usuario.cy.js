/// <reference types="cypress" />

import commum_page from "../support/pages/commum_page"
import cadastro_usuario_page from "../support/pages/cadastro_usuario_page"
import { faker } from '@faker-js/faker';


describe('Cadastro de usuário', () => {

    beforeEach('Acessar cadastro de usuário', () => {

        commum_page.acessarCadastroUsuario()

    })

    it('Campo nome vazio', () => {
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemErro('O campo nome deve ser prenchido')
          
  })
  
    
    it('Campo E-mail vazio', () => {
        cadastro_usuario_page.preencheNome(faker.name.fullName())
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemErro('O campo e-mail deve ser preenchido corretamente')
          
  })


    it('Campo E-mail inválido', () => {
        cadastro_usuario_page.preencheNome(faker.name.fullName())
        cadastro_usuario_page.preencheEmail(faker.name.firstName())
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemErro('O campo e-mail deve ser preenchido corretamente')
       
  })  

    it('Campo senha vazio', () => {
        cadastro_usuario_page.preencheNome(faker.name.fullName())
        cadastro_usuario_page.preencheEmail(faker.internet.email())
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
      

  }) 


   it('Campo senha inválido', () => {
        cadastro_usuario_page.preencheNome(faker.name.fullName())
        cadastro_usuario_page.preencheEmail(faker.internet.email())
        cadastro_usuario_page.preencheSenha('1234')
        cadastro_usuario_page.clicarCadastrar()
        cadastro_usuario_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
    
      
  }) 

    it('Cadastro com sucesso', async () => {
     
    const name = await faker.name.fullName()

     cadastro_usuario_page.preencheNome(name)
     cadastro_usuario_page.preencheEmail(faker.internet.email())
     cadastro_usuario_page.preencheSenha('123456')
     cadastro_usuario_page.clicarCadastrar()
     cadastro_usuario_page.validarMensagemSucesso(name)
    
      
  }) 
  
  })
  