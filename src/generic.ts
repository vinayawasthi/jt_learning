function insertAtBegining<T>(list: T[], value: T): T[] {
  const newList = [value, ...list];
  return newList;
}

function insertAtLast<T>(list: T[], value: T): T[] {
  const newList = [...list, value];
  return newList;
}

console.log(insertAtBegining([1, 2, 3], -1));
const x131 = insertAtLast(["a1", "a2", "a3"], "b1");
console.log(x131.join(","));
