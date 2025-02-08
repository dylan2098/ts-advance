interface User {
  name: string;
  age: number;
  address: string;
}
type UserWithNameAndAge = Pick<User, 'name' | 'age'>

// nó sẽ tương tự như sau
// type UserWithNameAndAge = {
//  name: string;
//  age: string;
// }