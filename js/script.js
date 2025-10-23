//alert("hola mundo")
const button= document.getElementById("toggle-theme");
//alert(button);

function toggleTheme(){
    const body= document.body;
    //alert(body)
    if(body.classList.contains("dark")){
        body.classList.remove("dark")
    }else{
        body.classList.add("dark")
    }
    }
button.addEventListener("click",toggleTheme);