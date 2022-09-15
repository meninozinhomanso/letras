
  var clipboard = new ClipboardJS(".lenny-face", {
    text: function(trigger) {
      return $(trigger).find('div').text();
    }
  });
  clipboard.on('success', function(e) {
    var btn = $(e.trigger);
    btn.append('<button>Copied!</button>');
    btn.find('button').delay(2000).fadeOut(500, function(){ $(this).remove();});

  
  });
  
  clipboard.on('error', function(e) {
      console.error('Action:', e.action);
      console.error('Trigger:', e.trigger);
  });
  
  var clipboardurl = new ClipboardJS('.copy');
  
  clipboardurl.on('success', function(e) {
    var btn = $(e.trigger);
    console.info('Text:', e.text);
    $('body').append('<p class="copied"><input class="text" value="' + e.text + '" /><span class="copybtn">✔ COPIADO !</span></p>'), setTimeout(function () { $('.copied').remove(); }, 3000)
  
  });
  
  
  
  
