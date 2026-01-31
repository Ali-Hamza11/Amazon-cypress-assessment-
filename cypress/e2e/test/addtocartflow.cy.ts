import { mainnavbar } from "../../support/locators/navbar";
import { hamburger } from "../../support/locators/sidenavbar";
import { resultpage } from "../../support/locators/searchresultpage";
describe("Verify that the user can add a product to the cart from Amazon.com", () => {
  it("should add a product to the cart", () => {
    cy.visit("/");
    cy.get(mainnavbar.hamburgerMenu, { timeout: 10000 })
      .click()
      .should("be.visible");
    cy.get(hamburger.Electronic, { timeout: 12000 })
      .should("be.visible")
      .click();
    cy.contains("a", "Television & Video", { timeout: 14000 }).click({
      multiple: true,
    });
    cy.get(mainnavbar.searchbar, { timeout: 15000 }).click().type("Samsung");
    cy.get(mainnavbar.searchbutton, { timeout: 10000 })
      .should("be.visible")
      .click();
    cy.get(mainnavbar.sortby, { timeout: 10000 }).click();
    cy.get(mainnavbar.HightoLow, { timeout: 10000 }).click();
    cy.get(resultpage.secondproduct, { timeout: 10000 }).click();
    cy.get(resultpage.Aboutitem, { timeout: 15000 })
      .scrollIntoView()
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        cy.log(text);
        console.log(text);
      });
  });
  it.only("Verify the search results page for a specific product ", () => {
    cy.visit("/");
    cy.get(mainnavbar.searchbar, { timeout: 15000 }).click().type("USB");
    cy.get(mainnavbar.searchbutton, { timeout: 10000 })
      .click()
      .should("be.visible");
    cy.get(resultpage.searchproductresult, { timeout: 15000 }).should(
      "be.visible",
    );
    let productCount = 0;
    cy.get(resultpage.searchresult, { timeout: 7000 }).then((container) => {
      productCount = container.find(resultpage.productlistitems).length;
      cy.wrap(container).find(resultpage.productname).should("exist");
      cy.wrap(container).find(resultpage.productimage).should("exist");
      cy.wrap(container).find(resultpage.productprice).should("exist");
      cy.wrap(container).find(resultpage.productrating).should("exist");
    });
    cy.get(resultpage.firstproduct, { timeout: 10000 }).first().click();
  });
});
