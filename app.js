// Creando botones
let contentButton =  ["7","8","9","+","4","5","6","-","1","2","3","*","0","=","/"];

for (let i = 0; i < contentButton.length; i++) {
    let btn = document.createElement("BUTTON");
    btn.textContent = contentButton[i];
    btn.classList.add("calculadora__btn");
    if(contentButton[i] == "+" ||contentButton[i] == "-"||contentButton[i] == "*"||contentButton[i] == "/"){
        btn.classList.add("calculadora__signal");
    }
    document.querySelector(".calculadora__div-buttons").appendChild(btn);
}



// Dark Mode

let darkMode = document.querySelector(".checkbox");

darkMode.addEventListener("click",()=>{
    document.querySelectorAll(".calculadora__btn").forEach(element =>{
        element.classList.toggle("darkMode");
    });
    document.querySelector(".calculadora__input").classList.toggle("darkMode");
    document.querySelector(".calculadora").classList.toggle("darkCalc");
});