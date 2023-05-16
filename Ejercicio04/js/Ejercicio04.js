// Función para obtener el código de la sesión de Google Meet a partir de la URL ingresada
function getCode() {
	const url = document.querySelector("#url").value;
    console.log(url);
  
    if (url === "") {
        alert("Por favor, ingrese la URL de la sesión.");
        return;
    }

    // https://meet.google.com/pxg-cvfx-don?pli=1&authuser=0
    const codeWithQueryParams = url.split("?")[0];

    // https://meet.google.com/pxg-cvfx-don
    const parts = codeWithQueryParams.split("/");

    const code = parts[parts.length - 1];

    // Reemplazar todos los guiones separadores por nada para obtener el código sin separadores
    const codeWithoutSeparators = code.replace(/-/g, "");

    document.querySelector("#code").textContent = codeWithoutSeparators;
}

// Función para copiar el código de la sesión al portapapeles del usuario
function copyCode() {
    const codeOutput = document.getElementById("code");
    const code = codeOutput.textContent;
    const tempTextArea = document.createElement("textarea");
    
    tempTextArea.value = code;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    
    document.execCommand("copy");
    document.body.removeChild(tempTextArea);

    alert("El código de la sesión se ha copiado al portapapeles.");
}

function checkKey(event) {
    if (event.keyCode === 13) {
      getCode();
    }
}