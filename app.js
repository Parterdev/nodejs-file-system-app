const {createTableMultiplierFile} = require('./helpers/multiplier');
const argv = require('./config/yargs');
const colors = require('colors');

// Little task: 5x1...5x10 and save output in a file
console.clear();

// console.log("P2-FULLY", argv);

createTableMultiplierFile(argv.b, argv.l, argv.u)
.then(file => console.log(colors.bgCyan(file, 'saved')))
.catch(err => console.log(err)) 
















// Extract information from the console (form one)
/** const [ , , arg3='base=1'] = process.argv;
 const [ , base] = arg3.split('='); **/
 
 // Print information
 // console.log({arg3, base});
 
// Extract information from the console (form two => with yargs)
// console.log("P1", process.argv);
// console.log("P2-FULLY", argv);
// console.log("P2-BASE", argv.base)