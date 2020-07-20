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
  
console.log(Number.isInteger(numbN));
console.log(Number.isInteger(numbM));

oddNumb = confirm ("Пропускати парні?");
console.log(oddNumb);

let sumI = 0;
let i = 0;
for (i = numbN; i <= numbM; i++){
  if (oddNumb !== false && i % 2 == 0) continue;
  else{ sumI = sumI + i; 
  console.log(sumI);}
};

