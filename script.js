// if (2*4 == 7) {
//     console.log('правильно');
// } else {
//     console.log('неправильно');
// }
let num = 50;
if (num < 49 ) {
    console.log('неправильно');
} else if (num > 100) {
    console.log('забагато');
} else {
    console.log ('правильно');
}
(num == 50) ? console.log('правильно') : console.log('неправильно');


switch (num) {
    case num < 49:
       console.log('1');
       break;
    case num > 100:
        console.log('2');
        break;
    case num > 80:
        console.log('3');
        break;
    case 50:
        console.log('yes');
        break;
    default:
        console.log('NO');
        break;                   
}