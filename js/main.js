$(".quote").mouseenter(function(){
  $(".element").typed({
  strings: ["It leaves you speechless, then turns you into a storyteller.'", "It leaves you speechless, then turns you into a storyteller.'"],
  typeSpeed: 50,
  showCursor:false
  });
  });

  /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
  function myFunction() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
          x.className += " responsive";
      } else {
          x.className = "topnav";
      }
  }

//$(function() {
//    $(window).on("scroll", function() {
//        if($(window).scrollTop() > 50) {
//            $(".index-header").addClass("active");
//        } else {
//            //remove the background property so it comes transparent again (defined in your css)
//           $(".index-header").removeClass("active");
//        }
//    });
//});


//$(document).ready(function(){
//  $('.toggle-nav').click(function(e){
//    $(this).toggleClass('active');
//    $('.menu ul').toggleClass('active');
//
//    e.preventDefault();
//  });
//});
