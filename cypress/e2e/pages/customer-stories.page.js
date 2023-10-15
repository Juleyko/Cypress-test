class CustomerStoriesPage {
  elements = {
    customerStoriesTitle: () => cy.get("h1"),
  };
  isCustomerStoriesTitleVisible() {
    this.elements.customerStoriesTitle().should("be.visible");
  }
}
export default new CustomerStoriesPage();
