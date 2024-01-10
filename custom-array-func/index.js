// includes() +
// indexOf() +
// reverse() +
// join() +
// sort() +
// find()  +
// findIndex() +
// filter() +
// every() +
// some() +
// reduce() +

// FIND
Array.prototype.findCustom = function (callbackFn) {
  for (let i = 0; i < this.length; i++) {
    if (callbackFn(this[i], i, this)) {
      return this[i]
    }
  }
}

const resFind = [1, 2, 3, 4].findCustom((val, i, arr) => {
  return val >= 4
})
// console.log(resFind)

// FINDINDEX
Array.prototype.findIndexCustom = function (callbackFn) {
  for (let i = 0; i < this.length; i++) {
    if (callbackFn(this[i], i, this)) {
      return i
    }
  }
  return -1
}

const resFindIndex = [1, 2, 3, 4].findIndexCustom((val, i, arr) => {
  return val < 4
})
// console.log(resFindIndex)

// FILTER
Array.prototype.filterCustom = function (callbackFn) {
  const newArr = []
  for (let i = 0; i < this.length; i++) {
    if (callbackFn(this[i], i, this)) {
      newArr.push(this[i])
    }
  }
  return newArr
}

const resFilter = [1, 2, 3, 4].filterCustom((val, i, arr) => {
  return val > 2
})
// console.log(resFilter)

// SORT
Array.prototype.sortCustom = function (callbackFn) {
  for (let i = 0; i < this.length - 1; i++) {
    // i=0  i< 3 ; i=1 i<3 ; i=2 i<3 -stoped
    for (let j = 0; j < this.length - 1 - i; j++) {
      if (callbackFn(this[j], this[j + 1]) > 0) {
        const save = this[j] // save = 1   1 , 3 < 0 -> failed  2.cycle -> 3,2 save = 3  [2 , 3]
        this[j] = this[j + 1]
        this[j + 1] = save
      }
    }
  }
  return this
}

const resSort = [1, 1, 3, 2, 566, 3, 11].sortCustom((a, b) => {
  return b - a
})
// console.log(resSort)

// JOIN
Array.prototype.joinCustom = function (pattern = ',') {
  let str = ''
  if (pattern) {
    for (let i = 0; i < this.length; i++) {
      str += this[i] //
      if (i < this.length - 1) {
        str += pattern
      }
    }
    return str
  }
}
const resJoin = ['Fire', 'Air', 'Water', 'Shumen', 'Mehdiyeva'].joinCustom('-')
// console.log(resJoin)

// INDEXOF
Array.prototype.indexOfCustom = function (element) {
  if (element) {
    for (let i = 0; i < this.length; i++) {
      if (this[i] === element) {
        return i
      }
    }
  }
  return -1
}

const resIndexOf = [
  'Fire',
  'Air',
  'Water',
  'Shumen',
  'Mehdiyeva',
].indexOfCustom('Shumen')

// console.log(resIndexOf)

// INCLUDES
Array.prototype.includesCustom = function (element) {
  if (element) {
    for (let i = 0; i < this.length; i++) {
      if (this[i] === element) {
        return true
      }
    }
  }
  return false
}

const resIncludes = [
  'Fire',
  'Air',
  'Water',
  'Shumen',
  'Mehdiyeva',
].includesCustom('Mehdiyeva')

// console.log(resIncludes)

// EVERY
Array.prototype.everyCustom = function (callbackFn) {
  for (let i = 0; i < this.length; i++) {
    if (!callbackFn(this[i], i, this)) {
      return false
    }
  }
  return true
}

const resEvery = [1, 30, 39, 29, 10, 13].everyCustom((val, i, arr) => val > 13)

// console.log(resEvery)

// SOME
Array.prototype.someCustom = function (callbackFn) {
  for (let i = 0; i < this.length; i++) {
    if (callbackFn(this[i], i, this)) {
      return true
    }
  }
  return false
}

const resSome = [1, 30, 39, 29, 10, 13].someCustom(
  (val, i, arr) => val % 2 === 0
)

// console.log(resSome)

// REDUCE
Array.prototype.reduceCustom = function (callbackFn, initialValue) {
  let accumulator = initialValue !== undefined ? initialValue : this[0]

  for (let j = initialValue !== undefined ? 0 : 1; j < this.length; j++) {
    accumulator = callbackFn(accumulator, this[j], j, this)
  }

  return accumulator
}

const resReduce = [
  'apple',
  'banana',
  'orange',
  'apple',
  'banana',
  'shumen',
].reduceCustom((accumulator, fruit) => {
  accumulator[fruit] = (accumulator[fruit] || 0) + 1
  return accumulator
}, {})

// console.log(resReduce)

const arr = [1, 2, 3, 4]
const result = arr.reduceCustom(
  (accumulator, currentValue) => accumulator + currentValue,
  0
)
// console.log(result)

// REVERSE

Array.prototype.reverseCustom = function () {
  for (let i = 0; i < this.length / 2; i++) {
    const save = this[i] // 1 ; 2 ; 3
    this[i] = this[this.length - 1 - i] // 7 ; 6 ; 3
    this[this.length - 1 - i] = save // last index = save  =>> it means first one will stay at the end of the array [7,1] ; [7,6,2,1]
  }
  return this
}

const resReverse = [
  'salam',
  'sagol',
  'shumen',
  'mehdiyeva',
  'coding',
  'sw',
  'spagetti',
].reverseCustom()

// console.log(resReverse)
