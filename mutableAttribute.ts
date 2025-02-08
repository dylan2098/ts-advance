type User = {
  readonly name: string;
  readonly age: number;
  readonly address: string;
}

type MakeMutable<T, K extends keyof T> = {
  -readonly [P in K]: T[P]
} & Pick<T, Exclude<keyof T, K>>


type MutableUser = MakeMutable<User, 'name'>


const user: MutableUser = {
  name: 'John',
  age: 30,
  address: '123 Main St.',
}
// Cannot assign to 'age' because it is a read-only property
// user.age = 10 => Error

// You can assign to 'name'
user.name = 'Tri'