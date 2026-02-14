//1
const greet = "Привет, мир!"
const stroka = JSON.stringify(greet)
localStorage.setItem('cheese', stroka)
let popa = localStorage.getItem('cheese')
console.log(JSON.parse(popa))
//2
localStorage.removeItem('cheese')
popa = localStorage.getItem('cheese')
console.log(JSON.parse(popa))
//3
const user = { name: 'Alice', age: 25, isLoggedIn: true }
const userJSON = JSON.stringify(user)
localStorage.setItem('user', userJSON)
const storedUser = localStorage.getItem('user')
const parsedUser = JSON.parse(storedUser)
//4
parsedUser.country = "perdezh v shtanhy"
updatedUser = JSON.stringify(parsedUser)
localStorage.setItem('cheese', updatedUser)
const amgoinginsane = localStorage.getItem('cheese')
let pon = JSON.parse(amgoinginsane)
console.log(pon)
//5
const button = document.getElementById("button")
const input = document.getElementById("input")
button.addEventListener("click", function(){
    if(localStorage.getItem(input.value) == null){
        let yee = JSON.stringify(input.value)
        localStorage.setItem(input.value, yee)
    }else{
        let kok = localStorage.getItem(input.value)
        let poop = JSON.parse(kok)
        console.log(poop)
    }
})
//6
const sack = document.getElementById("sack")
sack.addEventListener("click", function(){
    localStorage.clear()
})
//7
let tasks = {
    slackOffABit:"done",
    finishThisTask:"done",
    doSmtUseful:"not done "
}
let liquifiedTasks = JSON.stringify(tasks)
localStorage.setItem("datasks", liquifiedTasks)
kaka = localStorage.getItem("datasks")
let task = JSON.parse(kaka)
console.log(task)
//8
task.doSmtUseful = true
liquifiedTasks = JSON.stringify(tasks)
localStorage.setItem("datasks", liquifiedTasks)