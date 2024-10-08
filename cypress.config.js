const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'piyp7v',
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reporterTitle: 'Projeto Curso de Cypress',
      reportPageTitle: 'Projeto Curso de Cypress'
    },
    baseUrl: 'https://automationpratice.com.br/',
    defaultCommandTimeout: 5000,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
