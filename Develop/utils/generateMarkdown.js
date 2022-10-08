// licences object array includes bad data (no badge or link) "none" and "Academic Free License v3.0"
// USE THIS: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
let licences = [
  {name: 'none', badge:'', link: ''},
  {name: 'Academic Free License v3.0', badge:'', link: ''},
  {name: 'Apache 2.0 License', badge:'https://img.shields.io/badge/License-Apache_2.0-blue.svg', link: 'https://opensource.org/licenses/Apache-2.0'},
  {name: 'Artistic license 2.0', badge:'https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg', link: 'https://opensource.org/licenses/Artistic-2.0'},
  {name: 'Boost Software License 1.0', badge:'https://img.shields.io/badge/License-Boost_1.0-lightblue.svg', link: 'https://www.boost.org/LICENSE_1_0.txt)'},
  {name: 'BSD 2-clause "Simplified" license', badge:'https://img.shields.io/badge/License-BSD_2--Clause-orange.svg', link: 'https://opensource.org/licenses/BSD-2-Clause'},
  {name: 'BSD 3-clause Clear license', badge:'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg', link: 'https://opensource.org/licenses/BSD-3-Clause'},
  {name: 'Creative Commons Attribution Share Alike 4.0', badge:'https://licensebuttons.net/l/by-sa/4.0/80x15.png', link: 'https://creativecommons.org/licenses/by-sa/4.0/'},
  {name: 'Educational Community License v2.0', badge:'', link: ''},
  {name: 'Eclipse Public License 1.0', badge:'https://img.shields.io/badge/License-EPL_1.0-red.svg', link: 'https://opensource.org/licenses/EPL-1.0'},
  {name: 'GNU General Public License v3.0', badge:'https://img.shields.io/badge/License-GPLv3-blue.svg', link: 'https://www.gnu.org/licenses/gpl-3.0'},
  {name: 'GNU GPL v2', badge:'https://img.shields.io/badge/License-GPL_v2-blue.svg', link: 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html'},
  {name: 'GNU AGPL v3', badge:'https://img.shields.io/badge/License-AGPL_v3-blue.svg', link: 'https://www.gnu.org/licenses/agpl-3.0'},
  {name: 'GNU LGPL v3', badge:'https://img.shields.io/badge/License-LGPL_v3-blue.svg', link: ''},
  {name: 'IBM Public License Version 1.0', badge:'https://img.shields.io/badge/License-IPL_1.0-blue.svg', link: 'https://opensource.org/licenses/IPL-1.0'},
  {name: 'ISC', badge:'https://img.shields.io/badge/License-ISC-blue.svg', link: 'https://www.gnu.org/licenses/lgpl-3.0'},
  {name: 'LaTeX Project Public License v1.3c', badge:'', link: 'https://opensource.org/licenses/ISC'},
  {name: 'MIT', badge:'https://img.shields.io/badge/License-MIT-yellow.svg', link: 'https://opensource.org/licenses/MIT'},
  {name: 'Mozilla Public License 2.0', badge:'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg', link: 'https://opensource.org/licenses/MPL-2.0'},
  {name: 'SIL Open Font License 1.1', badge:'https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg', link: 'https://opensource.org/licenses/OFL-1.1'},
  {name: 'The Unlicense', badge:'https://img.shields.io/badge/license-Unlicense-blue.svg', link: 'http://unlicense.org/'},
  {name: 'zLib License', badge:'https://img.shields.io/badge/License-Zlib-lightgrey.svg', link: 'https://opensource.org/licenses/Zlib'}
]


// If there is no licence, return false to determine if the functions that use this should return an empty string or licence/badge
const licenceAndListAreValid = (licence) => {
  if (licence === 'none' || licence === 'undefined' || licence.length === 0 || licences.length === 0) {
    console.log(licence, 'licence undefined or licences array empty : -' + licence)
    return false
  } else {
    return true
  }
}

// function that returns a licence badge based on which licence is passed in
// If there is no licence, return an empty string
function renderLicenceBadge(licence) {
  // function renderLicenceBadge(licence) {
  if (licenceAndListAreValid(licence)) {
    const filteredLicence = licences.filter(theLicenceToFind => {return theLicenceToFind.name.includes(licence)})
    if (filteredLicence.map(x => x.badge) === 'undefined' || filteredLicence.map(x => x.badge) === '') {
      return ``
    } else {
      return `![image](` + filteredLicence.map(pointer => pointer.badge) + `)`
    }
  } else {
    return ``
  }
}

// function that returns the licence link
// If there is no licence, return an empty string
function renderLicenceLink(licence) {
  if (licenceAndListAreValid(licence)) {
    const filteredLicence = licences.filter(theLicenceToFind => {return theLicenceToFind.name.includes(licence)})
    if (filteredLicence.map(x => x.link) === 'undefined' || filteredLicence.map(x => x.link) === '') {
      return ``
    } else {
      return filteredLicence.map(pointer => pointer.link)
    }
  } else {
    return ``
  }
}

// function that returns the licence section of README
// If there is no licence, return an empty string
function renderLicenceSection(licence) {
  let licenceSection = ``
  if (licenceAndListAreValid(licence)) {
    licenceSection =
// need to ensure md file has no white spaces
`## Licence

${licence}

${renderLicenceBadge(licence)} An explanation of the licence is here: ${renderLicenceLink(licence)}
`
  }
  return licenceSection
}

// function that returns the licence in TOC
// If there is no licence, return an empty string
function renderLicenceTOC(licence) {
  let licenceTOC = ``
  if (licenceAndListAreValid(licence)) {
    licenceTOC =
// need to ensure md file has no white spaces
`
- [Licence](#licence)`
  }
  return licenceTOC
}


// Generate markdown for README using inputs from Prompt
function generateMarkdown(answer, arrayOfLicences) {

// remove all white space to ensure md TOC works
  return `# ${answer.title}
-----
${renderLicenceBadge(answer.licence)}
## Description
${answer.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)${renderLicenceTOC(answer.licence)}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

-----

## Installation

${answer.installation}
  
## Usage
  
${answer.usage}


${renderLicenceSection(answer.licence)}


## Contributing
  
${answer.contributing}

-----

## Tests

${answer.tests}

-----

## RepoInfo
${answer.repoinfo}

## Questions

You can find out more at my GitHub account: <https://github.com/${answer.githubusername}>

Please send any more questions you may have to: <${answer.email}>
`;
}


module.exports = {
  generateMarkdown,
  licences
}
