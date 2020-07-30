const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

//1. Розділіть студентів на пари
function getPairs(students){
    let girls=[];
    let boys=[];
    let pair=[];

for (name of students){
    if(name.endsWith("а")){
        girls.push(name);
    }
    else{boys.push(name)};
}
    for(let i = 0 ; i < girls.length; i++){
    pair[i] = [boys[i], girls[i]];    
    }
 return pair;
}

const pairs = getPairs(students);
console.log(pairs);

//2. Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати.
function getPairsThemes(){
    let pairThemes=[];
        for( let i = 0 ; i<pairs.length; i++){
        pairThemes[i] = [pairs[i].join(' i '), themes[i]];  
        }
        return pairThemes;
    }
    const pairThemes=getPairsThemes(themes, pairs)
    console.log(pairThemes);

//3. Зіставте оцінки(marks) зі студентом(students): 
function getMarks(){
let studentsMarks=[];
    for( let i = 0 ; i<students.length; i++){
    studentsMarks[i] = [students[i], marks[i]];  
    }
return studentsMarks;
}
const studentsMarks = getMarks(students, marks);
console.log(studentsMarks);

//4. Поставте кожній парі випадкову оцінку(від 1 до 5) 

function getRandomMarks(){
let pairMarks = [];
    for( let i = 0 ; i<pairThemes.length; i++){
    let randomMark = Math.floor(Math.random() * 5 + 1) ;
    pairMarks[i] = pairThemes[i].concat(randomMark);
}
return pairMarks;
}
const pairMarks = getRandomMarks(pairThemes, );
console.log(pairMarks);



