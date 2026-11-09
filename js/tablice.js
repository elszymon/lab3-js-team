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

const usunietyPop = programowanie.pop();
const usunietyShift = programowanie.shift();
document.write('<p>Usunięto pop(): ' + usunietyPop + ', shift(): ' + usunietyShift + '</p>');
document.write('<p>W tablicy zostało: ' + programowanie.join(', ') + '</p>');

//Pokazało undefined

const nowaDlugosc = jedzenie.unshift('nowy12', 'nowy13');
console.log(nowaDlugosc);

document.write('<p>Tablica: ' + jedzenie.join(', ') + ' (elementów: ' + jedzenie.length + ')</p>');
document.write('<p>Czy tablica zawiera "Film A"? ' + jedzenie.includes('Film A') + ', pozycja: ' + jedzenie.indexOf('Film A') + '</p>');
const oceny = [
  ['JavaScript', 5],
  ['Git', 4],
  ['HTML', 5]
];
console.log(oceny[1]);
console.log(oceny[1][0]);
console.log(oceny[1][1]);
document.write('<p>Drugi przedmiot: ' + oceny[1][0] + ', ocena: ' + oceny[1][1] + '</p>');
