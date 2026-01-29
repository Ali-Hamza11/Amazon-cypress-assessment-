
import helperfunction, { productsearchbar } from "../../support/helper/helper";
import TVandVideo from "../../support/helper/TVandVideohelper";
//import { clickOnTheSeconditem } from "../../support/helper/TVandVideohelper";
//import infoData from "../../fixtures/info.json"
import USBhelper from "../../support/helper/USBhelper";
describe('Verify that the user can add a product to the cart from Amazon.com', () => {
    it.skip('should add a product to the cart', () => {
        helperfunction.homepage();
        TVandVideo.hamburgerMenu();
        cy.get(productsearchbar.searchbar)
            .click().type('Samsung');
        helperfunction.searchbutton();
        TVandVideo.sortby();
        TVandVideo.selectSecondHighestProduct();

        // clickOnTheSeconditem();

    });
    it('Verify the search results page for a specific product ', () => {
        helperfunction.homepage();
        cy.get(productsearchbar.searchbar)
            .click().type('USB');
        helperfunction.searchbutton();
        // USBhelper.resultspagedisplayed();
        USBhelper.selectfirstproduct();
        USBhelper.productprice();
        USBhelper.productimage();
        USBhelper.productrating();

    });
})