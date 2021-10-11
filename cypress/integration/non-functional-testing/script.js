import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  vus: 10,
  duration: '30s',
};
export default function () {
//  const cypressConfig = Cypress.config();

  http.get('https://bgwings.net/');
  sleep(1);
}

export function handleSummary(data) {
  console.log('Preparing the end-of-test summary...');
  return {
    'k6-report': JSON.stringify(data),
  }
}
