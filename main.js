window.onload = function () {
    document.body.classList.add('preloader');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('preloader');
    }, 4800);
}
let progress = document.getElementById("progressbar");
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function () {
    let progressHeight = (window.pageYOffset / totalHeight) * 125;
    progress.style.height = progressHeight + "%";
}
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 10) {
        $('.header__nav').addClass('header__scroll');
        $('.header__nav-menu').addClass('menu__visible');
    } else {
        $('.header__nav').removeClass('header__scroll');
        $('.header__nav-menu').removeClass('menu__visible');
    }
})
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 750);
});

const filters = document.querySelectorAll('.filter');

filters.forEach(filter => {

    filter.addEventListener('click', function () {

        let selectedFilter = filter.getAttribute('data-filter');
        let itemsToHide = document.querySelectorAll(`.projects .project:not([data-filter='${selectedFilter}'])`);
        let itemsToShow = document.querySelectorAll(`.projects [data-filter='${selectedFilter}']`);


        if (selectedFilter == 'all') {
            itemsToHide = [];
            itemsToShow = document.querySelectorAll('.projects [data-filter]');
        }

        itemsToHide.forEach(el => {
            el.classList.add('hide');
            el.classList.remove('show');
        });

        itemsToShow.forEach(el => {
            el.classList.remove('hide');
            el.classList.add('show');
        });

    });
});
$(document).ready(function () {
    $('.slider').slick({
        arrows: false,
        dots: false,
        slidesToShow: 3,
        speed: 1000,
        easing: 'ease',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        draggable: true,
        swipe: true,
        responsive: [{
                breakpoint: 10000,
                settings: {
                    centerMode: true,
                    swipe: true,
                }
            },
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    swipe: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});