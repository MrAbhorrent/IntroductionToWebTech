function changeColor(){
    let element = document.getElementById("element1");
    console.log(element);
    element.classList.toggle("fire");
    element.textContent = element.textContent == "Всем привет!" ? "Пока" : "Всем привет!"
}

let btn = document.getElementById("btn");
console.log(btn);
btn.addEventListener('click', changeColor);