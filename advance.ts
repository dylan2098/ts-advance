
function introduce(city, country) {
    console.log(`Hi, I am ${this.name}. I live in ${city}, ${country}.`);
}

const person = { name: "Alice" };

// Using call:: Gọi một hàm với một giá trị this cụ thể và truyền các tham số trực tiếp.
introduce.call(person, "Paris", "France");


// Using apply:: Gọi một hàm với một giá trị this cụ thể và truyền các tham số dưới dạng một mảng hoặc một đối tượng giống mảng.
introduce.apply(person, ["New York", "USA"]);

// Using bind:: Trả về một hàm mới với giá trị this được chỉ định, nhưng không thực thi ngay lập tức. Tham số cũng có thể được gán trước (partial application).
const boundIntroduce = introduce.bind(person, "London");
boundIntroduce("UK");


introduce.call(person, "London2222", "UK");
