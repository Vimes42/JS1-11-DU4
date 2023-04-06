const numbers = [
    -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
  ]
//Vypište na výstup všechna čísla.
numbers.forEach((number) => {
  console.log(number)
})
//Vypište na výstup druhé mocniny všech čísel.
numbers.forEach((number) => {
  console.log(number * number)
})
//Vypište na výstup pouze záporná čísla.
numbers.forEach((number) => {
  if (number <0) {
    console.log(number)
}})
//Vypište na výstup absolutní hodnotu všech čísel.
numbers.forEach((number) => {
  console.log(Math.abs(number))
  })
//Vypište na výstup pouze sudá čísla.
numbers.forEach((number) => {
  if (number % 2 === 0) {
    console.log(number)
  }})
//Vypište na výstup pouze ta čísla, jejíchž absolutní hodnota je dělitelná třemi.
numbers.forEach((number) => {
  if (Math.abs(number) % 3 === 0) {
    console.log(number)
  }})
//Vypište na výstup jak daleko je každé číslo v seznamu od čísla 5.
numbers.forEach((number) => {
  console.log(numbers.indexOf(5) - numbers.indexOf(number))
})


//Vypište na výstup druhé mocnicny vzdáleností všech čísel od čísla 5.
numbers.forEach((number) => {
  console.log((numbers.indexOf(5) - numbers.indexOf(number)) * (numbers.indexOf(5) - numbers.indexOf(number)))
})

//Spočítejte, kolik je v seznamu záporných čísel.
let pocetZapornych = 0
numbers.forEach((number) => {
  if (number < 0){
    pocetZapornych++
  }
})
console.log(pocetZapornych)

//Spočítejte součet všech čísel v poli.
let soucet = 0
for (let i = 0; i < numbers.length; i += 1) {
  soucet += numbers[i]
}
console.log(soucet)
//Spočítejte průměr všech čísel v poli.
let prumer = 0
for (let i = 0; i < numbers.length; i += 1) {
  prumer = soucet / numbers.length
}
console.log(prumer)
//Spočítejte součet všech kladných čísel v poli.
let soucetKladnych = 0
numbers.forEach((number) => {
  if (number > 0) {
    soucetKladnych += number
  }
})
console.log(soucetKladnych)
