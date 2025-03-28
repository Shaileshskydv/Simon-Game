let gameSeq=[];
let UserSeq=[];

let btns = ["yellow","red","green","purple"];


let level =0;

let h2 = document.querySelector("h2");

let started = false;

document.addEventListener("keypress", function() {
    if (!started) {
        console.log("game is started");
        started = true;

        LevelUp();
    }
});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },100);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },100);
}

function LevelUp(){
    UserSeq=[];
    level++;
    h2.textContent = `Level ${level}`;

    let randInd = Math.floor(Math.random() * 4);
    let randColor = btns[randInd];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.lof(randInd);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameflash(randBtn);
}

function checkAns(idx){
   if(UserSeq[idx] == gameSeq[idx]){
        if(UserSeq.length==gameSeq.length)
            setTimeout(LevelUp,1000);
   }else{
    h2.innerHTML=`Game Over! Your Score Was <b> ${level} </b> <br> Press Any Key to Start.`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
    },150);

    
    reset();
   }
}

function btnpress(){
   let btn = this;
   userflash(btn);

   userColor = btn.getAttribute("id");
   
   UserSeq.push(userColor);
   console.log(UserSeq);

   checkAns(UserSeq.length-1);
};

let allbtn = document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",btnpress);
} 


function reset(){
    started = false;
    gameSeq = [];
    UserSeq = [];
    level = 0;

}