/*class Animal {
  #test
  static type = 'ANIMAL'

  constructor(option) {
    this.name = option.name || 'animal'
    this.age = option.age
    this.hasTail = option.hasTail
    this.#test = 123
  }

  voice() {
    console.log('I am Animal!')
  }

  static test() {
    console.log(123)
  }
}

const animal = new Animal({})

console.log(animal)
console.log(Animal.type)
Animal.test()

class Cat extends Animal {
  static type = 'CAT'

  constructor(option) {
    super(option)
    this.color = option.color
  }

  voice() {
    super.voice()
    console.log('I am cat')
  }

  get ageInfo() {
    return this.age * 7
  }

  set ageInfo(newAge) {
    this.age = newAge
  }
}

const cat = new Cat({ name: 'cat', age: 5, hasTail: true, color: 'black' })

console.log(cat)
cat.voice()
console.log(cat.ageInfo)*/

class Component {
  constructor(selector) {
    this.$el = document.querySelector(selector)
  }

  hide() {
    this.$el.style.display = 'none'
  }

  show() {
    this.$el.style.display = 'block'
  }
}

class Box extends Component {
  constructor(options) {
    super(options.selector)

    this.$el.style.width = this.$el.style.height = options.size + 'px'
    this.$el.style.background = options.color
  }
}

const box1 = new Box({ selector: '#box', size: 100, color: 'red' })
