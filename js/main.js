$(".quote").mouseenter(function(){
  $(".element").typed({
  strings: ["It leaves you speechless, then turns you into a storyteller.'", "It leaves you speechless, then turns you into a storyteller.'"],
  typeSpeed: 50,
  showCursor:false
  });
  });

$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".index-header").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".index-header").removeClass("active");
        }
    });
});
