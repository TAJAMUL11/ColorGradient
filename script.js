const input1 = document.getElementById('color1');
var h3 = document.getElementById('css');
const input2 = document.getElementById('color2');
const body = document.getElementById('gradient');

let ColorGradient = (e)=>{
    body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")"; 
    h3.style.fontSize = "15px";
    h3.textContent= body.style.background +  ';';
}
input1.addEventListener("input", ColorGradient);
input2.addEventListener("input", ColorGradient);

