
let swiperCards = new Swiper(".gallery-cards", {
    loop:true,
    loopedSlides:5 ,
    cssMode: true,
    effect: 'fade',
});

let swiperThumbs = new Swiper(".gallery-thumbs", {
    loop:true,
    loopedSlides:5 ,
    slidesPerView:3,
    centeredSlides:true,
    slideToClickedSlide: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },


    pagination:{
        el: ".swiper-pagination",
        type: "fraction",
    },

});

swiperThumbs.controller.control=swiperCards

$(document).ready(function(){
    $(".card-link").click(function(){
        $(".rounded").attr("src",$(this).parrent().siblings().attr("Src"));
        $(".product_name").text($(this).siblings("h2").text());
        $(".product_desc").text($(this).siblings("div").find("p:nth(0)").text());
        $(".product_dprice").text($(this).siblings("div").find("p:nth(1)").text());
    });
    $(window).resize(function (){
        if($(window).width() < 600){
            $(".modal-content").css("transform", "scaleX(1)");

        }
        else{
            $(".modal-content").css("transform", "scaleX(1.4)");
        }
    });
});
// let previewBox = preveiwContainer.querySelectorAll('.preview');
// previewBox.forEach(close =>{
//     close.querySelector('.fa-times').onclick = () =>{
//       close.classList.remove('active');
//       preveiwContainer.style.display = 'none';
//     };
//   });