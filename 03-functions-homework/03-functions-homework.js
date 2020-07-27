//1. Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі.
function getMaxDigit(number){
 
    number = number.toString();
    let numberArr = Array.from(number);
     console.log(numberArr.sort());
        return '1. Найбільша цифра в ' + number + ' = ' + numberArr.pop();        
    }
    console.log(getMaxDigit(9805674321));


//2.Створити функцію, яка визначає ступінь числа
function getPowerNumber (number, power){
    let i = 0; 
    let total;
    let numbArr=[];
    if ( power > 0 ){
      while( i < power ){
        i++;
        numbArr.push(number);
        total = numbArr.reduce( ( total, amount ) => total * amount );

      }}
    else if( power == 0 ){
      total = 1;    
    }
    else if( power < 0 ){
       while(  i > power ){
        i--;
        numbArr.push(number);
        total = numbArr.reduce( ( total, amount ) => total * amount );
        total = 1/total;
    }}
  // console.log(total);
  return `2. ${number} в степені   ${power}  =  ${total}`;
  }
console.log(getPowerNumber(5, -2));

//5.Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M.
   function getRandomNumber(min, max) {  
    min = Math.ceil(min);
    max = Math.floor(max);
    return `5. Випадкове число в діапазоні від  ${min} до  ${max} =  ${Math.floor(Math.random() * (max - min)) + min}`; 
  }
  console.log(getRandomNumber(1, 10)); 
  
//11.Створіть функцію, яка видалить з речення букви, які зустрічаються більше 1 разу. 
function  deleteDuplicateLetter(str) {
  let text = str
    .toLowerCase()
    .split('');
  let res = text.filter(function(val, i, str) {
    return str.lastIndexOf(val) === str.indexOf(val);
  });
  return `11. Унікальні букви з "${str}"  - ${res}`;
}

console.log(deleteDuplicateLetter("Бісквіт був дуже ніжним"));

