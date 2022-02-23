let btn = document.querySelector('#atMain')
let blackJackBtn = document.querySelector('#blackJackBtn')
let rouletteBtn = document.querySelector('#rouletteBtn')
function notify() {
 let update = document.querySelector('#notice')
update.innerHTML = `<p> You are already on the main page </p>`
}


function blackJacknotify() {
    window.window.open('./blackJack.html', '_self');
    };    
function roulettenotify() {
    window.window.open('./roulette.html', '_self');
    };    
rouletteBtn.addEventListener("click", roulettenotify)
blackJackBtn.addEventListener("click", blackJacknotify)
btn.addEventListener("click", notify)