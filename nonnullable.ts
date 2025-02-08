//  tao 1
type name = string | undefined | null;

type nameRequired = NonNullable<name>;
// lúc này nó sẽ tương tự như sau
// type nameRequired = string;




// tao nhieu
type MakeNullable<T, K extends keyof T> = {
  [P in keyof T]: P extends K ? NonNullable<T[P]> : T[P]
};

// Cách sử dụng
type User = {
  name: string;
  age: number | undefined;
  address: string | null;
};

// Chuyển đổi name và age thành non-nullable
type NonNullableUser = MakeNullable<User, 'name' | 'age'>;

const user: NonNullableUser = {
  name: 'John',
  age: 30,
  address: null,
};

const user2: NonNullableUser = {
  name: 'Mary',
  age: 25,
  address: '123 Main St.',
};

// Compiler error: Property 'age' is missing
// const user3: NonNullableUser = {
//   name: 'David',
// };