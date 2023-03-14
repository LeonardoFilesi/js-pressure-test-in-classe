// Chiedere 10 volte all'utente di inserire un numero

const userNumber1 = prompt("Benvenuto utente! Scrivi un numero");
// per debug
console.log(userNumber1);

const userNumber2 = prompt("Adesso scrivi un altro numero");
// per debug
console.log(userNumber2);

const userNumber3 = prompt("Manca poco! Scrivi un terzo numero");
// per debug
console.log(userNumber3);

const userNumber4 = prompt("Ora un quarto numero");
// per debug
console.log(userNumber4);

const userNumber5 = prompt("Manca l'ultimo numero!!!");
// per debug
console.log(userNumber5);

let finalNumber = (userNumber1 + userNumber2 + userNumber3 + userNumber4 + userNumber5);
console.log(`Ecco!!! La somma totale è ${finalNumber}`);