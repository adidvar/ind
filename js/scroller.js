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


document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.btng').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = button.getAttribute('data-product-id');
            const productName = button.getAttribute('data-product-name');
            
            const messageContainer = document.createElement('div');
            messageContainer.classList.add('message-container');
            document.body.appendChild(messageContainer);

            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            
            if (cart.includes(productId)) {
                messageContainer.textContent = `${productName} вже є в кошику!`;
                messageContainer.classList.add('error');
            } else {
                cart.push(productId);
                localStorage.setItem('cart', JSON.stringify(cart));
                messageContainer.textContent = `${productName} додано до кошика!`;
                messageContainer.classList.add('success');
            }

            messageContainer.style.position = 'fixed';
            messageContainer.style.right = '20px';
            messageContainer.style.padding = '15px 25px';
            messageContainer.style.borderRadius = '8px';
            messageContainer.style.fontFamily = '"Sofia Sans", sans-serif';
            messageContainer.style.fontSize = '1.1rem';
            messageContainer.style.fontWeight = '600';
            messageContainer.style.boxShadow = '0px 6px 12px rgba(0, 0, 0, 0.2)';
            messageContainer.style.transition = 'opacity 0.5s ease';
            messageContainer.style.zIndex = '9999';

            const allMessages = document.querySelectorAll('.message-container');
            const offset = allMessages.length * 70;

            messageContainer.style.top = `${20 + offset}px`;

            messageContainer.classList.add('slide-in');

            setTimeout(() => {
                messageContainer.classList.add('fade-out');
                setTimeout(() => {
                    messageContainer.remove(); 
                }, 500);
            }, 3000);
        });
    });

    window.addEventListener('beforeunload', () => {
        localStorage.removeItem('cart');
    });
});
