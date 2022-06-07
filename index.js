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