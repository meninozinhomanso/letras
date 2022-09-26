
$(function(){
var intv = setInterval(function(){ $(".copybutton") }, 2000);

  $("body").on('click',".copybutton",function() { 

$(this).html('Copied'); 
clearInterval(intv);
});
});

    var clipboard = new ClipboardJS('.copybutton');
    clipboard.on('success', function(e) {
        //console.log(e);
    });
    clipboard.on('error', function(e) {
        //console.log(e);
    });















function TinyTextCapsFontA(text) {
  var map = {"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"🅐","b":"🅑","c":"🅒","d":"🅓","e":"🅔","f":"🅕","g":"🅖","h":"🅗","i":"🅘","j":"🅙","k":"🅚","l":"🅛","m":"🅜","n":"🅝","o":"🅞","p":"🅟","q":"🅠","r":"🅡","s":"🅢","t":"🅣","u":"🅤","v":"🅥","w":"🅦","x":"🅧","y":"🅨","z":"🅩","A":"🅐","B":"🅑","C":"🅒","D":"🅓","E":"🅔","F":"🅕","G":"🅖","H":"🅗","I":"🅘","J":"🅙","K":"🅚","L":"🅛","M":"🅜","N":"🅝","O":"🅞","P":"🅟","Q":"🅠","R":"🅡","S":"🅢","T":"🅣","U":"🅤","V":"🅥","W":"🅦","X":"🅧","Y":"🅨","Z":"🅩"};
  var charArray = text.split("");
  for(var i = 0; i < charArray.length; i++) {
    if( map[charArray[i].toLowerCase()] ) {
      charArray[i] = map[charArray[i]];
    }
  }
  text = charArray.join("");
  return text;
}








function TinyTextCapsFontB(text) {
  var map = {"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"&#9424;","b":"&#9425;","c":"&#9426;","d":"&#9427;","e":"&#9428;","f":"&#9429;","g":"&#9430;","h":"&#9431;","i":"&#9432;","j":"&#9433;","k":"&#9434;","l":"&#9435;","m":"&#9436;","n":"&#9437;","o":"&#9438;","p":"&#9439;","q":"&#9440;","r":"&#9441;","s":"&#9442;","t":"&#9443;","u":"&#9444;","v":"&#9445;","w":"&#9446;","x":"&#9447;","y":"&#9448;","z":"&#9449;","A":"&#9398;","B":"&#9399;","C":"&#9400;","D":"&#9401;","E":"&#9402;","F":"&#9403;","G":"&#9404;","H":"&#9405;","I":"&#9406;","J":"&#9407;","K":"&#9408;","L":"&#9409;","M":"&#9410;","N":"&#9411;","O":"&#9412;","P":"&#9413;","Q":"&#9414;","R":"&#9415;","S":"&#9416;","T":"&#9417;","U":"&#9418;","V":"&#9419;","W":"&#9420;","X":"&#9421;","Y":"&#9422;","Z":"&#9423;"};
  var charArray = text.split("");
  for(var i = 0; i < charArray.length; i++) {
    if( map[charArray[i].toLowerCase()] ) {
      charArray[i] = map[charArray[i]];
    }
  }
  text = charArray.join("");
  return text;
}










function TinyTextCapsFontC(text) {
  var map = {"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"𝔞","b":"𝔟","c":"𝔠","d":"𝔡","e":"𝔢","f":"𝔣","𝔤":"𝔤","h":"𝔥","i":"𝔦","j":"𝔧","k":"𝔨","l":"𝔩","m":"𝔪","n":"𝔫","o":"𝔬","p":"𝔭","q":"𝔮","r":"𝔯","s":"𝔰","t":"𝔱","u":"𝔲","v":"𝔳","w":"𝔴","x":"𝔵","y":"𝔶","z":"𝔷","A":"𝔄","B":"𝔅","C":"ℭ","D":"𝔇","E":"𝔈","F":"𝔉","G":"𝔊","H":"ℌ","I":"ℑ","J":"𝔍","K":"𝔎","L":"𝔏","M":"𝔐","N":"𝔑","O":"𝔒","P":"𝔓","Q":"𝔔","R":"ℜ","S":"𝔖","T":"𝔗","U":"𝔘","V":"𝔙","W":"𝔚","X":"𝔛","Y":"𝔜","Z":"ℨ"};
  var charArray = text.split("");
  for(var i = 0; i < charArray.length; i++) {
    if( map[charArray[i].toLowerCase()] ) {
      charArray[i] = map[charArray[i]];
    }
  }
  text = charArray.join("");
  return text;
}




function TinyTextCapsFontD(text) {
  var map = {"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"🅰","b":"🅱","c":"🅲","d":"🅳","e":"🅴","f":"🅵","𝔤":"🅶","h":"🅷","i":"🅸","j":"🅹","k":"🅺","l":"🅻","m":"🅼","n":"🅽","o":"🅾","p":"🅿","q":"🆀","r":"🆁","s":"🆂","t":"🆃","u":"🆄","v":"🆅","w":"🆆","x":"🆇","y":"🆈","z":"🆉","A":"🅰","B":"🅱","C":"🅲","D":"🅳","E":"🅴","F":"🅵","G":"🅶","H":"🅷","I":"🅸","J":"🅹","K":"🅺","L":"🅻","M":"🅼","N":"🅽","O":"🅾","P":"🅿","Q":"🆀","R":"🆁","S":"🆂","T":"🆃","U":"🆄","V":"🆅","W":"🆆","X":"🆇","Y":"🆈","Z":"🆉"};
  var charArray = text.split("");
  for(var i = 0; i < charArray.length; i++) {
    if( map[charArray[i].toLowerCase()] ) {
      charArray[i] = map[charArray[i]];
    }
  }
  text = charArray.join("");
  return text;
}


function TinyTextCapsFontE(text) {
  var map = {"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"𝕒","b":"𝕓","c":"𝕔","d":"𝕕","e":"𝕖","f":"𝕗","𝔤":"𝕘","h":"𝕙","i":"𝕚","j":"𝕛","k":"𝕜","l":"𝕝","m":"𝕞","n":"𝕟","o":"𝕠","p":"𝕡","q":"𝕢","r":"𝕣","s":"𝕤","t":"𝕥","u":"𝕦","v":"𝕧","w":"𝕨","x":"𝕩","y":"𝕪","z":"𝕫","A":"𝔸","B":"𝔹","C":"ℂ","D":"𝔻","E":"𝔼","F":"𝔽","G":"𝔾","H":"ℍ","I":"𝕀","J":"𝕁","K":"𝕂","L":"𝕃","M":"𝕄","N":"ℕ","O":"𝕆","P":"ℙ","Q":"ℚ","R":"ℝ","S":"𝕊","T":"𝕋","U":"𝕌","V":"𝕍 ","W":"𝕎","X":"𝕏","Y":"𝕐","Z":"ℤ"};
  var charArray = text.split("");
  for(var i = 0; i < charArray.length; i++) {
    if( map[charArray[i].toLowerCase()] ) {
      charArray[i] = map[charArray[i]];
    }
  }
  text = charArray.join("");
  return text;
}





function TinyTextCapsFontS(text) {
  var map = {"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"🄰","b":"🄱","c":"🄲","d":"🄳","e":"🄴","f":"🄵 ","g":"🄶","h":"🄷","i":"🄸","j":"🄹","k":"🄺","l":"🄻","m":"🄼","n":"🄽","o":"🄾","p":"🄿","q":"🅀","r":"🅁","s":"🅂","t":"🅃","u":"🅄","v":"🅅","w":"🅆","x":"🅇","y":"🅈","z":"🅉","A":"🄰","B":"🄱","C":"🄲","D":"🄳","E":"🄴","F":"🄵","G":"🄶","H":"🄷","I":"🄸","J":"🄹","K":"🄺","L":"🄻","M":"🄼","N":"🄽","O":"🄾","P":"🄿","Q":"🅀","R":"🅁","S":"🅂","T":"🅃","U":"🅄","V":"🅅","W":"🅆","X":"🅇","Y":"🅈","Z":"🅉"};
  var charArray = text.split("");
  for(var i = 0; i < charArray.length; i++) {
    if( map[charArray[i].toLowerCase()] ) {
      charArray[i] = map[charArray[i]];
    }
  }
  text = charArray.join("");
  return text;
}




function TinyTextCapsFont(text) {
  var map = {"0":"0","1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","a":"ᴀ","b":"ʙ","c":"ᴄ","d":"ᴅ","e":"ᴇ","f":"ғ","g":"ɢ","h":"ʜ","i":"ɪ","j":"ᴊ","k":"ᴋ","l":"ʟ","m":"ᴍ","n":"ɴ","o":"ᴏ","p":"ᴘ","q":"ǫ","r":"ʀ","s":"s","t":"ᴛ","u":"ᴜ","v":"ᴠ","w":"ᴡ","x":"x","y":"ʏ","z":"ᴢ","A":"A","B":"B","C":"C","D":"D","E":"E","F":"F","G":"G","H":"H","I":"I","J":"J","K":"K","L":"L","M":"M","N":"N","O":"O","P":"P","Q":"Q","R":"R","S":"S","T":"T","U":"U","V":"V","W":"W","X":"X","Y":"Y","Z":"Z"};
  var charArray = text.split("");
  for(var i = 0; i < charArray.length; i++) {
    if( map[charArray[i].toLowerCase()] ) {
      charArray[i] = map[charArray[i]];
    }
  }
  text = charArray.join("");
  return text;
}


function SuperscriptFont(text) {
  var map = {"0":"&#8304;","1":"&#185;","2":"&#178;","3":"&#179;","4":"&#8308;","5":"&#8309;","6":"&#8310;","7":"&#8311;","8":"&#8312;","9":"&#8313;","a":"ᵃ","b":"ᵇ","c":"ᶜ","d":"ᵈ","e":"ᵉ","f":"ᶠ","g":"ᵍ","h":"ʰ","i":"ᶦ","j":"ʲ","k":"ᵏ","l":"ˡ","m":"ᵐ","n":"ⁿ","o":"ᵒ","p":"ᵖ","q":"ᑫ","r":"ʳ","s":"ˢ","t":"ᵗ","u":"ᵘ","v":"ᵛ","w":"ʷ","x":"ˣ","y":"ʸ","z":"ᶻ","A":"ᴬ","B":"ᴮ","C":"ᶜ","D":"ᴰ","E":"ᴱ","F":"ᶠ","G":"ᴳ","H":"ᴴ","I":"ᴵ","J":"ᴶ","K":"ᴷ","L":"ᴸ","M":"ᴹ","N":"ᴺ","O":"ᴼ","P":"ᴾ","Q":"Q","R":"ᴿ","S":"ˢ","T":"ᵀ","U":"ᵁ","V":"ⱽ","W":"ᵂ","X":"ˣ","Y":"ʸ","Z":"ᶻ","+":"&#8314;","-":"&#8315;","=":"&#8316;","(":"&#8317;",")":"&#8318;", "q":"ᵠ", "Q":"ᵠ", "?":"ˀ", "!":"ᵎ"};
  var charArray = text.split("");
  for(var i = 0; i < charArray.length; i++) {
    if( map[charArray[i].toLowerCase()] ) {
      charArray[i] = map[charArray[i]];
    }
  }
  text = charArray.join("");
  return text;
}


function SubscriptFont(text) {
  var map = {"0":"&#8320;","1":"&#8321;","2":"&#8322;","3":"&#8323;","4":"&#8324;","5":"&#8325;","6":"&#8326;","7":"&#8327;","8":"&#8328;","9":"&#8329;","a":"ₐ","b":"b","c":"c","d":"d","e":"ₑ","f":"f","g":"g","h":"ₕ","i":"ᵢ","j":"ⱼ","k":"ₖ","l":"ₗ","m":"ₘ","n":"ₙ","o":"ₒ","p":"ₚ","q":"q","r":"ᵣ","s":"ₛ","t":"ₜ","u":"ᵤ","v":"ᵥ","w":"w","x":"ₓ","y":"y","z":"z","A":"ₐ","B":"B","C":"C","D":"D","E":"ₑ","F":"F","G":"G","H":"ₕ","I":"ᵢ","J":"ⱼ","K":"ₖ","L":"ₗ","M":"ₘ","N":"ₙ","O":"ₒ","P":"ₚ","Q":"Q","R":"ᵣ","S":"ₛ","T":"ₜ","U":"ᵤ","V":"ᵥ","W":"W","X":"ₓ","Y":"Y","Z":"Z","+":"&#8330;","-":"&#8331;","=":"&#8332;","(":"&#8333;",")":"&#8334;", "y":"ᵧ", "b":"ᵦ", "q":"ᵩ", "z":"𝓏", "w":"𝓌", "c":"𝒸", "d":"𝒹", "f":"𝒻", "g":"𝓰"};
  var charArray = text.split("");
  for(var i = 0; i < charArray.length; i++) {
    if( map[charArray[i].toLowerCase()] ) {
      charArray[i] = map[charArray[i]];
    }
  }
  text = charArray.join("");
  return text;
}






function escapeHtml(text) {
	 var map={"&":"&amp;","<":"&lt;",">":"&gt;"};
	  return text.replace(/[&<>]/g, function(m) { return map[m]; });
	}
$("#phrase").keyup(function(){
	var textVal = escapeHtml($("#phrase").val());
	$("#SubscriptFont").html(SubscriptFont(textVal));
	$("#TinyTextCapsFont").html(TinyTextCapsFont(textVal));
	$("#TinyTextCapsFontS").html(TinyTextCapsFontS(textVal));
	$("#TinyTextCapsFontA").html(TinyTextCapsFontA(textVal));
	$("#TinyTextCapsFontB").html(TinyTextCapsFontB(textVal));
	$("#TinyTextCapsFontC").html(TinyTextCapsFontC(textVal));
	$("#TinyTextCapsFontD").html(TinyTextCapsFontD(textVal));
	$("#TinyTextCapsFontE").html(TinyTextCapsFontE(textVal));
	$("#SuperscriptFont").html(SuperscriptFont(textVal));
	$("#fontSize11").html(textVal);
	$("#fontSize9").html(textVal);
	var lowcase = textVal.toLowerCase();
	$("#lowcase").html(lowcase);
});

$("#showsup").html(SuperscriptFont("abcdefghijklmnopqrstuvwxyz"));
$("#showsub").html(SubscriptFont("abcdefghijklmnopqrstuvwxyz"));
