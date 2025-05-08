let gameSeq = [];
let userSeq = [];
let gameOvermusic = new Audio('gameover.mp3');
let scoreBord=document.querySelector('.voreBord')
let scor=document.querySelector(".scorbor p")

let btnBox = document.querySelectorAll('.box');
let btnArray = Array.from(btnBox);
let btns = ['red', 'green', 'blue', 'yellow'];

let gameStart = false;
let levele = 0;
let h3 = document.querySelector('h3');
document.addEventListener("keypress", function () {
    scoreBord.style.display="none";
    if (gameStart == false) {
        gameStart = true;
        levelup()
        btnGameuser();
    }

})

function flesBtn(btn) {
    btn.classList.add('flesh');
    setTimeout(function () {
        btn.classList.remove('flesh');
    }, 100)

}
function levelup() {
    userSeq = []
    levele++;
    h3.innerText = `levele ${levele}`;
    let renIndex = Math.floor(Math.random() * 4);
    let randColor = btns[renIndex];
    let btn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    flesBtn(btn);
}
function chackAns(idx) {
    if (gameSeq[idx] === userSeq[idx]) {
        if (gameSeq.length == userSeq.length) {
            setTimeout(function () {
                levelup();
            }, 1000)
        }
    }
    else {
        gameOvermusic.play();
        h3.innerHTML = `Game Over! Your Score:${levele} <br> Press Any Key To Start.`;
        document.querySelector('main').style.backgroundColor = 'red';
        setTimeout(function () {
        document.querySelector('main').style.backgroundColor = 'rgb(30, 29, 29)';
        }, 120)
        scoreBord.style.display="block";
        scor.innerHTML=`your score: ${levele}`;
        gameReset();
    }

}
function btnPress() {
    let bt = this;
    flesBtn(bt)
    let userColor = bt.getAttribute('id');
    userSeq.push(userColor);
    console.log(userSeq);
    
    chackAns(userSeq.length - 1);


}

function btnGameuser() {
    btnArray.forEach(function (btn) {
        btn.addEventListener('click', btnPress)

    })
}

function gameReset() {
    gameStart = false;
    gameSeq = [];
    userSeq = [];
    levele = 0;

}
