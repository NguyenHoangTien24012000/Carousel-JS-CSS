function renderCarousel(){
	var img1 ='', text1 ='', img2 ='', text2= '', img3 = '',text3 ='', img4 = '', text4= '';

	this.css=`* {
    margin: 0px;
    padding: 0px;
  }
  
  body {
    font-family: Arial, Helvetica, sans-serif;
    box-sizing: border-box;
  }
  
  .layout-carousel {
    width: 700px;
    background-color: #222222;
    margin: 50px auto;
    min-height: 400px;
    border-top: 5px solid #e96833;
    border-radius: 5px;
    overflow: hidden;
  }
  .layout-carousel .carousel-title h1 {
    margin: 20px;
    color: #fff;
  }
  .layout-carousel .carousel-title h1 span {
    color: #e96833;
  }
  .layout-carousel .carousel-container {
    width: 100%;
    padding-left: 20px;
    position: relative;
  }
  .layout-carousel .carousel-container .track {
    width: 100%;
    display: flex;
    transition: all 0.5s;
  }
  .layout-carousel .carousel-container .track .card-container {
    flex-shrink: 0;
    width: 250px;
    height: 300px;
    padding-right: 20px;
    box-sizing: border-box;
  }
  .layout-carousel .carousel-container .track .card-container .card-img {
    width: 100%;
    height: 50%;
  }
  .layout-carousel .carousel-container .track .card-container .card-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .layout-carousel .carousel-container .track .card-container .card-text {
    height: 50%;
    background-color: #fff;
  }
  .layout-carousel .carousel-container .track .card-container .card-text p {
    padding: 10px;
    color: #000;
    font-size: 18px;
    font-weight: 600;
  }
  .layout-carousel .carousel-container .controls .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    color: #fff;
    background-color: #e96833;
  }
  .layout-carousel .carousel-container .controls .arrow.left {
    left: -10px;
    font-size: 30px;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border: 1px solid #e96833;
    border-radius: 50%;
    display: none;
  }
  .layout-carousel .carousel-container .controls .arrow.right {
    top: 85px;
    right: 19px;
    font-size: 30px;
    width: 35px;
    height: 80px;
    line-height: 80px;
    text-align: center;
    border: 1px solid #e96833;
    border-radius: 5px 0 0 5px;
  }
  .layout-carousel .carousel-container .controls ul {
    position: absolute;
    top: -40px;
    right: 40px;
    list-style: none;
    display: flex;
  }
  .layout-carousel .carousel-container .controls ul li {
    width: 10px;
    height: 10px;
    background-color: #404040;
    border-radius: 50%;
    margin: 5px;
    cursor: pointer;
  }
  .layout-carousel .carousel-container .controls ul li.selected {
    background-color: #e96833;
  }
  /*# sourceMappingURL=styleCarousel.css.map */`;
	this.html=`<div class="layout-carousel">
    <div class="carousel-title">
        <h1 class="title-brand"><span>e</span>Magazine</h1>
    </div>
    <div class="content-carousel">
        <div class="carousel-container">
            <div class="track">
                <div class="card-container">
                    <div class="card-img">
                        <img src="${img1}"
                            alt="1">
                    </div>
                    <div class="card-text">
                        <p>${text1}</p>
                    </div>
                </div>
                <div class="card-container">
                    <div class="card-img">
                        <img src="${img2}"
                            alt="2">
                    </div>
                    <div class="card-text">
                        <p>${text2}</p>
                    </div>
                </div>
                <div class="card-container">
                    <div class="card-img">
                        <img src="${img3}"
                            alt="3">
                    </div>
                    <div class="card-text">
                        <p>${text3}</p>
                    </div>
                </div>
                <div class="card-container">
                    <div class="card-img">
                        <img src="${img4}"
                            alt="4">
                    </div>
                    <div class="card-text">
                        <p>${text4}</p>
                    </div>
                </div>
            <div class="controls">
                <span class="arrow left">&lt;</span>
                <span class="arrow right">&rarr;</span>
                <ul>
                </ul>
            </div>
        </div>
    </div>
</div>`;
	document.querySelector('body').innerHTML = `<style>${this.css}</style>${this.html}`;
}
renderCarousel()

function jsCarousel(){
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

right.addEventListener('click', () => {


    if (count === numberItem - numberItemScreen - 1) {
        count = 0;
        setIndex(count);
        indicatorParents.children[count].classList.add('selected');
    }else{
        count += 1;
        setIndex(count);
        indicatorParents.children[count].classList.add('selected');
    }
})

left.addEventListener('click', () => {
    // count = count === 0 ? numberItem - numberItemScreen : count -= 1;
    if(count === 0){
        count = numberItem - numberItemScreen - 1;
        setIndex(count);
        indicatorParents.children[count].classList.add('selected');
    }else{
        count -= 1;
        setIndex(count);
        indicatorParents.children[count].classList.add('selected');
    }
})



function createNodeChildeLi() {
    for (let i = 0; i < numberItem - numberItemScreen; i++) {
        var li = document.createElement("li");
        document.querySelector('.controls ul').appendChild(li);
    }
    document.querySelectorAll('.controls li')[0].classList.add('selected');
}
createNodeChildeLi();


document.querySelectorAll('.controls li').forEach(function (indicator, index) {
    indicator.addEventListener('click', function () {
        document.querySelector('.controls .selected').classList.remove('selected');
        track.style.transform = `translateX(-${cardWidth * index}px)`;
        indicator.classList.add('selected');
    })
})

function timeCarousel(){
    if (count === numberItem - numberItemScreen - 1) {
        count = 0;
        setIndex(count);
        indicatorParents.children[count].classList.add('selected');
    }else{
        count += 1;
        setIndex(count);
        indicatorParents.children[count].classList.add('selected');
    }
}

setInterval(timeCarousel, 3000);

}
jsCarousel();