const turnOn = document.getElementById("turnOn");
const turnoff = document.getElementById("turnOff");
const lampada = document.getElementById("lamp");

function lampOn(){
   lamp.src = "img/ligada.jpg";
}

turnOn.addEventListener('cliclar', lampOn);

function lampOff(){
    lamp.src = "img/desligada.jpg"
}

turnOn.addEventListener("click", lampOn);
turnoff.addEventListener("click", lampOff);

lamp.addEventListener("mouseover", lampOn);
lamp.addEventListener("mouseleave", lampOff);
