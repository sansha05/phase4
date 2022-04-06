let sum=0

function add() {
    for(let i=0; i<arguments.length; i++) {
        sum+=arguments[i]
    }

    return sum
}

console.log(add(2, 2, 2))
console.log(add(2, 2, 2, 6))
console.log(add(2, 2, 2, 7, 3))