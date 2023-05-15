// Establecer la fecha del Día de Arequipa
var arequipaDay = new Date(2023, 07, 15);

// Función para actualizar la cuenta atrás
function updateCountdown() {
  var today = new Date();
  console.log(arequipaDay);
  //console.log(today);
  var secondsRemaining = (arequipaDay - today) / 1000;

  var difference = Math.floor((arequipaDay - today) / 1000);
  var seconds = difference % 60;
  difference = Math.floor(difference / 60);
  var minutes = difference % 60;
  difference = Math.floor(difference / 60);
  var hours = difference % 24;
  var days = Math.floor(difference / 24);
    
  // Crear un mensaje con la cuenta atrás
  var message = 'Faltan ' + days + ' días, ';
  message += hours + ' horas, ';
  message += minutes + ' minutos y ';
  message += seconds + ' segundos para el Día de Arequipa.';
  
  // Actualizar el elemento HTML con la cuenta atrás
  document.querySelector('#countdown').innerHTML = message;
}

// Llamar a la función inicialmente para mostrar la cuenta atrás
updateCountdown();

// Actualizar la cuenta atrás cada segundo
setInterval(updateCountdown, 1000);