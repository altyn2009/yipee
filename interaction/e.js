const butt = document.getElementById("butt")
const lock = document.getElementById("lock")
const da = document.getElementById("da")
let poop = 0
lock.addEventListener("click", function(){
    poop = 1
    butt.style.backgroundColor = "lime"
})
butt.addEventListener("click", function(){
    if(poop == 1){
        console.log("Событие обработано через JS")
    }
})
da.style.height = "200px"
da.style.width = "200px"
da.addEventListener("click", function(){
    da.style.backgroundColor = "blue"
})
da.addEventListener("mouseover", function(){
    console.log("Элемент нажат")
})
const popa = document.getElementById("popa")
popa.addEventListener("keydown", function(){
    console.log(popa.value)
})
const link = document.getElementById("link")
link.addEventListener("click", function(event){
    event.preventDefault()
    console.log("Переход по ссылке отменен")
})
const list = document.getElementById("list")
const pon = document.getElementsByClassName("pon")
list.addEventListener("click", function(event){
    if(event.target.tagName == "LI"){
        console.log(event.target.textContent)
    }
})
const e = document.getElementById("keyboardInput")
addEventListener("keydown", function(event){
    console.log(event.code)
})