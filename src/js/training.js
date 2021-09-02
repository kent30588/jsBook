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

//                                                            Циклы

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

//                                                           Операторы

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




//                                                             конструкция switch

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

//                                                                 Функции

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


// Возврат значение функций

//function sqr(a) {
//	let result = a * a;
//	return result;
//}

//let d = sqr(10);
//console.log(d);


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


//                                                                    Объекты

//const boy = { 
//	name: 'Александр',// свойства объекта (ключ : значение)
//	age: 33,
//	sayHello: function(){// создали метод объекта
//		console.log('Привет, меня зовут', this.name);
//	}
//};// Создали объект

//console.log('Мое имя', boy.name);//выведет Мое имя Александр
//console.log('Мой возраст', boy.age);// 33
//boy.sayHello();// выведет метод

//const hero = {
//	name: 'Mario',
//	attack: 15,
//	defence: 5,
//	level: 1,
//	experiance: 0,
//	coordinate: 0,
//	goRight: function () {
//		this.coordinate++;// с помощью this мы можем обращаться свойствам и методам объекта
//		alert('Иду направо');
//	},
//	goLeft: function () {
//		this.coordinate--;
//		alert('Иду налево');
//	},
//	hit: function () {
//		this.experiance += 10;
//		alert('Ударил врага');
//	},
//	blockkick: function () {
//		alert('Заблокировал удар');
//	}
//};
//hero.goLeft();
//hero.hit();

//let text = document.getElementById('text');
//let btnRed = document.getElementById('btnRed');
//let btnGreen = document.getElementById('btnGreen');

//btnRed.onclick = function () {
//	text.style.color = 'red';
//	alert('Цвет текста изменени на красный');
//};
//btnGreen.addEventListener('click', () => {
//	text.style.color = 'green';
//	alert('Цвет текста изменени на зеленый');
//});

//                                                                  массивы

//const arr = ['ручка', 'карандаш', 'ластик'];
//const users = [
//	{ name: 'Вася', age: 15 },
//	{ name: 'Игорь', age: 35}
//];

//const arr = ['ручка', 'карандаш', 'ластик'];
//arr[0];// ручка
//arr[1];//карандаш
//arr[2];//ластик
//arr[4]//undefined

//изменение элемента в массиве

//let arr = ['ручка', 'карандаш', 'ластик'];
//arr[1] = 'пластелин';
//console.log(arr);

//Добавление элемента в массив

//const arr = ['ручка'];
//arr[1] = 'карандаш';

//arr[10] = 'пластелин';// Так добавлять не рекомендуется
//console.log(arr.length);

//const arr = [];
//arr.push('ручка');
//arr.push('карандаш');
//console.log(arr);
//console.log(arr.length);

//const arr = ['ручка', 'карандаш'];
//arr.unshift('ластик');
//arr.unshift('точилка');
//console.log(arr);
//console.log(arr[1]);
//console.log(arr.length);

// Удаление элемента в массиве

//const arr = ['ручка', 'карандаш', 'ластик'];
////arr.pop();
//const dellElement = arr.pop();
//console.log(arr);
//console.log(dellElement );

//const arr = ['ручка', 'карандаш', 'ластик'];
////arr.shift();
//const dellElement = arr.shift();
//console.log(arr);
//console.log(dellElement );

// Перебор элеметов в массиве for forEach

//const arr = ['ручка', 'карандаш', 'ластик'];
//for (let i = 0; i < arr.length; i++){
//	console.log(arr[i]);
//}

//const arr = ['ручка', 'карандаш', 'ластик'];
//for (let i in arr) {
//	console.log(i);
//}

// forEach

//const arr = ['ручка', 'карандаш', 'ластик'];
//arr.forEach((elem, index) => {
//	console.log(elem);
//	console.log(index);
//});
