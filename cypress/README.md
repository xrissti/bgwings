## k6
* `k6 run script.js` will run load tests (cmd in folder \Desktop\Projects\Cypress\BGWings\cypress\integration\non-functional-testing)
* `node k6-reporter.js` will generate report HTML

## Allure test report
#### Requirements
* Java 8+
* Allure reporter: [java package](https://github.com/allure-framework/allure2#download) or [allure-commandline npm package](https://www.npmjs.com/package/allure-commandline).

#### Execution
* `npx cypress run --env allure=true` run browserless tests and generate Allure results in `allure-results` folder. (in VS terminal)
To view reports use:
* `npx allure serve` will generate report HTML and will serve it by starting local HTTP server and will open it default browser (cmd in folder \Cypress\BGWings\allure-report)
* `npx allure generate` will generate report HTML
* `npx allure open` will serve already generated report by starting local HTTP server and open it open default browser

#### More information
https://github.com/Shelex/cypress-allure-plugin
