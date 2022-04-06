function Student(name, age, gender) {
    this.name= name
    this.age=age
    this.gender=gender

}

const obj1 = new Student("pankaj", 22, "male")
const obj2 = new Student("reena", 23, "female")

Student.prototype.branch = "CSE"
Student.prototype.college = "ABC"

console.log("Name: " + obj1.name)
console.log("age: " + obj1.age)
console.log("gender: " + obj1.gender)
console.log("Branch: " +obj1.branch)
console.log("College: " +obj1.college)
console.log("=================")
console.log("Name: " + obj2.name)
console.log("age: " + obj2.age)
console.log("gender: " + obj2.gender)
console.log("Branch: " +obj2.branch)
console.log("College: " +obj2.college)

Student.prototype = {branch: "IT"}

let obj3 = new Student("priya", 21, "female")
console.log(obj3.branch)
console.log(obj1.branch)