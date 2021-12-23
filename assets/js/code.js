// applying application when elemnet is on view port  with  wowjs 
new WOW().init();

// small screens  offcanvas  codes using jquery and pure js 
$("#offcanvas_toggler").click(function (e) {
  var input = $(".navigation").css("right");
  var right = parseFloat(input);
  console.log(right);
  if (right == 0) {
    document.getElementById("offcanvas_toggler").innerHTML = `<i class="fa fa-align-justify fs-3 lh-sm" aria-hidden="true"></i>`

    $(".navigation").animate({
      right: -75 + 'vw'
    }, 600)
  } else {
    document.getElementById("offcanvas_toggler").innerHTML = `<i class="fa fa-times fs-3 lh-sm" aria-hidden="true"></i>`
    $(".navigation").animate({
      right: 0
    }, 600)
  }
});


// top header change on scroll  codes using jquery ?\
$(window).on("scroll , load ", function () {

  if ($(document).scrollTop() > 200) {
    $("#header_container").addClass("nav-scroll-animation");
  } else if ($(document).scrollTop() < 200) {

    $("#header_container").removeClass("nav-scroll-animation");
  }
});

// counters code using counterup js    and jquery 
$(".counter").counterUp({time:4000 });


// animate progress bars when come in  view port  pure js  and jquery 

$(window).on("scroll load ", function () {
    let elepos = parseFloat($("#progress_container").offset().top);
    let winsctop = parseFloat($(window).scrollTop());
    let viheight = parseFloat($(window).innerHeight());


    if(elepos-winsctop<viheight-200 &&  -300<elepos-winsctop ){
     
      $("#progress_container  .progress .progress-bar").each(function() {
          let input = $(this).attr("data-width");
          let width_= (input/100)*$(window).innerWidth()*80/100;
  

         
          
          
          $(this).animate({
            width:width_+"px"
          },800);
        
      })

    }
});

lightbox.option({
  'resizeDuration': 400,
  'albumLabel' : "تصویر%1 از %2",
  "alwaysShowNavOnTouchDevices":true,
  "disableScrolling": true,
  "wrapAround":true

})


// portfolio  codes  using isotope  and jquery and pure js 
var pofo = $(".portfolio-items").isotope({
  originLeft:false
})  

$("#portfolio_section .nav-item .nav-link").click(function (e) { 
  $('#portfolio_section .nav-item .nav-link').removeClass("active");
  $(this).addClass("active")
  pofo.isotope({
    filter : $(this).attr("data-filter")
  })
});

$(document).ready(function () {
  var ccarousel = $(".owl-carousel");
  ccarousel.owlCarousel({
    rtl:true,
    loop:true,
    margin:10,
    
    autoplay : true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
      0:{
        items:2
      }
      ,
      576:{
        items:3
      },
      768:{
        items : 4
      },
      992:{
        items:5
      }
    }
  })

  ccarousel.on("mousewheel",'.owl-stage',function(e){
    if(e.deltaY<0){
      $(".owl-carousel").trigger("next.owl");

    }
    else{
      $(".owl-carousel").trigger("prev.owl");
    }
    e.preventDefault();})

});

