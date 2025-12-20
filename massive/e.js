let fruits = ["Яблоко", "Банан", "Апельсин"]
console.log(fruits)
//2
console.log(fruits[0])
console.log(fruits[2])
fruits.push("Груша")
//3
fruits.pop()
fruits.shift()
console.log()
//4
fruits.forEach(element => {
    console.log(element)
});
//5
let lengths = fruits.map(x => x.length)
console.log(lengths)
//6
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(numbers.filter(x => x%2==0))
//7
x = numbers.reduce((acc, num) => acc + num, 0)
console.log(x)
//8
console.log(numbers.find(num=>num>5))
//9
arr1=[1, 2, 3]
arr2=[4, 5, 6]
x = arr1.concat(arr2)
console.log(x)
//10
console.log(fruits.includes("Банан"))
//11
fruits.reverse()
console.log(fruits)