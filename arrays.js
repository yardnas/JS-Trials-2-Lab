"use strict";


// 1. printIndices
function printIndices(items) {
  for (const idx in items) {
    console.log(items[idx], idx);
  }
}


// 2. everyOtherItem
function everyOtherItem(items) {
  const result = []

  for (const idx in items) {
    if (idx % 2 === 0) {
      result.push(items[i]);
    }
  }

  return result;
}


// 3. smallestNItems
function smallestNItems(items, n) {
  
  
}
