const letters = document.querySelectorAll('.box');
const pieces = document.querySelectorAll('.piece');
const body = document.querySelectorAll(".white");
const docbody = document.querySelector("body");

function coloRandom(){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`
}

function bgColoRandom(){
    let r = Math.floor(Math.random()*10);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`
}

function makeBody(color){
    for(let boxes of body){boxes.style.backgroundColor = color}
}

docbody.addEventListener("click",function(event){
    makeBody(bgColoRandom());
    console.log(event.pageX);
})

boxArray = Array.from(letters)
let targetPiece = document.querySelector("img")

function classConvert(boxClass,pieceClass){
    strArray = Array.from(boxClass);
    sFirst = strArray[0];
    sLast = strArray[2];
    return `c${sFirst}${sLast}`
}

function onBoxClick(e,thisClass,targetPiece){
    newClass = e.target.getAttribute("id");
    console.log(newClass);
    pieceClass = classConvert(newClass);
    targetPiece.setAttribute("id",pieceClass);
    //in this function we need to change the parent element's class to match thisClass
}


for(let piece of pieces){
    piece.addEventListener("click",function(event){
        thisClass = event.target.getAttribute("id");
        targetPiece = event.target;
        console.log(thisClass);
        for(let box of boxArray){
            box.addEventListener("click",function(e){
                onBoxClick(e,thisClass,targetPiece)})
        }

    })
}