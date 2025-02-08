interface User {
  name?: string | undefined;
  age?: number | undefined;
}

type RequireUser = Required<User>;

// nó sẽ tương tự như sau:
// type RequireUser =  {
//     name: string;
//     age: string;
// }


// bat buoc phai co name & age 
const user1 : RequireUser = {
  name: 'Tri',
  age: 20
}