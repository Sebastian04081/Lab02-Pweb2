const numberTable = [];

// Función para crear la tabla dinámicamente
function createTable() {
    const numValues = document.querySelector('#num').value;
    
    console.log(numValues);

    for (let i = 0; i < numValues; i++) {
        numberTable[i] = Math.floor(Math.random() * 90);
    }

    console.log(numberTable);

}

// Función para calcular la suma de los valores ingresados
function calculateSum() {

}

function checkKey(event) {
    if (event.keyCode === 13) {
        createTable();
    }
}