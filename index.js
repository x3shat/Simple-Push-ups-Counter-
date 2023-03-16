let count=0;
let reset=0;
let countEl=document.getElementById("count-el")
let saveEl=document.getElementById("prev")

function increment(){
    count+=1
    countEl.textContent=count;
}

function save(){
    let countstr=count+" - "
    saveEl.textContent += countstr
    countEl.textContent=0
    count=0
}