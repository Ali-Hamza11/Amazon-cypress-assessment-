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

}
export default new USBhelper();