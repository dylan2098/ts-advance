interface User {
  name: string;
  age: number;
}

type PartialUser = Partial<User>;

// // nó sẽ tương tự như sau:
// type PartialUser = {
//     name?: string | undefined;
//     age?: string | undefined;
// }


// need name and age
const user1 : User = {
  name: 'Tri',
  age: 20
}

console.log(user1.name)


const user2: PartialUser = {
  // name luc nay co hay khong cung duoc
  age:  10
}

console.log (user2.age)