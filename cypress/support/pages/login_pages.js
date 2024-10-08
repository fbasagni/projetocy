/// <reference types="cypress" />


export default { 

       preenchelogin(email) {
        cy.get('#user')
          .type(email)
         },   
   

       preencheSenha(senha){
        cy.get('#password')
          .type(senha)  
          
},

       preencheSenha(senha){
        cy.get('#password')
          .type(senha)  
      
},

        clicarLogin() {
         cy.get('#btnLogin')
           .click()
},


         clicarckbLembrar() {
         cy.get('#materialUnchecked')
           .click()
},


        validarMensagemErro(mensagem) {
         cy.get('.errorLabel')
          .should('be.visible')
          .should('have.text', mensagem)

  },




}