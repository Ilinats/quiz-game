function saveUserName() {
    var input = document.getElementById("input_name");
    localStorage.setItem("fname", input.value);
}

function required() {
    var empt = document.forms["frm1"]["fname"].value;
    if (empt == ""){
        alert("Моля въведете име");
        return false;
    }
    
    
    return true; 
}

var existingEntries = [];

function arrayValue() {
    existingEntries = JSON.parse(localStorage.getItem("top3BestPlayers"));
}

window.onload = function addValue() {
    arrayValue();
    document.getElementById('person1Name').innerHTML= existingEntries[0].name;
    document.getElementById('person1Date').innerHTML= existingEntries[0].date;
    document.getElementById('person1Time').innerHTML= existingEntries[0].time;
    document.getElementById('person2Name').innerHTML= existingEntries[1].name;
    document.getElementById('person2Date').innerHTML= existingEntries[1].date;
    document.getElementById('person2Time').innerHTML= existingEntries[1].time;
    document.getElementById('person3Name').innerHTML= existingEntries[2].name;
    document.getElementById('person3Date').innerHTML= existingEntries[2].date;
    document.getElementById('person3Time').innerHTML= existingEntries[2].time;
}