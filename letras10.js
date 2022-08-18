

var frakturDict = {A:"ð”„",B:"ð”…",C:"â„­",D:"ð”‡",E:"ð”ˆ",F:"ð”‰",G:"ð”Š",H:"â„Œ",I:"â„‘",J:"ð”",K:"ð”Ž",L:"ð”",M:"ð”",N:"ð”‘",O:"ð”’",P:"ð”“",Q:"ð””",R:"â„œ",S:"ð”–",T:"ð”—",U:"ð”˜",V:"ð”™",W:"ð”š",X:"ð”›",Y:"ð”œ",Z:"â„¨",a:"ð”ž",b:"ð”Ÿ",c:"ð” ",d:"ð”¡",e:"ð”¢",f:"ð”£",g:"ð”¤",h:"ð”¥",i:"ð”¦",j:"ð”§",k:"ð”¨",l:"ð”©",m:"ð”ª",n:"ð”«",o:"ð”¬",p:"ð”­",q:"ð”®",r:"ð”¯",s:"ð”°",t:"ð”±",u:"ð”²",v:"ð”³",w:"ð”´",x:"ð”µ",y:"ð”¶",z:"ð”·"};

var frakturBoldDict = {A:"ð•¬",B:"ð•­",C:"ð•®",D:"ð•¯",E:"ð•°",F:"ð•±",G:"ð•²",H:"ð•³",I:"ð•´",J:"ð•µ",K:"ð•¶",L:"ð•·",M:"ð•¸",N:"ð•¹",O:"ð•º",P:"ð•»",Q:"ð•¼",R:"ð•½",S:"ð•¾",T:"ð•¿",U:"ð–€",V:"ð–",W:"ð–‚",X:"ð–ƒ",Y:"ð–„",Z:"ð–…",a:"ð–†",b:"ð–‡",c:"ð–ˆ",d:"ð–‰",e:"ð–Š",f:"ð–‹",g:"ð–Œ",h:"ð–",i:"ð–Ž",j:"ð–",k:"ð–",l:"ð–‘",m:"ð–’",n:"ð–“",o:"ð–”",p:"ð–•",q:"ð––",r:"ð–—",s:"ð–˜",t:"ð–™",u:"ð–š",v:"ð–›",w:"ð–œ",x:"ð–",y:"ð–ž",z:"ð–Ÿ"};

var doublestruckDict = {0:"ðŸ˜",1:"ðŸ™",2:"ðŸš",3:"ðŸ›",4:"ðŸœ",5:"ðŸ",6:"ðŸž",7:"ðŸŸ",8:"ðŸ ",9:"ðŸ¡",A:"ð”¸",B:"ð”¹",C:"â„‚",D:"ð”»",E:"ð”¼",F:"ð”½",G:"ð”¾",H:"â„",I:"ð•€",J:"ð•",K:"ð•‚",L:"ð•ƒ",M:"ð•„",N:"â„•",O:"ð•†",P:"â„™",Q:"â„š",R:"â„",S:"ð•Š",T:"ð•‹",U:"ð•Œ",V:"ð•",W:"ð•Ž",X:"ð•",Y:"ð•",Z:"â„¤",a:"ð•’",b:"ð•“",c:"ð•”",d:"ð••",e:"ð•–",f:"ð•—",g:"ð•˜",h:"ð•™",i:"ð•š",j:"ð•›",k:"ð•œ",l:"ð•",m:"ð•ž",n:"ð•Ÿ",o:"ð• ",p:"ð•¡",q:"ð•¢",r:"ð•£",s:"ð•¤",t:"ð•¥",u:"ð•¦",v:"ð•§",w:"ð•¨",x:"ð•©",y:"ð•ª",z:"ð•«"};

var scriptDict = {A:"ð’œ",B:"â„¬",C:"ð’ž",D:"ð’Ÿ",E:"â„°",F:"â„±",G:"ð’¢",H:"â„‹",I:"â„",J:"ð’¥",K:"ð’¦",L:"â„’",M:"â„³",N:"ð’©",O:"ð’ª",P:"ð’«",Q:"ð’¬",R:"â„›",S:"ð’®",T:"ð’¯",U:"ð’°",V:"ð’±",W:"ð’²",X:"ð’³",Y:"ð’´",Z:"ð’µ",a:"ð’¶",b:"ð’·",c:"ð’¸",d:"ð’¹",e:"â„¯",f:"ð’»",g:"â„Š",h:"ð’½",i:"ð’¾",j:"ð’¿",k:"ð“€",l:"ð“",m:"ð“‚",n:"ð“ƒ",o:"â„´",p:"ð“…",q:"ð“†",r:"ð“‡",s:"ð“ˆ",t:"ð“‰",u:"ð“Š",v:"ð“‹",w:"ð“Œ",x:"ð“",y:"ð“Ž",z:"ð“"};

var scriptBoldDict = {A:"ð“",B:"ð“‘",C:"ð“’",D:"ð““",E:"ð“”",F:"ð“•",G:"ð“–",H:"ð“—",I:"ð“˜",J:"ð“™",K:"ð“š",L:"ð“›",M:"ð“œ",N:"ð“",O:"ð“ž",P:"ð“Ÿ",Q:"ð“ ",R:"ð“¡",S:"ð“¢",T:"ð“£",U:"ð“¤",V:"ð“¥",W:"ð“¦",X:"ð“§",Y:"ð“¨",Z:"ð“©",a:"ð“ª",b:"ð“«",c:"ð“¬",d:"ð“­",e:"ð“®",f:"ð“¯",g:"ð“°",h:"ð“±",i:"ð“²",j:"ð“³",k:"ð“´",l:"ð“µ",m:"ð“¶",n:"ð“·",o:"ð“¸",p:"ð“¹",q:"ð“º",r:"ð“»",s:"ð“¼",t:"ð“½",u:"ð“¾",v:"ð“¿",w:"ð”€",x:"ð”",y:"ð”‚",z:"ð”ƒ"};

var circledDict = {0:"â“ª",1:"â‘ ",2:"â‘¡",3:"â‘¢",4:"â‘£",5:"â‘¤",6:"â‘¥",7:"â‘¦",8:"â‘§",9:"â‘¨",A:"â’¶",B:"â’·",C:"â’¸",D:"â’¹",E:"â’º",F:"â’»",G:"â’¼",H:"â’½",I:"â’¾",J:"â’¿",K:"â“€",L:"â“",M:"â“‚",N:"â“ƒ",O:"â“„",P:"â“…",Q:"â“†",R:"â“‡",S:"â“ˆ",T:"â“‰",U:"â“Š",V:"â“‹",W:"â“Œ",X:"â“",Y:"â“Ž",Z:"â“",a:"â“",b:"â“‘",c:"â“’",d:"â““",e:"â“”",f:"â“•",g:"â“–",h:"â“—",i:"â“˜",j:"â“™",k:"â“š",l:"â“›",m:"â“œ",n:"â“",o:"â“ž",p:"â“Ÿ",q:"â“ ",r:"â“¡",s:"â“¢",t:"â“£",u:"â“¤",v:"â“¥",w:"â“¦",x:"â“§",y:"â“¨",z:"â“©"};

var cicledBlackDict = {0:"â“¿",1:"â¶",2:"â·",3:"â¸",4:"â¹",5:"âº",6:"â»",7:"â¼",8:"â½",9:"â¾",A:"ðŸ…",B:"ðŸ…‘",C:"ðŸ…’",D:"ðŸ…“",E:"ðŸ…”",F:"ðŸ…•",G:"ðŸ…–",H:"ðŸ…—",I:"ðŸ…˜",J:"ðŸ…™",K:"ðŸ…š",L:"ðŸ…›",M:"ðŸ…œ",N:"ðŸ…",O:"ðŸ…ž",P:"ðŸ…Ÿ",Q:"ðŸ… ",R:"ðŸ…¡",S:"ðŸ…¢",T:"ðŸ…£",U:"ðŸ…¤",V:"ðŸ…¥",W:"ðŸ…¦",X:"ðŸ…§",Y:"ðŸ…¨",Z:"ðŸ…©",a:"ðŸ…",b:"ðŸ…‘",c:"ðŸ…’",d:"ðŸ…“",e:"ðŸ…”",f:"ðŸ…•",g:"ðŸ…–",h:"ðŸ…—",i:"ðŸ…˜",j:"ðŸ…™",k:"ðŸ…š",l:"ðŸ…›",m:"ðŸ…œ",n:"ðŸ…",o:"ðŸ…ž",p:"ðŸ…Ÿ",q:"ðŸ… ",r:"ðŸ…¡",s:"ðŸ…¢",t:"ðŸ…£",u:"ðŸ…¤",v:"ðŸ…¥",w:"ðŸ…¦",x:"ðŸ…§",y:"ðŸ…¨",z:"ðŸ…©"};

var squaredDict = {A:"ðŸ„°",B:"ðŸ„±",C:"ðŸ„²",D:"ðŸ„³",E:"ðŸ„´",F:"ðŸ„µ",G:"ðŸ„¶",H:"ðŸ„·",I:"ðŸ„¸",J:"ðŸ„¹",K:"ðŸ„º",L:"ðŸ„»",M:"ðŸ„¼",N:"ðŸ„½",O:"ðŸ„¾",P:"ðŸ„¿",Q:"ðŸ…€",R:"ðŸ…",S:"ðŸ…‚",T:"ðŸ…ƒ",U:"ðŸ…„",V:"ðŸ……",W:"ðŸ…†",X:"ðŸ…‡",Y:"ðŸ…ˆ",Z:"ðŸ…‰",a:"ðŸ„°",b:"ðŸ„±",c:"ðŸ„²",d:"ðŸ„³",e:"ðŸ„´",f:"ðŸ„µ",g:"ðŸ„¶",h:"ðŸ„·",i:"ðŸ„¸",j:"ðŸ„¹",k:"ðŸ„º",l:"ðŸ„»",m:"ðŸ„¼",n:"ðŸ„½",o:"ðŸ„¾",p:"ðŸ„¿",q:"ðŸ…€",r:"ðŸ…",s:"ðŸ…‚",t:"ðŸ…ƒ",u:"ðŸ…„",v:"ðŸ……",w:"ðŸ…†",x:"ðŸ…‡",y:"ðŸ…ˆ",z:"ðŸ…‰"};

var squaredBlackDict = {A:"ðŸ…°",B:"ðŸ…±",C:"ðŸ…²",D:"ðŸ…³",E:"ðŸ…´",F:"ðŸ…µ",G:"ðŸ…¶",H:"ðŸ…·",I:"ðŸ…¸",J:"ðŸ…¹",K:"ðŸ…º",L:"ðŸ…»",M:"ðŸ…¼",N:"ðŸ…½",O:"ðŸ…¾",P:"ðŸ…¿",Q:"ðŸ†€",R:"ðŸ†",S:"ðŸ†‚",T:"ðŸ†ƒ",U:"ðŸ†„",V:"ðŸ†…",W:"ðŸ††",X:"ðŸ†‡",Y:"ðŸ†ˆ",Z:"ðŸ†‰",a:"ðŸ…°",b:"ðŸ…±",c:"ðŸ…²",d:"ðŸ…³",e:"ðŸ…´",f:"ðŸ…µ",g:"ðŸ…¶",h:"ðŸ…·",i:"ðŸ…¸",j:"ðŸ…¹",k:"ðŸ…º",l:"ðŸ…»",m:"ðŸ…¼",n:"ðŸ…½",o:"ðŸ…¾",p:"ðŸ…¿",q:"ðŸ†€",r:"ðŸ†",s:"ðŸ†‚",t:"ðŸ†ƒ",u:"ðŸ†„",v:"ðŸ†…",w:"ðŸ††",x:"ðŸ†‡",y:"ðŸ†ˆ",z:"ðŸ†‰"};

var invertedDict = {a:"\u0250",b:"q",c:"\u0254",d:"p",e:"\u01DD",f:"\u025F",g:"\u0183",h:"\u0265",i:"\u0131",j:"\u027E",k:"\u029E",l:"\u05DF",m:"\u026F",n:"u",o:"o",p:"d",q:"b",r:"\u0279",s:"s",t:"\u0287",u:"n",v:"\u028C",w:"\u028D",x:"x",y:"\u028E",z:"z","[":"]","]":"[","(":")",")":"(","{":"}","}":"{","?":"\u00BF","\u00BF":"?","!":"\u00A1","\'":",",",":"\'",".":"\u02D9","_":"\u203E",";":"\u061B",9:"6",6:"9"};

function run(){

	// Tooltip

	$('.card').tooltip({
		trigger: 'manual',
		placement: 'bottom'
	});

	function setTooltip(btn, message) {
		btn.attr('data-original-title', message)
		.tooltip('show');
	}

	function hideTooltip(btn) {
		setTimeout(function() {
			btn.tooltip('hide');
		}, 1000);
	}

	// Clipboard

	var clipboard = new ClipboardJS('.card');

	clipboard.on('success', function(e) {
		var btn = $(e.trigger);
		setTooltip(btn, 'Copiado');
		hideTooltip(btn);
		e.clearSelection();
	});

	function removeAcento(strToReplace) {
		str_acento= 'Ã¡Ã Ã£Ã¢Ã¤Ã©Ã¨ÃªÃ«Ã­Ã¬Ã®Ã¯Ã³Ã²ÃµÃ´Ã¶ÃºÃ¹Ã»Ã¼Ã§ÃÃ€ÃƒÃ‚Ã„Ã‰ÃˆÃŠÃ‹ÃÃŒÃŽÃÃ“Ã’Ã•Ã–Ã”ÃšÃ™Ã›ÃœÃ‡';
		str_sem_acento = 'aaaaaeeeeiiiiooooouuuucAAAAAEEEEIIIIOOOOOUUUUC';
		var nova='';
		for (var i = 0; i < strToReplace.length; i++) {
			if (str_acento.indexOf(strToReplace.charAt(i)) != -1) {
				nova+=str_sem_acento.substr(str_acento.search(strToReplace.substr(i,1)),1);
			} else {
				nova+=strToReplace.substr(i,1);
			}
		}
		return nova;
	}

	function trocaLetras(){
		var message = removeAcento($('#original').val());

		var fraktur = "" === message ? "ð”‰ð”¯ð”žð”¨ð”±ð”²ð”¯" : message.split("").map(function(s) {
			return frakturDict[s] || s
		}).join("");

		var frakturBold = "" === message ? "ð•±ð–—ð–†ð–ð–™ð–šð–— ð•­ð–”ð–‘ð–‰" : message.split("").map(function(s) {
			return frakturBoldDict[s] || s
		}).join("");

		var doublestruck = "" === message ? "ð”»ð• ð•¦ð•“ð•ð•– ð•Šð•¥ð•£ð•¦ð•”ð•œ" : message.split("").map(function(s) {
			return doublestruckDict[s] || s
		}).join("");

		var script = "" === message ? "ð’®ð’¸ð“‡ð’¾ð“…ð“‰" : message.split("").map(function(s) {
			return scriptDict[s] || s
		}).join("");

		var scriptBold = "" === message ? "ð“‘ð“¸ð“µð“­ ð“¢ð“¬ð“»ð“²ð“¹ð“½" : message.split("").map(function(s) {
			return scriptBoldDict[s] || s
		}).join("");

		var circled = "" === message ? "â’¸â“˜â“¡â“’â“›â“”â““" : message.split("").map(function(s) {
			return circledDict[s] || s
		}).join("");

		var cicledBlack = "" === message ? "ðŸ…ðŸ…”ðŸ…–ðŸ…ðŸ…£ðŸ…˜ðŸ…¥ðŸ…” ðŸ…’ðŸ…˜ðŸ…¡ðŸ…’ðŸ…›ðŸ…”ðŸ…“" : message.split("").map(function(s) {
			return cicledBlackDict[s] || s
		}).join("");

		var squared = "" === message ? "ðŸ…‚ðŸ…€ðŸ…„ðŸ„°ðŸ…ðŸ„´ðŸ„³" : message.split("").map(function(s) {
			return squaredDict[s] || s
		}).join("");

		var squaredBlack = "" === message ? "ðŸ…½ðŸ…´ðŸ…¶ðŸ…°ðŸ†ƒðŸ…¸ðŸ†…ðŸ…´ ðŸ†‚ðŸ†€ðŸ†„ðŸ…°ðŸ†ðŸ…´ðŸ…³" : message.split("").map(function(s) {
			return squaredBlackDict[s] || s
		}).join("");

		var riscado = "" === message ? "RÌ¶Ì¶Ì¶IÌ¶Ì¶Ì¶SÌ¶Ì¶Ì¶CÌ¶Ì¶Ì¶AÌ¶Ì¶Ì¶DÌ¶Ì¶Ì¶OÌ¶" : message.split("").map(function(s) {
			return s + '\u0336'
		}).join("");

		var inverted = "" === message ? "Ä±uÊŒÇÉ¹Ê‡Ä±po" : message.split("").map(function(s) {
			s = s.toLowerCase();
			return invertedDict[s] || s;
		}).join("");

		$('#fraktur').text(fraktur);
		$('#frakturBold').text(frakturBold);
		$('#doublestruck').text(doublestruck);
		$('#script').text(script);
		$('#scriptBold').text(scriptBold);
		$('#circled').text(circled);
		$('#cicledBlack').text(cicledBlack);
		$('#squared').text(squared);
		$('#squaredBlack').text(squaredBlack);
		$('#riscado').text('\u0336'+riscado);
		$('#inverted').text(inverted.split("").reverse().join(""));
	}

	$('#original').keyup(function(){
		trocaLetras();
	});

	trocaLetras();
}

// weirdgenerator.com
// fsymbols.com
