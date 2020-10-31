function generateButtons(x){
    if (x < 1 && x > 26){
        return console.log("out of range");
    }
    for (let i = 0; i < x; i++){
        let element = document.createElement("input"); 
        element.type = "button";
        element.value = String.fromCharCode(65 + i);
        element.onclick = function() {
            console.log("Button " + String.fromCharCode(65 + i) + " was clicked");
        };
        document.body.appendChild(element);
    }
}