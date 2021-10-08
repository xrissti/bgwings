import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

const cypressConfig = Cypress.config() as any;
const PAGES: { [key: string]: any } = {
	'Main': {
		url: `${cypressConfig.baseUrl}`,
		elements: ['simple-grid-header-img-link']
	},
	'Gallery': {
		url: `${cypressConfig.baseUrl}/home/240-2/`,
		elements: []
	},
	'About me': {
		url: `${cypressConfig.baseUrl}/home/contact/`,
		elements: []
	},
}

Given('the user navigates to the {string} page', (pageName) => {
  cy.visit(PAGES[pageName].url);
});

Then('the {string} page with the {string} gallery is displayed', (pageName, galleryName) => {
  cy.url().should('include', galleryName);
});

Then('the user sees {string} in the title', (title) => {
	cy.title().should('include', title);
});

Given('the user scrolls to the {string} of the page', (direction) => {
  cy.scrollTo(direction);
});
  
When('the user clicks the "Next" arrow', () => {
  cy.get('.next-page-0').click();
});

Then('the {string} page is displayed', (num) => {
  cy.get('.bwg_current_page').should('have.value', num);
  cy.url().should('include', `page_number_0=${num}`);
});

Then('the {string} is selected', (language) => {
	cy.get('.trp-ls-language-name').should('contain.text', language).contains(language);
});

When('on hover the current language then the drop down with {string} language expands', (language) => {
	cy.get('.current-language-menu-item').trigger('mouseover')
		.find('.sub-menu .trp-ls-language-name').should('contain.text', language);
});

When('the user clicks {string} in language drop down', (language) => {
	cy.get('.current-language-menu-item').trigger('mouseover', {force: true})
		.find('.sub-menu .trp-ls-language-name')
		.should('contain.text', language).contains(language).click({ force: true });
});

Then('the all menus are present', (dataTable) => {
  dataTable.hashes().forEach(row => {
    cy.get('.menu-item a').should('contain', row.name).should('exist').should('be.visible');
  });
});

When('the user clicks {string} in gallery drop down', (option) => {
	cy.get('.menu-item a').should('contain', 'GALLERY').contains('GALLERY').trigger('mouseover', {force: true})
		.closest('li').find('.sub-menu .menu-item a')
		.should('contain.text', option).contains(option).click({ force: true });
});

When('the user clicks the {string} event photo', (eventName) => {
  cy.get(`a.bwg-a[data-title="${eventName}"]`).click();
});

Then('the {string} events photos should be displayed', (eventName) => {
  cy.get('div').should('contain', eventName).contains(eventName).next('div')
    .should('have.class', 'bwg-masonry-thumbnails');
});