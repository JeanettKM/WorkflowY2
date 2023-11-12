describe("Testing login functionality", () => {
  const userEmail = "jeanett.kestner@stud.noroff.no";
  const userPassword = "Kestner12";

  it("Allowing users to login with email and password accepted by the API requirements", () => {
    cy.visit("/");
    cy.wait(1000);

    cy.get("#registerForm button[type=button]").contains("Login").click();
    cy.wait(1000);

    cy.get("#loginEmail").type(userEmail).type("{enter}");
    cy.get("#loginPassword").type(userPassword);
    cy.get("#loginForm button[type=submit]").contains("Login").click();

    cy.wait(1000);

    cy.url().should("include", "profile");
  });
});
