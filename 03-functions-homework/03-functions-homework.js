//1. Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі.
function getMaxDigit(number){
 
    number = number.toString();
    let numberArr = Array.from(number);
      numberArr.sort();
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
  return `2. ${number} в степені   ${power}  =  ${total}`;
  }
console.log(getPowerNumber(5, -2));

//3. Створити функцію, яка форматує ім'я, роблячи першу букву великою. 
function upperLetter (str){
  let result = str[0].toUpperCase() + str.slice(1).toLowerCase();
  return `3. Відформатоване ім’я: ${result}`;
  }
  console.log( upperLetter ("nAzar"));

//5.Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M.
   function getRandomNumber(min, max) {  
    min = Math.ceil(min);
    max = Math.floor(max);
    return `5. Випадкове число в діапазоні від  ${min} до  ${max} =  ${Math.floor(Math.random() * (max - min)) + min}`; 
  }
  console.log(getRandomNumber(1, 10)); 

//8. Створіть функцію генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам.
  function getRandomPassword(size){
    let password = [];
    let i=0;
    let randomNumb;
    if (size == undefined){
      size = 8;}
    while(i<size){
      i++;
      randomNumb = Math.floor(Math.random() * 10) ;
      password.push(randomNumb);
       }
       return `8. Випадковий пароль з ${size} чисел ${password.join('')}`;
   }
   console.log(getRandomPassword());

   //10. Створіть функцію, яка перевіряє, чи є слово паліндромом. 
   function isPalyndrom(someText){
    let result = someText == someText
         .split("")
         .reverse()
         .join("");
     if (result == true){
      return `10. ${someText} - паліндром `
     }
     else{
        return `10. ${someText} - не паліндром `
      }
  } 
   console.log( isPalyndrom("мадам") );
  
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

