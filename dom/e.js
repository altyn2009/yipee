// 1
let pop = document.getElementById("message")
pop.textContent = "Добро пожаловать в JavaScript!"
// 2
let poop = document.getElementsByClassName("box")
let a = 0
while(a<poop.length){
    poop[a].style.backgroundColor = 'green'
    a++
}
// 3
let pooop = document.querySelector("#text")
pooop.style.color = 'blue'
let poaop = document.querySelectorAll(".box")
if(Number(prompt("проверить 3 задание?(1-да, 0-нет)"))){
    a = 0
    while(a<poaop.length){
        poaop[a].style.backgroundColor = 'blue'
        a++
    }
}
// 4
let poooop = document.querySelectorAll(".highlight")
a = 0
while(a<poooop.length){
    poooop[a].style.backgroundColor = 'yellow'
    a++
}