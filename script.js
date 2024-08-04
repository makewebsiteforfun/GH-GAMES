document.addEventListener('DOMContentLoaded', () => {
    const icons = document.querySelectorAll('.icon');
    icons.forEach(icon => {
        icon.addEventListener('click', startGame);
    });
});

function startGame(event) {
    const gameType = event.currentTarget.id;
    const playerName = prompt("Please enter your name:");
    if (playerName) {
        switch (gameType) {
            case 'multiplication':
                playMultiplicationGame(playerName);
                break;
            case 'summation':
                playSummationGame(playerName);
                break;
            case 'fractions':
                playFractionsGame(playerName);
                break;
        }
    }
}

function playMultiplicationGame(playerName) {
    let correct = 0;
    let wrong = 0;
    for (let i = 0; i < 15; i++) {
        const num1 = Math.floor(Math.random() * 12) + 1;
        const num2 = Math.floor(Math.random() * 12) + 1;
        const answer = prompt(`What is ${num1} x ${num2}?`);
        if (parseInt(answer) === num1 * num2) {
            correct++;
            alert('Correct!');
        } else {
            wrong++;
            alert(`Wrong! The correct answer is ${num1 * num2}`);
        }
    }
    alert(`${playerName}, you got ${correct} correct answers and ${wrong} wrong answers.`);
}

function playSummationGame(playerName) {
    let correct = 0;
    let wrong = 0;
    for (let i = 0; i < 15; i++) {
        const num1 = Math.floor(Math.random() * 100) + 1;
        const num2 = Math.floor(Math.random() * 100) + 1;
        const answer = prompt(`What is ${num1} + ${num2}?`);
        if (parseInt(answer) === num1 + num2) {
            correct++;
            alert('Correct!');
        } else {
            wrong++;
            alert(`Wrong! The correct answer is ${num1 + num2}`);
        }
    }
    alert(`${playerName}, you got ${correct} correct answers and ${wrong} wrong answers.`);
}

function playFractionsGame(playerName) {
    let correct = 0;
    let wrong = 0;
    for (let i = 0; i < 15; i++) {
        const num1 = Math.floor(Math.random() * 10) + 1;
        const num2 = Math.floor(Math.random() * 10) + 1;
        const answer = prompt(`What is ${num1}/${num2}? (Provide your answer as a decimal)`);
        if (parseFloat(answer).toFixed(2) === (num1 / num2).toFixed(2)) {
            correct++;
            alert('Correct!');
        } else {
            wrong++;
            alert(`Wrong! The correct answer is ${(num1 / num2).toFixed(2)}`);
        }
    }
    alert(`${playerName}, you got ${correct} correct answers and ${wrong} wrong answers.`);
    
}