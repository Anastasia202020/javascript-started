import './style.css'
// задача 1
// let input = parseFloat(prompt('Введите число','0') as string)
// let inputT = parseFloat(prompt('Введите степень','0') as string)

// alert(input*input)

// Задача 2
// let input = parseFloat(prompt('Введите число','0') as string)
// let inputT = parseFloat(prompt('Введите второе число','0') as string)

// alert((input+inputT)/2)

// Задача 3
// let input = parseFloat(prompt('Введите сторону квадрата','0') as string)

// alert(input*2)

// Задача 4
// let input = parseFloat(prompt('Введите колличество киллометров','0') as string)
// const mili = 0.621371

// alert(input*mili)
// Задача 5
// let input = parseFloat(prompt('Введите число 1','0') as string)
// let inputT = parseFloat(prompt('Введите число 2','0') as string)

// alert(`сумма ${input+inputT}
// вычитание ${input-inputT}
// умножение ${input*inputT}
// деление ${input/inputT}`)

// Задача 6
// let a = parseFloat(prompt('Введите число ','0') as string)
// let b = parseFloat(prompt('Введите число ','0') as string)

// alert(-b/a)

// Задача 7
// const tipH = 24
// const tipM = 60
// let hours = parseFloat(prompt('Введите текущий час ','0') as string)
// let minutes = parseFloat(prompt('Введите текущие минуты ','0') as string)
// let h = parseInt(`${(tipH*60-hours*60-minutes)/60}`)
// alert(`часов ${h}
// минут ${tipM-minutes}`)
// Задача 1
// let name = prompt('Введите имя ','')
// alert(`Привет, ${name}`)
// Задача 2
// const nowYear = 2023
// let birthYear = parseFloat(prompt('Введите год рождения ','') as string)
// alert(nowYear-birthYear)
// Задача 3
// let a = parseFloat(prompt('Введите длину стороны квадрата ','') as string)
// alert(a*4)
// Задача 4
// const p = 3.14
// let a = parseFloat(prompt('Введите длину окружности ','') as string)
// alert((a*a)/(4*p))
// Задача 5
// let a = parseFloat(prompt('Введите колличество километров ','') as string)
// let b = parseFloat(prompt('Введите колличество часов ','') as string)
// alert(a/b)
// Задача 6
// const doll = 1.13
// let a = parseFloat(prompt('Введите колличество долларов ','') as string)
// alert(a/doll)
// Задача 7
// let a = parseInt(prompt('Введите колличество гигабайт ','') as string)
// alert(a*1000/820)
// Задача 8
// let a = parseInt(prompt('Введите колличество денег ','') as string)
// let b = parseInt(prompt('Введите цену шоколада ','') as string)
// let x = Math.round(a/b)
// alert(`можешь купить шоколадок ${x}
// останется сдачи ${a-(x*b)}`)

// let company = prompt('Какое официальное название JavaScript?','')
// if (company == 'ECMAScript') {
//     alert('Верно!');
// } else {
//     alert('Не знаете? ECMAScript')}

// let value = prompt('Введите число', 0);

// if (value > 0) {
//   alert( 1 );
// } else if (value < 0) {
//   alert( -1 );
// } else {
//   alert( 0 );
// }

// let a = prompt('Введите первое число','');
// let b = prompt('Введите второе число','')
// let c = (a + b <4)?'мало':
// 'Много';
// alert(c)

// let login = prompt('Введите логин','');

// let message = (login == 'Сотрудник')?'Привет':
// (login == 'Директор')?'Здравствуйте':
// (login == '')?'Нет логина':
// '';
// alert(message)

// let number = +(prompt('Введите число','') as string)
// if (number >= 14 && number <= 90) {
//     alert('Включен')
// } else {
//     alert('Не включен')
// }
// let number = +(prompt('Введите число','') as string)
// if (number !>=14 && number !<=90) {
//     alert('Включен')
// } else {
//     alert('Не включен')
// }

// let number = +(prompt('Введите число','') as string)
// if (number <=14 && number >=90) {
//     alert('Не Включен')
// } else {
//     alert('включен')
// }

// let userName = prompt("Кто там?", '');

// if (userName === 'Админ') {

//   let pass = prompt('Пароль?', '');

//   if (pass === 'Я главный') {
//     alert( 'Здравствуйте!' );
//   } else if (pass === '' || pass === null) {
//     alert( 'Отменено' );
//   } else {
//     alert( 'Неверный пароль' );
//   }

// } else if (userName === '' || userName === null) {
//   alert( 'Отменено' );
// } else {
//   alert( "Я вас не знаю" );
// }

let x = +(prompt('Введите число','') as string)
switch (x) {
    case (x<0): 
    alert('Отрицательное');
    break;
    case (x==0):
    alert('Равен нулю');
    break;
    case(x>0):
    alert('Положительное');
    break;
}