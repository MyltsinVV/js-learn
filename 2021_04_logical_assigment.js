// 3 новых оператора &&= ||= ??=

let a = 1;
let b = 42;

// if (a) {
//     a = b;
// }

// a && (a = b);
// a &&= b;

// a || (a = b);
// a ||= b;

// a ?? (a = b);
a ??= b;


console.log(a);
