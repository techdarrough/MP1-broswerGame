let btn = document.querySelector('#atMain')


function notify() {
 let update = document.querySelector('#notice')
update.innerHTML = `<p> You are already on the main page`
}
btn.addEventListener("click", notify)