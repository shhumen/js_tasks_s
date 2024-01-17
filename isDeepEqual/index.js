const getIsDeepEqual = function (obj1, obj2) {
  if (obj1 === obj2) { 
    return true;
} 
   if (typeof obj1 === "object" && obj1 !== null && typeof obj2 === "object" && obj2 !== null) { // typeof null is obj 
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
      return false;
    }

    for (let key of keys1) {
      if (keys2.includes(key)) {
        if (!getIsDeepEqual(obj1[key], obj2[key])) {
          return false;
        }
      } else {
        return false;
      }
    }
    return true;

  } else {
    return false;
  }
};

console.log(getIsDeepEqual({ a: undefined, b: 2, test: [1, 2, 3], obj: { test: 13 } }, { a: undefined, b: 2, test: [1, 2, 3], obj: { test: 13 } }));


