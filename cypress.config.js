const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  videosFolder: "cypress/videos",

  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    charts: true,
    reportPageTitle: "Reporte de Pruebas Cypress",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    ignoreVideos: false,
    videoOnFailOnly: false
  },

  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
  },
});