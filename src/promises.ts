//import { getFile } from "./common";

import { log } from "console";

let myPromise = new Promise((xResolve, xReject) => {
  let x = 0;

  // The producing code (this may take some time)
  if (x == 0) {
    xResolve("OK");
  } else {
    xReject("Error");
  }
});

myPromise.then(
  (value) => {
    console.log(value);
  },
  (error) => {
    console.log(error);
  }
);

async function myDisplay() {
  let myPromise = new Promise(function (resolve, reject) {
    try {
      let x1 = setTimeout(function () {
        resolve("I love You !!");
      }, 3000);
    } catch (error) {
      reject(error);
    }
  });
  let x = await myPromise;
  console.log(x);
}

async function getFile() {
  let myPromise = new Promise<string>(function (resolve, reject) {
    try {
      let req = new XMLHttpRequest();
      req.open("GET", "mycar.html");
      req.onload = function () {
        if (req.status == 200) {
          resolve(req.response);
        } else {
          reject("File not Found");
        }
      };
      req.send();
    } catch (error) {
      reject("File not Found");
    }
  });

  try {
    return await myPromise;
  } catch (error) {
    return "";
  }
}

myDisplay();
let x132 = getFile();
x132.then((x) => log(x));
