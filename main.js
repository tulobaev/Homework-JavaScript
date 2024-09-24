//! HOMEWORK
//! Условные и логические операторы. Домашняя работа

//? Задание №1
// Напишите оператор if, такой,
// чтобы в качестве выражения в скобках
// у него были значения true, false.
// Например, if( true ) или if( false ).
//  Посмотрите как работает этот оператор,
// поместив какую-нибудь команду после
// круглых скобок
// Например, console.log(1);

// if (true) console.log(1);

// Напишите оператор if так, чтобы у него выражение в скобках
// был true или false. Например:
//     if( true ) или
//     if( false )
// Посмотрите как работает данный оператор, поместив
// какую-нибудь команду после фигурных скобок. Например:
//     console.log(1);

// if (false) {
//   console.log(1);
// }

//? Задание №2
// Написать программу на JS, которая рекомендует фильм в зависимости от
// возраста пользователя.
//  • Программа сначала должна спросить у пользователя его возраст.
//  • Если возраст от 1 до 13: посоветуйте ваш любимый мультфильм.
//  • Если возраст от 14 до 17: посоветуйте приключенческий фильм.
//  • Если возраст от 18 и выше: посоветуйте серьезный фильм.
//  • Если пользователь ввел неверный возраст, сообщите ему об ошибке.
// Пример ввода:
//  • Сколько вам лет?
//  • 18
//  • Посмотрите фильм "Пролетая над гнездом кукушки"
// Указания:
//  • Вы можете придумать больше градаций возрастов и фильмов
//  • Задание необходимо выполнить с помощью if ... else if ... else

// let age = +prompt("Сколько вам лет?");
// if (age <= 13) {
//   alert("Гравити фолс");
// } else if (age <= 17) {
//   alert("Джуманджи");
// } else if (age >= 18) {
//   alert("Пролетая над гнездом кукушки");
// } else {
//   alert("error");
// }

//? Задание №3
// Сделать последовательное упрощение к булевым величинам.
//  • (2 < 3) && (3 > 4) || true
//  • !true &&  (!true || 100 != 5*5)
//  • ("123" == 123) || ((10 <= 10) && (' ' === false))
// Пример выполнения задания:
//  • true && (false || (2 < 3 ))
// Упрощение:
//  • true && (false || (2 < 3))
//  • true && (false || true)
//  • true && true
//  • true
// Ответ: true
// Указания: Вы можете проверить себя, выполнив эти примеры в консоли и получив результат.

// console.log((2 < 3 && 3 > 4) || true);
// console.log(!true && (!true || 100 != 5 * 5));
// console.log("123" == 123 || (10 <= 10 && " " === false));
// console.log(true && (false || true));

//?Упрощение:
// console.log(true && (false || true));
// console.log(true && true);

//? Задание №4
// Дана строка из 3-х цифр.
// Найдите сумму этих цифр.
// То есть сложите как числа первый символ строки, второй и третий.
// Например:
// let str = '123'
// Найти сумму '1' + '2' + '3' = ?

// let str = "123";
// console.log(str[0] * str[1] * str[2]);

// Задание №5
// Переменная num может принимать 4 значения: 1, 2, 3 или 4.
// Если она имеет значение '1', то в переменную result запишем 'зима',
// если имеет значение '2' – 'весна', '3' - 'лето', 4 - 'осень'. А затем выведите что ввел пользователь
//  и что записалось в переменную в result.
// Сделайте этот таск со всеми видами условных операторов (if else, switch, ternary operators).
// Например:
// let answer = +prompt('Введите число от 1 до 4')
// Ответ:
// `Вы ввели число ${answer}. В переменной записалось ${result}`
// let result

// let num = +prompt("Введите число от 1 до 4");
// let res = {
//   season: "зима",
//   season2: "весна",
//   season3: "лето",
//   season4: "осень",
// };
// if (num === 1) {
//   alert(`Вы ввели число ${num}. В переменной записалось "${res.season}"`);
// } else if (num === 2) {
//   alert(`Вы ввели число ${num}. В переменной записалось "${res.season2}"`);
// } else if (num === 3) {
//   alert(`Вы ввели число ${num}. В переменной записалось "${res.season3}"`);
// } else if (num === 4) {
//   alert(`Вы ввели число ${num}. В переменной записалось "${res.season4}"`);
// } else {
//   alert("error");
// }

//!HOMEWORK 22.09.24

//? №1
// что- то не так...
// ["нога","тело","голова"] --> ["голова","тело","нога"]
// ["вниз","середина","вверх"] --> ["вверх","середина","вниз"]
// ["right","left"] --> ["left","right"]

// let arr = ["right", "left"];
// console.log(arr.reverse());

//?№2
// создайте логику светофора
// которая подсказывает следующие цвета, если в переменному дать
// "Красный" должно возвращать "Желтый" т.к. после красного
// загорится желтый цвет
// ("Желтый") --> "Зеленый"
// ("Зеленый") --> "Красный"

// let p1 = prompt("write color");

// if (p1.toLowerCase() === "красный") {
//   alert("Желтый");
// } else if (p1.toLowerCase() === "желтый") {
//   alert("Зеленый");
// } else if (p1.toLowerCase() === "зеленый") {
//   alert("Красный");
// } else {
//   alert("error");
// }
//?№3
// у вас два числа a, b в виде строк должны найти сумму
// let a = "1"
// let b = "3"

// "1","3" --> "4"
// "10","11" --> "21"
// "4","" --> "4"

// let a = "11";
// let b = "10";
// let res = +a + +b;
// console.log(res);

//?№4
// создайте логику которая возвратит аббревиатуру фамилии и имени
// принимает строку, должна возвращать первые буквы
// "Denzel Washington" --> "D.W"
// "chuck norris" --> "C.N"
// "cristiano Ronaldo" --> "C.R"

// let str = "chuck norris";
// let res = str[0].toUpperCase() + "." + str[str.indexOf(" ") + 1].toUpperCase();

// console.log(res);

//?№5
// создайте логику, которая возвращает день недели в соответствии с введенным числом:

// 1 возвращается "Monday"
// 2 возвращается "Tuesday"
// 3 возвращается "Wednesday"
// 4 возвращается "Thursday"
// 5 возвращается "Friday"
// 6 возвращается "Saturday"
// 7 возвращается "Sunday"
// В противном случае возвращается "Wrong, please enter a number between 1 and 7"

// switch..case

// let num = +prompt("Write number");
// switch (num) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("Wrong, please enter a number between 1 and 7");
// }

//?№6
// преобразуйте массив в строку
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
// [1,2,3,4,5,6] => "1 2 3 4 5 6"
// let arr = [1, 2, 3, 4, 5, 6];

// let res = arr.join(" ");
// console.log(res);

//?№7
// уберите пробелы в начале и в конце
// str = "      8aaaaa dddd r     "

// let str = "      8aaaaa dddd r     ";
// console.log(str.trim());

//?№8
// создайте логику которая проверит заглавные ли все буквы
// "a" --> false
// "A" --> true
// "DASgSMD" --> false

// let str = "DASgSMD";
// if (str === str.toUpperCase()) {
//   console.log(true);
// } else {
//   console.log(false);
// }

//! 24.09.24

//todo Задание 1
// Вывести в консоль:
// Hello World

// console.log('Hello World');
//todo Задание 2
// Создать переменную.
// Поместить в нее строку Hello.
// Создать вторую переменную со значением World.
// При помощи переменных вывести в консоль:
// Hello World

// let str = "Hello";
// let str2 = "World";
// console.log(`${str} ${str2}`);

//todo Задание 3:
// Даны названия переменных, после знака =,
// задайте им значения указанных типов данных.
// let str = ;
// let numb = ;
// let undef = ;
// let nul = ;
// let bool = ;
// let obj = ;
// let bigInteger = ;
// let symb = ;

// let str = 'Hello'
// let num = 5
// let undef = undefined
// let nul = null
// let bool = true
// let obj = {}
// let bigInteger = 657890876578997n
// let symb = Symbol("?")
//todo Задание 4
// Создайте переменные str, num, flag и txt со значениями "Привет", 123, true, "true".
// При помощи функции определения типа убедитесь, что переменные
// принадлежат типам: string, number, boolean, string, через typeof
// Выведите поочерёдно в консоль результат
// let str = "Привет";
// let num = 5;
// let flag = true;
// let txt = "true";
// console.log(typeof str);
// console.log(typeof num);
// console.log(typeof flag);
// console.log(typeof txt);

//todo Задание 5
// Создайте две переменные: admin и name.
// Запишите строку Джон в переменную name.
// Скопируйте значение из переменной name в admin.
// Выведите в консоль значение admin (должна показать «Джон»).
// не записывайте напрямую в admin - значение «Джон» - это будет
// считаться неправильным решением,
// нужно именно скопировать значения из одной переменной в другую с помощью вашего кода

// let admin = "";
// let name = "john";
// admin = name;
// console.log(admin);

//todo Задание 6
// Дана переменная programmer, присвойте этой переменной объект, с данными свойствами:
// name, имя должен быть строковым типом данных (String)
// lastName, фамилия, также String
// age, возраст в числовом типе данных (Number)
// codeLanguage, язык программирования, строковый тип данных (String)
// salary, зарплата в виде числа(Number).
// Выведите каждое свойство объекта по очереди в консоль:

// John
// Snow
// 23
// JavaScript
// 2200

// let obj = {
//   name: "John",
//   lastName: "Snow",
//   age: 23,
//   codeLanguage: "JavaScript",
//   salary: 2200,
// };
// console.log(obj.name);
// console.log(obj.lastName);
// console.log(obj.age);
// console.log(obj.codeLanguage);
// console.log(obj.salary);

//todo Задание 7
// Дан массив arr - поместите в него значения с шестью основными
// типами данных, которые существуют в JS.

// Например:

// let arr = ["str", {}, 55, null, undefined, true];
// console.log(arr);

//todo Задание 8
// Создайте три переменные

// first

// second

// third
// с типом данных number, первые две переменные сложите, затем умножьте на третью и поместите в переменную

// fourth
// Операции нужно проводить именно с переменными, т.е. в fourth записывать 5+10*5 - нельзя

// Пример ввода:

// 5

// 10

// 2
// Пример вывода:

// 30

// let first = 5;
// let second = 10;
// let third = 2;
// let fourth = first + second;
// console.log(fourth * third);

//todo Задание 9
// Даны переменные

// first

// second
// подставьте числовые значения в эти переменные и выведите в нескольких console.log() их сумму, разность, произведение и деление.

// Пример ввода:

// const first = 10

// const second = 2
// Пример вывода:

// 12

// 8

// 20

// 5

// const first = 10;
// const second = 2;
// console.log(first + second);
// console.log(first - second);
// console.log(first * second);
// console.log(first / second);

//todo Задание 10
// Напишите код, в котором будут созданы переменные

// firstName

// profession
// выведите в консоль сообщение, которое будет сообщать пользователю эту
// информацию вместе(т.е. у вас должен быть только один console.log в решении)

// Пример ввода:

// Sam

// Programmer
// Пример вывода:

// Hello, Sam! You work as a Programmer!

// let str = prompt("what is your name?");
// let profession = prompt("proffession");
// console.log(`Hello,${str}! You work as a ${profession}`);

//todo Задание 11
// Переменным price(цена) и discount(скидка) присвойте числовые значения. Высчитайте итоговую цену с учетом скидки и выведите результат в консоль.

// Используйте console.log в коде - единожды, только для вывода цены со скидкой.

// К примеру вы получили цену 600 и скидку 15. Вывод в консоль должен быть:

//  510

// let price = 600;
// let discount = 15;
// console.log(price - (price / 100) * discount);

//todo Задание 12
// Создайте переменную myStr, в myStr должна хранится строка Hello.
// Поменяйте первую и последнюю букву на символ $ с помощью метода replace()
// и выведите в консоль результат.

// Вывод в консоль должен быть:

// $ell$

//todo Задание 13
// Даны две переменные:

// let alphabet =

// let letter =
// В переменной letter должна хранится какая-либо буква, а в переменной alphabet строка, состоящая из букв английского алфавита - 'abcdefghijklmnopqrstuvwxyz'.

// Ваш код должен проводить поиск буквы в переменной letter в строке в переменной alphabet и выводить результат в консоль в виде индекса, под которым находится заданная буква. Используйте метод search.

// Пример ввода:

// a
// Пример вывода:

// 0
// Пример ввода:

// c
// Пример вывода:

// 2

// let alphabet = "abcdefghijklmnopqrstuvwxyz";
// let letter = "a";
// console.log(alphabet.search(letter));

//todo Задание 14
// Создайте переменную greet в которой хранится строка Hello World и выведите Hello

// Пример ввода:

// let greet = 'Hello World'
// Пример вывода в консоль:

// Hello

// let greet = "Hello world";
// console.log(greet.split(" ")[0]);

//todo Задание 15
// Создайте переменную str и присвойте ей значение 'coding'.
// Обращаясь к отдельным символам этой строки выведите на экран символ
// 'o', символ 'n', символ 'g'.
// В дополнительных проверках строки могут быть по длине меньше чем строка
// coding. Вам нужно достать 2 букву, предпоследнюю и последнюю
// Например:

// let str = 'motion'
// Вывод:

// o
// i
// n

// let str = "motion";
// console.log(str.length);

// console.log(str[str.length - 2]);
// console.log(str[str.length - 3]);
// console.log(str[str.length - 1]);

//todo Задание 16
// Создайте переменные num1 и num2 с числами. Выведите на экран их сумму,
// разность и частное (результат деления).
// Например:

// let num1 = 20
// let num2 = 2
// Вывод:

// 22
// 18
// 10.0

// let num1 = 20;
// let num2 = 2;
// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 / num2);

//todo Задание 17
// Создайте переменную num с числом. Выведите квадрат этого числа.
// Например:

// let num = 5
// Вывод:

// 25

// let num = 10;
// console.log(num * num);

//todo Задание 18
// Создайте 2 переменные str1 и str2 со строками. Склейте значение этих двух
// переменных и выведите на экран значение
// Например:

// let str1 = 'Hello';
// let str2 = 'Mirbek';
// Вывод:

// "Hello, Mirbek!"

// let str1 = "Hello";
// let str2 = "Mirbek";
// console.log(str1 + "," + str2 + "!");

//todo Задание 19
// Как записать данную строку без использования символа +
// const age = 18;
// console.log('I am ' + age + 'years old');
// const age = 18;
// console.log(`I am ${age} years old`);

//todo Задание 20
// Создайте переменную userName и присвойте ей значение "Kubat"
// Создайте переменную userLastName и присвойте ей значение "Abdrahmanov"
// Выведите в консоль:

// "Kubat Abdrahmanov"
// let userName = "Kubat";
// let userLastName = "Abdrahmanov";
// console.log(userName + " " + userLastName);

//todo Задание 21
// Создайте 4 переменных num1, num2, num3, num4 и присвойте им числовые значения
// Затем посчитайте среднее значение этих чисел и выведите в консоль
// Например:

// let num1 = 10;
// let num2 = 15;
// let num3 = 9;
// let num4 = 13;
// Вывод:

// 11.75

// let num1 = 10;
// let num2 = 15;
// let num3 = 9;
// let num4 = 13;

// let res = num1 + num2 + num3 + num4;
// console.log(res / 4);

//todo Задание 22
// Создайте переменную userName и присвойте ей значение null
// Выведите тип данных этой переменной

// let userName = null;
// console.log(typeof userName);

//todo Задание 23
// Создайте две переменные firstName , lastName и выведите в консоль
// "Hello firstName lastName!" используя интерполяцию
// Например:

// let firstName = 'Motion'
// let lastName = 'Web'
// Вывод:

// Hello, Motion Web!

// let firstName = "Motion";
// let lastName = "Web";
// console.log(`Hello, ${firstName} ${lastName}`);

//todo Задание 24
// Создайте массив arr, состоящий из 2 элементов.
// Выведите в консоль сумму элементов мссива
// Например:

// let arr = [5, 3]
// 8
// let arr = ['5', 3]
// '53'

// let arr = [5, 3];
// console.log(arr[0] + arr[1]);
// let arr2 = ["5", 3];
// console.log(arr2[0] + arr2[1]);

//todo Задание 25
// Создайте объект person = {name: 'Sanzhar', surname: 'Kadyrkulov', age: 20}
// выведите в консоль по очереди имя, фамилия и возраст объекта
// Вывод:

// 'Sanzhar'
// 'Kadyrkulov'
// 20

// let person = {
//   name: "Sanzhar",
//   surname: "Kadyrkulov",
//   age: 20,
// };
// console.log(person.name);
// console.log(person.surname);
// console.log(person.age);

//todo Экстра 01
// Создайте переменную expression со строкой в которой есть числа и знаки плюс.
// Просуммируйте их и выведите в консоль не создавая новую переменную.

// Пример ввода:

// let expression = "2 + 2 + 2";
// Пример вывода в консоли:

// 6
// Обратите внимание - нужно просуммировать именно выражение в строке, не
// вытаскивая из неё новые переменные и не обращаясь к символам по индексам.

//todo Экстра 02
// Создайте переменную myBool в которой хранится булевое значение
// и выведите в консоль переменную в виде числа.

// Пример ввода:

// let myBool = true
// Пример вывода в консоль:

// 1

// let myBool = true;
// console.log(+myBool);

//todo Экстра 03
// Создайте переменную myNum в которой хранится число и преобразуйте его в
// тип данных string и выведите к какому типу данных он относится.

// Пример ввода:

// let myNum = 123
// Пример вывода в консоль после преобразования в строку:

// string
// Прочитать про строковый метод toString и typeof

// let myNum = 123;
// let str = myNum.toString();
// console.log(typeof str);

//todo Экстра 04
// Создайте две переменные, в первой будет строковый тип данных и
// назовите её myStr, а во второй числовой и назовите её myNum,
// затем сложите эти две переменные.

// Пример ввода:

// let myStr = '10'
// let myNum = 10
// Пример вывода в консоль:

// 20

// let myStr = "10";
// let myNum = 10;
// console.log(+myStr + myNum);

//todo Экстра 05
// Создайте две переменные firstWord, secondWord с типом данных строка.
// Сложите длинну строк двух переменных и выведите в консоль сумму.

// Пример ввода:

// let firstWord = 'Hello'
// let secondWord = 'World'
// длина строки 'Hello' - 5, длина строки 'World' также 5
// Пример вывода в консоль:

// 10

// let firstWord = "Hello";
// let secondWord = "World";
// console.log(firstWord.length + secondWord.length);
