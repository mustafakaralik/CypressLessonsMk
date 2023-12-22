const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl : 'https://practice.cydeo.com/',
        setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    retries : 1,
    defaultCommandTimeout:5000,  //we can add what ever we need from cypress web site configuration documentation
    viewportHeight: 800,
    viewportWidth : 1200,
    video: true
  },
});
