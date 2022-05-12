const myArr = [1, 2, 3, 4, 5, 6];
const result = sumFunc.mySum(...myArr);
console.log(result);

const mySecondArr = myArr.map((num) => num * 2);
const average = sumFunc.mySum(...mySecondArr) / mySecondArr.length;
console.log(mySecondArr.filter((num) => num > average));

setTimeout(() => {
    console.log("GoodBye");
}, 3000);

const Employee = {
    name: "name",
    email: "email1234@email.com",
    department: "1",
    startDate: "Apr 2022",
};

const { name, email } = Employee;
const Person = { name, email, };
console.log(Person);