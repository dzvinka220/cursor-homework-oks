let numbN;
do {
  numbN = +(prompt("Введіть перше число"));
  if (!Number.isInteger(numbN) || numbN === 0){
    alert("Потрібно ввести ціле число");
  }
 } while (!Number.isInteger(numbN) || numbN === 0);

 let numbM;
 do {
   numbM = +(prompt("Введіть друге число"));
   if (!Number.isInteger(numbM) || numbM === 0){
     alert("Потрібно ввести ціле число");
   }
  } while (!Number.isInteger(numbM) || numbM === 0);
  console.log("Перше число " + numbN);
  console.log("Друге число " + numbM);

oddNumb = confirm ("Пропускати парні?");
console.log("Пропуск парних чисел " + oddNumb);

let sumI = 0;
let min = Math.min(numbN,numbM);
let max = Math.max(numbN,numbM);


for (min; min <= max; min++){
    if (oddNumb !== false && min % 2 == 0) continue;
    else{ sumI = sumI + min; 
    }
};

if(oddNumb === false){
console.log(`Сума чисел від  ${numbN} до ${numbM} = ${sumI}`);
alert(`Сума чисел від  ${numbN} до ${numbM} = ${sumI}`);}
else{
    console.log(`Сума непарних чисел від  ${numbN} до ${numbM} = ${sumI}`);
alert(`Сума непарних чисел від  ${numbN} до ${numbM} = ${sumI}`);
}