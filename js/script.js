$('.headerslide ul').slick({
    nextArrow : '.slideNextBn',
    prevArrow : '.slidePrevBn',
    dots : false,
    autoplay : true,
    autoplaySpeed: 2000,
    fade : true,
});

$('.f_slide ul').slick({
    nextArrow : '.slideNextBn',
    prevArrow : '.slidePrevBn',
    dots : false,
    autoplay : true,
    autoplaySpeed: 2000,
    fade : true,
});

$('.imgbtn button').click(function(){
    let i = $(this).index();
    $('.img li').eq(i).show().siblings().hide();
})

$('.imgbtn2 button').click(function(){
    let i = $(this).index();
    $('.img02 li').eq(i).show().siblings().hide();
})
