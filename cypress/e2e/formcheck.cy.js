const userEmail = "jeanett.kestner@stud.noroff.no";
const userPassword = "Kestner12";
const incorrectEmail = "testing@noroff.no";
const incorrectPassword = "passwordTest123";

describe("Test for form validation and error handling", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.wait(1000);
    cy.get("#registerForm button[type=button]").contains("Login").click();
    cy.wait(1000);
  });

  it("Displays error for wrong password", () => {
    cy.login(userEmail, incorrectPassword);
  });

  it("Displays error for wrong email", () => {
    cy.login(incorrectEmail, userPassword);
  });

  it("Displays error for empty input field", () => {
    cy.login("a", "a");
  });
});

Cypress.Commands.add("login", (email, password) => {
  cy.get("#loginEmail").type(email).type("{enter}");
  cy.get("#loginPassword").type(password);
  cy.get("#loginForm button[type=submit]").contains("Login").click();
});
