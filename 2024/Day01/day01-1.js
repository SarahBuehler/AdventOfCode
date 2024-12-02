const fs = require("fs");

let data = fs.readFileSync("input.txt", { encoding: "utf8" });

data = data.split("\n");
let total = 0;

data.forEach((element) => {
    const numbers = element
        .split("")
        .filter((char) => Number(char))
        .join("");
    const [first = 0, last = 0] = [numbers[0], numbers[numbers.length - 1]];
    total += Number(first + last);
});

console.log(total);
