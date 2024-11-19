elements = document.getElementsByClassName("move-wrapper");


addEventListener("scroll", (event) => {
    mheight = window.innerHeight;
    mwidth = window.innerWidth;

    Array.from(elements).forEach((e,i) => {
        const rect = e.getBoundingClientRect();

        way = true;

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