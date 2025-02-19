const { defineConfig } = require("cypress");
const mochawesome = require("cypress-mochawesome-reporter/plugin");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  projectId: "i8bt6w",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true,
  },
  video: true, // Enable video recording
  screenshotOnRunFailure: true, // Capture screenshots on test failure
  trashAssetsBeforeRuns: false, // ✅ Prevent Cypress from deleting videos
  videoCompression: false, // ✅ Prevent Cypress from compressing/trimming video
  e2e: {
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {
      // Implement node event listeners here
      //require('cypress-mochawesome-reporter/plugin')(on);
      projectId: "0fdca2bc-ab14-48bc-b5f2-ca46d513cc80";
      mochawesome(on);
      return config;

    },
    //baseUrl: "http://localhost:3000",
  },
});