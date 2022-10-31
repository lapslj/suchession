const letters = document.querySelectorAll('.box');

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