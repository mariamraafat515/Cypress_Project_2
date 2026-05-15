const { defineConfig } = require("cypress");

const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");

const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");

const {
  createEsbuildPlugin,
} = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({

  retries: {
    runMode: 2,
    openMode: 0,
  },

  defaultCommandTimeout: 20000,
  pageLoadTimeout: 120000,

  viewportWidth: 1280,
  viewportHeight: 720,

  chromeWebSecurity: false,

  video: false,

  e2e: {

    baseUrl: "https://practicesoftwaretesting.com",

    specPattern: "cypress/e2e/features/*.feature",

    async setupNodeEvents(on, config) {

      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },
  },
});