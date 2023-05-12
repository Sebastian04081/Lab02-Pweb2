function reverseString(){
    let str = document.querySelector("#input").value;
    console.log(str);

    reversedString = str.split("").reverse().join("");

    console.log(reversedString);

}