const { defineConfig } = require("cypress")
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
    },
    specPattern: "cypress/e2e/features/*.feature",
    baseUrl: "https://parabank.parasoft.com/parabank/index.htm;jsessionid=0E608178C5B4DDE2C3636B97F22CA3A7?ConnType=JDBC"
  },
})