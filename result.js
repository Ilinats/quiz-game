var currentName= localStorage.getItem("fname");
document.getElementById("name").innerHTML= currentName;

var currentPoints= localStorage.getItem("points");
document.getElementById("points").innerHTML= currentPoints;

var existingEntries = [];

function addEntry() {
    existingEntries = JSON.parse(localStorage.getItem("top3Players"));
    
    if(existingEntries == null) 
        existingEntries = [];
   
    var entry = {
        name: currentName,
        points: currentPoints
    }

    existingEntries.push(entry);

    existingEntries.sort(sortByPoints);

    while(existingEntries.length > 3)
        existingEntries.pop();
    
    localStorage.setItem("top3Players", JSON.stringify(existingEntries));
}

function sortByPoints(a, b) {
    return b.points-a.points;
}

window.onload = function addValue(){
    addEntry();
    console.log(existingEntries[0]);
    document.getElementById('person1Name').innerHTML= existingEntries[0].name;
    document.getElementById('person1Points').innerHTML= existingEntries[0].points;
    document.getElementById('person2Name').innerHTML= existingEntries[1].name;
    document.getElementById('person2Points').innerHTML= existingEntries[1].points;
    document.getElementById('person3Name').innerHTML= existingEntries[2].name;
    document.getElementById('person3Points').innerHTML= existingEntries[2].points;
}