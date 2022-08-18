
var frakturDict = {A:"𝔄",B:"𝔅",C:"ℭ",D:"𝔇",E:"𝔈",F:"𝔉",G:"𝔊",H:"ℌ",I:"ℑ",J:"𝔍",K:"𝔎",L:"𝔏",M:"𝔐",N:"𝔑",O:"𝔒",P:"𝔓",Q:"𝔔",R:"ℜ",S:"𝔖",T:"𝔗",U:"𝔘",V:"𝔙",W:"𝔚",X:"𝔛",Y:"𝔜",Z:"ℨ",a:"𝔞",b:"𝔟",c:"𝔠",d:"𝔡",e:"𝔢",f:"𝔣",g:"𝔤",h:"𝔥",i:"𝔦",j:"𝔧",k:"𝔨",l:"𝔩",m:"𝔪",n:"𝔫",o:"𝔬",p:"𝔭",q:"𝔮",r:"𝔯",s:"𝔰",t:"𝔱",u:"𝔲",v:"𝔳",w:"𝔴",x:"𝔵",y:"𝔶",z:"𝔷"};

var frakturBoldDict = {A:"𝕬",B:"𝕭",C:"𝕮",D:"𝕯",E:"𝕰",F:"𝕱",G:"𝕲",H:"𝕳",I:"𝕴",J:"𝕵",K:"𝕶",L:"𝕷",M:"𝕸",N:"𝕹",O:"𝕺",P:"𝕻",Q:"𝕼",R:"𝕽",S:"𝕾",T:"𝕿",U:"𝖀",V:"𝖁",W:"𝖂",X:"𝖃",Y:"𝖄",Z:"𝖅",a:"𝖆",b:"𝖇",c:"𝖈",d:"𝖉",e:"𝖊",f:"𝖋",g:"𝖌",h:"𝖍",i:"𝖎",j:"𝖏",k:"𝖐",l:"𝖑",m:"𝖒",n:"𝖓",o:"𝖔",p:"𝖕",q:"𝖖",r:"𝖗",s:"𝖘",t:"𝖙",u:"𝖚",v:"𝖛",w:"𝖜",x:"𝖝",y:"𝖞",z:"𝖟"};

var doublestruckDict = {0:"𝟘",1:"𝟙",2:"𝟚",3:"𝟛",4:"𝟜",5:"𝟝",6:"𝟞",7:"𝟟",8:"𝟠",9:"𝟡",A:"𝔸",B:"𝔹",C:"ℂ",D:"𝔻",E:"𝔼",F:"𝔽",G:"𝔾",H:"ℍ",I:"𝕀",J:"𝕁",K:"𝕂",L:"𝕃",M:"𝕄",N:"ℕ",O:"𝕆",P:"ℙ",Q:"ℚ",R:"ℝ",S:"𝕊",T:"𝕋",U:"𝕌",V:"𝕍",W:"𝕎",X:"𝕏",Y:"𝕐",Z:"ℤ",a:"𝕒",b:"𝕓",c:"𝕔",d:"𝕕",e:"𝕖",f:"𝕗",g:"𝕘",h:"𝕙",i:"𝕚",j:"𝕛",k:"𝕜",l:"𝕝",m:"𝕞",n:"𝕟",o:"𝕠",p:"𝕡",q:"𝕢",r:"𝕣",s:"𝕤",t:"𝕥",u:"𝕦",v:"𝕧",w:"𝕨",x:"𝕩",y:"𝕪",z:"𝕫"};

var scriptDict = {A:"𝒜",B:"ℬ",C:"𝒞",D:"𝒟",E:"ℰ",F:"ℱ",G:"𝒢",H:"ℋ",I:"ℐ",J:"𝒥",K:"𝒦",L:"ℒ",M:"ℳ",N:"𝒩",O:"𝒪",P:"𝒫",Q:"𝒬",R:"ℛ",S:"𝒮",T:"𝒯",U:"𝒰",V:"𝒱",W:"𝒲",X:"𝒳",Y:"𝒴",Z:"𝒵",a:"𝒶",b:"𝒷",c:"𝒸",d:"𝒹",e:"ℯ",f:"𝒻",g:"ℊ",h:"𝒽",i:"𝒾",j:"𝒿",k:"𝓀",l:"𝓁",m:"𝓂",n:"𝓃",o:"ℴ",p:"𝓅",q:"𝓆",r:"𝓇",s:"𝓈",t:"𝓉",u:"𝓊",v:"𝓋",w:"𝓌",x:"𝓍",y:"𝓎",z:"𝓏"};

var scriptBoldDict = {A:"𝓐",B:"𝓑",C:"𝓒",D:"𝓓",E:"𝓔",F:"𝓕",G:"𝓖",H:"𝓗",I:"𝓘",J:"𝓙",K:"𝓚",L:"𝓛",M:"𝓜",N:"𝓝",O:"𝓞",P:"𝓟",Q:"𝓠",R:"𝓡",S:"𝓢",T:"𝓣",U:"𝓤",V:"𝓥",W:"𝓦",X:"𝓧",Y:"𝓨",Z:"𝓩",a:"𝓪",b:"𝓫",c:"𝓬",d:"𝓭",e:"𝓮",f:"𝓯",g:"𝓰",h:"𝓱",i:"𝓲",j:"𝓳",k:"𝓴",l:"𝓵",m:"𝓶",n:"𝓷",o:"𝓸",p:"𝓹",q:"𝓺",r:"𝓻",s:"𝓼",t:"𝓽",u:"𝓾",v:"𝓿",w:"𝔀",x:"𝔁",y:"𝔂",z:"𝔃"};

var circledDict = {0:"⓪",1:"①",2:"②",3:"③",4:"④",5:"⑤",6:"⑥",7:"⑦",8:"⑧",9:"⑨",A:"Ⓐ",B:"Ⓑ",C:"Ⓒ",D:"Ⓓ",E:"Ⓔ",F:"Ⓕ",G:"Ⓖ",H:"Ⓗ",I:"Ⓘ",J:"Ⓙ",K:"Ⓚ",L:"Ⓛ",M:"Ⓜ",N:"Ⓝ",O:"Ⓞ",P:"Ⓟ",Q:"Ⓠ",R:"Ⓡ",S:"Ⓢ",T:"Ⓣ",U:"Ⓤ",V:"Ⓥ",W:"Ⓦ",X:"Ⓧ",Y:"Ⓨ",Z:"Ⓩ",a:"ⓐ",b:"ⓑ",c:"ⓒ",d:"ⓓ",e:"ⓔ",f:"ⓕ",g:"ⓖ",h:"ⓗ",i:"ⓘ",j:"ⓙ",k:"ⓚ",l:"ⓛ",m:"ⓜ",n:"ⓝ",o:"ⓞ",p:"ⓟ",q:"ⓠ",r:"ⓡ",s:"ⓢ",t:"ⓣ",u:"ⓤ",v:"ⓥ",w:"ⓦ",x:"ⓧ",y:"ⓨ",z:"ⓩ"};

var cicledBlackDict = {0:"⓿",1:"❶",2:"❷",3:"❸",4:"❹",5:"❺",6:"❻",7:"❼",8:"❽",9:"❾",A:"🅐",B:"🅑",C:"🅒",D:"🅓",E:"🅔",F:"🅕",G:"🅖",H:"🅗",I:"🅘",J:"🅙",K:"🅚",L:"🅛",M:"🅜",N:"🅝",O:"🅞",P:"🅟",Q:"🅠",R:"🅡",S:"🅢",T:"🅣",U:"🅤",V:"🅥",W:"🅦",X:"🅧",Y:"🅨",Z:"🅩",a:"🅐",b:"🅑",c:"🅒",d:"🅓",e:"🅔",f:"🅕",g:"🅖",h:"🅗",i:"🅘",j:"🅙",k:"🅚",l:"🅛",m:"🅜",n:"🅝",o:"🅞",p:"🅟",q:"🅠",r:"🅡",s:"🅢",t:"🅣",u:"🅤",v:"🅥",w:"🅦",x:"🅧",y:"🅨",z:"🅩"};

var squaredDict = {A:"🄰",B:"🄱",C:"🄲",D:"🄳",E:"🄴",F:"🄵",G:"🄶",H:"🄷",I:"🄸",J:"🄹",K:"🄺",L:"🄻",M:"🄼",N:"🄽",O:"🄾",P:"🄿",Q:"🅀",R:"🅁",S:"🅂",T:"🅃",U:"🅄",V:"🅅",W:"🅆",X:"🅇",Y:"🅈",Z:"🅉",a:"🄰",b:"🄱",c:"🄲",d:"🄳",e:"🄴",f:"🄵",g:"🄶",h:"🄷",i:"🄸",j:"🄹",k:"🄺",l:"🄻",m:"🄼",n:"🄽",o:"🄾",p:"🄿",q:"🅀",r:"🅁",s:"🅂",t:"🅃",u:"🅄",v:"🅅",w:"🅆",x:"🅇",y:"🅈",z:"🅉"};

var squaredBlackDict = {A:"🅰",B:"🅱",C:"🅲",D:"🅳",E:"🅴",F:"🅵",G:"🅶",H:"🅷",I:"🅸",J:"🅹",K:"🅺",L:"🅻",M:"🅼",N:"🅽",O:"🅾",P:"🅿",Q:"🆀",R:"🆁",S:"🆂",T:"🆃",U:"🆄",V:"🆅",W:"🆆",X:"🆇",Y:"🆈",Z:"🆉",a:"🅰",b:"🅱",c:"🅲",d:"🅳",e:"🅴",f:"🅵",g:"🅶",h:"🅷",i:"🅸",j:"🅹",k:"🅺",l:"🅻",m:"🅼",n:"🅽",o:"🅾",p:"🅿",q:"🆀",r:"🆁",s:"🆂",t:"🆃",u:"🆄",v:"🆅",w:"🆆",x:"🆇",y:"🆈",z:"🆉"};

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
		str_acento= 'áàãâäéèêëíìîïóòõôöúùûüçÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÖÔÚÙÛÜÇ';
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

		var fraktur = "" === message ? "𝔉𝔯𝔞𝔨𝔱𝔲𝔯" : message.split("").map(function(s) {
			return frakturDict[s] || s
		}).join("");

		var frakturBold = "" === message ? "𝕱𝖗𝖆𝖐𝖙𝖚𝖗 𝕭𝖔𝖑𝖉" : message.split("").map(function(s) {
			return frakturBoldDict[s] || s
		}).join("");

		var doublestruck = "" === message ? "𝔻𝕠𝕦𝕓𝕝𝕖 𝕊𝕥𝕣𝕦𝕔𝕜" : message.split("").map(function(s) {
			return doublestruckDict[s] || s
		}).join("");

		var script = "" === message ? "𝒮𝒸𝓇𝒾𝓅𝓉" : message.split("").map(function(s) {
			return scriptDict[s] || s
		}).join("");

		var scriptBold = "" === message ? "𝓑𝓸𝓵𝓭 𝓢𝓬𝓻𝓲𝓹𝓽" : message.split("").map(function(s) {
			return scriptBoldDict[s] || s
		}).join("");

		var circled = "" === message ? "Ⓒⓘⓡⓒⓛⓔⓓ" : message.split("").map(function(s) {
			return circledDict[s] || s
		}).join("");

		var cicledBlack = "" === message ? "🅝🅔🅖🅐🅣🅘🅥🅔 🅒🅘🅡🅒🅛🅔🅓" : message.split("").map(function(s) {
			return cicledBlackDict[s] || s
		}).join("");

		var squared = "" === message ? "🅂🅀🅄🄰🅁🄴🄳" : message.split("").map(function(s) {
			return squaredDict[s] || s
		}).join("");

		var squaredBlack = "" === message ? "🅽🅴🅶🅰🆃🅸🆅🅴 🆂🆀🆄🅰🆁🅴🅳" : message.split("").map(function(s) {
			return squaredBlackDict[s] || s
		}).join("");

		var riscado = "" === message ? "R̶̶̶I̶̶̶S̶̶̶C̶̶̶A̶̶̶D̶̶̶O̶" : message.split("").map(function(s) {
			return s + '\u0336'
		}).join("");

		var inverted = "" === message ? "ıuʌǝɹʇıpo" : message.split("").map(function(s) {
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

