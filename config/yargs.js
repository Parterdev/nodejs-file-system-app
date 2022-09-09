const argv = require('yargs')
  .options({
    'b': {
      alias: 'base',
      type: 'number',
      demandOption: true,
      describe: 'Is the base of the multiplication table'
    },
    'l': {
      alias: 'list',
      type: 'boolean',
      default: false,
      describe: 'Print the result of all multiplication in the console'
    },
    'u': {
      alias: 'until',
      type: 'number',
      default: 10,
      describe: 'The limit number to get multiplication table'
    }
  })
  .check((argv, options) => {
    // console.log("INFO", argv)
    if(isNaN(argv.b)) {
      throw 'The base param must be a number' 
    } return true
  })
  .argv;

module.exports = argv;