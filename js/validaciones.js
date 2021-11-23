'use strict'

console.log('Cargado JS')

//parte de código obtenido de https://es.stackoverflow.com/questions/72141/obtener-el-valor-del-select-seleccionado-javascript-dom/72146
//genera un select con los modulos del ciclo debajo
function selector() {
    let select = document.getElementById('sCurso') //selecciona el elemento
    select.addEventListener('change', //se crea un avento que se ejecuta al cambiar de opcion
        function () {
            var selectedOption = this.options[select.selectedIndex]
            console.log(selectedOption)
            if (selectedOption.value == "1DAW") {
                select.insertAdjacentHTML('afterend', '<br /> <select class="modulo1" type="select">' +
                    '<option value=1>modulos 1 de DAW</option>' +
                    '<option value=2>modulos 1 de DAW</option>' +
                    '</select>')
            }
            else if (selectedOption.value == "2DAW") {
                select.insertAdjacentHTML('afterend', '<br /> <select class="modulo2" type="select">' +
                    '<option value=1DAW>modulos 2 de DAW</option>' +
                    '<option value=1DAW>modulos 2 de DAW</option>' +
                    '</select>'
                )
            }
        });
}

function media() {
    let nums = document.querySelectorAll('p')[3]
    let inputs = nums.querySelectorAll('input')
    console.log(inputs);
}

function cero(evento) {
    let boton = document.getElementById("btnCero")
    let nums = document.querySelectorAll('p')[3]
    nums.childNodes[0].value = 0
    nums.childNodes[1].value = 0
    nums.childNodes[2].value = 0
    console.log(nums.childNode[1].value);
}

function matriculaError() { //Si funciona pero no se ve en la pantalla, aunque sí en el inspector
    let regExp = /^([0-9]{4}-[A-Z]{3}|[A-Z]{2}-([0-9]{4})-([A-Z]{2}|[A-Z]))$"/
    let error = document.getElementById('divError') //encuentra el divError
    let matriculaError = document.getElementById('iMatricula') //selecciona su valor. No se pone "value" o no funciona
    error.innerHTML = "<p>Matricula erronea</p>"
    if (regExp.test(matriculaError)) {
        error.innerHTML = "<p>Matricula erronea</p>" //si el valor es erroneo genera un mensaje en el divError
    }
}



selector()