
let current = 0;
let score = 0;

const questions = [
 { q: "HTML stands for?", a: ["Hyper Text Markup Language", "High Text"], c: 0 },
 { q: "CSS used for?", a: ["Styling", "Logic"], c: 0 }
];

function startQuiz(){
 showQuestion();
}

function showQuestion(){
 const quiz = document.getElementById("quiz");
 quiz.innerHTML = `
 <h2>${questions[current].q}</h2>
 <button onclick="check(0)">${questions[current].a[0]}</button>
 <button onclick="check(1)">${questions[current].a[1]}</button>
 `;
}

function check(i){
 if(i === questions[current].c) score++;
 current++;
 if(current < questions.length) showQuestion();
 else document.getElementById("quiz").innerHTML = `<h2>Score: ${score}</h2>`;
}
