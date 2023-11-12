[![Automated E2E Testing](https://github.com/JeanettKM/WorkflowY2/actions/workflows/e2eTesting.yml/badge.svg)](https://github.com/JeanettKM/WorkflowY2/actions/workflows/e2eTesting.yml) [![Automated Unit Testing](https://github.com/JeanettKM/WorkflowY2/actions/workflows/unitTesting.yml/badge.svg)](https://github.com/JeanettKM/WorkflowY2/actions/workflows/unitTesting.yml)

# Workflow CA

This project was our introduction to workflow from year 2 in frontend-development. We were introduced to using Git and Git commands, aswell as several different testing methods as e2e and unit-testing also automation.

we were tasked to fork one of Noroff's repo's and implement what we learned to their project.

## NPM tools

- Babel,
- Cypress,
- Prettier,
- Husky,
- Jest,
- Eslint,
- vite.

## Installation

If you want to try this project out yourself, clone this repository, open it in your code editor of choice and initilize git.

```
git init
```

Install dependencies

```
npm i
```

Build SASS

```
npm run build
```

# Unit tests:

The Unit tests are located in src/unit-tests folder.

to run Unit-tests:

```
npm run test-unit
```

- There is a login function that stores a token in the local storage of your browser.
- There is also a function that deletes and removes the token from the local storage.

# E2E test

The E2E tests are located in cypress/e2e folder.

to run E2E test:

```
npm run test-e2e-cli
```

- the user can login with the correct credentials.
- the user can logout and the token is removed from localStorage.
- Form validation checks.

## Contributing

Im not allowing for contributions as this is a school project.
