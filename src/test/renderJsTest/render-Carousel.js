function renderCarousel(){
	var img1 ='%img1%', text1 ='%text1%', img2 ='%img2%', text2= '%text2%', img3 = '%img3%',text3 ='%text3%', img4 = '%img4%', text4= '%text4%', img5 ='%img5%', text5= '%text5%', img6= '%img6%', text6 = '%text6%', img7 = '%img7%', text7= '%text7%';

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
  border-radius: 5px;
}
.layout-carousel .carousel-container .track .card-container .card {
  width: 100%;
  height: 100%;
}
.layout-carousel .carousel-container .track .card-container .card .card-img {
  width: 100%;
  height: 50%;
}
.layout-carousel .carousel-container .track .card-container .card .card-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.layout-carousel .carousel-container .track .card-container .card .card-text {
  height: 50%;
  background-color: #fff;
}
.layout-carousel .carousel-container .track .card-container .card .card-text p {
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
	this.html=`<div class="carouselJS">
    <div class="layout-carousel">
        <div class="carousel-title">
            <h1 class="title-brand"><span>e</span>Magazine</h1>
        </div>
        <div class="content-carousel">
            <div class="carousel-container">
                <div class="track">
                    <div class="card-container">
                        <div class="card">
                                <div class="card-img">
                                    <img src="${img1}"
                                        alt="1">
                                </div>
                                <div class="card-text">
                                    <p>${text1}</p>
                                </div>
                        </div>
                    </div>
                    <div class="card-container">
                        <div class="card">
        
                            <div class="card-img">
                                <img src="${img2}"
                                    alt="1">
                            </div>
                            <div class="card-text">
                                <p>${text2}</p>
                            </div>
                        </div>
                    </div>
                    <div class="card-container">
                        <div class="card">
        
                            <div class="card-img">
                                <img src="${img3}"
                                    alt="1">
                            </div>
                            <div class="card-text">
                                <p>${text3}</p>
                            </div>
                        </div>
                    </div>
                    <div class="card-container">
                        <div class="card">
        
                            <div class="card-img">
                                <img src="${img4}"
                                    alt="1">
                            </div>
                            <div class="card-text">
                                <p>${text4}</p>
                            </div>
                        </div>
                    </div>
                    <div class="card-container">
                        <div class="card">
        
                            <div class="card-img">
                                <img src="${img5}"
                                    alt="1">
                            </div>
                            <div class="card-text">
                                <p>${text5}</p>
                            </div>
                        </div>
                    </div>
                    <div class="card-container">
                        <div class="card">
        
                            <div class="card-img">
                                <img src="${img6}"
                                    alt="1">
                            </div>
                            <div class="card-text">
                                <p>${text6}</p>
                            </div>
                        </div>
                    </div>
                    <div class="card-container">
                        <div class="card">
        
                            <div class="card-img">
                                <img src="${img7}"
                                    alt="1">
                            </div>
                            <div class="card-text">
                                <p>${text7}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="controls">
                    <span class="arrow left">&lt;</span>
                    <span class="arrow right">&gt;</span>
                    <ul>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>`;
	document.querySelector('body').innerHTML = `<style>${this.css}</style>${this.html}`;
}
renderCarousel()

function jsCarousel(){
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



}
jsCarousel();