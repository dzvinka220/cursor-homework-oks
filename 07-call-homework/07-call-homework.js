const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476, country: 'Ukraine' };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921, country: 'Latvia' };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114, country: 'Litva' }; 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    function getMyTaxes(salary){
        const taxes = this.tax * salary;
    return console.log(`Податок, що доведеться заплатити в ${this.country} становить: ${taxes}`)
    }
    getMyTaxes.call(ukraine, 1000);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    function getMiddleTaxes (){
        const middleTaxes = this.tax * this.middleSalary;
        return console.log(`В середньому IT-спеціаліст в ${this.country} платить такий податок: ${middleTaxes}`)
    }
    getMiddleTaxes.call(ukraine)
    
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    function getTotalTaxes (){
        const totalTaxes = this.tax * this.middleSalary * this.vacancies;
        return console.log(`Загалом IT-спеціалісти в ${this.country} сплачують податок у розмірі: ${totalTaxes}`)
    }
    getTotalTaxes.call(ukraine)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    function getMySalary (){
        let This = this;
        setInterval(function(){
            let calcSalary = Math.ceil(Math.random() * 500 + 1500);
            let calcTaxes = This.tax * calcSalary;
            let calcProfit = calcSalary-calcTaxes;
                let obj = {
                    salary: calcSalary,
                    taxes: calcTaxes,
                    profit: calcProfit,
                }
            return console.log(JSON.stringify(obj))
        }, 10000);
    }
     getMySalary.call(ukraine)
     
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

