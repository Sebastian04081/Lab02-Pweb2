/*
*Esta función toma un número que representa un día de la semana y devuelve su nombre.
*/
function getDayName(day) {
    const days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    return days[day];
}

/*
*
*/
function displayDayName() {
    const today = new Date().getDay();
    const dayName = getDayName(today);
    console.log(dayName);
    document.querySelector("#day").textContent = dayName;
}