// Масив рандомних чисел. Враховує діапазон, та довжину
const getRandomArray = (min, max, arrLength) => { 
  const randomArr = [];
  for(i=0; i<arrLength; i++){
  randomArr.push(Math.floor(Math.random( ) * max + min));
  } return `масив випадкових чисел в діапазоні від ${min} до ${max} з довжиною ${arrLength}: 
${randomArr}`;
  } 
  console.log(`Функція №1: ${getRandomArray(1, 100, 15)}`); 
  


  //Мода елементів масиву
  const getMode = (...numbers) =>{
    const count = {}
    let mode = []
    let max = 0;
    
    const items = numbers.filter(number => Number.isInteger(number)
  )
    for (i = 0; i < items.length; i++) {
     item = items[i]
     
      if (!(item in count)) {
        count[item] = 0
      }
      count[item]++
  
      if (count[item] === max) {
        mode.push(item)
      } else if (count[item] > max) {
        max = count[item]
        mode = [item]
      }
  }
  return `мода елементів масиву ${numbers} 
рівна ${mode}`;
  }
  console.log(`Функція 2: ${getMode(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2, 9, 2.5, 2.5, 2.5, 2.5)}`)
  

  
  // Середнє арифметичне елементів масиву
  const getAverage = (...numbers) => {
  
  const items = numbers.filter(number => Number.isInteger(number))
  const average = items.reduce((acc, val) => acc + val)/items.length;
      return `cереднє арифметичне значення елементів масиву ${numbers} 
рівне ${average}`;
  }
  console.log(`Функція 3: ${getAverage(1, 2, 3, 4, 5, 5.5)}`)
  


  // Медіана елементів масиву

  const getMedian = (...numbers) =>{
  let median;
  const items = numbers.filter(number => Number.isInteger(number))

  items.sort(function(a, b){
      return a-b;
  })
  
  if(items.length%2 === 0){
      i2 = (items.length/2);
      i1 = i2--;
      median = (items[i1] + items[i2])/2;
  } else {
      median = items[(items.length-1)/2];
  }
      return `медіана елементів масиву ${numbers} 
рівна ${median}`;
  }
  console.log(`Функція 4: ${getMedian(10, 6, 8, 7, 3, 2, 4, 1, 5, 20, 2.5)}`)
  


  // Функція, що фільтрує парні числа масиву
  const filterEvenNumbers = (...numbers) =>{
  const notEven = numbers.filter(number => number%2 !== 0)
      return `масив ${numbers} містить такі НЕпарні числа: ${notEven}`;
  }
  console.log(`Функція 5: ${filterEvenNumbers(1, 2, 3, 4, 5, 6, 7)}`)
  


  // Функція, що рахує кількість чисел більших за 0
  const countPositiveNumbers = (...numbers) => {
  const onlyNum = numbers.filter(item => item == parseInt(item));
  const positive = onlyNum.filter(number => 
  number>=0);
  const count = positive.length;
      return `кількість чисел більших за 0 в масиві ${numbers} дорівнює ${count}`;
  }
  console.log(`Функція 6: ${countPositiveNumbers(1, 0, -2, -3, 4, -5, 6, 7)}`)
  


  // Функція, що лишає елементи масиву, які діляться на 5
  const getDividedByFive = (...numbers) =>{
  const divideFive = numbers.filter(number => number%5 == 0)
      return `масив ${numbers} містить такі числа кратні п'яти: ${divideFive}`;
  }
  console.log(`Функція 7: ${getDividedByFive(1, 15, 3, 4, 5, 6, 10)}`)
  


  // Функція "цензура"
  const replaceBadWords = (string, badWords) =>{
  let censor = "*"
  let cleanString = string
  .toLowerCase()
  .split(" ");
  
  for (i=0; i<badWords.length; i++){
  function func (){
      return censor.repeat(badWords[i].length)
  }

   cleanString = cleanString.map(word => word.replace(badWords[i], func))
  }

  cleanString[0] = cleanString[0][0].toUpperCase()+cleanString[0].slice(1);
  
      return `фраза ${string} після проходження через функцію цензури буде виглядати як: ${cleanString.join(" ")}
Функція не пропускає такі елементи: ${badWords}`;
  }
  console.log(`Функція 8: ${replaceBadWords("Oh Fuck you faggot shitty fucking shit", ["fuck" , "shit"])}`)
  


  // Функція, що розбиває слово на склади по 3 букви
  const divideByThree = (string) => {
     const syllables = [] ;
     let syl;
     string = string
     .toLowerCase()
     .split(" ")
     .join("")

     for (i=0; i<string.length; i=i+3){
         syl = string
         .split("")
         .splice(i, 3)
         .join("");
         syllables.push(syl);
     }
  return `після розбивання на склади слово ${string} буде виглядати як: ${syllables}`;
  }
  console.log(`Функція 9: ${divideByThree("A bab Al a M  aga")}`)
  
