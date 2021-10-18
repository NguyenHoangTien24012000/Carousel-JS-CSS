const left = document.querySelector('.left');
const right = document.querySelector('.right');


const track = document.querySelector('.track');

const cardWidth = document.querySelector('.card-container').offsetWidth;

let count = 0;

const numberItem = document.querySelectorAll('.track .card-container').length;

const widthAllItem = document.querySelector('.carousel-container').offsetWidth;
const widthScreen = document.querySelector('.card-container').offsetWidth
const numberItemScreen = Math.ceil(widthAllItem / widthScreen);
const indicatorParents = document.querySelector('.controls ul');

function setIndex(index) {
    document.querySelector('.controls .selected').classList.remove('selected');
    // indicator.classList.add('selected');
    track.style.transform = `translateX(-${cardWidth * index}px)`;
}

function createNodeChildeLi() {
    for (let i = 0; i < numberItem - numberItemScreen; i++) {
        var li = document.createElement("li");
        document.querySelector('.controls ul').appendChild(li);
    }
    document.querySelectorAll('.controls li')[0].classList.add('selected');
}


function timeCarousel() {
    if (count === numberItem - numberItemScreen - 1) {
        count = 0;
        setIndex(count);
        indicatorParents.children[count].classList.add('selected');
    } else {
        count += 1;
        setIndex(count);
        indicatorParents.children[count].classList.add('selected');
    }
}

function carouselJs(right, left, indicatorParents, count,) {
    right.addEventListener('click', () => {


        if (count === numberItem - numberItemScreen - 1) {
            count = 0;
            setIndex(count);
            indicatorParents.children[count].classList.add('selected');
        } else {
            count += 1;
            setIndex(count);
            indicatorParents.children[count].classList.add('selected');
        }
    })

    left.addEventListener('click', () => {
        // count = count === 0 ? numberItem - numberItemScreen : count -= 1;
        if (count === 0) {
            count = numberItem - numberItemScreen - 1;
            setIndex(count);
            indicatorParents.children[count].classList.add('selected');
        } else {
            count -= 1;
            setIndex(count);
            indicatorParents.children[count].classList.add('selected');
        }
    })

    createNodeChildeLi();

    document.querySelectorAll('.controls li').forEach(function (indicator, index) {
        indicator.addEventListener('click', function () {
            document.querySelector('.controls .selected').classList.remove('selected');
            track.style.transform = `translateX(-${cardWidth * index}px)`;
            indicator.classList.add('selected');
        })
    })

}
setInterval(timeCarousel, 3000);
carouselJs(right, left, indicatorParents, count);














