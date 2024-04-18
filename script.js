// Liste des questions et réponses possibles
var questions = [
    {
        question: "Quelle est la capitale de la France ?",
        options: ["Paris", "Berlin", "Londres"]
    },
    {
        question: "Quel est le plus grand océan du monde ?",
        options: ["Pacifique", "Atlantique", "Indien"]
    },
    {
        question: "Quelle est la couleur du ciel par temps clair ?",
        options: ["Bleu", "Rouge", "Vert"]
    }
];

// Fonction pour générer une question aléatoire
function generateQuestion() {
    var randomIndex = Math.floor(Math.random() * questions.length);
    var questionObj = questions[randomIndex];
    document.getElementById('question').innerText = questionObj.question;

    var optionsHTML = '';
    for (var i = 0; i < questionObj.options.length; i++) {
        optionsHTML += '<input type="radio" name="answer" value="' + questionObj.options[i] + '"> ' + questionObj.options[i] + '<br>';
    }
    document.getElementById('options').innerHTML = optionsHTML;
}

// Événement de soumission du formulaire
document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var answer = document.querySelector('input[name="answer"]:checked');
    if (answer) {
        if (answer.value === 'Paris') {
            document.getElementById('result').innerText = 'Bonne réponse ! Tu as gagné 30.000 francs !';
        } else {
            document.getElementById('result').innerText = 'Mauvaise réponse ! Essaie encore.';
        }
        // Génère une nouvelle question
        generateQuestion();
    } else {
        document.getElementById('result').innerText = 'Veuillez sélectionner une réponse.';
    }
});

// Génère une question au chargement de la page
generateQuestion();
