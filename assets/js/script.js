//Variables

const ele = document.getElementById("ele1");


//Function

function pintar(color){
    ele.style.backgroundColor = color
};

//Events
ele.addEventListener("default",pintar("green"));
ele.addEventListener("click", () => {
    pintar("yellow");
});