
import helperfunction, { searchbar } from "../../support/helper/helper";
import TVandVideo from "../../support/helper/TVandVideohelper";
import productfunction from "../../support/helper/producthelper"
describe('Verify that the user can add a product to the cart from Amazon.com', () => {
    it('should add a product to the cart', () => {
        helperfunction.homepage();
        TVandVideo.hamburgerMenu();
        cy.get(searchbar.productsearch)
            .click().type('Samsung');
        helperfunction.searchbutton();
        TVandVideo.sortby();
        TVandVideo.selectSecondHighestProduct();

        // clickOnTheSeconditem();

    });
    it('Verify the search results page for a specific product ', () => {
        helperfunction.homepage();
        cy.get(searchbar.productsearch)
            .click().type('USB');
        helperfunction.searchbutton();
        productfunction.resultspagedisplayed();
        productfunction.selectfirstproduct();
        productfunction.productname();
        productfunction.productimage();
        productfunction.productprice();
        productfunction.productrating();

    });
})
