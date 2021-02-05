let animado = document.querySelectorAll(".animado");

function mostrarScroll() {
    let scrollTop = document.documentElement.scrollTop;
    for (var i = 0; i < animado.length; i++) {
        let alturaAnimado = animado[i].offsetTop;
        if (alturaAnimado - 500 < scrollTop) {
            animado[i].style.opacity = 1;
            animado[i].classList.add("mostrarArriba");
        }
    }
}

window.addEventListener('scroll', mostrarScroll);

/*==start modal==*/

/*id in the modal */
var modal = document.getElementById("modal__container");

/*id in the card*/
var card = document.getElementById("modal__event");

/*==id btn close==*/
var span = document.getElementsByClassName("close")[0];


/*show modal*/
card.onclick = function () {
    modal.style.display = "block";
}

/*close modal*/
span.onclick = function () {
    modal.style.display = "none"
}

/*close modal onclick in the windows*/
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none"
    }
}

