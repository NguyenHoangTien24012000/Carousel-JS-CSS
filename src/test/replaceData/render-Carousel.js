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
                                    <img src="https://kienthuctonghop.vn/wp-content/uploads/2021/04/timothee-Chalamet-la-ai.jpg"
                                        alt="1">
                                </div>
                                <div class="card-text">
                                    <p>V???n mang phong c??ch ?????p, hi???n ?????i, ho??n thi???n t??? m??? nh?? c??c chi???c m??y t??nh Surface kh??c c???a Microsoft</p>
                                </div>
                        </div>
                    </div>
                    <div class="card-container">
                        <div class="card">
        
                            <div class="card-img">
                                <img src="https://media-cdn.laodong.vn/storage/newsportal/2021/3/24/892486/Rose-Blackpink-Sinh-.jpg?w=720&crop=auto&scale=both"
                                    alt="1">
                            </div>
                            <div class="card-text">
                                <p>Vi???c s??? d???ng smartphone ng??y nay kh??ng ch??? d???ng l???i ??? nghe, g???i, xem, ch??i n???a m?? c??n d??ng n?? nh?? m???t </p>
                            </div>
                        </div>
                    </div>
                    <div class="card-container">
                        <div class="card">
        
                            <div class="card-img">
                                <img src="https://kienthuctonghop.vn/wp-content/uploads/2021/04/timothee-Chalamet-la-ai.jpg"
                                    alt="1">
                            </div>
                            <div class="card-text">
                                <p>B??? GTVT ban h??nh h?????ng d???n t???m th???i v??? vi???c ??i l???i c???a ng?????i d??n, qua ???? c??c ?????a ph????ng ch??? c???n l??m x??t nghi???m</p>
                            </div>
                        </div>
                    </div>
                    <div class="card-container">
                        <div class="card">
        
                            <div class="card-img">
                                <img src="https://media-cdn.laodong.vn/storage/newsportal/2021/3/24/892486/Rose-Blackpink-Sinh-.jpg?w=720&crop=auto&scale=both"
                                    alt="1">
                            </div>
                            <div class="card-text">
                                <p>OPPO Reno6 Pro 5G t???i Vi???t Nam l?? thi???t b??? cao c???p nh???t thu???c d??ng Reno th??? h??? th??? 6. ???????c thi???t k??? cho</p>
                            </div>
                        </div>
                    </div>
                    <div class="card-container">
                        <div class="card">
        
                            <div class="card-img">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Timoth%C3%A9e_Chalamet_in_2018.jpg"
                                    alt="1">
                            </div>
                            <div class="card-text">
                                <p>????y l?? review v??? M??y in Canon MF445Dw ??a ch???c n??ng - B?? trong t???m gi?? c???a m??nh. M??nh mua n?? v???i gi?? 10</p>
                            </div>
                        </div>
                    </div>
                    <div class="card-container">
                        <div class="card">
        
                            <div class="card-img">
                                <img src="https://media-cdn.laodong.vn/storage/newsportal/2021/8/27/947005/Ronaldo.jpg"
                                    alt="1">
                            </div>
                            <div class="card-text">
                                <p>Tin ?????n tr?????c s??? ki???n Apple v??? MacBook Pro m???i: kh??ng c?? Touch Bar, 64GB RAM, MagSafe,...</p>
                            </div>
                        </div>
                    </div>
                    <div class="card-container">
                        <div class="card">
        
                            <div class="card-img">
                                <img src="https://cdnimg.vietnamplus.vn/t870/uploaded/mzdic/2021_09_11/ronaldoghibanmu1.jpg"
                                    alt="1">
                            </div>
                            <div class="card-text">
                                <p>Tin ?????n tr?????c s??? ki???n Apple v??? MacBook Pro m???i: kh??ng c?? Touch Bar, 64GB RAM, MagSafe,...</p>
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