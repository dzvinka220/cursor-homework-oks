let banana = 15.678;
let coconut = 123.965;
let pineapple = 90.2345;

console.log('Максимальне значення: ' + Math.max(banana, coconut, pineapple));
console.log('Мінімальне значення: ' + Math.min(banana, coconut, pineapple));

let fruitSum = banana + coconut + pineapple;
console.log('Вартість всіх товарів: ' + fruitSum);

console.log('Вартість усіх товарів без урахування копійок: ' + parseInt( Math.floor(banana) + Math.floor(coconut) + Math.floor(pineapple)) );

console.log('Cума товарів округлена до сотень: ' + Math.round(fruitSum/100) *100);

console.log('Сума всіх товарів є парним числом? ' + (Math.floor(fruitSum) %2 == 0 ) );

let clientCash = 500;
console.log('Якщо клієнт платить за товари ' + clientCash + 'грн, його решта складає ' + (clientCash - fruitSum) );
let averagePrice = fruitSum/3;
console.log('Середнє значення цін, округлене до сотих: '  +  parseInt(averagePrice.toFixed(2)) );

let discount = Math.floor(Math.random() * 100); //випадкова знижка
let afterDiscount = Number(fruitSum - (fruitSum/100 * discount)).toFixed(2); //сума до сплати
let profit = afterDiscount - fruitSum/2;
console.log('Сума до сплати, з врахуванням знижки ' + discount + '%, ' + afterDiscount);
console.log('Чистий прибуток: ' + Math.floor(profit) );
