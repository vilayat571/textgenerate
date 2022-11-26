import data from './data.json' assert {type: "json"};

let btn = document.querySelector('button');
let inp = document.querySelector('input');
let footer = document.getElementById("footer");

let div = document.createElement('div');
div.setAttribute('title','paragraph');

btn.addEventListener('click',(e) => {

    e.preventDefault();
    let index = parseInt(inp.value) > 10 ? parseInt(inp.value) : parseInt(inp.value);
    div.innerHTML = data.data.slice(0,index).map(item => {
        return `<div>${item.text}</div>`
    });

    window.scrollTo(0,document.body.scrollHeight);

});


footer.appendChild(div);