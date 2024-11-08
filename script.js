const id = document.querySelector("id"), 
    h2 = document.querySelector("h2"); 
    h2.innerHtML = localStorage.getItem("value")
id.addEventListener("keyup", display)

function display() { 
    localStorage.setItem ('value', id.vaule);
    h2.innerHtML = localStorage.getItem("value")
}




