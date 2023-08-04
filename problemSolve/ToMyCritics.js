const prompt = require("prompt-sync")();

let testCase = parseInt(prompt());
let a, b, c;

while (testCase--) {
  let input = prompt()
    .split(" ")
    .map((item) => parseInt(item));

    (a = input[0]), (b = input[1]), (c = input[2]);
    
    if (a + b >= 10 || a + c >= 10 || b + c >= 10) {
      console.log("YES");
    } else console.log("NO");
}
