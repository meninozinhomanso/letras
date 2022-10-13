//Toggle Button

$(document).ready(function(){
    $(".bar").click(function(){
        $(".menu").slideToggle();
    })
    
})


//Sticky head
  $(document).ready(function(){
    $(".head").sticky({topSpacing:0});
  });

//Back to Top
  function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

$(document).ready(function(){
    $("body").scrollTop(function(){
        $(".back-top").show();
    })
})
