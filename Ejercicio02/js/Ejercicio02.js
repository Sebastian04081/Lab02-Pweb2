/*
* La función reverseString() toma una cadena de texto de entrada,
* invierte su orden de caracteres y muestra el resultado invertido 
* en otro elemento HTML, utilizando los métodos split(), reverse() 
* y join() de JavaScript.
*/

function reverseString(){
    let str = document.querySelector("#input").value;
    console.log(str);

    reversedString = str.split("").reverse().join("");

    console.log(reversedString);

    document.querySelector("#answer").innerHTML = reversedString;
}

