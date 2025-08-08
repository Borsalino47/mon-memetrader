document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('login-btn');
    const usernameInput = document.getElementById('username');
    const professionSelect = document.getElementById('profession');
    const loginContainer = document.getElementById('login-container');
    const gameContainer = document.getElementById('game-container');

    loginBtn.addEventListener('click', () => {
        const username = usernameInput.value.trim();
        const profession = professionSelect.value;

        if (username === '' || profession === '') {
            alert('Veuillez entrer votre pseudo et sélectionner votre métier.');
            return;
        }

        // Cacher la page de connexion et afficher la page de jeu
        loginContainer.style.display = 'none';
        gameContainer.style.display = 'block';

        // Initialiser le jeu
        initializeGame(username, profession);
    });

    const playerNameSpan = document.getElementById('player-name');
    const scoreSpan = document.getElementById('score');
    const timerSpan = document.getElementById('timer');
    const wasteItemDiv = document.getElementById('waste-item');
    const bins = document.querySelectorAll('.bin');

    let score = 0;
    let timer = 60;
    let timerInterval;
    let currentWaste;

    const wasteTypes = [
        { name: 'Bouteille', type: 'verre', color: '#c8e6c9' },
        { name: 'Journal', type: 'papier', color: '#bbdefb' },
        { name: 'Bouteille en plastique', type: 'plastique', color: '#fff9c4' },
        { name: 'Trognon de pomme', type: 'organique', color: '#d7ccc8' },
        { name: 'Canette', type: 'metal', color: '#cfd8dc' },
        { name: 'Bocal', type: 'verre', color: '#c8e6c9' },
        { name: 'Carton', type: 'papier', color: '#bbdefb' },
        { name: 'Sac plastique', type: 'plastique', color: '#fff9c4' },
        { name: 'Épluchures', type: 'organique', color: '#d7ccc8' },
        { name: 'Conserve', type: 'metal', color: '#cfd8dc' },
    ];

    function initializeGame(username, profession) {
        playerNameSpan.textContent = `${username} (${profession})`;
        score = 0;
        timer = 60;
        updateScore(0);
        startTimer();
        generateWaste();

        // Drag and drop logic
        wasteItemDiv.addEventListener('dragstart', dragStart);

        bins.forEach(bin => {
            bin.addEventListener('dragover', dragOver);
            bin.addEventListener('dragenter', dragEnter);
            bin.addEventListener('dragleave', dragLeave);
            bin.addEventListener('drop', drop);
        });
    }

    function updateScore(points) {
        score += points;
        scoreSpan.textContent = score;
    }

    function startTimer() {
        timerInterval = setInterval(() => {
            timer--;
            timerSpan.textContent = timer;
            if (timer <= 0) {
                endGame();
            }
        }, 1000);
    }

    function generateWaste() {
        currentWaste = wasteTypes[Math.floor(Math.random() * wasteTypes.length)];
        wasteItemDiv.textContent = currentWaste.name;
        wasteItemDiv.style.backgroundColor = currentWaste.color;
        wasteItemDiv.dataset.wasteType = currentWaste.type;
    }

    function endGame() {
        clearInterval(timerInterval);
        alert(`Temps écoulé ! Votre score final est de ${score}.`);
        loginContainer.style.display = 'block';
        gameContainer.style.display = 'none';
    }

    // Drag & Drop Functions
    function dragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.dataset.wasteType);
        setTimeout(() => {
            e.target.style.display = 'none';
        }, 0);
    }

    function dragOver(e) {
        e.preventDefault();
    }

    function dragEnter(e) {
        e.preventDefault();
        e.target.classList.add('drag-over');
    }

    function dragLeave(e) {
        e.target.classList.remove('drag-over');
    }

    function drop(e) {
        e.target.classList.remove('drag-over');
        const droppedWasteType = e.dataTransfer.getData('text/plain');
        const correctBinType = e.target.dataset.binType;

        if (droppedWasteType === correctBinType) {
            updateScore(10);
            e.target.classList.add('correct-drop');
        } else {
            updateScore(-5);
            e.target.classList.add('incorrect-drop');
        }

        setTimeout(() => {
            e.target.classList.remove('correct-drop', 'incorrect-drop');
        }, 500);

        wasteItemDiv.style.display = 'flex';
        generateWaste();
    }
});
