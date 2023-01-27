import { isNumber } from "util";

export function printName(obj: { first: string; last?: string }) {
  // A safe alternative using modern JavaScript syntax:
  console.log(
    `${obj.first} ${obj.last !== undefined ? obj.last?.toUpperCase() : ""}`
  );

  console.log(obj.last!?.toUpperCase());
}

export function printId(id?: number | string | null) {
  if (typeof id === "string") {
    // In this branch, id is of type 'string'
    console.log(id?.toUpperCase());
  } else {
    // Here, id is of type 'number'
    console.log(id?.toFixed(2));
  }
}

export function welcomePeoples(peoples: string | string[]) {
  if (Array.isArray(peoples)) {
    console.log(peoples.join(" , "));
  } else {
    console.log(peoples);
  }
}
