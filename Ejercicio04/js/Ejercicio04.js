// Función para obtener el código de la sesión de Google Meet a partir de la URL ingresada
function getCode() {
    // Obtiene el valor del input con el URL de la sesión
	const url = document.querySelector("#url").value;
    console.log(url);

    // Verifica si el campo de URL está vacío
    if (url === "") {
        alert("Por favor, ingrese la URL de la sesión.");
        return;
    }

    // Dividir la cadena del URL en la primera aparición del separador de la cadena de consulta (?)
    // https://meet.google.com/pxg-cvfx-don?pli=1&authuser=0
    const codeWithQueryParams = url.split("?")[0];

    // Dividir la cadena de la URL en partes usando el carácter "/"
    // https://meet.google.com/pxg-cvfx-don
    const parts = codeWithQueryParams.split("/");

    // Obtener la última parte de la URL, que corresponde al código de la sesión
    const code = parts[parts.length - 1];

    // Reemplazar todos los guiones separadores por nada para obtener el código sin separadores
    const codeWithoutSeparators = code.replace(/-/g, "");

    // Actualizar el contenido del elemento HTML con el código sin separadores
    document.querySelector("#code").textContent = codeWithoutSeparators;
}

// Función para copiar el código de la sesión al portapapeles del usuario
function copyCode() {
    // Obtén la referencia al elemento que contiene el código de la sesión
    const codeOutput = document.getElementById("code");

    // Obtiene el texto del código de la sesión
    const code = codeOutput.textContent;

    // Crea un elemento de área de texto temporal
    const tempTextArea = document.createElement("textarea");

    // Asigna el valor del código de la sesión al área de texto temporal
    tempTextArea.value = code;

    // Agrega el área de texto temporal al cuerpo del documento
    document.body.appendChild(tempTextArea);

    // Selecciona el contenido del área de texto temporal
    tempTextArea.select();

    // Copia el contenido al portapapeles del usuario
    document.execCommand("copy");

    // Remueve el área de texto temporal del documento
    document.body.removeChild(tempTextArea);

    // Muestra una alerta para indicar que el código de la sesión ha sido copiado correctamente
    alert("El código de la sesión se ha copiado al portapapeles.");
}