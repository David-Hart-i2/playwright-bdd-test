import { devices } from "@playwright/test";

const config = {
  outputDir: "./bld/test-results/",
  testDir: "dist",
  testMatch: ["**/*.spec.js"],
  fullyParallel: false,
  reporter: [["html"], ["junit"]],
  use: {
    testIdAttribute: "data-uia",
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 0,
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",
    video: "on",
    screenshot: "only-on-failure",
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
      },
    },
  ],
};

export default config;
