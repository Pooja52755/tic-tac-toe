
const boxes=document.querySelectorAll(".box")
const msgconta=document.querySelector(".msgconta")
const restart=document.querySelector(".restart");
const newb=document.querySelector("#new");
let arr=[1,2,3,4,5,6,7,8,9];

let turno=true;
const winpat=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let o=0;
boxes.forEach((box)=>{    
    box.addEventListener("click",()=>{
    
        if (turno){
            box.innerText="o";
            turno=false;        
        }else{
            box.innerText="x";
            turno=true;            
        }
        box.disabled=true;  
        checkwinner();
    });
    });
    const disableboxes=()=>{
        for(let box of boxes){
            box.disabled=true;
        }
    }
    const ShowWinner=(winner)=>{
        
        
        msg.innerText=`Congratulations,Winner is ${winner}`;
        msgconta.classList.remove("hide");
        
    disableboxes();}
    
const checkwinner=()=>{
for(pattern of winpat){
    let pos1=boxes[pattern[0]].innerText;
    let pos2=boxes[pattern[1]].innerText;
    let pos3=boxes[pattern[2]].innerText;
    if (pos1!="" && pos2!="" && pos3!=""){
        if(pos1===pos2 && pos2===pos3){
          
            ShowWinner(pos1);
        }
        }
    }}
    const enableBoxes=()=>{
        for(let box of boxes){
            box.disabled=false;
            box.innerText="";
        }
    }
newb.addEventListener("click",()=>{    
    turno=true;
    enableBoxes();
    msgconta.classList.add("hide")});
restart.addEventListener("click",()=>{
    turno=true;
    enableBoxes();
    msgconta.classList.add("hide")});

