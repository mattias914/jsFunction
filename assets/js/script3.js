//Element

const father = document.getElementById("father");
const primerDiv = document.getElementById("primerDiv"); 
const segundoDiv = document.getElementById("segundoDiv"); 
const tercerDiv = document.getElementById("tercerDiv"); 
const cuartoDiv = document.getElementById("cuartoDiv"); 
const key = document.getElementById("key");

//function

function pintar(elemento){
    elemento.style.backgroundColor = "black";
};

//Events

primerDiv.addEventListener("click", function(){
    pintar(primerDiv);
});

segundoDiv.addEventListener("click", function(){
    pintar(segundoDiv);
});

tercerDiv.addEventListener("click", function(){
    pintar(tercerDiv);
});

cuartoDiv.addEventListener("click", function(){
    pintar(cuartoDiv); 
});

document.addEventListener("keydown", function(event){
    if(event.key === "a"){
        key.style.backgroundColor = "pink";
    }else if(event.key === "s"){
        key.style.backgroundColor = "orange";
    }else if(event.key === "d"){
        key.style.backgroundColor = "skyblue";
    }
});

document.addEventListener("keydown", function(event){
    if(event.key === "q"){
        const nuevoDiv = document.createElement("div");
        nuevoDiv.style.backgroundColor = "purple";
        nuevoDiv.classList.add("son");
        father.appendChild(nuevoDiv);
    }else if(event.key === "w"){
        const nuevoDiv = document.createElement("div");
        nuevoDiv.style.backgroundColor = "grey";
        nuevoDiv.classList.add("son");
        father.appendChild(nuevoDiv);
    }else if(event.key === "e"){
        const nuevoDiv = document.createElement("div");
        nuevoDiv.style.backgroundColor = "brown";
        nuevoDiv.classList.add("son");
        father.appendChild(nuevoDiv);
    }
});