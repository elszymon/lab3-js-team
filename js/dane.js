
//dane zespołu
const zespol = [
  ['Gromelski', 'Szymon', '1', '21600@student.ans-elblag.pl', '21600'], // Osoba A
  ['???', '???', '?', '???', '???'] // Osoba B (uzupełni sama)
];

const pola = ['nazwisko', 'imie', 'grupa', 'email', 'indeks'];
for (let i = 0; i < pola.length; i++) {
  document.getElementById(pola[i]).textContent = zespol[0][i] + ', ' + zespol[1][i];
}

//pętle z tabelami
const polowa = Math.floor(jedzenie.length / 2);

let k = 0;
let tekstWhile = '';
while (k < polowa) {
  tekstWhile += jedzenie[k] + ', ';
  k++;
}
document.getElementById('while').textContent = 'while: ' + tekstWhile;

let tekstFor = '';
for (let m = polowa; m < jedzenie.length; m++) {
  tekstFor += jedzenie[m] + ', ';
}
document.getElementById('for').textContent = 'for: ' + tekstFor;

//pętla
function policzZnaki(tekst) {
  return tekst.length;
}

let tekstZnaki = '';
for (const el of programowanie) {
  tekstZnaki += el + ' (' + policzZnaki(el) + '), ';
}
document.getElementById('znaki').textContent = tekstZnaki;

//pokazanie danych
function pokazDane() {
  const tekst =
    'Nazwisko: ' + document.getElementById('nazwisko').textContent + '\n' +
    'Imię: ' + document.getElementById('imie').textContent + '\n' +
    'Grupa: ' + document.getElementById('grupa').textContent + '\n' +
    'E-mail: ' + document.getElementById('email').textContent + '\n' +
    'Indeks: ' + document.getElementById('indeks').textContent;
  alert(tekst);
}
document.getElementById('pokazDane').addEventListener('click', pokazDane);
