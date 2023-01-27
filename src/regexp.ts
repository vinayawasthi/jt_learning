console.clear();
let text11 = `Visit W3Schools! 
W3Schools 
W3Schools`;
let n = text11.search("W3Schools");
console.log(n);

const regexExec = RegExp("edu*", "g");
const string = "tutorial from educba, edux in the hindu education";
let arr;
while ((arr = regexExec.exec(string)) !== null) {
  console.log(`Found ${arr[0]}, indexed at ${regexExec.lastIndex}.`);
  // result: "Found edu. Next starts at 17."
  // result: "Found edu. Next starts at 38."
}
