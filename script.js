console.log ("Prepared By Sandesh  ")
let music = new Audio ("music.mp3")
let audioturn = new Audio ("music.mp3")
let gameover = new Audio("music.mp3")
let turn = "X"

// TUrn
const changeTurn = ()=>{
    return turn === "X"? "0": "X"

}       

// Win 
const checkWin = ()=>{


}
//Game Logic 
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.queryselector('.boxtext');
    element.addEventListener('click', (boxtext)=>{
        if(boxtext.innerText === " "){
            boxtext.innerText = turn;
            turn = changeturn();
            audioturn.play();
            checkwin();
            document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;

        }
    })
})
