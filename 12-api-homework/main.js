const BASE = "https://swapi.dev/api/";
let currentPage = 1;

function getInfo (){
    const getInfo = document.querySelector('#getInfo');
    const characters = document.querySelector('.characters');
    if(event.target === getInfo) characters.classList.toggle("active");

    if(characters.classList.contains('active')){
        document.querySelector('.planetsContainer').style.marginLeft = '950px';
    } 
    else document.querySelector('.planetsContainer').style.marginLeft = '50px';

    const config = {
        method: "GET",
        url: BASE + 'films/' + document.querySelector('#filmNumber').value + '/',
        }
    
    return axios(config)  
    .then((res) =>{
        return displayCharacters(res.data.characters)
    })
    .catch(err => alert('Sorry, this episode does not exist!'))
}

function displayCharacters (characters){
    const container = document.querySelector('.characters');
    container.innerHTML = `<h1>Characters</h1>`
    
    
    
    characters.forEach(character => {
        const config = {
            method: "GET",
            url: character,
            ['X-Requested-With']: 'XMLHttpRequest',
            
        }
        return axios(config)
        .then((res) => {
            const characterElement = document.createElement('div');
            characterElement.className = 'character';
            let characterId;
            let gender;
            res.data.url.length === 30 ? characterId = res.data.url.slice(28, 29) : characterId = res.data.url.slice(28, 30);

            
            if(res.data.gender === 'female') gender = String.fromCharCode(9792);
            else if(res.data.gender === 'male') gender = String.fromCharCode(9794);
            else gender = 'n/a';

            characterElement.innerHTML = `
            <img class = 'characterImage' src = 'img/${characterId}.png' alt = 'Image not found'><br>
            <span class = 'characterName'>${res.data.name}</span><br>
            <span class = 'characterInfo'>${res.data.birth_year} ${gender}</span>
            `
            container.append(characterElement);
        })
    })
}

function getPlanets (){
    const config = {
        method: "GET",
        url: BASE + 'planets/',
        params: {
            page: currentPage,
        }
    };

    const paginationContainer = document.querySelector('#paginationContainer');
    paginationContainer.innerHTML =`<button id="prev" class="pagination">Prev</button>
    <button id="next" class="pagination">Next</button>`;
    pagination ();

    const getPlanets = document.querySelector('#getPlanets');
    const planetsContainer = document.querySelector('.planetsContainer');
    if(event.target === getPlanets) planetsContainer.classList.toggle("active");

    return axios(config)
    .then((res) =>{
        return displayPlanetsList(res.data.results)
    })
    .catch(err => alert('Something went wrong!'))
}

function displayPlanetsList (planets){
    const planetsList = document.querySelector('.planetsList');
    
    planetsList.innerHTML = `<h1>Planets</h1>
    <h3>Page:${currentPage}</h3>`;

    planets.forEach(planet => {
        const planetElement = document.createElement('div');
        planetElement.innerHTML = `<span class='accordion'>${planet.name}</span>
        <ul class='panel'> 
            <li>Population: ${planet.population}</li>
            <li>Climate: ${planet.climate}</li>
            <li>Terrain: ${planet.terrain}</li>
            <li>Diameter: ${planet.diameter}</li>
            <li>Orbital period: ${planet.orbital_period}</li>
        </ul>`
        planetsList.append(planetElement);
    })

    let acc = document.querySelectorAll(".accordion");
        for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            let panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
        }
}

function pagination () {
    document.querySelector('#prev').addEventListener('click', ()=>{
        if(currentPage<=1) return;
        getPlanets(--currentPage)
    });
    document.querySelector('#next').addEventListener('click', ()=>{
        if(currentPage>=6) return;
        else getPlanets(++currentPage)
    });
}

function filmNumber(){
    const number = document.querySelector('#filmNumber').value;
     getInfo(number);
}

document.querySelector('#getInfo').addEventListener('click', getInfo);
document.querySelector('#getPlanets').addEventListener('click', getPlanets);
document.querySelector('#filmNumber').addEventListener('input', filmNumber);