const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "tc37ox",
  e2e: {
    setupNodeEvents(on, config) {},
  },
});
