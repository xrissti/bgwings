const reporter = require('k6-html-reporter');

const options = {
  jsonFile: 'k6-report',
  output: 'k6-test-results',
};

reporter.generateSummaryReport(options);