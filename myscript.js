const main_container = document.querySelector("#main_container");
const btn = document.querySelector("button");
const switch_btn = document.querySelector("#switch_btn");
const red_btn = document.querySelector("#red_btn");
const green_btn = document.querySelector("#green_btn");
const blue_btn = document.querySelector("#blue_btn");

let first_run = true;   //needed to create the default size in first run of the app
let dimension = 16;
let side = 60;
let mode = true;    //variable for ON/OFF painting
let color = "rgb";
let opacity;
let divArray;

btn.addEventListener("click", createGrid);
switch_btn.addEventListener("click", () => switch_mode());
red_btn.addEventListener("click", () => switch_color(red_btn));
green_btn.addEventListener("click", () => switch_color(green_btn));
blue_btn.addEventListener("click", () => switch_color(blue_btn));
rgb_btn.addEventListener("click", () => switch_color(rgb_btn));

createGrid();
first_run = false;

function createGrid(){

    if(!first_run){
    do{
        dimension = Number(prompt("Introduce the dimensions of the grid (lower than 100"));
        
    }while (dimension > 100)
    }

    btn.textContent = `GRID DIMENSION: ${dimension}x${dimension}`;
    main_container.textContent ="";
    divArray = Create2DArray(dimension);
    side = 960/dimension;

    for(let i = 0; i < dimension; i++){
        for(let j = 0; j < dimension; j++){
            
            divArray[i][j] = document.createElement("div");
            divArray[i][j].classList.add("pixels");
            divArray[i][j].addEventListener("mouseover", () => paintDiv(divArray[i][j]));

            divArray[i][j].style.width = `${side}px`;
            divArray[i][j].style.height = `${side}px`;

            main_container.appendChild(divArray[i][j]);
            
        }
    }
}
function paintDiv(element){
    if(mode){
        opacity = getComputedStyle(element).getPropertyValue("opacity");
        console.log(opacity);
        if(opacity > 0){
            opacity -= 0.1;
        }
        if(color === "rgb"){
        element.style.opacity = 1;
        let random = Math.floor(Math.random()*3);
        if (random === 0)
            element.style.background = "red";
        else if (random === 1) 
            element.style.background = "green";
        else if (random === 2)
            element.style.background = "blue";
        }
        else if(color === "red"){
            element.style.background = "red";
            element.style.opacity = `${opacity}`;
        }else if(color === "green"){
            element.style.background = "green";
            element.style.opacity = `${opacity}`;  
        }else if(color === "blue"){
            element.style.background = "blue";
            element.style.opacity = `${opacity}`;
        }
    }
}
function switch_mode(){
    if(mode){
        mode = false;
        switch_btn.textContent = "PAINTING: OFF";
    }
    else{
        mode = true;
        switch_btn.textContent = "PAINTING: ON";
    }
}
function switch_color(src){
    let source = src;
    if(source === rgb_btn){
        color = "rgb";
        red_btn.style.background = "white";
        green_btn.style.background = "white";
        blue_btn.style.background = "white";
        rgb_btn.style.background = "linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)";
    }else if(source === red_btn){
        color = "red";
        red_btn.style.background = "red";
        green_btn.style.background = "white";
        blue_btn.style.background = "white";
        rgb_btn.style.background = "white";
    }else if(source === green_btn){
        color = "green";
        red_btn.style.background = "white";
        green_btn.style.background = "green";
        blue_btn.style.background = "white";
        rgb_btn.style.background = "white";

    }else if(source === blue_btn){
        color = "blue";
        red_btn.style.background = "white";
        green_btn.style.background = "white";
        blue_btn.style.background = "blue";
        rgb_btn.style.background = "white";
    }
}
function Create2DArray(rows) {
    let arr = [];
  
    for (var i=0;i<rows;i++) {
       arr[i] = [];
    }
  
    return arr;
  }