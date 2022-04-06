
//==========Example of Map==============
const student = new Map()

student.set("name", "sandeep sharma")
student.set("class", 12)
student.set("age", 19)
student.set("city", "raipur")

console.log(student)
console.log("student has city property? " + student.has("name"))
console.log("city: " + student.get("city"))
console.log("city deleted: " + student.delete("city"))
console.log(student)
student.clear()
console.log(student)

//===============Example of Class===============

class Emplyee {
    constructor(name, role, age, salary) {
        this.name = name
        this.role = role
        this.age=age
        this.salary=salary
    }

    getDetails() {
        console.log("Name: " + this.name)
        console.log("Role: " + this.role)
        console.log("Age: " + this.age)
        console.log("Salary: " + this.salary)
    }
}


let newEmp = new Emplyee("Rishu Mishra", "Developer", 23, 21800.00)

newEmp.getDetails()

 