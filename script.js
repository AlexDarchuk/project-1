`use strict`;
// if (2*4 == 7) {
//     console.log('правильно');
// } else {
//     console.log('неправильно');
// }
// let num = 50;
// if (num < 49 ) {
//     console.log('неправильно');
// } else if (num > 100) {
//     console.log('забагато');
// } else {
//     console.log ('правильно');
// }
// (num == 50) ? console.log('правильно') : console.log('неправильно');


// switch (num) {
//     case num < 49:
//        console.log('1');
//        break;
//     case num > 100:
//         console.log('2');
//         break;
//     case num > 80:
//         console.log('3');
//         break;
//     case 50:
//         console.log('yes');
//         break;
//     default:
//         console.log('NO');
//         break;                   
// }

// let num = 50;
// while (num < 55) {
//     console.log(num);
//     num++;
// }


// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// for (let i = 1; i < 8; i++) {
//     console.log(i);
// }

// for (let i = 1; i < 8; i++) {
//     if (i == 6) {
//         break;
//     }
//     console.log(i);
// }

// for (let i = 1; i < 8; i++) {
//     if (i == 6) {
//        continue;
//     }
//     console.log(i);
// }

// let money = +prompt("Ваш бюджет на місяць?", ''),
//     time = prompt("Введіть дату вформаті YYYY-MM-DD",'');

// let appData = {
//     budget: money,
//     expenses: {},
//     optionalExpenses: {},
//     income: [],
//     timeData: time,
//     savings: false
// };

// // let a1 = prompt("Введіть обовязкову статю розходів в цьому місяці", ''),
// //     a2 = prompt("Яка ціна?", ''),
// //     a3 = prompt("Введіть обовязкову статю розходів в цьому місяці", ''),
// //     a4 = prompt("Яка ціна?", '');

// // appData.expenses.a1 = a2;
// // appData.expenses.a3 = a4;

// for (let i = 0; i < 2; i++) {
//     let a = prompt("Введіть обовязкову статю розходів в цьому місяці", '');
//         b = prompt("Яка ціна?", '');

//         if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a!= '' && a.length < 50){
//             appData.expenses[a] = b;
//         } else {

//         } 
//     };

// appData.moneyPerDay = appData.budget / 30;

// alert("Щоденний бюджет: " + appData.moneyPerDay);

// if (appData.moneyPerDay < 100) {
//     console.log("Мінімальний рівень достатку");
// } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
//     console.log("Середній рівень достатку");
// } else if (appData.moneyPerDay > 2000) {
//     console.log("Високий рівень достатку");
// } else {
//     console.log("Виникла помилка");
// }

let money, time;

function start() {
    money = +prompt ("Ваш бюджет на месяц?", "");
    time = prompt ("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt ("Ваш бюджет на месяц?", ""); 
    }

}
start();

    
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};


function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt ("Во сколько обойдется?", "");
    
        if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
            appData.expenses[a] = b;
        } else {
            i--;
        }
    
    };
}
chooseExpenses();


function detectDayBudget() {                                            // Расчет дневного бюджета
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert ("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");
}
detectDayBudget();


function detectLevel() {                                                // Расчет уровня достатка
    if (appData.moneyPerDay < 100) {
        console.log ("Это минимальный уровень достатка!");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log ("Это средний уровень достатка!");
    } else if (appData.moneyPerDay > 2000) {
        console.log ("Это высокий уровень достатка!");
    } else {
        console.log ("Ошибочка...!");
    }
}
detectLevel();



function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

            appData.monthIncome = save/100/12*percent;
            alert("Доход с Вашего депозита в месяц: " + appData.monthIncome);
    }
}
checkSavings();


function chooseOptExpenses() {                             // Функция для определения необязательных расходов

    for (let i = 1; i <= 3; i++) {
        let questionOptExpenses = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = questionOptExpenses;
        console.log(appData.optionalExpenses);
    }


}
chooseOptExpenses();