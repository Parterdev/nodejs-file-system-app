const fs = require('fs');
const colors = require('colors');

// Best form
const createTableMultiplierFile = async (
  multiplier = 1, 
  list = false,
  until = 10,
  ) => {
  try {
    let output = '';
    let consoleOutput = '';
 
    for (let i = 1; i <= until; i++) {
      output += `${multiplier} ${'X'} ${i} = ${multiplier * i}\n`
      consoleOutput += `${multiplier} ${'X'.white} ${i} = ${colors.white(multiplier * i)}\n` 
    }
    
    if (list) {
      console.log('================='.white);
      console.log(`Table of ${colors.green(multiplier)}`);
      console.log('================='.white);
      console.log(consoleOutput);
    }

    fs.writeFileSync(`./output/table-${multiplier}.txt`, output);
    return `table-${multiplier}.txt`;

  } catch (err) {

    throw err
  }

}

/** 
 * const createTableMultiplierFile = (multiplier = 1) => {
  return new Promise((resolve, reject) => {
    let output = '';

    console.clear();
    console.log('=================');
    console.log(`Table of ${multiplier}`)
    console.log('=================');

    for (let i = 1; i <= 10; i++) {
      output += `${multiplier} X ${i} = ${multiplier * i}\n`
    }

    // console.log('The output is: \n', output)

    fs.writeFileSync(`table-${multiplier}.txt`, output);
    const file = `table-${multiplier}.txt`; 
    
    resolve(file)
    
  });
} 
*/

module.exports = {
  createTableMultiplierFile,
}


// Using writeFile
/** fs.writeFile(`table-${multiplier}.txt`, output, (err) => {
  if (err) throw err;
  console.log('The file has been saved')
}) **/