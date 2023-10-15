import homePage from "./pages/home.page.js";
import signUpPage from "./pages/sign-up.page.js";
import pricingMassagingPage from "./pages/pricing-massaging.page.js";
import productsSmsApiPage from "./pages/products-sms-api.page.js";
import whyTelnyxPage from "./pages/why-telnyx.page.js";
import customerStoriesPage from "./pages/customer-stories.page.js";

const COOKIE_NAME = "OptanonAlertBoxClosed";
// The value meaning that user has accepted the cookie policy
const COOKIE_VALUE = new Date();

Cypress.on("window:before:load", (window) => {
  window.document.cookie = `${COOKIE_NAME}=${COOKIE_VALUE}`;
});

describe(" My First Test", () => {
  before(() => {
    cy.visit("https://telnyx.com/");
    cy.on("window:alert", (text) => {});
    cy.viewport(1408, 1152);
  });
  it("[case 1] Visit the Telnyx", () => {
    cy.visit("https://telnyx.com/");
    cy.request("https://telnyx.com/").its("status").should("eq", 200);
    homePage.isMainLogoVisible();
  });

  it("[case 2] sign up", () => {
    cy.visit("https://telnyx.com/");
    homePage.clickOnSignUpBtn();
    signUpPage.clickOnEmailFieldAndFill();
    signUpPage.clickOnFirstNameFieldAndFill();
    signUpPage.clickOnLastNameField();
    signUpPage.clickOnPasswordField();
    signUpPage.clickOnCheckboxPrivacyPolicy();
    signUpPage.clickOnSignUpBtn();
  });

  it("[case 3] select product from menu", () => {
    cy.visit("https://telnyx.com/");
    homePage.clickOnMainMenuBtn();
    homePage.clickOnProductBtn();
    homePage.clickOnSeeAllProductsBtn();
  });

  it("[case 4] check all elements in footer", () => {
    cy.visit("https://telnyx.com/");
    homePage.scrollToFooter();
    homePage.isLinksInFooterVisible();
    homePage.isMediaItemsInFooterVisible();
    homePage.isTelnyxLlcOnHomePageVisible();
  });

  // it("[case 5] check all elements in menu", () => {
  //   cy.visit("https://telnyx.com/");
  //   homePage.clickOnMainMenuBtn();
  //   homePage.isProductsBtnVisible();
  //   homePage.isSolutionsBtnVisible();
  //   homePage.isPricingBtnVisible();
  //   homePage.isWhyTelnyxBtnVisible();
  //   homePage.isResourcesVisible();
  //   homePage.isDevelopersVisible();
  // });

  it("[case 6] check main title", () => {
    cy.visit("https://telnyx.com/");
    homePage.checkMainTitle();
  });
  it("[case 7] check FAQ in Pricing", () => {
    cy.visit("https://telnyx.com/");
    homePage.clickOnMainMenuBtn();
    homePage.clickOnPricingBtn();
    homePage.clickOnMassagingApiBtn();
    pricingMassagingPage.isFaqTitleVisible();
    pricingMassagingPage.isFaqsBtnsVisible();
  });
  it("[case 8] check How it works in Products", () => {
    cy.visit("https://telnyx.com/");
    homePage.clickOnMainMenuBtn();
    homePage.clickOnProductBtn();
    homePage.clickOnSmsApiBtn();
    productsSmsApiPage.isHowItWorksVisible();
    productsSmsApiPage.isHowItWorksBtnsVisible();
    productsSmsApiPage.isTalkToAnExpertBtnVisible();
  });
  it("[case 9] check titles in Why Telnyx", () => {
    cy.visit("https://telnyx.com/");
    homePage.clickOnMainMenuBtn();
    homePage.clickOnWhyTelnyxBtn();
    homePage.clickOnOverviewBtn();
    whyTelnyxPage.isTitleH1Visible();
    whyTelnyxPage.isTextAfterH1Visible();
    whyTelnyxPage.isTheFirstH2TitleVisible();
    whyTelnyxPage.isTheSecoundH2TitleVisible();
  });
  it("[case 10] check customer-stories", () => {
    cy.visit("https://telnyx.com/");
    homePage.clickOnMainMenuBtn();
    homePage.clickOnResourcesBtn();
    homePage.clickOnCustomerStories();
    customerStoriesPage.isCustomerStoriesTitleVisible();
  });
});
