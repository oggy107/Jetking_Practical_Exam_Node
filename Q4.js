console.log("1. using object literals");

const employee = {
    name: "john",
    age: 23,
    job: "admin"
}

console.log(employee);

console.log("\n2. using Object.new()");

const car = new Object();

car.name = "p1";
car.manufacturer = "mclaren";

console.log(car);

console.log("\n3. using Object.create()");

const student = Object.create({});

student.name = "smith";
student.rollno = 28;

console.log(student)
