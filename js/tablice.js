const jedzenie = [
  'kebab',
  'pizza',
  'burger',
  'rosół',
  'pierogi'
];

console.log(jedzenie);
console.table(jedzenie);

jedzenie[5] = 'nowy6'; // przez indeks
console.log(jedzenie.length)
jedzenie[jedzenie.length] = 'nowy7'; // przez długość
console.log(jedzenie.length)
jedzenie.push('nowy8', 'nowy9', 'nowy10', 'nowy11'); // metodą push
console.log(jedzenie.length)



//Pokazało undefined
