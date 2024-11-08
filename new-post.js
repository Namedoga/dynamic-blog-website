const name = document.getElementById("name") 
const content = document.getElementById("content")
const image = document.getElementById("image")
const form = document.getElementById("form")

form.addEventListener("submit"), (e) => {
let messages = []
if (name.value ===  '' || name.vaule == null) {  
    console.log("name is required")
 
}

if (messages.lengeth > 0) {
e.preventDeefult()
errorElement.innerText = messages.join (',')
} 
} 