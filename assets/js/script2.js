const primerDiv = document.getElementById("primerDiv"); 
const segundoDiv = document.getElementById("segundoDiv"); 
const tercerDiv = document.getElementById("tercerDiv"); 
const cuartoDiv = document.getElementById("cuartoDiv"); 

//function

function pintar(elemento){
    elemento.style.backgroundColor = "black";
};

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