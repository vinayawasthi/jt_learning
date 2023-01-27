const letters = new Set<string>();

// Add Variables to the Set
letters.add("a1");
letters.add("b1");
letters.add("c1");
letters.add("d1");

for (const entry in letters.values()) {
    console.log(entry);
}

const xm = new Map<string, string>();
xm.set("a1", "v1");
xm.set("a2", "v2");
xm.set("a3", "v3");
xm.set("a4", "v4");

// xm.forEach((v, k) => {
//     console.log({ k, v });
// });

//1. Iterate over map keys
// for (let key of xm.keys()) {
//     console.log(key);                  
// }
//2. Iterate over map values
// for (let value of xm.values()) {
//     console.log(value);               
// }
//3. Iterate over map entries
// for (let entry of xm.entries()) {
//     console.log(entry[0], entry[1]);  
// }
//4. Using object destructuring
for (let [key, value] of xm) {
    console.log(key, value);         
}