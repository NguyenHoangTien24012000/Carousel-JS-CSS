function renderCarousel(){
	var img1 ='', text1 ='', img2 ='', text2= '', img3 = '',text3 ='', img4 = '', text4= '';

	this.css=`%%css%%`;
	this.html=`%%html%%`;
	document.querySelector('body').innerHTML = `<style>${this.css}</style>${this.html}`;
}
renderCarousel()

function jsCarousel(){
	%%js%%
}
jsCarousel();