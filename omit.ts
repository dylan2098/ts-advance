interface User {
  name: string;
  age: number;
  address: string;
}

type UserWithoutNameAndAge = Omit<User, 'name' | 'age' >

// nó sẽ tương tự như sau
// type UserWithoutNameAndAge = {
//     address: string;
// }
// lúc này 2 thuộc tính name và age đã không còn trong type OmitUser của chúng ta nữa

const user:UserWithoutNameAndAge = {
  // name: 'Tri', => error
  // age : 20 => error
  address: 'Ninh Thuan'
}