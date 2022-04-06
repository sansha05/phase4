function Employee(name, designation, yearOfBirth) {
    this.name = name
    this.designation = designation
    this.yearOfBirth=yearOfBirth
}

Employee.prototype.calculateAge = function() {
    console.log("the current age is " + (2022-this.yearOfBirth))
}

console.log(Employee.prototype)

const emp1 = new Employee("rajoo", "manager", 1998)
const emp2 = new Employee("rishu", "developer", 1999)

emp1.calculateAge();
emp2.calculateAge();
