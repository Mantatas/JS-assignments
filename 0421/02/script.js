const totalPoints = prompt("kiek tasku?")
const finalExamInput = prompt("ar baigiamasis egzas?")

let finalExam = false
let aPlus = false

if (finalExamInput.toLowerCase() === 'taip') {
    finalExam = true
} else {
    finalExam = false
}

if (finalExam === true) {
    if (totalPoints >= 90 && totalPoints <= 100) {
        aPlus = true
    }
} else{
    if (totalPoints >= 89 && totalPoints <= 100) {
        aPlus = true
    }
}

if (finalExam == true && aPlus == true) {
    console.log(`tai buvo baigiamasis egzas. studentas pasieke A+ pazymi.`)
}
if (finalExam == false && aPlus == true) {
    console.log(`tai nebuvo baigiamasis egzas. studentas gavo A+ pazymi.`)
}