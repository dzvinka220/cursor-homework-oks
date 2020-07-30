const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

let girls=[];
let boys=[];
let pair=[];
let pairThemes=[];
let studentsMarks=[];
let pairMarks=[];
let i = 0;
console.log(students);


for (name of students){
    if(name.endsWith("а")){
        girls.push(name);
    }
    else{boys.push(name)};
}

//1. Розділіть студентів на пари
function getPairs(){
    for( i ; i<girls.length; i++){
    pair.push([boys[i], girls[i]]);    
    }
 return pair;
}

//2. Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати.
function getPairsThemes(){
    for( i=0 ; i<girls.length; i++){
    pairThemes.push([[pair[i][0]] +' i '+ [pair[i][1]] + ', ' + [themes[i]]]);  
    }
    return pairThemes;
}

//3. Зіставте оцінки(marks) зі студентом(students): 
function getMarks(){
    for( i=0 ; i<students.length; i++){
    studentsMarks.push([students[i], marks[i]]);  
    }
return studentsMarks;
}

//4. Поставте кожній парі випадкову оцінку(від 1 до 5) 
function getRandomMarks(){
    for( i=0 ; i<pairThemes.length; i++){
    pairMarks.push([pairThemes[i]+'. '+(Math.floor(Math.random() * 5 + 1))]);
}
return pairMarks;
}

console.log(getPairs());
console.log(getPairsThemes());
console.log(getMarks());
console.log(getRandomMarks());



