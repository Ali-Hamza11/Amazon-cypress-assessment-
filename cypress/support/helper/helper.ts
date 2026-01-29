class helperfunction {
    homepage() {
        cy.visit('/').wait(4000);

    }
    searchbutton() {
        cy.get('#nav-search-submit-button').click({ force: true });
    }
}
export default new helperfunction();


export const searchbar = {
    productsearch: '#twotabsearchtextbox',
}