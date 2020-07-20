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
//console.log(Number.isInteger(numbN));
//console.log(Number.isInteger(numbM));

oddNumb = confirm ("Пропускати парні?");
console.log("Пропуск парних чисел " + oddNumb);

let sumI = 0;
let i = 0;
for (i = numbN; i <= numbM; i++){
  if (oddNumb !== false && i % 2 == 0) continue;
  else{ sumI = sumI + i; 
    //console.log(sumI);
  }
};

console.log(`Сума чисел від  ${numbN} до ${numbM} = ${sumI}`);
alert(`Сума чисел від  ${numbN} до ${numbM} = ${sumI}`);
