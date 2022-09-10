$(function(){
  var randomizer = Math.floor((Math.random() * 107));
  var pageHeight = $(window).height();
  var scroller = $('#text').css("top", pageHeight);
  var signature = $('<h1>Frases【ツ】ᶜᵒᵈⁱᵍᵒˢ ᵈᵃˢ ᶜᵃʳⁱⁿʰᵃˢ</h1>').css("text-align", "right");

  $("<h1>" + quotes[randomizer] + "</h1>").appendTo(scroller);

  scroller.delay(400).animate({ "top": "-=" + pageHeight }, 10000, 'linear');
  signature.hide().appendTo(scroller).delay(11000).fadeIn();
});
