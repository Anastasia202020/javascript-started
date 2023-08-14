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

// let x = +(prompt('Введите число','') as string)
// switch (x) {
//     case (x<0): 
//     alert('Отрицательное');
//     break;
//     case (x==0):
//     alert('Равен нулю');
//     break;
//     case(x>0):
//     alert('Положительное');
//     break;
// }

// const number = +(prompt('Введите число между 0 и 3', '') as string)
// switch (number) {
//   case 0:
//     alert('Вы ввели 0');
//     break;
//   case 1:
//     alert('Вы ввели 1');
//     break;
//   case 2:
//   case 3:
//     alert('Вы ввели число 2, а может и 3');
//     break;
//   default:
//     alert('Фигня какая то ввелась')
// }
// let i = 0;
// while (i < 3) {
//   alert( `number ${i}!` );
//   i++
// }
// let i = 0
// while (i<=100) {
//   i = +(prompt('Введите число больше 100','') as string);
//   if (!i) break; 
// }
// while(false) {
//   console.log('Никогда не выполнится')
// }
// while(true) {
//   console.log('Выполнится только раз, так как дальше break')
//   break
// }
// do {
//   console.log('Выполнится раз тк условие ложно')
// } while(false)
// let n = 10
// for (let i = 2; i<=n;i++) {
//   let isSimple = true
//   for(let j=2; j<i; j++) {
//     if (i%j==0) {
//       isSimple = false
//      break
//     }
//   }
// }

// n = 10
// number: for (let i=2; i<=n; i++) {
//   for (let j = 2;j<i;j++) {
//     if (i%j==0) {
//       continue number
//     }
//   }
// }

// let sum = 0;

// let a = +(prompt("Введите число", '') as string);
// let b = +(prompt("Введите второе число", '')as string);

// if (a<b) {
//   // Если b всегда больше a
//   while (a<=b) {
//     sum+=a
//     a++
//   }
// } else {
//   // Если a всегда больше b
//   while (a>=b) {
//     sum+=a
//     a--
//   }
// }
// alert( `Сумма:  ${sum}`);

// while (true) {
//   sum = sum+a
//   console.log(a,sum)
//   if (a==b) break
//   if (a<b) {
//     a++
//   }
//   if (a>b) {
//     a--
//   }
// }
// alert( `Сумма:  ${sum}`);
// Задача 1
// let a = +(prompt("Введите число", '') as string);
// let b = +(prompt("Введите второе число", '') as string);
// function numCase(a:any,b:any) {
//     if (a<b) {
//         alert(a);
//     } else {
//         alert(b)
//     };
//     return
// }
// numCase(a,b);

//задача 2
// let a = +(prompt("Введите число", '') as string);
// let b = +(prompt("Введите степень", '') as string);
// function calcuLate(a:any,b:any) {
//     let result = a**b;
//     alert(result)
//     return
// }
// calcuLate(a,b);
//задача 3
// function getMax(n1:number,n2=0,n3=0,n4=0,n5=0) {
//     return n1+n2+n3+n4+n5
// }
//задача 4
// let n1 = +(prompt("Введите число", '') as string);
// let n2 = +(prompt("Введите второе число", '') as string);
// let sign = prompt("Введите знак", '') as string
// function calc(n1:number,n2:number,sign:string) {
//     switch(sign) {
//         case '+':
//             return n1+n2;
//         case '-':
//             return n1-n2;
//         case '*':  
//             return n1*n2;
//         case '/':
//             return n1/n2;
//     }
// }
// alert(calc(n1,n2,sign))
//задача 5
// function showCalcTable(n:number) {
//     for (let i = 2; i<10; i++) {
//         console.log(n,'x',i,'=',n*i)        
//     }
// }

// for (let i = 2; i<10; i++) {
//     showCalcTable(i) // 2,3,4,5,6,7,8,9
// }

//Задача 6
// function showNumber(from: number, to:number,oddOrEven:boolean) {
//     for (let i = from; i <= to; i ++) {
//         if (oddOrEven) {
//             if (i%2==0) {
//                 console.log(i)
//             }
//         } else {
//             if (i%2!=0) {
//                 console.log(i)
//             }
//         }
//     }  
// }

// showNumber(1,10,true)
// showNumber(10,20,false)
//Задача 7

// function visok(y:number) {    
//     return y%4==0 || y%400==0
// }

// function dateToString(d:number,m:number,y:number) {
//     const dd = d.toString().length!=1 ? d.toString() : '0'+d
//     const mm = m.toString().length!=1 ? m.toString() : '0'+m
//     return `${dd}.${mm}.${y}`
// }

// function getNextDate(d:number,m:number,y:number) {
//     if(d==31) {
//         d=1
//         if(m==12) {
//             m=0
//             y++
//         }
//         m++
//     } 
//     if(d==30 && (m==4||m==6||m==9||m==11)) {
//         d=1
//         m++
//     } 
//     if(d==28 && m==2 && !visok(y)) {
//         d=1
//     }
//     if(d==29 && m==2 && visok(y)) {
//         d=1
//     }
//     return dateToString(d,m,y)
// }

// console.log(getNextDate(31,12,1987))
// console.log(getNextDate(30,4,1987))