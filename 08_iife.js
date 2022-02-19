// Immediately Invoked Function Expression
// Само вызывающиеся функции
(function () {
  console.log(1)
})()

;(function f(a) {
  console.log(a)
  if (a === 'qwqw') f(2)
})('qwqw')
