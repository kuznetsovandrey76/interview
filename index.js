1. Типы данных в js
  typeof undefined // "undefined"
  typeof 0 // "number"
  typeof true // "boolean"
  typeof "foo" // "string"
  typeof {} // "object"
  typeof null // "object" !
  typeof function(){} || (() => {}) // "function"

2. Вывести числа, находящиеся под главной диагональю матрицы
const matrix = [
  [3, 2, 1],
  [6, 5, 4],
  [9, 7, 8],
]
const log = console.log
matrix.forEach((item, outerIndex) => {
  item.forEach((item, innerIndex) => {
    if (outerIndex > innerIndex) log(item)
  })
})

3. Максимальное и минимальное значение в массиве
const arr = [1, -2, 3, 0, -8]
let searchInArray = {
  min: (arr) => {
    return Math.min(...arr)
  },
  max: (arr) => {
    return Math.max(...arr)
  }
}
searchInArray.min(arr) // -8
searchInArray.max(arr) // 3

4. setTimeout
let arr = [1,2,3,4,5]
for (i of arr) {
  setTimeout((arg) => {
    console.log(arg)
  }, 0, i)
}

5. Palindrome
let isPalindrome = (str) => {
	return str === str.split('').reverse().join('')
}
