// 1
function greet(){
    console.log("Привет, мир!")
}
greet()

// 2
function sayHello(name){
    console.log("Привет, ", name, "!")
}
sayHello("Altynbek")

// 3
function sum(one, two){
    console.log(one+two)
}
sum(1, 2)

// 4
function isEven(a){
    console.log(a%2==0)
}
isEven(1, 3)

// 5
max = (a, b) => {
    if(a==b){
        console.log("Числа равны")
    }else if(a>b){
        console.log(a)
    }else{
        console.log(b)
    }
}

// 6
function getInitials(a){
    let g = ''
    for(let i=0; a[i]!=' '; i += 1){
        g=i
    }
    console.log(a[0] + a[g+2])
}
getInitials("Ahmetov Altynbek")

// 7
function square(a){
    return a*a
}
function cube(a){
    return square(a)*a
}
console.log(cube(3))

// 8
const sum = (a, b)=>{console.log(a+b)}// i kaka
sum(1, 2)