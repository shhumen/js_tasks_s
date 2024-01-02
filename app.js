/* -----------------------------------------------------------TASKS ---------------------------------------------------- */

/*
 -----------------------------------------------------------TASK A ---------------------------------------------------- 

A.
Bir 'myArray' adli deyisen yaradin ve her hansi bir arrayi menimsedin .
Algoritma girilən arrayin içindəki elementlərin hər birindən neçə dənə olduğunu ekrana yazdırmalıdır.
Example:
input => [5, 2, "salam", "necesen", "salam", 56, 2, 7, 7, 7 ] => 
  print:
    5 -> 1 ədəd
    2 -> 2 ədəd
    salam -> 2 ədəd
    necesen -> 1 ədəd
    56 -> 1 ədəd
    7 -> 3 ədəd
*/

// Solution

let myArray = [
  1,
  2,
  'Shumen',
  33,
  'Shumen',
  89,
  34,
  'shumen',
  'Salam',
  34,
  77,
  'shumen',
  89,
  'Salam',
  'swaayyy',
  56,
  'hellcode',
  4568,
  34,
]

const countArrayElement = (array_, num_) => {
  let count = 0
  for (item of array_) {
    if (item == num_) {
      count++
    }
  }
  return count
}

const countAllArrayElements = (array_) => {
  let i = 0
  for (const item of array_) {
    let count = countArrayElement(array_, item)
    if (i === array_.indexOf(item)) {
      console.log(`Element:${item} count:${count}`)
    }
    i++
  }
}

// console.log(countAllArrayElements(myArray))

/* -----------------------------------------------------------TASK A END ---------------------------------------------------- */

/* -----------------------------------------------------------TASK B START ---------------------------------------------------- */

/*
B.
'firstArr' ve 'secondArr' adli iki deyisken yaradib, her hansi array menimsedin.
Algoritma göndərilən iki arrayi qarşılaşdırıb içindəki elementlərin eyni olub olmadığını yoxlamalı və ona görə boolean dəyər ekrana çap etməlidir.
Example:
  [1, 2, 3], [1, 2, 3] => true
  [1, 2, 3], [3, 2, 1] => true
  [1, 2], [1, 2, 2] => false
  ["salam", 2], ["salam", "2"] => false
  [1, 4, "at"], ["at", 1, 4] => true
  ["At", 1], [1, "aT"] => false
 */

let firstArr = [12, 33, 'shumen']
let secondArr = [12, 33, 'Shumen']

const isArrElementsSame = (firstArr, secondArr) => {
  let boolean_ = false
  if (firstArr.length === secondArr.length) {
    for (const item of firstArr) {
      if (secondArr.includes(item)) {
        boolean_ = !boolean_
      }
    }
  }
  console.log(firstArr, secondArr, boolean_)
}

// console.log(isArrElementsSame(firstArr, secondArr))

/* -----------------------------------------------------------TASK B END  ---------------------------------------------------- */

/* -----------------------------------------------------------TASK C START  ---------------------------------------------------- */
/*
C.
Bir number arrayı yaradın və buna dəyər mənimsədin.
Arrayin içində olan ən böyük ikinci və ən kiçik ikinci ədədləri ekrana yazdırın.
  Example:
    if array = [ -7, -71, 66, 11 ,3 , 8 , 67]  then print "Ən böyük ikinci: 66, Ən kiçik ikinci -7"  
    if array = [ 1, 6, 0, 5 , 3 , 8 , 16]  then print "Ən böyük ikinci: 8, Ən kiçik ikinci 1"


 */

let numberArrayC = [-12, 33, 4, 67, 34, 9, -5, 1]

const findSecondExtremes = (numArray) => {
  let newArr = []
  const sortedArr = numArray.sort(function (a, b) {
    return b - a
  })
  newArr = sortedArr.slice(1, -1)
  console.log(`En boyuk: ${newArr[0]}, En kicik :${newArr[newArr.length - 1]}`)
}

// console.log(findSecondExtremes(numberArrayC))

/* -----------------------------------------------------------TASK C END  ---------------------------------------------------- */

/* -----------------------------------------------------------TASK D START  ---------------------------------------------------- */
/*
D.
Bir number arrayı yaradın və buna dəyər mənimsədin.
Arrayin içində olan sadəcə müsbət ədədləri ayrı, mənfi ədədləri ayrı toplayıb ekrana yazdırın.
  Example:
    if array = [ 1, 2, -5, 8, -3, 9 , -7 ]  then print "Müsbət toplam: 20 , Mənfi toplam: -15"
    if array = [ -7, -3, 2, -8, 5 , -4 ]  then print "Müsbət toplam: 7 , Mənfi toplam: -22"

*/

let numberArrayD = [-7, -3, 2, -8, 5, -4]

const sumOfPositiveNegativeNums = (numberArray) => {
  let positiveSum = 0
  let negativeSum = 0
  for (const item of numberArray) {
    if (item > 0) {
      positiveSum += item
    }
    negativeSum += item
  }
  return `Sum of positives: ${positiveSum}\nSum of negatives: ${negativeSum}`
}
// console.log(sumOfPositiveNegativeNums(numberArrayD))

/* -----------------------------------------------------------TASK D END  ---------------------------------------------------- */

/* -----------------------------------------------------------TASK E START  ---------------------------------------------------- */

/*
E.
Bir number arrayı, 'limit' adlı bir number dəyişkən yaradın və bunlara dəyər mənimsədin.
Arrayin içində olan ədədlərdən limit'dən yüksək olanlarını seçib yeni bir arraya doldurun və yeni arrayi ekrana yazdırın.
  Example:
    if array = [ 1, 2, -5, 8, -3, 9 , -7 ] and limit = 4  then print [8, 9]
    if array = [ -7, -3, 2, -8, 5 , -4 ]  and limit = -4  then print [-3, 2, 5]
*/

let numberArrayE = [-7, -3, 2, -8, 5, -4]
let limitE = -4

const findLimitedNumbers = (arr, limit) => {
  let limitedArray = []
  for (item of arr) {
    if (item > limit) {
      limitedArray.push(item)
    }
  }
  return limitedArray
}

// console.log(findLimitedNumbers(numberArrayE, limitE))

/* -----------------------------------------------------------TASK E END  ---------------------------------------------------- */

/* -----------------------------------------------------------TASK F START  ---------------------------------------------------- */
/*
F.
1. Bir 'result' dəyişkəniniz olacaq ki başlanğəc dəyəri 1 olmalıdır. Bir arrayiniz olacaq ki içində boolean və integer dəyərlər olacaq. Hər zaman cüt indexlərdə integer'lər, tək indexlərdə boolean dəyərlər olacaq.
2. Arrayin içində olan dəyərlərə uyğun olaraq integerdan sonra gələn boolean true'dursa result dəyərinə vurulacaq. Və arraydəki bütün elementlərə bu uygulandıqdan sonra result ekrana yazdırılacaq.
ÖNƏMLİ!! true, false burada boolean dəyərdir. String Deyil!!

  Example:
    if array = [2, true, 3, false, 7, true, 4 false] then print 14 (2 * 7)  
        burada 2 və 7 nin qarşısında true olduğuna görə onlar sadəcə bir birinə vurulur.
    if array = [8, false, 4, false, 11, false, 2 false] then print 1 
    if array = [8, false, 3, true, 7, false, 1, true, 8, true] then print 24 (3*1*8)
    if array = [5, false, 2, true, 7, true, 6, true, 9, false] then print 84 (2*7*6) 
*/

let arrayF = [8, false, 3, true, 7, false, 1, true, 8, true]
let result = 1

const myFunc = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (i % 2 == 0 && array[i + 1] == true) {
      result *= array[i]
    }
  }
  return result
}

// console.log(myFunc(arrayF))

/* -----------------------------------------------------------TASK F END  ---------------------------------------------------- */

/* -----------------------------------------------------------TASK G START ---------------------------------------------------- */
/*
G.
1. Bir array yaradın və buna dəyər mənimsədin.
2. Arrayin içində olan dəyərləri təkrar eləməyəcək şəkildə ekrana yazdırın.
Example:
if array = [1, "salam", 1, true, true, false, false, false, 5, "5"] then print "1 salam true false 5"
if array = [2, "class", 1, true, "class", 16, 17, 18,  "17"] then print "2 class 1 true 16 17 18"
*/

/* -----------------------------------------------------------TASK G END ---------------------------------------------------- */

let arrayG = [2, 'class', 1, true, 'class', 16, 17, 18, '17']

const getUniqueValues = (array) => {
  let uniqueValues = []

  for (let i = 0; i < array.length; i++) {
    if (!uniqueValues.includes(array[i])) {
      uniqueValues.push(array[i])
    }
  }
  return uniqueValues.join(', ')
}
// console.log(getUniqueValues(arrayG))
