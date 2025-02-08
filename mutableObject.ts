type User = {
  readonly name: string;
  readonly age: number;
};

type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
};

type MutableUser = Mutable<User>;

// // lúc này nó sẽ trông như vầy
// type MutableUser = {
//   name: string;
//   age: number;
// }

const user1: MutableUser = {
  name: 'tri',
  age: 20,
};

user1.name = 'Nguyen'; // => No Error
