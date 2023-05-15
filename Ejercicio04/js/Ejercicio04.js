// Función para obtener el código de la sesión de Google Meet a partir de la URL ingresada
function getCode() {
    // Obtiene el valor del input con el URL de la sesión
	const url = document.querySelector("#url").value;
    console.log(url);

    // Dividir la cadena del URL en la primera aparición del separador de la cadena de consulta (?)
    const codeWithQueryParams = url.split("?")[0];

    // Dividir la cadena de la URL en partes usando el carácter "/"
    const parts = codeWithQueryParams.split("/");

    // Obtener la última parte de la URL, que corresponde al código de la sesión
    const code = parts[parts.length - 1];

    // Reemplazar todos los guiones separadores por nada para obtener el código sin separadores
    const codeWithoutSeparators = code.replace(/-/g, "");

    // Actualizar el contenido del elemento HTML con el código sin separadores
    document.querySelector("#code").textContent = codeWithoutSeparators;
}