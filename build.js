'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
    padding: 1,
    margin: 1,
    borderStyle: 'round'
}

// Text + chalk definitions
const data = {
    name: chalk.white('               Giuseppe Moi'),
    handle: chalk.white('BeCode'),
    work: chalk.white('Junior Web Developer'),
    github: chalk.gray('https://github.com/') + chalk.green('Giuseppemoi'),
    linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('giuseppe-moi'),
    npx: chalk.red('npx') + ' ' + chalk.white('giuseppemoi'),
    labelWork: chalk.white.bold('       Work:'),
    labelOpenSource: chalk.white.bold('Open Source:'),
    labelTwitter: chalk.white.bold('    Twitter:'),
    labelnpm: chalk.white.bold('        npm:'),
    labelGitHub: chalk.white.bold('     GitHub:'),
    labelLinkedIn: chalk.white.bold('   LinkedIn:'),
    labelWeb: chalk.white.bold('        Web:'),
    labelCard: chalk.white.bold('       Card:'),
    labelFun: chalk.white.bold('       Fun:'),
    me: chalk.white('  ┻━┻ ︵ヽ(`Д´)ﾉ︵ ┻━┻')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const carding = `${data.labelCard}  ${data.npx}`
const funing = `${data.labelFun} ${data.me}`


// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
    newline + newline + // Add one whole blank line
    working + newline + // data.labelWork + data.work
    githubing + newline + // data.labelGitHub + data.github
    linkedining + newline + // data.labelLinkedIn + data.linkedin
    carding + newline // data.labelCard + data.npx
    + newline +
    funing

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))