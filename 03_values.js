// Примитивы передаются по значению
let a = 42
let b = a
b++
console.log(a)
console.log(b)
// Сложные типы передаются по ссылке
let c = [1, 2, 3, 4, 5]
let d = c
let f = [1, 2, 3, 4, 5, 6]
d.push(6)
console.log(c)
console.log(d)
console.log(c === d)
console.log(c === f)
console.log(JSON.stringify(c) === JSON.stringify(f))
// Скопировать массив без ссылки
let a1 = [1, 2, 3]
let b1 = new Array(...a1)
let c1 = a1.concat()
let d1 = [...a1]
// Скопировать объект без ссылки
let o1 = { a: 2, b: 3, c: { a: [1, 1, 1], b: 2 } }
let o2 = Object.assign({}, o1)
let o3 = { ...o1 }
console.log(o1)
console.log(o2)
console.log(o3)
console.log(o1 === o2)
console.log(o1 === o3)
