const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476, country: 'Ukraine' };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921, country: 'Latvia' };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114, country: 'Litva' }; 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    function getMyTaxes(salary){
        const taxes = this.tax * salary;
    return taxes;
    }
    console.log(`Податок, що доведеться заплатити становить: ${getMyTaxes.call(ukraine, 1000)}`);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    function getMiddleTaxes (){
        const middleTaxes = this.tax * this.middleSalary;
        return middleTaxes;
    }
    console.log(`В середньому IT-спеціаліст платить такий податок: ${getMiddleTaxes.call(ukraine)}`);
    
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    function getTotalTaxes (){
        const totalTaxes = this.tax * this.middleSalary * this.vacancies;
        return totalTaxes;
    }
    console.log(`Загалом IT-спеціалісти в сплачують податок у розмірі: ${getTotalTaxes.call(ukraine)}`);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    function getMySalary (){
        setInterval(() => {
            const calcSalary = Math.ceil(Math.random() * 500 + 1500);
            const calcTaxes = this.tax * calcSalary;
            const calcProfit = calcSalary-calcTaxes;
                const salaryInfo = {
                    salary: calcSalary,
                    taxes: calcTaxes,
                    profit: calcProfit,
                }
            return console.log(salaryInfo);
        }, 10000);
    }
     getMySalary.call(ukraine);
     
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
