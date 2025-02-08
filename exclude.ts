type TestNumberOrString = number | string

type RemoveString = Exclude<TestNumberOrString, string>
// nó sẽ tương tự như sau:
// type RemoveString = number;

