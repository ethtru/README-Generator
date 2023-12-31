// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === 'Apache') {
        return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        
    }else if(license === 'Boost') {
        return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';

    }else {
        return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table of Contents
* [Description](#Description)
* [Installation](#Installation)
* [Usage Information](#UsageInformation)
* [Contribution Guidelines](#ContributionGuidelines)
* [Testing Instructions](#Testing)
* [License](#License)
* [Github](#GitHub)
* [Email](#Email)


## Description
${data.description}

## Installation
${data.installation}

## Usage Information
${data.usage}

## Contribution Guidelines
${data.contributing}

## Testing
${data.test}

## License
${renderLicenseBadge(data.license)}

## Github
${data.GitHub}

## Email
${data.email}
`;
}

module.exports = generateMarkdown;
