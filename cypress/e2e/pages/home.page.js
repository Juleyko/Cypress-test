class HomePage {
  elements = {
    cookyAlert: () =>
      cy.get(
        ".onetrust-close-btn-handler.onetrust-close-btn-ui.banner-close-button.ot-close-icon"
      ),
    mainLogo: () => cy.get(".c-buvHyO.c-buvHyO-idbhasO-css"),
    signUpBtnOnHomePage: () => cy.contains("Sign Up"),
    mainMenuBtn: () => cy.get("button.c-gMsfuT"),
    productsBtn: () => cy.get("#radix-\\:R19d63m\\: > span > span"),
    seeAllProductsBtn: () => cy.get("div > div.c-jEQANY > a > span > span"),
    logoInFooter: () => cy.get("footer .c-kzQxuT"),
    linksInFooter: () => cy.get("ul.c-bznZTK"),
    mediaItemsInFooter: () => cy.get("ul.c-cLfYON"),
    telnyxLlcOnHomePage: () => cy.contains("© Telnyx LLC 2023"),
    solutionsBtn: () => cy.get(".c-ewUecD.c-bRSUfv.mchNoDecorate"),
    pricingBtn: () => cy.get("#radix-\\:R1bd63m\\: > span > span"),
    whyTelnyxBtn: () => cy.get("#radix-\\:R1cd63m\\: > span > span"),
    resourcesBtn: () => cy.get("#radix-\\:R1dd63m\\: > span > span"),
    developersBtn: () => cy.get("#radix-\\:R1ed63m\\: > span"),
    contactUsBtn: () => cy.contains("Contact us"),
    mainTitle: () => cy.get("h1"),
    seeProductsBtn: () => cy.contains("SEE PRODUCTS"),
    createFreeAccountBtn: () => cy.contains("CREATE A FREE ACCOUNT"),
    learnAboutEdgeBtn: () => cy.contains("LEARN ABOUT THE EDGE"),
    massagingApiBtn: () => cy.get("#6XXyLeKQp0xVXRwyPX85OR"),
    smsApiBtn: () => cy.get("#5WvVlHUdpwqOMqyPAjErma"),
    overviewBtn: () => cy.get("#62InsTAZ5l0bTLXJn6nMKs"),
    customerStories: () => cy.get("#qRNDPKue9wLBsbz6Ry6D7"),
  };

  clickOnCookyAlert() {
    this.elements.cookyAlert().click();
  }
  isMainLogoVisible() {
    this.elements.mainLogo().should("be.visible");
  }
  clickOnSignUpBtn() {
    this.elements.signUpBtnOnHomePage().click();
  }
  clickOnMainMenuBtn() {
    this.elements.mainMenuBtn().click();
  }
  clickOnProductBtn() {
    this.elements.productsBtn().click();
  }
  clickOnSeeAllProductsBtn() {
    this.elements.seeAllProductsBtn().click();
  }
  scrollToFooter() {
    this.elements.logoInFooter().scrollIntoView();
  }
  isLogoInTooterVisible() {
    this.elements.logoInFooter().should("be.visible");
  }
  isLinksInFooterVisible() {
    this.elements.linksInFooter().find("li.c-PJLV").should("have.length.gt", 0);
  }
  isMediaIconsInFooterVisible() {
    this.elements
      .mediaItemsInFooter()
      .find("li.c-PJLV")
      .should("have.length.gt", 0);
  }
  isTelnyxLlcOnHomePageVisible() {
    this.elements.telnyxLlcOnHomePage().should("be.visible");
  }

  isProductsBtnVisible() {
    this.elements.productsBtn().should("be.visible");
  }
  isSolutionsBtnVisible() {
    this.elements.solutionsBtn().should("be.visible");
  }
  isPricingBtnVisible() {
    this.elements.pricingBtn().should("be.visible");
  }
  isWhyTelnyxBtnVisible() {
    this.elements.whyTelnyxBtn().should("be.visible");
  }
  isResourcesVisible() {
    this.elements.resourcesBtn().should("be.visible");
  }
  isDevelopersVisible() {
    this.elements.developersBtn().should("be.visible");
  }
  isContactUsVisible() {
    this.elements.contactUsBtn().should("be.visible");
  }
  checkMainTitle() {
    this.elements
      .mainTitle()
      .should("be.visible")
      .and(
        "include.text",
        "With distributed infrastructure, we deliver unified connectivity."
      );
  }
  clickOnPricingBtn() {
    this.elements.pricingBtn().click();
  }
  clickOnMassagingApiBtn() {
    this.elements.massagingApiBtn().click();
  }
  clickOnSmsApiBtn() {
    this.elements.smsApiBtn().click();
  }
  clickOnWhyTelnyxBtn() {
    this.elements.whyTelnyxBtn().click();
  }
  clickOnOverviewBtn() {
    this.elements.overviewBtn().click();
  }
  clickOnResourcesBtn() {
    this.elements.resourcesBtn().click();
  }
  clickOnCustomerStories() {
    this.elements.customerStories().click();
  }
  isSeeProductsBtnVisible() {
    this.elements.seeProductsBtn().should("be.visible");
  }
  isCreateFreeAccountBtnVisible() {
    this.elements.createFreeAccountBtn().should("be.visible");
  }
  isLearnAboutEdgeBtnVisible() {
    this.elements.learnAboutEdgeBtn().should("be.visible");
  }
}

export default new HomePage();
