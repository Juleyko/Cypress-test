class SignUpPage {
  elements = {
    emailField: () => cy.get("#email"),
    firstNameField: () => cy.get("#first_name"),
    lastNameField: () => cy.get("#last_name"),
    passwordField: () => cy.get("#password"),
    checkboxPrivacyPolicy: () => cy.get("#terms_and_conditions"),
    signUpBtn: () => cy.get(".c-kDQqQr-cOvXws-cv.c-ddSKil"),
    logInLink: () =>
      cy.get(
        "#__next > div > main > section > div.c-cUhiIV.c-cFpcyF > div > div.c-kbJYtg > div > div.c-kICKfy > p > a > span > span"
      ),
  };

  clickOnEmailFieldAndFill() {
    this.elements.emailField().click().type("jullbobo@gmail.com");
  }
  clickOnFirstNameFieldAndFill() {
    this.elements.firstNameField().click().type("Jull");
  }
  clickOnLastNameField() {
    this.elements.lastNameField().click().type("Bobo");
  }
  clickOnPasswordField() {
    this.elements.passwordField().click().type("superPassword1@");
  }
  clickOnCheckboxPrivacyPolicy() {
    this.elements.checkboxPrivacyPolicy().click();
  }
  clickOnSignUpBtn() {
    this.elements.signUpBtn().click();
  }
  clickOnLogInLink() {
    this.elements.logInLink().click();
  }
}
export default new SignUpPage();
