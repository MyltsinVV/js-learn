// Промисы пришли что бы убрать вложенность колбеков
// Внутри промиса пишем асинхронный код
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('resolve')
    reject('reject')
  }, 2000)
})

p.then(data => {
  data += ' test'
  return data
}).then(data => {
  console.log(data)
}).catch(err => {
  console.error(err)
}).finally(() => {
  console.log('finally')
})

const sleep = ms => new Promise(resolve => setTimeout(() => resolve(), ms))

// Выполняется когда выполнятся все
Promise.all([sleep(2000), sleep(8000)]).then(() => {
  console.log(123)
})

// Выполняется когда выполнится хотя бы один
Promise.race([sleep(2000), sleep(8000)]).then(() => {
  console.log(123)
})

