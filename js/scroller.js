elements = document.getElementsByClassName("width-wrapper");


addEventListener("scroll", (event) => {
    mheight = window.innerHeight;
    mwidth = window.innerWidth;

    Array.from(elements).forEach((e,i) => {
        const rect = e.getBoundingClientRect();

        if (rect.y + rect.height < 20 ) {
            e.style.transform = `translateX(${((i%2==0) ? 1: -1) *mwidth}px)`;
        } else if(rect.y - mheight > 20 ) {
            e.style.transform = `translateX(${((i%2==0) ? 1: -1) *mwidth}px)`;
        } else {
            e.style.transform = `translateX(${0}px)`;
        }
    });

});