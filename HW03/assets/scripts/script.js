// Спрашиваем пользователя и выводим его имя
let outPutString = ""
let name = prompt("Как Вас зовут?", "Имя");
if (name == "Имя") {
    outPutString = "Здравствуйте, Anonimous";
} else {
    outPutString = "Привет, " + name;
}
alert(outPutString);

// Спрашиваем у пользваотеля его возраст
let age = +prompt("Введите Ваш возраст", "0");
switch (age) {
    case (age > 0 && age < 3):
        alert("Вы уверены что вам солько лет?")
    case (age >= 3 && age < 7):
        alert("Ходите в детский сад");
        break;
    case (age >= 7 && age < 18):
        alert("Вы школьник");
        break;
    case (age >= 18):
        alert("Школьные годы чудесные ... кончились")
    default:
        alert("Что вы такое?");
        break;
}


function changeColorAndText(){
    let element = document.getElementById('element1');
    console.log(element);    
    element.classList.toggle("fire");
    element.textContent = element.textContent == "Всем привет!" ? "Пока" : "Всем привет!";
}

let btn1 = document.getElementById("btn1");
console.log(btn1);
btn1.addEventListener('click', changeColorAndText);

function changeListColor() {
    let elementLst = document.getElementsByClassName("list1");
    console.log(elementLst);
    for(let i = 0; i <elementLst.length; i++) {
        elementLst[i].classList.toggle("active");
    }    
}

let btn2 = document.getElementById("btn2");
console.log(btn2);
btn2.addEventListener('click', changeListColor);

