// Мини пример
function a(message) {
  return function() {
    console.log(message)
  }
}

const hello = a('hello')
hello()

// Большой пример
function createPersonJs(name, age) {
  const skills = ['Js', 'Css', 'Html']

  return {
    getName: () => name,
    getAge: () => age,
    getSkills: () => skills.join(' '),
    pushSkill: (skill) => skills.push(skill)
  }
}

const Max = createPersonJs('Max', '35')
const Max2 = createPersonJs('Max2', '30')
Max.pushSkill('ООП')
Max2.pushSkill('React')
console.log(Max.getSkills())
console.log(Max2.getSkills())

// Пример замыкания для es5
for (var i = 0; i < 10; i++) {
  (function (j) {
    setTimeout(() => {
      console.log(j)
    }, 1500)
  })(i);
}
