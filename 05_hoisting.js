// Поднятие функций через ключевое слово function
console.log(sum(41, 1))
function sum(a, b) {
  return a + b
}

// Нет поднятие через переменную
// func() // error
let func = function() {
  console.log(123)
}

// Поднятие переменных через ключевое слово var
console.log(a)
var a = 42
console.log(a)
