const slider = document.querySelector('.slider');

const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
const indicatorParents = document.querySelector('.controls ul');

var sectionIndex = 0;

console.log(indicatorParents)


function setIndex(index){
    document.querySelector('.controls .selected').classList.remove('selected');
    // indicator.classList.add('selected');
    slider.style.transform = 'translate(' + (index) * -25 + '%)';
}


rightArrow.addEventListener('click', function(){
    sectionIndex = sectionIndex === 3 ? 0 : sectionIndex + 1;
    setIndex(sectionIndex);
    indicatorParents.children[sectionIndex].classList.add('selected');
})
leftArrow.addEventListener('click', function(){
    sectionIndex = sectionIndex === 0 ? 3 : sectionIndex - 1;
    setIndex(sectionIndex);
    indicatorParents.children[sectionIndex].classList.add('selected');
} )


document.querySelectorAll('.controls li').forEach(function(indicator, index){
    indicator.addEventListener('click', function(){
        setIndex(index);
        indicator.classList.add('selected');
    })
})