import { argv } from 'node:process';
import chalk from 'chalk';
import randomcolor from 'randomcolor';

// const randomHex= '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');

const hue = argv[2];
const luminosity=argv[3]

const number = randomcolor({hue:hue,luminosity:luminosity})

console.log(chalk.hex(number).bold(`xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`));
console.log(chalk.hex(number).bold("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"));
console.log(chalk.hex(number).bold("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"));
console.log(chalk.hex(number).bold("xxxxx                     xxxxx"));
console.log(chalk.hex(number).bold(`xxxxx         ${number}     xxxxx`));
console.log(chalk.hex(number).bold("xxxxx                     xxxxx"));
console.log(chalk.hex(number).bold("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"));
console.log(chalk.hex(number).bold("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"));
console.log(chalk.hex(number).bold("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"));
