class PricingMassagingPage {
  elements = {
    faqTitle: () => cy.get("#faq-messaging"),
    faqsBtns: () => cy.get(".c-cUhiIV.c-cUhiIV-ijUWDQN-css"),
  };

  isFaqTitleVisible() {
    this.elements.faqTitle().should("be.visible");
  }
  isFaqsBtnsVisible() {
    this.elements.faqsBtns().find("h3").should("have.length.gt", 0);
  }
}

export default new PricingMassagingPage();
