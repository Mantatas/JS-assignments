userString = prompt("Enter text")

const firstChar = userString.charAt(0)
const lastChar = userString.charAt(userString.length - 1)

let modifString = userString

if (firstChar === 'P' || firstChar === 'p') {
    modifString = userString.slice(1)
}

if (lastChar === 'P' || lastChar === 'p') {
    modifString = modifString.slice(0, -1)
}

if (modifString == userString) {
    console.log(`tekstas: ${userString}. jis nepakites.`)
} else {
    console.log(`originalus tekstas: ${userString}. modifikuotas tekstas: ${modifString}`)
}