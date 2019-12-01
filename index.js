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

6. call
const user = {
  name: 'default',
  greeting: function(arg = 'Welcome!') {
    console.log(`${arg} Hello ${this.name}`)
  }
}
const me = {
  name: 'Andrey'
}
user.greeting.call(me, 'Hi!')

7. Closure
const log = console.log
const user = (name, job) => {
  let _name = name;
  let _job = job;

  return {
    // getter
    getName: () => {
      return _name
    },
    getJob: () => {
      return log(_job)
    },
    // setter
    setJob: newJob => {
      _job = newJob;
    }
  }
}
let andrey = user('Andrey', 'Teacher')
andrey.getJob() // Teacher
andrey.setJob('Programmer')
andrey.getJob() // Programmer

8. Even Fibonacci Numbers
const fiboEvenSum = (num) => {
  let a = 1, b = 1, temp,
      result = 0;
  while (num > 0){
    temp = a;
    a = a + b;
    b = temp;
    if (!( b%2 )) result += b;
    num--;
  }  
  // OR
  // let i = 0;
  // while (i < num){
  //   temp = a;
  //   a = a + b;
  //   b = temp;
  //   if (!( b%2 )) result += b;
  //   i++;
  // }
  return result;
}
fiboEvenSum(10) // 44

9. Prime Factor
const primeFactor = {
  min: (num) => {
    let i = 2;
    while (i <= num) {
      if (num % i == 0) return i
      else i += 1
    }
  },
  max: (num) => {
    let i = 2;
    while (i <= num) {      
      if (num % i == 0) num /= i
      else i += 1
    }
    return i;
  }
}
const log = console.log
log(primeFactor.min(13195)) // 5
log(primeFactor.max(13195)) // 29




