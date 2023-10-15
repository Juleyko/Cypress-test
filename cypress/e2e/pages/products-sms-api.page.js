class ProductsSmsApi {
  elements = {
    howItWorksTitle: () => cy.contains("HOW IT WORKS"),
    howItWorksBtns: () => cy.get(".c-cUhiIV.c-lgENvz"),
    talkToAnExpertBtn: () => cy.get("#3nWftK2jKNm28RWlP9QqVR"),
  };
  isHowItWorksVisible() {
    this.elements.howItWorksTitle().should("be.visible");
  }
  isHowItWorksBtnsVisible() {
    this.elements.howItWorksBtns().find("h3").should("have.length.gt", 0);
  }
  isTalkToAnExpertBtnVisible() {
    this.elements.talkToAnExpertBtn().should("be.visible");
  }
}

export default new ProductsSmsApi();
