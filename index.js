import chalk from 'chalk';

const number= `#${Math.floor(Math.random()*16777215).toString(16).padStart(6,"0")}`;


let chalkvalue= chalk.hex(number);

console.log(chalkvalue);
