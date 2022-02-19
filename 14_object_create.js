// Object.create принимает 2 параметра
// Первый: Можем указывать прототип нового созданного объекта
// Второй: поля для данного объекта
// Поля в данном объекте можно настраивать с помощью проперти дескрипторов
// enumerable - для видимости поля. По умолчанию false
// writable - для возможности изменять поле. По умолчанию false
// configurable - даёт возможность удалять ключ из объекта. По умолчанию false
const person = Object.create(
  {
    calculateAge(){
      console.log('Age:', this.age)
    }
  },
  {
    name: {
      value: 'Vladilen',
      enumerable: true,
      writable: true,
      configurable: true
    },
    birthYear: {
      value: 1999,
    },
    // Гетторы и сеторы
    age: {
      get() {
        return new Date().getFullYear() - this.birthYear
      },
      set(value) {
        this.birthYear = new Date().getFullYear() - value
      }
    }
  }
)

// Получаем ключи enumerable = true и функции прототипов
for (let key in person) {
  console.log('Key1', key, person[key])
  // Метод не позволяет заходить в прототип
  if (person.hasOwnProperty(key)) {
    console.log('Key2', key, person[key])
  }
}
