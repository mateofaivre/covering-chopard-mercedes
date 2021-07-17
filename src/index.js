const nav = document.querySelector('nav');
const menu = document.querySelector('.menu');


const listLi = document.querySelectorAll('.menu ul li a');
var slides = document.querySelectorAll('.item')
const listImage = document.querySelectorAll('.menu .image .item');

var next3 = document.querySelectorAll('.swiper-button-next3')

let currentZIndex = 100;
let lastSeen = listLi[0];
let lastSeen2 = slides[0];



listLi.forEach(li => {
    li.addEventListener('mouseenter', () => {

        const img = [...listImage].find(img => {
            return img.dataset.projectNo === li.dataset.projectNo
        })

        if(lastSeen === li) return

        img.style.transition = null

        img.style.opacity = 0;
        img.style.zIndex = currentZIndex++;

        setTimeout(() => {
            img.style.opacity = 1;
            img.style.transition = "opacity 700ms ease"
        }, 1)

        lastSeen = li;
    })
})

const cursor = document.querySelector("#cursor");

document.body.addEventListener("mousemove", (e) => {
  const coord = {
    x: e.pageX,
    y: e.pageY
  };

  cursor.style.transform = `translate3D(calc(${coord.x}px - 50%), calc(${coord.y}px - 50%), 0)`;
});

const listItems = document.querySelectorAll(".menu li a");

// updateListItemRotation();

document.body.addEventListener("wheel", (event) => {
  const coord = {
    x: event.pageX,
    y: event.pageY
  };
  cursor.style.transform = `translate3D(calc(${coord.x}px - 50%), calc(${coord.y}px - 50%), 0)`;

  // updateListItemRotation();
});

var body = document.querySelector('body')
var image = document.querySelector('.image')
image.addEventListener('mouseenter', () => {
  cursor.style.display="none"
  body.style.cursor="auto"
})

image.addEventListener('mouseleave', () => {
  cursor.style.display="block"
  body.style.cursor="none"
})


// CHANGE COLOR TAB 
var liTab = document.querySelectorAll('.navigation li')

liTab.forEach(tab => {
  tab.addEventListener('click', () => {
    if (tab.style.backgroundColor != "rgb(5,5,5)") {
      for (let index = 0; index < liTab.length; index++) {
        liTab[index].style.backgroundColor="#1c1c1c"        
      }
      tab.style.backgroundColor= "rgb(5,5,5)";
    }
  })
 
})

var logosHeader = document.querySelector('.logos')

logosHeader.addEventListener('click', () => {
  liTab.forEach(tab => {
    tab.style.backgroundColor="#1c1c1c"
  })
})

