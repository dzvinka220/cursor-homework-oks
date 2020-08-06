const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }];
  
//повертає список предметів для конкретного студента
  const getSubjects = (student) => {
    const subjList = [];
     
      for(key in student.subjects){
          subjList.push((key[0].toUpperCase() + key.slice(1).toLowerCase())
          .split("_")
          .join(" "));
      }  
  return  subjList;
  }
  console.log(`Функція №1: cтудент вивчає такі предмети: ${getSubjects(students[0])}.`);
  

//поверне середню оцінку по усім предметам для переданого студента
  const getAverageMark = (student) => {
    const studentMarks = Object.values(student.subjects).flat();
    const averageMark = (studentMarks.reduce(
      (acc, val) => acc + val)/studentMarks.length)
      .toFixed(1);
  return averageMark;
  } 
  console.log(`Функція №2: середня оцінка студента складає: ${getAverageMark(students[0])}.`);

//повертає інформацію загального виду по переданому студенту
  const getStudentInfo = (student)=> {
    const studentInfo = {
      course : student.course,
      name : student.name,
      averageMark : getAverageMark(student)};
  return JSON.stringify(studentInfo);
  }
  console.log(`Функція №3: інформація про студента: ${getStudentInfo(students[0])}.`);

//повертає імена студентів у алфавітному порядку
  const getStudentsNames = (students) =>{
    let names = [];
      students.map(x=> names.push(x.name));
      names = names.sort()
    return names;
}
  console.log(`Функція №4: імена студентів посортовані по алфавіту: ${getStudentsNames(students)}.`);

//повертає кращого студента зі списку по показнику середньої оцінки
  const getBestStudent = (students) =>{
    let max = 0;
    const name = [];

      students.map(student=> {
        student.averageMark = (Number(getAverageMark(student)));
        max = Math.max(student.averageMark);
      })

      students.map(student=> 
        student.averageMark == max ? name.push(student.name) : null)

  if(name.length === 1) 
    return `найкращий студент: ${name}. Середній бал складає: ${max}.`;
  else 
    return `найкращі студенти: ${name.join(', ')}. Їх середній бал складає: ${max}.`
  }
  console.log(`Функція №5: ${getBestStudent(students)}`);

//повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень
  const calculateWordLetters = (word) =>{
    const countLetters = {};
    let identical = [];
    word = word.toLowerCase();

      for (letter of word){
        if(letter==letter){
          identical = word.match(new RegExp(letter, 'g'));
          countLetters[letter]++;
          countLetters[letter] = identical.length;
        }
      }
  return `кількість літер у слові ${word}: ${JSON.stringify(countLetters)}.`;
  }
  console.log(`Функція №6: ${calculateWordLetters('Raxacoricofallapatorius')}`);
