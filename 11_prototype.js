// Получение прототипа
// __proto__ - es6
// Object.getPrototypeOf() - es5

// Прототипы определённый объект который присутствует у объектов. Его можно расширять.
//
// Он вызывается по цепочки сверху вниз. То есть если мы находим какие-то поля на верхнем уровне,
// то мы обращается к ним. Иначе ищем в прототипе
//
// С помощью прототипов можно устраивать наследование.

// Создание объекта без new Object
// const person = {
//   name: 'Maxim',
//   age: 25,
//   greet() {
//     console.log('greet')
//   }
// }

// Создание объекта через new Object
const person = new Object({
  name: 'Maxim',
  age: 25,
  greet() {
    console.log('greet')
  }
})

// Добавление метода для глобального класса Object от которого наследуются все остальные объекты
Object.prototype.sayHello = () => {
  console.log('Hello!!!')
}

// Через конструкцию Object.create можно добавить прототип. Наследование прототипов.
const lena = Object.create(person)
//lena.name = 'Elena'

console.log(lena.age)
// Если изменить значение у прототипа оно изменится и сверху
person.age = 27
console.log(lena.age)

// В js всё объекты
const str = new String('str')
console.log(str)

function Cat(name, color) {
  this.name = name
  this.color = color
}

Cat.prototype.voice = function() {
  console.log(`voice ${ this.name }`)
}

const cat = new Cat('кот', 'black')
console.log(cat)
cat.voice()
// Проверяем есть ли у данного объекта данное свойство, если его нет у самого объекта смотрим у прототипа
console.log('name' in cat)
console.log('voice' in cat)
// Проверяем есть ли у данного объекта данное свойство не заходя в прототип
console.log(cat.hasOwnProperty('name'))
console.log(cat.hasOwnProperty('voice'))
