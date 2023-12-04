const userEmail = "jeanett.kestner@stud.noroff.no";
const userPassword = "Kestner12";
const incorrectEmail = "testing@hotmail.no";
const incorrectPassword = "Test1";

describe("Test for form validation and error handling", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.wait(1000);
    cy.get("#registerForm button[type=button]").contains("Login").click();
    cy.wait(1000);
  });

  it("Displays error for wrong email", () => {
    cy.login(incorrectEmail, userPassword);
    cy.get("#loginForm").submit();
    cy.get("#loginEmail").then(($input) => {
      expect($input[0].validity.patternMismatch).to.be.true;
    });
  });

  it("Displays error for wrong password", () => {
    cy.login(userEmail, incorrectPassword);
    cy.get("#loginForm").submit();
    cy.get("#loginPassword").should("have.attr", "minlength", "8");
  });

  it("Displays error for empty input field", () => {
    cy.get("#loginEmail").clear();
    cy.get("#loginPassword").clear();
    cy.get("#loginForm button[type=submit]").click();
    cy.get("#loginEmail").then(($input) => {
      expect($input[0].checkValidity()).to.be.false;
    });
    cy.get("#loginPassword").then(($input) => {
      expect($input[0].checkValidity()).to.be.false;
    });
  });
});

Cypress.Commands.add("login", (email, password) => {
  cy.get("#loginEmail").type(email);
  cy.get("#loginPassword").type(password);
  cy.get("#loginForm button[type=submit]").contains("Login").click();
});
