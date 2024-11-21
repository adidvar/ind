elements = document.getElementsByClassName("move-wrapper");


addEventListener("scroll", (event) => {
    mheight = window.innerHeight;
    mwidth = window.innerWidth;

    Array.from(elements).forEach((e,i) => {
        const rect = e.getBoundingClientRect();

        wpos = (rect.width/2 +  rect.x) /mwidth;



        way = true;
        if(Math.random() > wpos)
            way=false;

        if (rect.y + rect.height < 20 ) {
            e.style.transform = `translateX(${(way ? 1 : -1) *mwidth/4.0}px)`;
            e.style.opacity = "0.0";
        } else if(rect.y - mheight > 20 ) {
            e.style.transform = `translateX(${(way ? 1 : -1) *mwidth/4.0}px)`;
            e.style.opacity = "0.0";
        } else {
            e.style.transform = `translateX(${0}px)`;
            e.style.opacity = "1.0";
        }
    });

});


const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function autoScroll() {
    currentIndex = (currentIndex + 1) % slides.length;

    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(-${currentIndex * 100}%)`;
    });
}

setInterval(autoScroll, 3000);
