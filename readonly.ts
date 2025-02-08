interface User {
  name: string;
  age: number;
}

type ReadonlyUser = Readonly<User>;

// nó sẽ tương tự như sau:
// type ReadonlyUser = {
//     readonly name: string;
//     readonly age: string;
// }

const user1 : ReadonlyUser = {
  name: 'Tri',
  age: 20
}


// user1.name = 'Test' // => Error
