$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 15,
    center: true,
    dots: true,
    nav:true,
    navText: ["<img src='img/Group 120867.png'>", "<img src='img/Group 120861.png'>"],
    autoplay:true,
    autoplayTimeout:4000000,
    autoplayHoverPause:false,
    responsive: {
    0: {
        items: 1,
    },
    800: {
        items: 3,
    },
    },
});

//    $('.owl-carousel').owlCarousel({
//        margin: 50,
//        responsiveClass: true,
//        items: 2,
//        nav: true,
//        navText: ["<img src='img/prev.png'>", "<img src='img/next.png'>"],
//        responsive: {
//            0: {
//                items: 1,
//                margin: 150,
//                center: true,
//                autoWidth: true,
//                nav: false,
//                navText: []
//            },
//            992: {
//                items: 2
//            }
//        }
//    });