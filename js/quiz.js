const questions = [
  ['Ile księżyców ma Ziemia?', 1],
  ['Ile księżyców ma Mars?', 2],
  ['Ile księżyców ma Wenus?', 0]
];

function startQuiz() {
  let score = 0;
  const bledne = [];

  for (const q of questions) {
    const answer = prompt(q[0], '');

    if (answer !== null && answer.trim() !== '' && Number(answer) === q[1]) {
      alert('Prawidłowa odpowiedź!');
      score++;
    } else {
      alert('Błąd! Prawidłowa odpowiedź to: ' + q[1]);
      bledne.push(q[0]);
    }
  }

  document.getElementById('wynik').textContent = 'Wynik: ' + score + '/' + questions.length;

  const ul = document.getElementById('zleOdpowiedzi');
  ul.innerHTML = '';
  for (const pytanie of bledne) {
    const li = document.createElement('li');
    li.textContent = 'Błędna odpowiedź na pytanie: ' + pytanie;
    ul.append(li);
  }
}

document.getElementById('startQuiz').addEventListener('click', startQuiz);
```[cite: 19, 20]
