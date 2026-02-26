
$(document).ready(function () {
    setTimeout(function () {
        $(".start-moving").addClass("start-anime");
        $("header").addClass("header-anime");
    }, 900);
});

const revealOnScroll = () => {
    const elementsToReveal = document.querySelectorAll('.animate-on-scroll');
    const triggerPoint = window.innerHeight * 0.85;

    elementsToReveal.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < triggerPoint) {
            element.classList.add('visible');
        }
    });
};

// 🔄 Attach listeners
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);






$(document).ready(function () {
    $('.open-menu').on('click', function () {
        $(this).toggleClass('close-menu');
        if ($(this).hasClass('close-menu')) {
            $('.menu-mobile').addClass('transition-menu');
            $('body').addClass('body_fix');
        } else {
            $('body').removeClass('body_fix');
            $('.menu-mobile').removeClass('transition-menu');
        }
    });
    $('.nav-menu a').on('click', function () {
        $('body').removeClass('body_fix');
        $('.menu-mobile').removeClass('transition-menu');
        $('.open-menu').removeClass('close-menu');
    })
});






$('.menu-scroll a').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
        let $target = $(this.hash);
        $target = $target.length && $target
            || $('[name=' + this.hash.slice(1) +']');
        if ($target.length) {
            let targetOffset = $target.offset().top-130;
            $('html,body')
                .animate({scrollTop: targetOffset}, 1000);
            return false;
        }
    }
});











let followingProfe = new Swiper(".following-slider", {
    slidesPerView: 1,
    spaceBetween: 12,
    breakpoints: {
        1199: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 30,
            allowTouchMove: false,
        },
        1020: {
            slidesPerView: 2.1,
            slidesPerGroup: 1,
            spaceBetween: 20,
            loop: true,
        },
        320: {
            slidesPerView: 1.1,
            slidesPerGroup: 1,
            spaceBetween: 10,
            loop: true,

        },
    },

});










let reviewsProfe = new Swiper(".reviews-slider", {
    slidesPerView: 2,
    spaceBetween: 12,
    loop: true,
    breakpoints: {
        1020: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        767: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 10,
        },
        320: {
            slidesPerView: 1.1,
            slidesPerGroup: 1,
            spaceBetween: 10,
        },
    },

});



let systemSwiper = new Swiper(".level-system-slider", {
    slidesPerView: 1,
    spaceBetween: 16,
    speed: 1000,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    breakpoints: {
        1020: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        767: {
            slidesPerView: 1.1,
            slidesPerGroup: 1,
            spaceBetween: 10,
        },
        320: {
            slidesPerView: 1.1,
            slidesPerGroup: 1,
            spaceBetween: 10,
        },
    },
    pagination: {
        el: ".level-pagination",
        clickable: true,
    }
});





document.addEventListener("DOMContentLoaded", function () {
    const scrollContainer = document.querySelector('.caught-cycle-scr');
    const circle = document.querySelector('.caught-circle-pic img');
    const boxes = document.querySelectorAll('.caught-cycle-box');

    let stepWidth = boxes[0].offsetWidth;

    scrollContainer.addEventListener('scroll', function () {
        let scrollLeft = scrollContainer.scrollLeft;

        // текущий индекс блока
        let index = Math.round(scrollLeft / stepWidth);

        // поворот по 90° и зацикливание
        let rotation = (index % 4) * 90;

        circle.style.transform = `rotate(${rotation}deg)`;
    });

    window.addEventListener('resize', () => {
        stepWidth = boxes[0].offsetWidth;
    });
});




$('.open-reviews').on('click', function () {
    $('.reviews-btn').addClass('reviews-btn-active')
    $('.reviews-fon').addClass('reviews-active')
})







$('.open_modal').on('click', function () {
    let attr = $(this).attr('data-val');
    let modal = $('#' + attr);
    modal.removeClass('out');
    modal.fadeIn();
    $('body').addClass('body_fix');
});

$('.close').on('click', function () {

    $('body').removeClass('body_fix');
    let prt = $(this).parents('.modal');

    prt.addClass('out')
    setTimeout(function () {
        prt.fadeOut();
    }, 100);
});

$(window).on('click', function (event) {
    $('.modal').each(function () {
        let gtattr = $(this).attr('id');
        let new_mod = $('#' + gtattr);
        let md_cnt = $(new_mod).find('.modal-content');
        if (event.target === $(md_cnt)[0]) {
            setTimeout(function () {
                $(new_mod).addClass('out');
                $(new_mod).fadeOut()
            }, 100)
            $('body').removeClass('body_fix');
        }
        if (event.target === this) {
            setTimeout(function () {
                $(new_mod).addClass('out');
                $(new_mod).fadeOut()
            }, 100)
        }
    })
});

