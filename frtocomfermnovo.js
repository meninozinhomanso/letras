var powerThoughts = [
"Se você quer alcançar a grandeza, pare de pedir permissão. ~Anônimo",
"As coisas funcionam melhor para aqueles que fazem o melhor de como as coisas funcionam. ~John Wooden",
"Para viver uma vida criativa, devemos perder o medo de estar errado. ~Anônimo",
"Se você não está disposto a arriscar o usual, terá que se contentar com o comum. ~Jim Rohn",
"Confie porque você está disposto a aceitar o risco, não porque é seguro ou certo. ~Anônimo",
"Todos os nossos sonhos podem se tornar realidade se tivermos coragem de persegui-los. ~Walt Disney",
"Coisas boas vêm para as pessoas que esperam, mas coisas melhores vêm para aqueles que saem e as pegam. ~Anônimo",
"Se você fizer o que sempre fez, obterá o que sempre obteve. ~Anônimo",
"O sucesso é caminhar de fracasso em fracasso sem perder o entusiasmo. ~Winston Churchill",
"Apenas quando a lagarta pensou que o mundo estava acabando, ela se transformou em borboleta. ~Provérbio",
"Empreendedores de sucesso são doadores e não receptores de energia positiva. ~Anônimo",
"Sempre que você vê uma pessoa de sucesso, você só vê as glórias públicas, nunca os sacrifícios privados para alcançá-las. ~Vaibhav Shah",
"As oportunidades não acontecem, você as cria. ~Chris Grosser",
"Tente não se tornar uma pessoa de sucesso, mas tente se tornar uma pessoa de valor. ~Albert Einstein",
"Grandes mentes discutem ideias; mentes medianas discutem eventos; mentes pequenas discutem pessoas. ~Eleanor Roosevelt",
"Eu não falhei. Acabei de encontrar 10.000 maneiras que não funcionam. ~Thomas A. Edison",
"Se você não valoriza seu tempo, os outros também não. Pare de dar seu tempo e talentos - comece a cobrar por isso. ~Kim Garst",
"Um homem de sucesso é aquele que pode estabelecer uma base firme com os tijolos que outros jogaram nele. ~David Brinkley",
"Ninguém pode fazer você se sentir inferior sem o seu consentimento. ~Eleanor Roosevelt",
"Todo o segredo de uma vida bem-sucedida é descobrir qual é o destino de alguém fazer e depois fazê-lo. ~Henry Ford",
"Se você está passando pelo inferno, continue. ~Winston Churchill",
"Aqueles que são loucos o suficiente para pensar que podem mudar o mundo, são os que o fazem. ~Steve Jobs",
"Não levante a voz, melhore seu argumento. ~Anônimo",
"O que nos parece provações amargas são muitas vezes bênçãos disfarçadas. ~ Oscar Wilde",
"O sentido da vida é encontrar o seu dom. O propósito da vida é dá-lo. ~Anônimo",
"A distância entre insanidade e genialidade é medida apenas pelo sucesso. ~Bruce Feirstein",
"Quando você para de perseguir as coisas erradas, você dá às coisas certas uma chance de te pegar. ~Lolly Daskal",
"Não tenha medo de desistir do bom em busca do ótimo. ~John D. Rockefeller",
"Nenhuma obra-prima foi criada por um artista preguiçoso.~ Anônimo",
"A felicidade é uma borboleta que, quando perseguida, está sempre além do seu alcance, mas que, se você se sentar tranquilamente, pode pousar sobre você. ~Nathaniel Hawthorne",
"Se você não consegue explicar de forma simples, você não entende bem o suficiente. ~Albert Einstein",
"Bem-aventurados aqueles que podem dar sem lembrar e receber sem esquecer. ~Anônimo",
"Faça uma coisa todos os dias que te assusta. ~Anônimo"

];

var content = document.getElementById('content');
(function() {
	content.innerHTML= powerThoughts[Math.floor((Math.random() * 32) + 1)];
	var totalCount = 52;
    var num = Math.floor((Math.random() * totalCount) + 1);
    document.body.background = 'background/back' + num + '';
}());
