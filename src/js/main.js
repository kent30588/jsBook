//let a = 4;
//let b = 2;

//console.log(a > b);
"use strict";

//const question = prompt('Вам нравится наш сайт?', '');

//if (question < 18) {
//	alert('Вам рано посещать наш сайт')
//} else if (question >= 18) {
//	alert('Добро пожаловать');
//} else {
//	alert('Вы указали неверный формат возраста');
//}

//const otvet = (question < 18) ? 'Вам рано посещать наш сайт' :
//	(question >= 18) ? 'Добро пожаловать' :
//		'Вы указали неверный формат возраста';
//alert(otvet);
//const question = prompt('Вам нравится наш сайт?', '');

//if (question < 18) {
//	alert('adsads');
//} else if (question >= 18) {
//	alert('asdcxvcv')
//} else {
//	alert('asdasd');
//}

// Циклы

//let i = 1;
//while (i <= 3) {
//	alert(i);
//	i++;
//}


//let i = 1;

//do {
//	alert(i);
//	i++;
//} while (i < 4);

//for (let i = 1; i <= 3; i++){
//	alert(i);
//}

//Домашнее задание 
/* 1 Напиши код, который выводит на экран с помощью цикла while значения от 50 до 100
2 Напиши код, который выводит на экран с помощью цикла do whule значения от 20 до 30
3 Напиши код, который выводит на экран с помощью цикла for значения от 200 до 250
*/

//1

//let i = 50;
//while (i <= 100) {
//	//alert(i);
//	console.log(i);
//	i++;
//}

//2

//let i = 20;
//do {
//	console.log(i);
//	i++;
//} while (i <= 30);

//3

//for (let i = 200; i <= 250; i ++){
//	console.log(i);
//}

// Операторы

//console.log(typeof(+'1' + +'3')); // получим  4

//инкрименты
//let i = 3;
//i++;
//console.log(i); // получим значение 4

//let i = 3;
//console.log(++i); // получим значение 4

//декремент

//let i = 3;
//i--;
//console.log(i); // получим значение 2

//let i = 3;
//console.log(--i); // получим значение 2

//Возведение в степень
//let a = 2;
//let b = 3;
//console.log(2 ** 3); // получим значение 8
//console.log(3 ** 2); // получим значение 9

//Остаток от деления
//let a = 11;
//let b = 2;
//console.log(a % b);// получим 1

//Логические операторы

//  Оператор ||

//let a = true;
//let b = false;
//if (a || b) {
//	alert('Я буду появляться т.к. одно из значение true');
//} else {
//	alert('Появлюсь я');
//}


//let c = false;
//let d = false;
//if (c || d) {
//	alert('Я буду появляться т.к. одно из значение true');
//} else {
//		alert('Появлюсь я');
//}

//let useAge = 17;
//let counrMsgs = 499;

//if ((useAge >= 18) || (counrMsgs >= 500)) {
//	alert('Вам разрешено прикреплять фото');// выведет сообщение, если хоть один операнд будет true
//} else {
//	alert('Вам запрещено прикреплять фото');// выведет сообщение, если оба false
//}

// Оператор &&

//console.log(false && false);//false
//console.log(true && false);//false
//console.log(false && true);//false
//console.log(true && true);// true



//let useAge = 21;
//let counrMsgs = 499;

//if ((useAge >= 18) && (counrMsgs >= 500)) {
//	alert('Вам разрешено прикреплять фото');// выведет сообщение, если оба операнда true
//} else {
//	alert('Вам запрещено прикреплять фото');// выведет сообщение, если оба или один false
//}

// Оператор ! 

//let a = !true;
//console.log(a);// вернет false
//let b = !false;
//console.log(b);// вернет true
//let c = !'string';
//console.log(c);// вернет false
//let d = !0;
//console.log(d);// вернет true
//let e = !8;
//console.log(e);// вернет false

// !!

//let str = 5;
//let a = !!str;
//console.log(a); // перевели переменную str в boolean / true

/* домашнее задание
Пользователю с помощью функции prompt предлагается ввести возраст

Если возраст больше 18 лет, то с помощью еще одгного prompt, нужно запросить имя пользователя
все эти данные нужно сохранить в переменных.

Как только ты получишь от пользователя все необходимые данные,
ты должен сделать следующие проверки: ЕСЛИ пользователю 25 лет и его имя John,
ты должен с помощью функции alert() вывести фразу "Welcome, John". 
В противном случае ты должен вывести фразу "Who are you? I don`t know you"
*/

//Мое решение. 

/*
let age = +prompt('Введите ваш возраст', '');
let userName = null;

//console.log(typeof(age));
if (age >= 18) {
	userName = prompt('Введите ваше имя');
} else {
	alert('Исполнится 18 лет, тода заходи');
}

if ((age === 25) && (userName === 'John')) {
	alert('Welcome, John');
} else {
	alert('Who are you? I don`t know ');
}
*/

