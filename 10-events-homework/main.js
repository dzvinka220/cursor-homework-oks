const globalDiv = document.getElementById('globalDiv');

function callback (event){
    let buttons = document.getElementsByClassName('key');
    [...buttons].forEach(button => button.classList.remove('newKey'));
       
    const buttonId = document.getElementById(event.code);
    if(buttonId){
        buttonId.classList.add('newKey');
        const audio = buttonId.querySelector("audio");
        audio.play();}
    else if (event.target.matches('.key')){
            console.log('click', event.target);
            //const closestTarget = event.target.closest('.key');
            event.target.classList.add('newKey');;
            const audio = event.target.querySelector("audio");
            audio.play();
        }
    
}


 document.querySelector('.keys').addEventListener('click', callback)
document.addEventListener('keydown', callback)


