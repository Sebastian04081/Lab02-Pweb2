/*
* Esta función toma un número que representa un día de la semana y devuelve su nombre.
*/
function getDayName(day) {
    const days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    return days[day];
}

/*
* Esta función muestra el nombre del día de la semana actual en un elemento HTML con el id "day".
* La función obtiene el número del día de la semana actual utilizando el objeto Date de JavaScript
* y lo convierte en el nombre correspondiente utilizando la función getDayName.
*/
function displayDayName() {
    const today = new Date().getDay();
    const dayName = getDayName(today);
    console.log(dayName);
    document.querySelector("#day").textContent = dayName;
}