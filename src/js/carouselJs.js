const $ = function (selector) {
    
    let slider = document.querySelector(`.${selector}`);
    
    let track = slider.querySelector('.track');

    //Kich thuoc the con
    let cardWidth = slider.querySelector('.card-container').offsetWidth;
    //So luong the con
    let numberItem = slider.querySelectorAll('.track .card-container').length;
    //Kich thuoc tong so the con
    let widthAllItem = slider.querySelector('.carousel-container').offsetWidth;
    //kich thuoc carousel
    let widthScreen = slider.querySelector('.card-container').offsetWidth;
    //So luong ul li;
    let numberItemScreen = Math.ceil(widthAllItem / widthScreen);

    let indicatorParents = slider.querySelector('.controls ul');

    let current = 0;


    function next() {
        slider.querySelector('.right').addEventListener('click', () => {
            if (current === numberItem - numberItemScreen - 1) {
                current = 0;
                setIndex(current);
                indicatorParents.children[current].classList.add('selected');
            } else {
                current += 1;
                setIndex(current);
                indicatorParents.children[current].classList.add('selected');
            }
          
        })
    }
    function prev() {
        slider.querySelector('.left').addEventListener('click', () => {
            // current = current === 0 ? numberItem - numberItemScreen : current -= 1;
            if (current === 0) {
                current = numberItem - numberItemScreen - 1;
                setIndex(current);
                indicatorParents.children[current].classList.add('selected');
            } else {
                current -= 1;
                setIndex(current);
                indicatorParents.children[current].classList.add('selected');
            }
        })
    }

    function setIndex(index) {
        slider.querySelector('.controls .selected').classList.remove('selected');
        // indicator.classList.add('selected');
        track.style.transform = `translateX(-${cardWidth * index}px)`;
        current = index;
    }

    function createNodeChildLi() {
        for (let i = 0; i < numberItem - numberItemScreen; i++) {
            var li = document.createElement("li");
            slider.querySelector('.controls ul').appendChild(li);
        }
        slider.querySelectorAll('.controls li')[0].classList.add('selected');
    }

    function timeCarousel() {
        if (current === numberItem - numberItemScreen - 1) {
            current = 0;
            setIndex(current);
            indicatorParents.children[current].classList.add('selected');
        } else {
            current += 1;
            setIndex(current);
            indicatorParents.children[current].classList.add('selected');
        }
    }

    function clickNodeChild(){
        slider.querySelectorAll('.controls li').forEach(function (indicator, index) {
            indicator.addEventListener('click', function () {
                slider.querySelector('.controls .selected').classList.remove('selected');
                track.style.transform = `translateX(-${cardWidth * index}px)`;
                indicator.classList.add('selected');
                current =index;
            })
        })
    }

    setInterval(timeCarousel, 3000);
    // console.log(current);
    return next(), prev(), createNodeChildLi(), clickNodeChild();
}

$('carouselJS');


