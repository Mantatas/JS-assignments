// "Parašykite JavaScript programą, kuri įvertina studento bendrus taškus įvairiuose egzaminuose ir nustato jo pažymį. Vertinimo kriterijai yra šie:
// Jei bendri taškai yra tarp 89 ir 100 (įskaitant), studentas gauna A+ pažymį.
// Jei egzaminas pažymimas kaip 'Baigiamasis egzaminas', studentas gaus A+ pažymį tik jei jo bendri taškai yra 90 ar daugiau. Tarkime, kad baigiamasis egzaminas yra pažymimas 'true' 
// kaip antrasis parametras, kitu atveju - tuščias. Jei studentas pasiekia A+ pažymį, programa turėtų grąžinti 'true', kitu atveju - 'false'."

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