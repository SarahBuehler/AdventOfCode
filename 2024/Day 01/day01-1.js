const fs = require('fs');
const data = fs.readFileSync('01-1-input.txt', 'utf8');
const lines = data.split(/\n/);
console.log(lines)