$(document).ready(function(){  
      $('.slideshow-container').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    var prev = $(".slick-prev");
    prev.html('<i class="fa-solid fa-arrow-left"></i>');

    var next = $(".slick-next");
    next.html('<i class="fa-solid fa-arrow-right"></i>');


})

//fag page accordion
// const accordion = document.getElementsByClassName("content-box");

// function removeActivesInAccordion() {
//     for (let i = 0; i < accordion.length; i++) {
//         accordion[i].classList.remove("active");
//     }
// }

// for (let i = 0; i < accordion.length; i++) {
//     accordion[i].addEventListener("click", function () {
//         removeActivesInAccordion();
//         accordion[i].classList.toggle("active");
//     })

// }

$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });

  $('.owl-carusel-last-seen').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:3
        },
        972:{
            items:4
        }
    }

   
})

$('.owl-carousel-product').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:1
        },
        1000:{
            items:1
        }
    }

   
})
