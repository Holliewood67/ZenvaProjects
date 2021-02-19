var firstButton = document.getElementsByClassName('card-button')[0];
var firstAnswer = document.getElementsByClassName('card-answer')[0];

firstButton.addEventListener('click', function(event) {
    if (firstButton.innerHTML == 'Show') {
        firstAnswer.style.display = 'block';
        firstButton.innerHTML = 'Hide';
    } else if (firstButton.innerHTML == 'Hide') {
        firstAnswer.style.display = 'none';
        firstButton.innerHTML = 'Show';
    }
})