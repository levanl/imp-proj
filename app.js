const text = document.querySelector('.fancy');

const strText = text.textContent;

const splitText = strText.split("");

text.textContent = ""

for (i = 0; i < splitText.length; i++) {
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;

let timer = setInterval(onTick, 50);

function onTick() {
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++

    if( char === splitText.length) {
        complete();
        return;
    }
}


function complete() {
    clearInterval(timer);
    timer == null;
}

const logo = document.querySelectorAll('#logo path');

for(let i = 0; i< logo.length; i++) {
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}