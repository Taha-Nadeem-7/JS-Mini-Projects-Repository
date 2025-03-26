const decreaseBtn=document.getElementById("decreaseBtn");
const restBtn=document.getElementById("restBtn");
const increaseBtn=document.getElementById("increaseBtn");
const countlabel=document.getElementById("countlabel");
let count = 0;

increaseBtn.onclick=function(){
    count++;
    countlabel.textContent=count;
}

decreaseBtn.onclick=function(){
    count--;
    countlabel.textContent=count;
}

restBtn.onclick=function(){
    count=0;
    countlabel.textContent=count;
}