describe("Test for the Logout function", () => {
  const userEmail = "jeanett.kestner@stud.noroff.no";
  const userPassword = "Kestner12";

  it("Test for the log-out function using the logout button", () => {
    cy.visit("/");
    cy.wait(1000);

    cy.get("#registerForm button[type=button]").contains("Login").click();
    cy.wait(1000);

    cy.get("#loginEmail").type(userEmail).type("{enter}");
    cy.get("#loginPassword").type(userPassword);
    cy.get("#loginForm button[type=submit]").contains("Login").click();
    cy.wait(1000);

    cy.get("header button[type=button]")
      .contains("Logout")
      .click({ force: true });

    cy.url().should("not.include", "profile");
  });
});
