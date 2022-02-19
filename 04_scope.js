{
  let a = ''
  const b = ''
  var c = 'qwe'
}

// console.log(a) // error
// console.log(b) // error
console.log(c) // not error

//-----------------------------------//

// Функция создаёт новый scope
function f() {
  var a = 'qwe'

  function f1() {
    var b = 123
    console.log(a, b)
  }

  f1()

  console.log(a)
  // console.log(b) // Error
}

f()

// console.log(a) // Error
// f1() // Error

const a = () => {
  function b() {
    console.log('b')
  }
}
