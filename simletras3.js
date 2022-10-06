$( document ).ready(function() {
	$('.emojibox').each(function (index, value){
		$(this).attr('title', $(this).find('.title').html());
	});
	
	$('.menu-item').click(function(){
		var id = $(this).attr('data-href');
		$('.container').hide();
		$('#'+ id).show();
		$('.menu-item').removeClass('active');
		$(this).addClass('active');
	});
	
	$('#clear').click(function(){
		$('#emojiinput').val('');
	});
	
	$('.emojibox').click(function(){
		
		var emoji = $(this).find('.emoji').html();		
		$('#showtitle').html($(this).find('.title').html());
		$('#showdesc').html($(this).find('.text').html());
		$('.emojibox').removeClass('active');
		$(this).addClass('active');
		
		$('#showEmojiBox').show();
		($(this).find('.text').html() == '') ? $('#showdesc').hide() : $('#showdesc').show();
		$('#emojiinput').val($('#emojiinput').val() + emoji);
		
		chrome.tabs.query({
			active: true,
			currentWindow: true
		}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {
			command: "insertEmoji",
			emoji: emoji
			});
		});
		
	});
		
	var clipboard = new ClipboardJS('#copy');
	clipboard.on('success', function(e) {
		showTooltip(e.trigger,'Copied!');
	});
	
		
	chrome.tabs.executeScript({file: "/content_scripts/emojikeyboard.js"});
	
	var btns = document.querySelectorAll('.btn');
	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener('mouseleave', clearTooltip);
		btns[i].addEventListener('blur', clearTooltip);
	}

	function clearTooltip(e) {
		e.currentTarget.setAttribute('class', 'btn');
		e.currentTarget.removeAttribute('aria-label');
	}

	function showTooltip(elem, msg) {
		elem.setAttribute('class', 'btn tooltipped tooltipped-s');
		elem.setAttribute('aria-label', msg);
	}

	function fallbackMessage(action) {
		var actionMsg = '';
		var actionKey = (action === 'cut' ? 'X' : 'C');
		if (/iPhone|iPad/i.test(navigator.userAgent)) {
			actionMsg = 'No support :(';
		} else if (/Mac/i.test(navigator.userAgent)) {
			actionMsg = 'Press ⌘-' + actionKey + ' to ' + action;
		} else {
			actionMsg = 'Press Ctrl-' + actionKey + ' to ' + action;
		}
		return actionMsg;
	}
	hljs.initHighlightingOnLoad();
});

