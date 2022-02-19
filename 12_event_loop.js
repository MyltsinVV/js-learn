// JavaScript имеет один поток
//

console.log('Start')

setTimeout(() => {
  console.log('timeout')
}, 0)

setTimeout(() => {
  console.log('timeout')
}, 1000)

console.log('End')

