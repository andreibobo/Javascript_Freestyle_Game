const cards = document.querySelectorAll('.memory-card')


let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;


function flipCard() {
    if (lockBoard) return
    if (this === firstCard) return;

    this.classList.toggle('flip')

    if(!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
    } else {
        secondCard = this;

        if (firstCard.dataset.cardtype === secondCard.dataset.cardtype) {
              firstCard.removeEventListener('click', flipCard);
              secondCard.removeEventListener('click', flipCard);

              resetBoard();
        } else {
            lockBoard = true;
            setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');

            resetBoard();
            }, 1000);
        }
        
    }
}


function resetBoard() {
    hasFlippedCard = false;
    lockBoard = false;
    firstCard = null;
    secondCard = null;
}


(function shuffle() {
    cards.forEach(card => {
        let randomPosition = Math.floor(Math.random() * 12);
        card.style.order = randomPosition;
    });
})();


cards.forEach(card => card.addEventListener('click' , flipCard));
