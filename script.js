let ui=document.querySelector(".ui");
let rock=document.querySelector(".rock");
let paper=document.querySelector(".paper");
let scissors=document.querySelector(".scissors");
let result=document.querySelector(".result")

function roundPlay(playerPick) {
    console.log("juego lanzado");
    result.textContent="";
    let picks=["rock", "paper", "scissors"];
    let num=Math.floor(Math.random()*3);
    const machinePick=picks[num];
    if (playerPick==machinePick){
        result.textContent="It's a tie!";
    }
    if((playerPick=="rock"&&machinePick=="paper")||
        (playerPick=="paper"&&machinePick=="scissors")||
        (playerPick=="scissors"&&machinePick=="rock"))
        {
        result.textContent="Player looses! machine picked "+machinePick;
    }
    else if((playerPick=="rock"&&machinePick=="scissors")||
            (playerPick=="scissors"&&machinePick=="paper")||
            (playerPick=="paper"&&machinePick=="rock"))
        {
        result.textContent="Player Wins! machine picked "+machinePick;
    }      
}

rock.addEventListener("click",()=> roundPlay("rock"));
paper.addEventListener("click",()=>roundPlay("paper"));
scissors.addEventListener("click",()=>roundPlay("scissors"));