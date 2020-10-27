function desCripty (value = 'bnchmf'){
    const word = value;
    const arrayWord = word.split('');
    const arrayWordAscii = arrayWord.map(item => item.charCodeAt());

    const arrayWordCriptografy = arrayWordAscii.map(item => String.fromCharCode(item+1));
    return arrayWordCriptografy.toString().replace(/,/g, '');
}

const result = desCripty();
console.log(result);


function enCripty (value = 'coding'){
    const word = value;
    const arrayWord = word.split('');
    const arrayWordAscii = arrayWord.map(item => item.charCodeAt());

    const arrayWordCriptografy = arrayWordAscii.map(item => String.fromCharCode(item-1));
    return arrayWordCriptografy.toString().replace(/,/g, '');
}

const result2 = enCripty();
console.log(result2);

const button = document.querySelectorAll("button");
const textArea = document.querySelectorAll("textarea");
const resultado = document.querySelector('.result');

button[0].addEventListener('click', () => {
    const textEnCripty = enCripty(textArea[0].value);
    resultado.style.display = "inline";

    textArea[1].value = textEnCripty

});

button[1].addEventListener('click', () => {
    const textDesCripty = desCripty(textArea[0].value);
    resultado.style.display = "inline";

    textArea[1].value = textDesCripty;

})