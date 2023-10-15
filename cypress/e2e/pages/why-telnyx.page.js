class WhyTelnyx {
  elements = {
    titleH1: () => cy.contains("Helping you connect—your way"),
    textAfterH1: () =>
      cy.contains(
        "Learn about the problems we solve and the opportunities we create."
      ),
    theFirstH2Title: () => cy.contains("Making your connections possible"),
    theSecoundH2Title: () =>
      cy.contains("By making our expertise available to you"),
  };
  isTitleH1Visible() {
    this.elements.titleH1().should("be.visible");
  }
  isTextAfterH1Visible() {
    this.elements.textAfterH1().should("be.visible");
  }
  isTheFirstH2TitleVisible() {
    this.elements.theFirstH2Title().should("be.visible");
  }
  isTheSecoundH2TitleVisible() {
    this.elements.theSecoundH2Title().should("be.visible");
  }
}
export default new WhyTelnyx();
