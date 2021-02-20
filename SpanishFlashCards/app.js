// var firstButton = document.getElementsByClassName('card-button')[0];
// var firstAnswer = document.getElementsByClassName('card-answer')[0];

// firstButton.addEventListener('click', function(event) {
    // if (firstButton.innerHTML == 'Show') {
    //     firstAnswer.style.display = 'block';
    //     firstButton.innerHTML = 'Hide';
    // } else if (firstButton.innerHTML == 'Hide') {
    //     firstAnswer.style.display = 'none';
    //     firstButton.innerHTML = 'Show';
    // }
// })

var cards = document.getElementsByClassName('card');

for (var cardIndex in cards) {
    var button = cards[cardIndex].querySelector('.card-button');
    button.addEventListener('click', function(event){
        var currentButton = event.target;
        var currentCard = currentButton.parentNode;
        var currentAnswer = currentCard.querySelector('.card-answer');

        if (currentButton.innerHTML == 'Show') {
            currentAnswer.style.display = 'block';
            currentButton.innerHTML = 'Hide';
        } else if (currentButton.innerHTML == 'Hide') {
            currentAnswer.style.display = 'none';
            currentButton.innerHTML = 'Show';
        }
    
    })
}