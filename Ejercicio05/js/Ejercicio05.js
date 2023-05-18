const numberTable = [];

// Función para crear la tabla dinámicamente
function createTable() {
    const numValues = document.querySelector('#num').value;

    document.querySelector("#input").innerHTML = `<table id="valueTable"></table>`;

    for (let i = 0; i < numValues; i++) {
        numberTable[i] = Math.floor(Math.random() * 90);
        document.querySelector("#valueTable").innerHTML += "<tr>" + numberTable[i] + "</tr>";
    }

    document.querySelector("#valueTable").innerHTML += "<br/><button id = \"buttonsuma\" onclick = \"calculateSum()\">Sumar</button>";
}

// Función para calcular la suma de los valores ingresados
function calculateSum() {
    var suma = 0;
	
    for (let j = 0; j < numberTable.length; j++) {
   	    suma += numberTable[j];
    }

    document.querySelector("#buttonsuma").outerHTML = "<h3>La suma de los numeros es: " + suma + "</h3>";
}

function checkKey(event) {
    if (event.keyCode === 13) {
        createTable();
    }
}