// Parašykite JavaScript programą, kuri patikrina, ar duotas skaičius 
// egzistuoja diapazone nuo 40 iki 10000. Pavyzdžiui, 40 egzistuoja tarp 
// 40 ir 4000.

const number = prompt("iveskite sk.")

if (number >= 40 && number <= 10000) {
    console.log(`sk. ${number} yra tarp 40 ir 10k`)
} else {
    console.log(`sk. ${number} nera tarp 40 ir 10k`)
}