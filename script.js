$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scroll > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $(".scroll-up-btn").click(function(){
        $("html").animate({scrollTop: 0});
    });


    // toogle menu/navbar script
    $(".menu-btn").click(function(){
        $(".navbar .menu").toggleClass("active");
        $(".menu-btn i").toggleClass("active");
    });

    // typing animation script
    var typed = new Typed(".typing",{
       strings: ["Developer", "Programmer", "Designer", "Passionate"],
       typeSpeed: 100,
       backSpeed: 60,
       loop: true
    });

    var typed = new Typed(".typing-2",{
        strings: ["Developer", "Programmer", "Designer", "Passionate"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
     });
`   `
    // owl carousel script
    $('.carousel').owlCarousel({
        loop:true,
        margin:20,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }

        }

    });
});