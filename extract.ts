type TestNumberOrString = number | string

type PickString = Extract<TestNumberOrString, string>
// nó sẽ tương tự như sau:
// type PickString = string;