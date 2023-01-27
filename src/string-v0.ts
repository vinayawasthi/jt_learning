//Interpolation
// Template literals provide an easy way to interpolate variables and expressions into strings.The method is called string interpolation

import { log } from "console";
import { printId, printName, welcomePeoples } from "./functions3";

let firstName: string = "John";
let lastName: string = "Doe";
let text: string;

log(text! === undefined);
log(text!?.trim() === "");

text = "   ";
log(text.trim() === "");

text = `Welcome ${firstName}, ${lastName}!`;
log(text);

//printName({ first: "Bob" });
//printName({ first: "Alice", last: "Alisson" });
//welcomePeoples("vinay");
//welcomePeoples(["vinay", "vipin"]);

let id = 434.675785;
printId(id);
