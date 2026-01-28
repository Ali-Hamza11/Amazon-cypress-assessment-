import 'cypress-xpath'
import { eventNames } from 'process';
class TVandVideo{
    hamburgerMenu() {
        cy.get(".hm-icon-label",{timeout:5000}).click();
        cy.contains("a","Television & Video").click({force: true});
    }
    sortby(){
        cy.wait(5000);
        cy.get(".a-dropdown-prompt").click();
        cy.get("#s-result-sort-select_2").click();
    }
    selectSecondHighestProduct() {
        
    cy.get('[aria-label*="Samsung Vision AI Smart TV (2025 Model"]',{timeout:6000}).click();
    cy.scrollTo('bottom')
    .get("#feature-bullets",{timeout:8000})
    .should('be.visible')
    .invoke('text')
     .then((text) => {
       cy.log(text); 
      console.log(text); 
  });
}


}
export default new TVandVideo();

// export const clickOnTheSeconditem = () => {
// cy.xpath('//*[@id="search"]/div[1]/div[1]/div/span[1]/div[1]/script[2]')
// .find('[role="listitem"]')
// .eq(1)
// .click()    
// }


