function createButtons(){
    for(var i =1; i <= 5; i++){
        var body = document.getElementById("BUTTON");
        var button = document.createElement("BUTTON");
        button.innerHTML = 'Button ' + i; 
       addClickFunctionality(button, i);
    body.appendChild(button);
    }
}

createButtons();

// use iife

function addClickFunctionality(button, num) {
    button.onclick = function(){
        alert('This is a button' + num);
    }
}