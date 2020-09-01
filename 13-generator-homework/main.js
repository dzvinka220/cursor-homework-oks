const idButton = document.querySelector('.idButton');
const idText = document.querySelector('#idText');

function* createIdGenerator(){
    let id = 0;
    while(true){
        yield ++id;
    }
}

const idGenerator = createIdGenerator();
idButton.addEventListener('click', function (){
    idText.innerHTML = ` ${idGenerator.next().value}`;
    idText.classList.add('active')

})

/////////////////////////////////////////////////////////////
const upButton = document.querySelector('.fontUp');
const downButton = document.querySelector('.fontDown');
const fontText = document.querySelector('#fontText');
const fontSize = document.querySelector('#fontSize');


function* newFontGenerator(size) {
    while(true){
        let setSize = yield size;
        if(setSize == 'up') size +=2;
        else if(setSize == 'down') size -=2;
        else size;
    }
}
  
const fontGenerator = newFontGenerator(14);
  
upButton.addEventListener('click', function (){
    fontText.style.fontSize = fontGenerator.next('up').value + 'pt'; 
    fontSize.innerHTML = fontText.style.fontSize;
})
downButton.addEventListener('click', function (){
    fontText.style.fontSize = fontGenerator.next('down').value + 'pt'; 
    fontSize.innerHTML = fontText.style.fontSize;
})





  


