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

// конструкция switch

//let arg = +prompt('Сколько?');

//switch (arg) {
//	case 1:
//		alert('Значение переменной arg равно 1'); // выведится это сообщение если пользователь укажет 1
//		break;
//	case 3:
//		alert('Значение переменной arg рано 3');// выведится это сообщение если пользователь укажет 3
//		break;
//	case 5:
//		alert('Значение переменной arg равно 5');// выведится это сообщение если пользователь укажет 5
//		break;
//	default:
//		alert('Значение переменной arg равно ' + arg); 
//}

/*
Домашнее задание
Написать конструкцию switch, которая будет проверять сколько опыта получил ваш герой в игре, 
в зависимости от количества убитых врагов.

Условия задачи:
За 1 врага ему начисляется 100 очков опыта
За 3 врагов ему начислается 400 очков 
За 5 врагов начисляется 700 очков
За 10 врагов начисляется 1000 очков

Если же он набрал другое количество очков, то умножай количество убитых врагов на 100 очков.

Далее, запроси (с помощью функции prompt), сколько игрок убил врагов, а потом с помощью alert 
выведи игроку информацию о том, сколько очков опыта он заработал.
*/

//Мое решение несколькими сспособами

//let killEnemy = +prompt('Сколько Вы убили врагов?');

//switch (killEnemy) {
//	case 1:
//		alert('Вам начислено 100 очков');
//		break;
//	case 3:
//		alert('Вам начислено 400 очков');
//		break;
//	case 5:
//		alert('Вам начислено 700 очков');
//		break;
//	case 10:
//		alert('Вам начислено 1000 очков');
//		break;
//	default:
//		alert('Вам начислено ' + killEnemy * 100 + ' очков');
	
//}

//let killEnemy = +prompt('Сколько Вы убили врагов?');

//if (killEnemy === 1) {
//	alert('Вам начислено 100 очков');
//} else if (killEnemy === 3) {
//	alert('Вам начислено 400 очков');
//} else if (killEnemy === 5) {
//	alert('Вам начислено 700 очков');
//} else if (killEnemy === 10) {
//	alert('Вам начислено 1000 очков');
//} else {
//	alert('Вам начислено ' + killEnemy * 100 + ' очков');
//}

//let killEnemy = +prompt('Сколько Вы убили врагов?');

//let otvet = (killEnemy === 1) ? 'Вам начислено 100 очков' :
//	(killEnemy === 3) ? 'Вам начислено 400 очков' :
//		(killEnemy === 5) ? 'Вам начислено 700 очков' :
//			(killEnemy === 10) ? 'Вам начислено 1000 очков' :
//				 'Вам начислено ' + killEnemy * 100 + ' очков' ;

//alert(otvet);


// Функции

//function callPayment() {
//	let amount = +prompt('На какую сумму Вы хотите пополнить счет?');
//	alert(`Ваш счет пополнен на ${amount} $`);
//}

//callPayment();

//function callPayment(currency = '$') {
//	let amount = +prompt('На какую сумму Вы хоите пополнить счет?');
//	alert(`Ваш счет пополнен на сумму ${amount} ${currency}`);
//}

//let userCurrencyRub = 'P';
//let userCurrencyUSD = '$';

//callPayment();//Выведет $
//callPayment(userCurrencyRub); //Выведет Р т.к. вызов в таком случае перебьет значение по умолчанию

/*
Домашнее задание
1. Определить функцию, которая будет запрашивать число(с помощью prompt), умножать его на 327 и делить на 10. 
И с помощью alert выдавать полученное значение;
2. Определить функцию с аргументом, которая будет запрашивать число(с помощью prompt), умножать его на то значение, 
указанное в качестве аргумента. И с помощью alert выдавать полученное значение. 
*/

//1
//function whatNumber() {
//	let number = +prompt('Введите какое-нибудь число');
//	let total = number * 327 / 10;
//	alert(`Получилось ${total}`);
//}

//whatNumber();

//2

//function whatNumber() {
//	let b = +prompt('Введите какое-нибудь число');
//	//let total = b * a;
//	alert(`Получилось ${b * 10}`);
//}
//whatNumber();

// Возврат значение функций

//function sqr(a) {
//	let result = a * a;
//	return result;
//}

//let d = sqr(10);
//console.log(d);

/*
Домашнее задание
Написать функцию, которая с помощью prompt запрашивает число у пользователя.
Затем эта функция умножает введеное число на 100 и возвращает это значение.
Результат функции должен быть записан в переменную.
*/

//function someNumber() {
//	let question = +prompt('введите какое-нибудь число');
//	//let result = question * number;
//	return question * 100;
//}
//let result = someNumber();
//console.log(result);


//Стрелочная функция

//let func = () => alert('Я стрелочная функция!');

//func();

//let func = (a) => {
//	alert(a);
//};

//func(3);// Выведет 3

//let func = () => {
//	let result = 2 + 2;
//	return result;
//};

//let result = func();
//alert(result);// выведет 4

/*
Домашнее задание
Напиши стрелочную функцию, которая будет запрашивать с помощью prompt два числа у пользователя
и перемножать их между собой. Полученное значение функция должна возвращать с помощью
ключевого слова return. Результат выполнения функции сохрани в переменную.
*/

//let func = () => {
//	let questionFirst = +prompt('Введите любое число');
//	let questionTwo = +prompt('Введите второе любое число');
//	//let result = questionFirst * questionTwo;
//	return questionFirst * questionTwo;
//};

//func();
//console.log()
//let test = func;
//console.log(func());




