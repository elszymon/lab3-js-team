const zespol = [
  ['Gromelski', 'Szymon', '1', '21600@student.ans-elblag.pl', '21600'], // Osoba A
  ['???', '???', '?', '???', '???'] // Osoba B
];
const nazwiska = zespol[0][0] + ', ' + zespol[1][0];
document.getElementById('nazwisko').textContent = nazwiska;
