// var slideIndex = 1;


// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName(`mySlides`);
//   var dots = document.getElementsByClassName(`dot`);
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
// }

// var boutons = document.querySelectorAll(`.boutons`)

// boutons.forEach( bouton => {
//     var nbIndex = bouton.getAttribute("nbIndex")

//     bouton.addEventListener('click', () => {

//         if (bouton.classList.contains('prev') == true) {
//             plusSlides(-1, nbIndex)
//         }
//         else {
//             plusSlides(1)
//         }
//     })
// })


// var dots = document.querySelectorAll('.dot')


// dots.forEach( dot => {
//     dot.addEventListener('click', () => {
//         var dotRange = dot.getAttribute('range');

//         currentSlide(dotRange)
//     })
// })

var next3 = document.querySelectorAll('.swiper-button-next3')
var prev3 = document.querySelectorAll('.swiper-button-prev3')
var slides = document.querySelectorAll('.item')

let currentZIndexPerso = 100;


next3.forEach(
    next => {
        next.addEventListener('click', () => {
         
            var slideActive = document.querySelector('.swiper3 .swiper-slide-active')
            var index = parseInt(slideActive.getAttribute('index'))
    
                slides[index+1].style.opacity=1
               slides[index+1].style.zIndex=currentZIndexPerso++;
                // next3[index+3].style.display="block"
        })
    }
)

prev3.forEach(
    prev => {
        prev.addEventListener('click', () => {
            var slideActive = document.querySelector('.swiper3 .swiper-slide-active')
            var index = parseInt(slideActive.getAttribute('index'))
    
                slides[index-1].style.opacity=1
               slides[index-1].style.zIndex=currentZIndexPerso++;
                // next3[index+3].style.display="block"
        })
    }
)