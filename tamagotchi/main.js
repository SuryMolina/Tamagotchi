const button_name = document.querySelector("#click-name")
const tittle_name = document.querySelector("#name")
const input_name = document.querySelector("#newNam")
let hunger = 0;
let health = 100;
const barra_hunger = document.querySelector(".progress-bar-hunger")
const barra_health = document.querySelector(".progress-bar-health")
const button_feed = document.querySelector("#feed-button")
const button_clean = document.querySelector("#clean-button")
const button_play = document.querySelector("#play-button")
const imageT = document.querySelector(".img")
button_name.addEventListener("click", function() {
    tittle_name.innerHTML = input_name.value;
});

let intervaloHunger =  setInterval( function() {
    hunger = hunger + 10;
    if (hunger > 100) {
         hunger = 100;
         clearInterval();
    }
    updatehunger()
}, 2000);

let intervaloHealth = setInterval(function() {
    health = health - 5;
    if (health < 0) {
        health = 0;
        clearInterval();
    }
    updatehealth()
}, 2000);

button_feed.addEventListener("click", function() {
    hunger= hunger - 10;
    if (hunger < 0) {
        hunger = 0;
    }
    updatehunger()
});

function updatehunger(){
    barra_hunger.style.width = hunger + "%";
    if (hunger <=50) {
        barra_hunger.style.width = hunger + "%";
        barra_hunger.style.backgroundColor = "green";
    }
    else if(hunger > 50 && hunger <= 80){
        barra_hunger.style.width = hunger + "%";
        barra_hunger.style.backgroundColor = "yellow";
    }
    else if(hunger > 80){
        barra_hunger.style.width = hunger + "%";
        barra_hunger.style.backgroundColor = "red";
    } 
}

button_clean.addEventListener("click", function() {
    health= health + 10;
    if (health > 100) {
        health = 100;
    }
    updatehealth()
});

function updatehealth(){
    barra_health.style.width = hunger + "%";
    if (health <=20) {
        barra_health.style.width = health + "%";
        barra_health.style.backgroundColor = "red";
    }
    else if(health > 21 && health <= 50){
        barra_health.style.width = health + "%";
        barra_health.style.backgroundColor = "yellow";
    }
    else if(health > 51){
        barra_health.style.width = health + "%";
        barra_health.style.backgroundColor = "green";
    }
}

button_play.addEventListener("click", function() {
    health = health -5;
    hunger = hunger +5;
    if (health < 0) {
        health = 0
    }
    if (hunger > 100) {
        hunger = 100
    }
    updatehealth()
    updatehunger()
})

// function updateImage(){
//     if(health > 50){
//         imageT.style.backgroundImage = "url(./img/feliz.webp)";
//     }
//     else if(health > 20 && health <=50){
//         imageT.style.backgroundImage = "url(./img/triste.webp)";
//     }
//     else if(health == 0){
//         imageT.style.backgroundImage = "url(./img/muriendo.webp)";
//     }


// }
function updatehealth(){
    barra_health.style.width = health + "%";
    if(health > 51){
        barra_health.style.width = health + "%";
        barra_health.style.backgroundColor = "green";
        imageT.src = " /img/feliz.webp";
     }
    else if(health > 21 && health <= 50 ){
        barra_health.style.width = health + "%";
        barra_health.style.backgroundColor="yellow";
        imageT.src = "/img/tristee.gif";

       
    }
    else if(health <= 20 && health > 0 ){
        barra_health.style.width = health + "%";
        barra_health.style.backgroundColor="red";
        imageT.src = "/img/muriendo.webp";     
    }
    else if(health <= 0) {
        imageT.src = "/img/dead.gif"
    }
}
