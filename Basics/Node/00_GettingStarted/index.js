const Others = require('./other')
const _ = require('lodash');

console.log(Others.name);
console.log(Others.people);
console.log(Others.number);

console.log(`Last array of people using => lodash: "_last" => ${_.last(Others.people)}`);