// Переменные через let можно переопределять
let a = '13'
a = 135

// Переменные через const нельзя переопределять
const b = 'qew'
// b = 61 // error

// Но если это object то можно изменять внутренние свойства(Можно запретить изменять через Object.create)
const obj = { a: 13 }
obj.a = 123
obj.c = 5123
delete obj.c
// obj = qwe // error

const arr = [1, 1]
arr.push(1)
// arr = [] // error
