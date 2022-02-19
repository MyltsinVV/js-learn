function F() {
  this.name = 'test'

  this.fake = function (test, test2) {
    console.log(this.name, test, test2)
  }

  console.log(this)
}

function F2() {
  this.name = 'test2'

  console.log(this)
}

const f = new F()
const f2 = new F2()

f.fake.call(f2, 'test', 'a')
f.fake.apply(f2, ['test', 'a'])

const p = f.fake.bind(f2, 'test', 'a')
p()

function f1(name) {
  this.name = name
  setTimeout(() => {
    console.log(this)
  }, 100)
}

new f1('Max')