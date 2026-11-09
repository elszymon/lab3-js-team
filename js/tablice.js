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
document.write('<p>Pierwszy element to <strong>');
document.write(programowanie[0] + '</strong></p>');
document.write('<p>Ostatni element to <strong>');
document.write(programowanie[programowanie.length - 1] + '</strong></p>');

programowanie.unshift('TypeScript');
document.write('<p>Po unshift pierwszy element to <strong>' + programowanie[0] + '</strong></p>');
programowanie.unshift('TypeScript');
document.write('<p>Po unshift pierwszy element to <strong>' + programowanie[0] + '</strong></p>');
      
const usunietyPop = programowanie.pop();
const usunietyShift = programowanie.shift();
document.write('<p>Usunięto pop(): ' + usunietyPop + ', shift(): ' + usunietyShift + '</p>');
document.write('<p>W tablicy zostało: ' + programowanie.join(', ') + '</p>');
//Pokazało undefined
