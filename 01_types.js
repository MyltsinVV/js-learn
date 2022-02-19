// Типы данных

// Примитивы
console.log(42, 4.2, 4e2, 0xff, 0o77, 0b11) // number float ??? 16-я запись 8-я запись 2-я запись
console.log(42n) // bigint (es2020)
console.log(false, true) // boolean
console.log('qwe') // string '' "" `` -> ${ js }
console.log(null) // null
console.log(undefined) // undefined
console.log(Symbol(1)) // Symbol - уникальность (es6)
console.log(Symbol(function() {}))

// Тип, Объекты
console.log({ a: 123 })
console.log(['hello', 123])
console.log(function() {  })
console.log(Date)
console.log(Math)
console.log(new Promise((resolve) => resolve()))

// Оператор typeof

// Способы вызова данного оператора
console.log(typeof(1))
console.log(typeof 1)

// Применение для примитивов
console.log(typeof 1)
console.log(typeof NaN) // number
console.log(typeof 42n)
console.log(typeof false)
console.log(typeof 'qwe')
console.log(typeof null) // object ошибка typeof
console.log(typeof undefined)
console.log(typeof Symbol(1))

// Применение для объекты
console.log(typeof {}) // object
console.log(typeof []) // object
console.log(typeof function() {}) // function
console.log(typeof Date) // function
console.log(typeof Math) // object
console.log(typeof new Promise((resolve) => resolve())) // object
