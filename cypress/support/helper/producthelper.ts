class productfunction {
    resultspagedisplayed() {
        cy.get(".sg-col-inner [data-component-type= s-search-results]").should('be.visible');
    }

    selectfirstproduct() {
        cy.get('.a-section a h2', { timeout: 7000 })
            .first()
            .click();
        cy.get("#productDetails_techSpec_section_1", { timeout: 7000 }).should('be.visible');
    }

    productname() {
        cy.get("#titleSection").should("be.visible")
    }

    productprice() {
        cy.get("#corePriceDisplay_desktop_feature_div").scrollIntoView().should("be.visible")
    }

    productimage() {
        cy.get("#main-image-container").should("be.visible");
    }

    productrating() {
        cy.get("#averageCustomerReviews #acrPopover").should("be.visible")
    }


}
export default new productfunction();