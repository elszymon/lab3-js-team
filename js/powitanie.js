console.log('powitanie.js: start');
if (userName) { // pomiñ, gdy klikniêto Anuluj
    const powitanie = document.createElement('p');
    powitanie.textContent = 'Æw. 1. Witaj, ' + userName;
    document.getElementById('skrypty').append(powitanie);
}