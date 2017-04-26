var button = document.getElementById('button')
button.addEventListener('click', test);
function test() {
	alert("test");
}



var actionListNames = ["Attack", "Defend"];
var actionListFunctions = [attack, defend];

var select = document.getElementById("actionSelection"); 
var options = actionListNames

for(var i = 0; i < options.length; i++) {
    var opt = options[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
}

function attack(){
	
}

function defend(){
	
}