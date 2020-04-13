function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if(!audio) return;//pare a função se o elemento for invalido
    audio.currentTime = 0;//recomeçar o audio para tocar
    audio.play();
    key.classList.add('playing');
}
function removeTransition(e){
    if(e.propertyName !== 'transform') return;//ignora se isto nao sofreu um transform
    this.classList.remove('playing');
}

const keys = document.querySelectorAll(".key");

keys.forEach(key=>key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown",playSound);