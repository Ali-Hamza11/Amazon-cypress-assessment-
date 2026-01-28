 class helperfunction{
     homepage(){
        cy.visit('/').wait(4000);
       
    }   
    searchbutton(){
        cy.get('#nav-search-submit-button').click();
    }
 }
export default new helperfunction();


export const productsearchbar={
    searchbar: '#twotabsearchtextbox',
}