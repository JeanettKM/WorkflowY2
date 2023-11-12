describe("Test for the form validation during login", () => {
  const userEmail = "jeanett.kestner@stud.noroff.no";
  const userPassword = "Kestner12";
  const wrongEmail = "testing@noroff.no";
  const wrongPassword = "passwordtest12";

  beforeEach(() => {
    cy.visit("/index.html");
    showLoginModal();
  });

  it("Display error for incorrect email", () => {
    login(wrongEmail, userPassword);
    displayError("Invalid email or password");
  });

  it("Display error for incorrect password", () => {
    login(userEmail, wrongPassword);
    displayError("Invalid email or password");
  });

  it("Display error for incorrect email and password", () => {
    login(wrongEmail, wrongPassword);
    displayError("Invalid email or password");
  });

  it("Display error for empty login form", () => {
    sendLoginForm();
    cy.wait(2000);
  });

  function showLoginModal() {
    cy.get("#registerModal").contains("Login").click();
  }

  function login(email, password) {
    cy.get("#loginEmail").type(email);
    cy.get("#loginPassword").type(password);
    sendLoginForm();
  }

  function sendLoginForm() {
    cy.get("#loginForm button[type=submit]").contains("Login").click();
  }

  function displayError(errorText) {
    cy.on("window:alert", (errorPrompt) => {
      expect(errorPrompt).to.equal(errorText);
    });
  }
});
