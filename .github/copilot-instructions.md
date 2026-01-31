## Repo purpose
- This repository contains Cypress end-to-end tests (TypeScript) that exercise Amazon-like flows against https://www.amazon.com/. Tests live under `cypress/e2e` and use helpers in `cypress/support/helper`.

## Quick start (dev)
- Install deps: `npm ci` (requires Node >=18). See `package.json` for dependencies.
- Open test runner: `npx cypress open` and run specs from the UI.
- Run headless: `npx cypress run --spec "cypress/e2e/test/**/*.cy.ts"`.
- Typecheck only: `npx tsc --noEmit`.

## Important configuration
- Base URL is set in [cypress.config.ts](cypress.config.ts) via `baseUrl: 'https://www.amazon.com/'`. Tests use `cy.visit('/')` to navigate.
- To override in CI or locally: set `CYPRESS_baseUrl` environment variable.

## Project conventions (do these exactly)
- Helpers are classes exported as singletons. Example: `export default new helperfunction()` in [cypress/support/helper/helper.ts](cypress/support/helper/helper.ts).
- Centralize selectors as exported constants next to helper methods. Example: `export const searchbar = { productsearch: "#twotabsearchtextbox" }`.
- Tests import helpers via relative paths (e.g. `../../support/helper/*`). Follow the same folder layout when adding helpers.
- Prefer calling helper methods from tests (navigation, clicks, assertions) rather than duplicating selector logic in specs.

## Patterns and examples
- Navigation: call `helperfunction.homepage()` which executes `cy.visit('/')` (uses `baseUrl`). See [cypress/support/helper/helper.ts](cypress/support/helper/helper.ts).
- Search flow: tests call `cy.get(searchbar.productsearch).type('...')` then `helperfunction.searchbutton()` to submit.
- Sorting and selection: `TVandVideo.sortby()` then `TVandVideo.selectSecondHighestProduct()` — uses explicit waits and selectors in [cypress/support/helper/TVandVideohelper.ts](cypress/support/helper/TVandVideohelper.ts).

## Flakiness and timeouts
- Tests commonly pass explicit `{ timeout: ... }` options to `cy.get()`. Preserve those timeouts when refactoring selectors.
- The helpers currently use `cy.wait()` in places — when changing, prefer replacing fixed waits with `cy.get(...).should('be.visible')` or `cy.intercept()` when possible.

## Debugging tips
- Use `npx cypress open` to interactively run a failing spec and use the DevTools console and `cy.log()` outputs.
- To reproduce a single test: run `npx cypress run --spec "cypress/e2e/test/main.cy.ts"` or open it in the UI.

## Adding new tests/helpers
- Create helper classes in `cypress/support/helper/` and export `default new ClassName()`; add selectors as exported consts in the same file.
- Keep test files under `cypress/e2e/test/` and name them `*.cy.ts`.

## Files to inspect for context
- Tests: [cypress/e2e/test/main.cy.ts](cypress/e2e/test/main.cy.ts)
- Helpers: [cypress/support/helper/helper.ts](cypress/support/helper/helper.ts), [cypress/support/helper/producthelper.ts](cypress/support/helper/producthelper.ts), [cypress/support/helper/TVandVideohelper.ts](cypress/support/helper/TVandVideohelper.ts)
- Config: [cypress.config.ts](cypress.config.ts)
- Scripts + deps: [package.json](package.json)

If anything in this summary looks wrong or you'd like different wording/extra examples, tell me which area to adjust and I'll iterate.
