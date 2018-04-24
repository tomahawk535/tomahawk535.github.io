
//Написать скрипт чтобы при изменении цвета заголовков второго уровня (h2),
// изменялся и цвет соответствующего ему текста (p).

var h2 = document.querySelector('h2'); // Выбираем елементы "Заголовок 2 уровня
var childH2 = h2.nextElementSibling; // выбираем дочерние елементы
console.log(childH2);
    h2.style.color = '#7777ff';
    if (h2.style.color = '#7777ff'){
        childH2.style.color = "red"
    }



// 2.	Для кнопки Sign in найти ее ближайшую родительскую форму.

 var getSigIn = document.getElementsByClassName('btn-success');//Выбираем кнопку Sign in по классу
//
//var getParentForm  = getSigIn.closest('form');
// console.log(getSigIn.closest('form').className); // Слосест не работает

// 3.	Изменить фон всех элементов с классом btn-default.


var btnDef = document.getElementsByClassName(' btn btn-default');
//btnDef.style.backgroundColor ="#7777ff";
for (var i = 0; i <btnDef.length; i++) {
    console.log(btnDef[i]);

   btnDef[i].style.backgroundColor = '#7777ff';
}