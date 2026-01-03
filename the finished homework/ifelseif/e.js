function print(a){
    console.log(a)
}
let a = prompt("write a number")
if(a>10){
    print(a + "is bigger than 10")
}else{
    print(a+"is smaller or equal to 10")
}

// 2

if(confirm("delete file?")){
    alert("file deleted")
}else{
    alert("deletion canceled")
}

// 3

let age = prompt("enter your age")
if(age<18){
    alert("you're still a teen")
}else if(age<30){
    alert("you're a young adult")
}else{
    alert("you're an adult")
}

// 4

let num = prompt("set a number")
num%2? print("even"):print("odd")

// 5

let week = prompt("what day of the week it is by count?")
switch(week){
    case 1:
        print("monday")
    case 2:
        print("tuesday")
    case 3:
        print("thirsday")
    case 4:
        print("forthday")
    case 5:
        print("friday")
    case 6:
        print("saturday")
    case 7:
        print("sunday")
}

// 6

let one = prompt("write the first number")
let two = prompt("write the second number")
if(one == two){
    print("numbers are equal")
}else{
    one>two? print("the first number is bigger"):print("the second number is bigger")
}
