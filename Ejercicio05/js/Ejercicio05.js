const numberTable = [];

// Función para crear la tabla dinámicamente
function createTable() {
    const numValues = document.querySelector('#num').value;
    
    console.log(numValues);

    document.querySelector("#input").innerHTML = `<table id="valueTable"></table>`;

    for (let i = 0; i < numValues; i++) {
        numberTable[i] = Math.floor(Math.random() * 90);
        document.querySelector("#valueTable").innerHTML += "<tr>" + numberTable[i] + "</tr>";
    }

    console.log(numberTable);

    document.querySelector("#valueTable").innerHTML += "<br/><button id = \"buttonsuma\" onclick = \"calculateSum()\">Sumar</button>";
}

// Función para calcular la suma de los valores ingresados
function calculateSum() {

}

function checkKey(event) {
    if (event.keyCode === 13) {
        createTable();
    }
}