//1
let a = 1
while(a<=10){
    console.log(a)
    a++
}
//2
a = 0
while(a<=10){
    a+=1
    if(a==5){
        continue
    }
    if(a==8){
        break
    }
    console.log(a)
}
//3
a=0
do{
    console.log(a)
    a++
}while(a<=5)
// разница в том что в do-while сначало действие а потом проверка условия а в while наоборот
//4
while(true){
    let x = prompt("введите цифру")
    if(x=='10'){
        break
    }
}
//5
for(let i=1;i<=10;i++){
    console.log(i)
}
//6
i=1
for(;;){
    if(i<=100){
        break
    }
    i++
}
//7
numbers = [1, 2, 3, 4, 5]
for(let i=0;i<=4;i++){
    console.log(numbers[i])
}
//8
//while лучше изпользовать если известно когда должен закончитсяс цикл а for лучше использовать когда не известен конец а еще for занимет меньше строк
a=0
while(a<5){console.log(a), a++}
for(let i=0;i<10;i++){console.log(i)}