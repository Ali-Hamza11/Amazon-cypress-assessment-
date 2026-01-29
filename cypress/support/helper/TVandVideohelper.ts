import { eventNames } from 'process';
class TVandVideo {
    hamburgerMenu() {
        cy.get(".hm-icon-label", { timeout: 5000 }).click({ force: true });
        cy.contains("a", "Television & Video").click({ force: true });
    }
    sortby() {
        cy.wait(5000);
        cy.get(".a-dropdown-prompt").click();
        cy.get("#s-result-sort-select_2").click();
    }
    selectSecondHighestProduct() {

        cy.get('[data-cel-widget="search_result_2"] a h2', { timeout: 6000 }).click({ multiple: true });
        cy.get("#feature-bullets", { timeout: 10000 })
            .scrollIntoView()
            .should('be.visible')
            .should('not.be.empty')
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


