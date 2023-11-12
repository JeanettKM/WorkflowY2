# Workflow CA

This project was our introduction to workflow from year 2 in frontend-development. We were introduced to using Git and Git commands, aswell as several different testing methods as e2e and unit-testing also automation.

we were tasked to fork one of Noroff's repo's and implement what we learned to their project.

## Badges

[![Automated E2E Testing](https://github.com/JeanettKM/WorkflowY2/actions/workflows/e2eTesting.yml/badge.svg)](https://github.com/JeanettKM/WorkflowY2/actions/workflows/e2eTesting.yml)

[![Automated Unit Testing](https://github.com/JeanettKM/WorkflowY2/actions/workflows/unitTesting.yml/badge.svg)](https://github.com/JeanettKM/WorkflowY2/actions/workflows/unitTesting.yml)

## NPM tools

- Babel,
- Cypress,
- Prettier,
- Husky,
- Jest,
- Eslint.

## Installation

If you want to try this project out yourself, close this repository:

In your choice of code editor:

1. In terminal run: npm install to install all the dependincies from package.json
2. To run all the tests enter: npm test
3. To run only unit-tests enter: npm run test-unit
4. to run only e2e-tests enter: npm run test-e2e-cli


# Unit tests:

The Unit tests are located in src/unit-tests folder.

- There is a login function that stores a token in the local storage of your browser.
- There is also a function that deletes and removes the token from the local storage.

# E2E test

The E2E tests are located in cypress/e2e folder.

- the user can login with the correct credentials.
- the user can logout and the token is removed from localStorage.
- Form validation checks.
