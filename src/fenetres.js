import Window from "./js/windows.js";

const windowElements = document.querySelectorAll(".windows li");
const windowList = [];

window.maxZIndex = 0;

windowElements.forEach((el) => {
  windowList.push(new Window(el));
});

window.addEventListener("mouseup", () => {
  windowList.forEach((win) => {
    win.isGrabbed = false;
    win.el.classList.remove("is-grabbed");
  });
});

window.addEventListener("touchend", () => {
    windowList.forEach((win) => {
      win.isGrabbed = false;
      win.el.classList.remove("is-grabbed");
    });
  });

window.addEventListener("mousemove", (e) => {
  windowList.forEach((win) => {
    if (win.isGrabbed) {
      win.el.style.transform = `translate3d(${
        e.clientX - win.grabOffset.x
      }px, ${e.clientY - win.grabOffset.y}px, 0)`;
    }
  });
});

window.addEventListener("touchmove", (e) => {
    windowList.forEach((win) => {
      if (win.isGrabbed) {
        win.el.style.transform = `translate3d(${
          e.clientX - win.grabOffset.x
        }px, ${e.clientY - win.grabOffset.y}px, 0)`;
      }
    });
  });

window.addEventListener("resize", () => {
  windowList.forEach((win) => {
    win.setWindowPosition();
  });
});

var images = document.querySelectorAll('.windows li')

if (window.matchMedia("(max-width: 600px)").matches == true)  {
  console.log('ddd')
  images.forEach(image => {
   
    var datawidth = image.getAttribute("data-width");
    var dataheight = image.getAttribute("data-height");  
    image.style.width = (datawidth)/1.5 + 'px'
    image.style.height = (dataheight)/1.5 + 'px'
  })
}
  
