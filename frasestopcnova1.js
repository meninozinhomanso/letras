var powerThoughts = [
"Conservar algo que possa recordar-te seria admitir que eu pudesse esquecer-te (Shakespeare)..-=- Codigos Das Carinhas",
"Amigo é aquele que sabe tudo a seu respeito, e, mesmo assim,ainda gosta de você (Kim Hubbard)..-=- Codigos Das Carinhas",
"Ninguém é igual a ninguém. Todo ser humano é um estranho ímpar (Carlos Drummond de Andrade) ..-=- Codigos Das Carinhas",
"Se você obedece a todas as regras, acaba perdendo toda a  diversão (Katherine Hepburn)..-=- Codigos Das Carinhas", 
"O prazer dos grandes homens consiste em tornar os outros mais  felizes (Pascal)..-=- Codigos Das Carinhas",
"Só se vê bem com os olhos do coração. O essencial é invisível aos olhos (St. Exupéry)..-=- Codigos Das Carinhas", 
"Quando um homem não encontra a si mesmo, não encontra a nada (Goethe)..-=- Codigos Das Carinhas",
"O homem de bem exige tudo de si próprio; o homem medíocre espera tudo dos outros (Confúcio)..-=- Codigos Das Carinhas",
"Sofrer e chorar significa viver -Dostoievski-..-=- Codigos Das Carinhas",
"Nada existe de mais fragil do que uma criatura iludida a seu próprio respeito (Torres Pastorinho)..-=- Codigos Das Carinhas",
"É no coração do homem que reside o princípio e o fim de todas as coisas (Tolstoi)..-=- Codigos Das Carinhas",
"A mentira é uma verdade que se esqueceu de acontecer -Mário Quintana-..-=- Codigos Das Carinhas"

];

var content = document.getElementById('content');
(function() {
	content.innerHTML= powerThoughts[Math.floor((Math.random() * 11) + 1)];
	var totalCount = 52;
    var num = Math.floor((Math.random() * totalCount) + 1);
    document.body.background = 'background/back' + num + '.jpg';
}());
