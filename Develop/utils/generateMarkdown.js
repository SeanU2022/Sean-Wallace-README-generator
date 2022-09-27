let licences = [
  {name: 'Academic Free License v3.0', badge:'', link: ''},
  {name: 'Apache license 2.0', badge:'https://img.shields.io/badge/License-Apache_2.0-blue.svg', link: 'https://opensource.org/licenses/Apache-2.0'},
  {name: 'Artistic license 2.0', badge:'https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg', link: 'https://opensource.org/licenses/Artistic-2.0'},
  {name: 'Boost Software License 1.0', badge:'https://img.shields.io/badge/License-Boost_1.0-lightblue.svg', link: 'https://www.boost.org/LICENSE_1_0.txt)'},
  {name: 'BSD 2-clause "Simplified" license', badge:'https://img.shields.io/badge/License-BSD_2--Clause-orange.svg', link: 'https://opensource.org/licenses/BSD-2-Clause'},
  {name: 'BSD 3-clause Clear license', badge:'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg', link: 'https://opensource.org/licenses/BSD-3-Clause'},
  {name: 'Creative Commons Attribution Share Alike 4.0', badge:'https://licensebuttons.net/l/by-sa/4.0/80x15.png', link: 'https://creativecommons.org/licenses/by-sa/4.0/'},
  // {name: 'Educational Community License v2.0', badge:'', link: ''},
  {name: 'Eclipse Public License 1.0', badge:'https://img.shields.io/badge/License-EPL_1.0-red.svg', link: 'https://opensource.org/licenses/EPL-1.0'},
  // {name: 'European Union Public License 1.1', badge:'', link: ''},
  // {name: 'GNU Affero General Public License v3.0', badge:'', link: ''},
  // {name: 'GNU General Public License family', badge:'', link: ''},
  // {name: 'GNU General Public License v2.0', badge:'', link: ''},
  {name: 'GNU General Public License v3.0', badge:'https://img.shields.io/badge/License-GPLv3-blue.svg', link: 'https://www.gnu.org/licenses/gpl-3.0'},
  // {name: 'GNU Lesser General Public License family', badge:'', link: ''},
  // {name: 'GNU Lesser General Public License v2.1', badge:'', link: ''},
  // {name: 'GNU Lesser General Public License v3.0', badge:'', link: ''},
  {name: 'IBM Public License Version 1.0', badge:'https://img.shields.io/badge/License-IPL_1.0-blue.svg', link: 'https://opensource.org/licenses/IPL-1.0'},
  {name: 'ISC', badge:'https://img.shields.io/badge/License-ISC-blue.svg', link: ''},
  {name: 'LaTeX Project Public License v1.3c', badge:'', link: 'https://opensource.org/licenses/ISC'},
  // {name: 'Microsoft Public License', badge:'', link: ''},
  {name: 'MIT', badge:'https://img.shields.io/badge/License-MIT-yellow.svg', link: 'https://opensource.org/licenses/MIT'},
  {name: 'Mozilla Public License 2.0', badge:'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg', link: 'https://opensource.org/licenses/MPL-2.0'},
  // {name: 'Open Software License 3.0', badge:'', link: ''},
  // {name: 'PostgreSQL License', badge:'', link: ''},
  {name: 'SIL Open Font License 1.1', badge:'https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg', link: 'https://opensource.org/licenses/OFL-1.1'},
  // {name: 'University of Illinois/NCSA Open Source License', badge:'', link: ''},
  {name: 'The Unlicense', badge:'https://img.shields.io/badge/license-Unlicense-blue.svg', link: 'http://unlicense.org/'},
  {name: 'zLib License', badge:'https://img.shields.io/badge/License-Zlib-lightgrey.svg', link: 'https://opensource.org/licenses/Zlib'}
]

function searchSimpleArrayForFieldValue(arrayToSearch, fieldToFind) {
  // RETURNS 'undefined' or the found field
  return (arrayToSearch)=>{return arrayToSearch === fieldToFind}
}

function searchSimpleArrayForIndex(arrayToSearch, fieldToFind) {
  // RETURNS -1 or the found index
  return (arrayToSearch)=>{return arrayToSearch === fieldToFind}
}

function renderLicenceBadgeFIND(arrayToSearch, valueToFind) {
  // console.log('XXXXXXX                  rendervalueToFindBadge: licence to find IS? ' + valueToFind)
  // console.log(valueToFind)
  // let foundField = arrayToSearch.find(searchSimpleArrayForFieldValue(arrayToSearch, valueToFind))
  // console.log('YYYYYYY                  renderLicenceBadge foundField: ' + foundField)
  // return foundField
  return arrayToSearch.find(searchSimpleArrayForFieldValue(arrayToSearch, valueToFind))
}

function renderLicenceBadgeindex(arrayToSearch, valueToFind) {
  // console.log('@@@@@@@                  renderLicenceBadgeindex: licence to find IS? ' + valueToFind)
  // console.log(valueToFind)
  // let foundIndex = arrayToSearch.findIndex(searchSimpleArrayForIndex(arrayToSearch, valueToFind))
  // console.log('&&&&&&&                  renderLicenceBadgeindex foundIndex: ' + foundIndex)
  // return foundIndex
  return arrayToSearch.findIndex(searchSimpleArrayForIndex(arrayToSearch, valueToFind))
}
function findindex(arrayToSearch, valueToFind) {
  // console.log('@@@@@@@                  renderLicenceBadgeindex: licence to find IS? ' + valueToFind)
  // console.log(valueToFind)
  // let foundIndex = arrayToSearch.findIndex(searchSimpleArrayForIndex(arrayToSearch, valueToFind))
  // console.log('&&&&&&&                  renderLicenceBadgeindex foundIndex: ' + foundIndex)
  // return foundIndex
  return arrayToSearch.findIndex(searchSimpleArrayForIndex(arrayToSearch, valueToFind))
}

// TODO: Create a function that returns a licence badge based on which licence is passed in
// If there is no licence, return an empty string

function XXXrenderLicenceBadge(arrayOfLicneces, valueToFind, arrayOfLicenceBadgesAndLinks) {
  let indexOfLicence = findIndex((arrayOfLicences, valueToFind))

  if (indexOfLicence != -1) {
    console.log(arrayOfLicenceBadgesAndLinks[indexOfLicence])
  }


  return foundField
}

const licenceAndListAreValid = (licence) => {
  if (licence === 'undefined' || licence.length === 0 || licences.length === 0) {
    console.log('licence undefined or licences array empty')
    return false
  } else {
    return true
  }
}

// function that returns a licence badge based on which licence is passed in
// If there is no licence, return an empty string
function renderLicenceBadge(licence) {
  if (licenceAndListAreValid) {
    const filteredLicence = licences.filter(theLicenceToFind => {return theLicenceToFind.name.includes(licence)})
    return filteredLicence.map(pointer => pointer.badge)
  } else {
    return ''
  }
}

// function that returns the licence link
// If there is no licence, return an empty string
function renderLicenceLink(licence) {
  if (licenceAndListAreValid) {
    const filteredLicence = licences.filter(theLicenceToFind => {return theLicenceToFind.name.includes(licence)})
    return filteredLicence.map(pointer => pointer.link)
  } else {
    return ''
  }
}

// TODO: Create a function that returns the licence section of README
// If there is no licence, return an empty string
function renderLicenceSection(licence) {


}

// Generate markdown for README using inputs from Prompt
function generateMarkdown(answer, arrayOfLicences) {

  // let searchResult = renderLicenceBadge(arrayOfLicences, answer.licence);
  // console.log('SEARCH RESULT VALUE:  ' + searchResult);
  // if (searchResult === 'undefined') {
  //   console.log('WE DID NOT FIND IT WE DID NOT FIND IT WE DID NOT FIND IT ')
  // } else {
  //   console.log('FOUND! :::::::::::::::: ' + searchResult)
  // }

  // let indexResult = renderLicenceBadgeindex(arrayOfLicences, answer.licence);
  // console.log('INDEX RESULT VALUE:  ' + indexResult);
  // if (indexResult === 'undefined') {
  //   console.log('WE DID NOT FIND IT WE DID NOT FIND IT WE DID NOT FIND IT ')
  // } else {
  //   console.log('index! :::::::::::::::: ' + indexResult)
  // }

  console.log(renderLicenceBadge(answer.licence))
  console.log(renderLicenceLink(answer.licence))

  return `# ${answer.title}

  ## Description
  ${answer.description}
  
  ![image](https://img.shields.io/badge/License-Apache_2.0-blue.svg)

  ## Table of Contents (Optional)
  
  If your README is long, add a table of contents to make it easy for users to find what they need.
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [Licence](#licence)
  
  ## Installation
  
  steps to install...step-by-step...to get it running.
  ${answer.installation}
  
  ## Usage
  
  ${answer.usage}
    
  ##### For Screenshots: upload to "assets/images". Then Using relative filepath, add it this README with syntax:
      md
      ![alt text](assets/images/screenshot.png)


  ## How to Contribute
  
  ${answer.contributing}


  ## Test Instructions
  
  ${answer.tests}


  ## Licence
  
  ${answer.licence}
  

TO DO BADGES!!!


## Questions

You can find out more at my GitHub account: <https://github.com/${answer.githubusername}>

If have have additional answers please email me: <${answer.email}>

-----


  
  🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
  
  ## Badges
  
  ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
  
  Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
  
  ## Features
  
  If your project has a lot of features, list them here.
  
  ## How to Contribute
  
  If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
`;
}

// very hard to understand why this does not work
// this means I can only export one function
// the workaround: pass array of Licences to the generateMarkdown
module.exports = {
  generateMarkdown,
  licences
}
