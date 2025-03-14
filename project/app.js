let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelectorAll("#reset");

let newGameBtn=document.querySelector("#new-btn");

let msgContainer = document.querySelector(".msg-container");

let msg=document.querySelector("#msg");




let turnO=true;//payer x,payer y
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=> {
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO===true){//playerO
            box.innerText="O";
            turnO=false;


        }
        else{//PlayerX
            box.innerText="X";
            turnO =true;
        }
        box.disabled=true;

        checkWinner();
    });
});

const resetGame=() => {
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");


};


const disableBoxs=() =>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled=false;
        box.innerText = "";
    }
};

const showWinner=(winner) => {
   
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
};





const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1Val !="" && pos2Val !="" && pos3val !=""){
            if(pos1Val===pos2Val && pos2Val===pos3val && pos1Val===pos3val){
                console.log("Winner",pos1Val);

                
                showWinner(pos1Val);

            }
        }

    }
}

newGameBtn.addEventListener("click",resetGame);
resetGame.addEventListener("click",resetGame);