class USBhelper {
    resultspagedisplayed() {
        // cy.get('[data-component-type="s-search-result"]').should('be.visible');
    }
    selectfirstproduct() {
        cy.get('.a-section a h2',{timeout:7000})
            .first()
            .click();
             cy.scrollTo('bottom');
         cy.get("#productDetails_techSpec_section_1",{timeout:7000}).should('be.visible');
    }   
    productprice(){
        cy.get("#corePriceDisplay_desktop_feature_div").should("be.visible")
    }
    productimage(){
        cy.get("#imgTagWrapperId").should("be.visible");
    }
    productrating(){
        cy.get("#averageCustomerReviews #acrPopover").should("be.visible")
    }


}
export default new USBhelper();