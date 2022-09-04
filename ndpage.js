//Sticky
$(document).ready(function(){
    $(".input-box").sticky({topSpacing:0});
  });

//slide menu
$(document).ready(function(){
    $(".icon").click(function(){
        $(".slide").slideToggle();
    })
})

//Back to Top
$(document).ready(function(){
$(".back-top").hide();
$(window).scroll(function(){ 
  if ($(this).scrollTop() > 300) { 
      $('.back-top').fadeIn(); 
  } else { 
      $('.back-top').fadeOut(); 
  } 
}); 
$('.back-top').click(function(){ 
  $("html, body").animate({ scrollTop: 0 }, 100); 
  return false; 
});
    
});

$(document).ready(function(){
    $(".bar").click(function(){
        $(".slide-menu").toggle('700');
    $(".cut").click(function(){
        $(".slide-menu").hide('700');
    })
        
        
    })
})
