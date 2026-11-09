const numForms = document.forms.length;
const numImages = document.images.length;
const numLinks = document.links.length;
const numP = document.querySelectorAll('#projekt1 p').length;

console.log('Formularze:', numForms, 'Obrazki:', numImages, 'Linki:', numLinks, 'Akapity p w #projekt1:', numP);

const licznik = document.getElementById('licznik');
licznik.innerHTML = `Liczba formularzy na stronie: ${numForms}, obrazków: ${numImages}, linków: ${numLinks}, a akapitów w sekcji projekt1: ${numP}.`;

const naglowek = document.querySelector('#dom h3');
naglowek.textContent = 'Zadanie 4 - Zmodyfikowany DOM';
naglowek.classList.add('text-success');

const lista = document.getElementById('lista');
[numForms, numImages, numLinks].forEach(val => {
  const li = document.createElement('li');
  li.textContent = 'Wartość elementu: ' + val;
  lista.append(li);
});
