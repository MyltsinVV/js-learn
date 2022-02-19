function f([a1, a2, a3, ...other], arr2) {
  console.log(arr2);

  console.log(a1, a2, a3);
  console.log(other);
}

f([1, 2, 3, 4, 5, 6, 7], [4, 5, 6])

function f2({ a = 123, b }) {
  console.log(a, b);
}

f2({ a: 1, b: 2 });
