function Persion(name) {
    this.name = name
    this.age=23
    this.greet = function() {
        console.log("Hello " + this.name + "! welcome to my home.")
    }
}

const persion1 = new Persion("sandeep");
const persion2 = new Persion("mani");

Persion.prototype.address = function(add) {
    console.log("your city is " + add)
}

persion1.greet()
persion2.greet()
persion1.gender = "male"

console.log(persion2.address("mumbai"))
console.log(persion1.address("Raipur"))