$(function(){
    $('a[href^="#"]').click(function(){
        var speed = 800,
            href = $(this).attr("href"),
            target = $(href === "#" || href === "" ? 'html' : href),
             position = target.offset().top;
         $("html, body").animate({scrollTop:position}, speed, "swing");
         return false;
      });
      $('.hanbager').click(function(){
        if($('.right').hasClass('open')) {
            $('.right').removeClass('open');
        } else {
            $('.right').addClass('open');
        }
      });
});