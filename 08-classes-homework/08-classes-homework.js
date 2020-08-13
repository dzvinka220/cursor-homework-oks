///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Basic
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class Student {
    constructor(university, course, fullName){
       this.university = university;
       this.course = course;
       this.fullName = fullName;
    }
    _marks = [];
    _active = true;

    getInfo(){
        console.log(`Студент ${this.course}го курсу ${this.university}, ${this.fullName}.`)
    }

    set marks(mark){
        if(typeof mark !== 'string' && this._active == true){
            if(isNaN(mark)){
                mark.filter(elem => elem<6 && elem>0).forEach(elem => this._marks.push(elem))
            } else if (mark<6 && mark>0){
                this._marks.push(mark)}
        }
    }

    get marks(){
        if (this._active == true) return this._marks;
        else return null
    }

    getAverageMark(){
        if (this._active == true)
        return this._marks.reduce((acc, val) => acc + val)/this._marks.length.toFixed(1);
        else return null
    }

    dismiss(){
        this._active = false;
        return `Студента ${this.fullName} відраховано.`;
    }

    recover(){
        this._active = true;
        return `Студента ${this.fullName} поновлено.`
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Advanced
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class BudgetStudent extends Student{
    constructor(university, course, fullName){
        super(university, course, fullName);
        setInterval(() => this.getScholarship(), 30000)
    }
 
    scholarship = 1400;
    scholarshipMark = 4;
    totalScholarship = 0;

    getScholarship(){
        if(this.getAverageMark() >= this.scholarshipMark && this._active){
            return console.log(`Студент ${this.fullName} отримав ${this.scholarship}грн стипендії. Загалом отримано: ${this.totalScholarship+=this.scholarship}грн`)}
        }
    
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Test
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const basicStudent = new Student('НУЛП', 3, 'Рікардо Мілос');

    basicStudent.getInfo();
    basicStudent.marks = [5, 4, 4, 5];
    console.log(`Початковий масив оцінок: ${basicStudent.marks}.`);
    basicStudent.marks = 5;
    console.log(`Ставимо студенту 5 за харизму: ${basicStudent.marks}.`);
    console.log(`Обраховуємо середній бал студента: ${basicStudent.getAverageMark()}.`);
    console.log(basicStudent.dismiss());
    //Намагаємось поставити відрахованому студенту оцінку 2:
    basicStudent.marks = 2;
    console.log(`Перевіряємо чи можна переглянути оцінки студента: '${basicStudent.marks}'.`);
    console.log(basicStudent.recover());
    console.log(`Перевіряємо чи можна переглянути оцінки студента: ${basicStudent.marks}.`);


const advancedStudent = new BudgetStudent('ЛНУ', 4, 'Рік Естлі');

    advancedStudent.getInfo();
    advancedStudent.marks = [5, 2, 3, 5];
    console.log(`Початковий масив оцінок: ${advancedStudent.marks}.`);
    advancedStudent.marks = 5;
    console.log(`Ставимо студенту 5 за файну пісню: ${advancedStudent.marks}.`);
    console.log(`Обраховуємо середній бал студента: ${advancedStudent.getAverageMark()}.`);
    console.log(advancedStudent.dismiss());
    //Намагаємось поставити відрахованому студенту оцінку 2:
    advancedStudent.marks = 2;
    console.log(`Перевіряємо чи можна переглянути оцінки студента: '${advancedStudent.marks}.'`);
    console.log(advancedStudent.recover());
    console.log(`Перевіряємо чи можна переглянути оцінки студента: ${advancedStudent.marks}.`);

const advancedStudent2 = new BudgetStudent('ТНЕУ', 1, 'Петрик П\'яточкін');
    advancedStudent2.getInfo();
    advancedStudent2.marks = [2, 2, 2, 2];
    console.log(`Обраховуємо середній бал студента: ${advancedStudent2.getAverageMark()}.`);
