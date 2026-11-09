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

const programowanie = [
  'Java', 
  'Python', 
  'C', 
  'Go', 
  'Rust'
];
console.log(programowanie);
console.table(programowanie);

programowanie[5] = 'nowy6'; // przez indeks
console.log(programowanie.length)
jedzenie[programowanie.length] = 'nowy7'; // przez długość
console.log(programowanie.length)
programowanie.push('nowy8', 'nowy9', 'nowy10', 'nowy11'); // metodą push
console.log(programowanie.length)

//Pokazało undefined
