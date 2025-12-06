let a=0
const b=0
console.log(a, b)
a=1
//b=1 это не меняет ведь конст не меняется
console.log(a, b)

// 2

var c=0
console.log(c)
var c="e"
console.log(c)
//var устарел из-за того что он меняется в разных условиях

// 3

Num = Number // это цифра
str = String //это слово
Bool = Boolean //это либо да либо нет
nul = null //это пердежь в штаны
undy = undefined //это непонятно что
notNum = NaN //это что угодно но не цифра
console.log(Num, str, Bool, nul, undy, notNum)

// 4

console.log(Number(Num))
console.log(String(undy))

// 5

Num = 123
let coc = String(Num)
console.log(coc)

// 6

const ame = String(prompt("напишите свое имя чтобы быть задокшеным"))
console.log(ame)