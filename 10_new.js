// Оператор new создает экземпляр объекта, имеющего конструктор

function Cat(color, name) {
  this.color = color
  this.name = name
}

const cat = new Cat('black', 'кот')
console.log(cat)

function myNew(constructor, ...args) {
  // Создается новый объект, наследующий prototype constructor
  const obj = Object.create(constructor.prototype)
  return constructor.apply(obj, args) || obj
}

const cat2 = myNew(Cat, 'black', 'кот')
console.log(cat2)

