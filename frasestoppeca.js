var powerThoughts = [
"Conservar algo que possa recordar-te seria admitir que eu pudesse esquecer-te (Shakespeare)",
"Amigo é aquele que sabe tudo a seu respeito, e, mesmo assim,ainda gosta de você (Kim Hubbard)",
"Ninguém é igual a ninguém. Todo ser humano é um estranho ímpar (Carlos Drummond de Andrade)",
"Se você obedece a todas as regras, acaba perdendo toda a  diversão (Katherine Hepburn)",
"O prazer dos grandes homens consiste em tornar os outros mais  felizes (Pascal)",
"Só se vê bem com os olhos do coração. O essencial é invisível aos olho (St. Exupéry)",
"Quando um homem não encontra a si mesmo, não encontra a nada (Goethe)",
"O homem de bem exige tudo de si próprio; o homem medíocre espera tudo dos outros (Confúcio)",

];

var content = document.getElementById('content');
(function() {
	content.innerHTML= powerThoughts[Math.floor((Math.random() * 96) + 1)];
	var totalCount = 52;
    var num = Math.floor((Math.random() * totalCount) + 1);
    document.body.background = 'background/back' + num + '';
}());
