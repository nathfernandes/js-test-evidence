# js-test-evidence
Simple test automation project using `Node.js`, `Cypress` and `mochawesome-report-generator (marge)`. The main purpose of this project is to show how the generation of test evidences can be done using these technologies and also adding screenshots whenever a test fails.

# Prerequisite
- Must have `Node.js` installed, if you don't have it yet, just [click here](https://nodejs.org/en/download/) and follow the instructions of their website.

# Running the tests
Tests can be run using the following command:
```bash
npm run test
```
This command is already set to run the `Cypress` tests, merge the `mochawesome` result files into one and generate the HTML file with the test evidences from the merged file using `marge`.

# Results
After the execution, you will be able to find the HTML file of the generated report inside the `mochawesome-report` folder.