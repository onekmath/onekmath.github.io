const click = document.querySelector('.click');
const giftBox = document.querySelector('.gift-box');
const shadow = document.querySelector('.shadow');
const giftContainer = document.querySelector('.gift-container');
const text = document.querySelector('.text')
const man = document.querySelector('.man')
const fireworkContainer = document.querySelector('.firework-container');


click.addEventListener('click', () => {
    if (click.className == "click") {
        click.classList.add('active');
        giftBox.classList.add('active');
        shadow.classList.add('active');
        giftContainer.classList.add('active');
        text.classList.add('active');
        text.classList.remove('active2');
        man.classList.add('active');
        man.classList.remove('active2');
        fireworkContainer.classList.add('active');
    }
    else{
        click.classList.remove('active');
        giftBox.classList.remove('active');
        shadow.classList.remove('active');
        giftContainer.classList.remove('active');
        text.classList.remove('active');
        text.classList.add('active2');
        man.classList.remove('active');
        man.classList.add('active2');
        fireworkContainer.classList.remove('active');
    }
})