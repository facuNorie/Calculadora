// Creando botones
let contentButton =  ["7","8","9","+","4","5","6","-","1","2","3","*","0","=","/"];

for (let i = 0; i < contentButton.length; i++) {
    let btn = document.createElement("BUTTON");
    btn.textContent = contentButton[i];
    btn.classList.add("calculadora__btn");
    if(contentButton[i] == "+" ||contentButton[i] == "-"||contentButton[i] == "*"||contentButton[i] == "/"){
        btn.classList.add("calculadora__signal");
    }
    if(contentButton[i] == "=") btn.classList.add("calculadora__igual");
    document.querySelector(".calculadora__div-buttons").appendChild(btn);
}


// Dark Mode
let darkMode = document.querySelector(".checkbox");

darkMode.addEventListener("click",()=>{
    document.querySelectorAll(".calculadora__btn").forEach(element =>{
        element.classList.toggle("darkMode");
    });
    document.querySelectorAll(".calculadora__signal").forEach(element =>{
        element.classList.toggle("darkSignal");
    });
    document.querySelector(".calculadora__input").classList.toggle("darkMode");
    document.querySelector(".calculadora").classList.toggle("darkCalc");
    document.querySelector(".calculadora__igual").classList.toggle("darkIgual");

});

//Imprimiendo en pantalla los numeros

document.querySelectorAll(".calculadora__btn").forEach(element =>{
        element.addEventListener("click",()=>{
            let input = document.querySelector(".calculadora__input");
            if(element.textContent == "="){
                input.value = mostrarResultado(input.value);
                return;
                
            }
            input.value += element.textContent;
        });
});

const mostrarResultado = valor =>{
    if(valor.includes("+")){
        let newValor = valor.split("+");
        return parseInt(newValor[0]) + parseInt(newValor[1]);
    }else if(valor.includes("-")){
        let newValor = valor.split("-");
        return parseInt(newValor[0]) - parseInt(newValor[1]);
    }else if(valor.includes("*")){
        let newValor = valor.split("*");
        return parseInt(newValor[0]) * parseInt(newValor[1]);
    }else if(valor.includes("/")){
        let newValor = valor.split("/");
        return parseInt(newValor[0]) / parseInt(newValor[1]);
    }
} 
