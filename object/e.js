//1
person = {
    "name":"altynbek",
    "age":15,
    "city":"almaty"
}
console.log(person)
//2
console.log(person["name"])
console.log(person["age"])
person["city"] = "astana"
//3
person.greet=function(){console.log("Привет, меня зовут, ", person["name"], ", мне ", person["age"], " лет!")}
//4
obj1 = { a: 10, b: 20 }
obj2 = { a: 10, b: 20 }
console.log(obj1 == obj2)
console.log(obj1 === obj2)
//5
book = {
    title:"1000+1 reasons to poop",
    author:"Altynbek",
    details:{
        year:1967,
        pages:167
    }
}
bewk = Object.assign({}, book)
console.log(bewk)
book.title = "1000+1 reasons to sleep"
console.log(bewk)
//6
calculator = {
    sum:function(a, b){return a+b},
    multiply:function(a, b){return a*b}
}
console.log(calculator.sum(1, 2))
//7
const car = {
    brand:"lexus",
    model:"es300"
}
car.brand = "micubisi"
// он меняется потому что мы меняем ч=только 1 элемент в car не его самого