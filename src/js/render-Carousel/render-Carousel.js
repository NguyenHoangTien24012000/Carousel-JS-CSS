function renderCarousel(){
	var img1 ='%img1%', text1 ='%text1%', img2 ='%img2%', text2= '%text2%', img3 = '%img3%',text3 ='%text3%', img4 = '%img4%', text4= '%text4%', img5 ='%img5%', text5= '%text5%', img6= '%img6%', text6 = '%text6%', img7 = '%img7%', text7= '%text7%';

	this.css=`%%css%%`;
	this.html=`%%html%%`;
	document.querySelector('body').innerHTML = `<style>${this.css}</style>${this.html}`;
}
renderCarousel()

function jsCarousel(){
	%%js%%
}
jsCarousel();