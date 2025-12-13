function print(a){
    console.log(a)
}
// 1
let a = 10
let b = 5
let c = 2
print(a + b + c)
print(a*b/c)
print(a%b)

// 2

let x = 7
print(x++ + ++x)
print(x-- - --x)

// 3

print("the result is:" + String(4+5))

// 4

print(a>b && a>0 && b>0)
print(c<10 || c==2)
print(a/c != 5)

// 5

print(10 == "10")
print(10 === "10")

// 6


if((x%3==0 || x%2==0) && x%6!=0){
    print("true")
}
if(x<10 && x>5){
    print("false")
}