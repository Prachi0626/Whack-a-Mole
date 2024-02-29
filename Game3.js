document.addEventListener("DOMContentLoaded", () => {
    const gameBoard = document.getElementById("gameBoard");
    const scoreValue = document.getElementById("scoreValue");
    let score = 0;

    function createMoleHole() {
        const moleHole = document.createElement("div");
        moleHole.classList.add("mole-hole");
        const mole = document.createElement("div");
        mole.classList.add("mole");

        moleHole.appendChild(mole);
        gameBoard.appendChild(moleHole);

        moleHole.addEventListener("click", () => {
            whackMole(moleHole, mole);
        });

        return moleHole;
    }

    function whackMole(moleHole, mole) {
        if (!mole.classList.contains("up")) return;

        mole.classList.remove("up");
        score++;
        scoreValue.textContent = score;
    }

    function moveMole() {
        const holes = document.querySelectorAll(".mole-hole");
        const randomHole = holes[Math.floor(Math.random() * holes.length)];
        const mole = randomHole.querySelector(".mole");

        mole.classList.add("up");

        setTimeout(() => {
            mole.classList.remove("up");
            if (score < 10) {
                moveMole();
            }
        }, 1000);
    }

    function startGame() {
        score = 0;
        scoreValue.textContent = score;
        gameBoard.innerHTML = "";

        for (let i = 0; i < 9; i++) {
            createMoleHole();
        }

        setTimeout(() => {
            moveMole();
        }, 1000);
    }

    startGame();
});