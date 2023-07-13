const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    // mas info en https://docs.cypress.io/api/commands/viewport
    viewportWidth: 1500,
    viewportHeight: 900,
    chromeWebSecurity: false,
    pageLoadTimeout: 9000,
    defaultCommandTimeout:11000,
    projectId: "bkwi82",

    
    setupNodeEvents(on, config) {
      // implement node event listeners here      
     
      
    },
  },
});
