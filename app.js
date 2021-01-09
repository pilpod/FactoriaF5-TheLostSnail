
// Elementos documento html
let body = document.querySelector('body');
let btnSubmitDay = document.querySelector('#btn-submitDay');
let btnSubmitNight = document.querySelector('#btn-submitNight');
let btnReset = document.querySelector('#reset');
let daysCount = document.querySelector('#daysCount');
let meters = document.querySelector('#meters');
let result = document.querySelector('#result');
let snail = document.querySelector('.snail');

// Variables
let topSnail = 550;
let daysPassed = 0;
let countMeter = 0;
let btnActive = true;

btnSubmitNight.setAttribute('disabled', '');

function WasEscaped() {
    result.innerHTML = 'The snail has arrived to the top and gone';
    result.style.color = 'black';
    snail.hidden = true;
    
    btnSubmitDay.setAttribute('disabled', '');
    btnSubmitNight.setAttribute('disabled', '');
    btnReset.hidden = false;
}

function SnailUp() {
    if(topSnail > 100){
        topSnail -= 270;
        snail.style.top = topSnail + 'px';
        daysPassed++;
        daysCount.innerHTML = 'Han pasado: ' + daysPassed + ' días';
        countMeter += 3;
        meters.innerHTML = 'Ha recorrido ' + countMeter + 'm';

        btnSubmitDay.setAttribute('disabled', '');
        btnSubmitNight.removeAttribute('disabled', '');

        if(topSnail == 100) {
            WasEscaped();
        }
    }
};

function SnailDown() {
    if(topSnail > 100) {
        topSnail += 180;
        snail.style.top = topSnail + 'px';
        countMeter -= 2;
        meters.innerHTML = 'Ha recorrido ' + countMeter + 'm';

        btnSubmitDay.removeAttribute('disabled', '');
        btnSubmitNight.setAttribute('disabled', '');
    }
}

function PassDay() {
    SnailUp();
    body.style.backgroundImage = 'url(https://images.pexels.com/photos/53594/blue-clouds-day-fluffy-53594.jpeg?cs=srgb&dl=pexels-pixabay-53594.jpg&fm=jpg)';  
    
    btnActive = false;
}

function PassNight() {
    SnailDown();

    body.style.backgroundImage = 'url(https://viajes.nationalgeographic.com.es/medio/2020/04/01/6-via-lactea_57769b72_1254x836.jpg)';
    daysCount.style.color = 'white';
    meters.style.color = 'white';
    result.style.color = 'white';
    
    btnActive = true;
}

function Reset() {
    location.reload();
}


btnSubmitDay.addEventListener('click', PassDay);
btnSubmitNight.addEventListener('click', PassNight);
btnReset.addEventListener('click', Reset);