import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  cards: Array<any>;

  curiosities = [
    "A cada minuto, cerca de 72 horas de conteúdo são enviadas ao site de vídeos Youtube.",
    "Estima-se que, a cada ano, o monte Everest cresça 4 milímetros.",
    "Em virtude da enorme massa de água represada, a Usina das Três Gargantas tem capacidade de alterar o movimento de rotação da Terra.",
    "Durante o fenômeno Superlua, calcula-se que o diâmetro lunar possa aumentar em até 14%.",
    "Há uma lâmpada que permanece ligada continuamente há mais de 113 anos na cidade de Livermore, na Califórnia.",
    "O cérebro humano é formado por, aproximadamente, 75% de água.",
    "O cachorro-quente é uma invenção alemã do século XV.",
    "Alguns animais, como os cangurus, não param de crescer mesmo atingindo a idade adulta.",
    "A maioria das vacas não consegue descer escadas.",
    "Em média, um adulto respira 550 litros de oxigênio puro diariamente.",
    "Estima-se que 4% da população mundial seja canhota.",
    "A maior palavra da língua portuguesa refere-se a uma doença causada pela respiração de cinzas vulcânicas: pneumoultramicroscopicossilicovulcanoconiótico.",
    "Sequoias são árvores que podem atingir 115 metros de altura, 12 metros de diâmetro e cerca de 1400 toneladas, vivendo mais de 4500 anos de idade.",
    "O Brasil é o país que possui a maior comunidade japonesa fora do Japão. Só em São Paulo, moram mais de 600 mil japoneses.",
    "O calendário da Etiópia é sete anos atrasado em relação aos demais países do ocidente.",
    "A avenida mais larga do mundo, com 14 faixas diferentes, fica na Argentina.",
    "A Avenida 9 de Julho, a maior do mundo, fica na Argentina.",
    "Mais de 10% de toda a biodiversidade do mundo é encontrada no continente australiano.",
    "A Rússia é o maior país do mundo, ocupando cerca de 10% de toda a terra do planeta.",
    "Na Holanda, estima-se que o número de bicicletas ultrapasse três vezes o número de veículos.",
    "O menor país do mundo é o Vaticano, com cerca de 800 habitantes oficiais.",
    "O Sol converte cerca de 600 milhões de toneladas de hidrogênio em hélio a cada segundo em virtude do processo de fusão nuclear.",
    "Um volume do tamanho da cabeça de um alfinete feito do material de uma estrela de nêutrons teria uma massa de 1 milhão de toneladas.",
    "A parte mais profunda do oceano chega a 11 mil metros.",
    "O esqueleto humano é formado por 206 ossos, no entanto, os bebês nascem com cerca de 270 ossos, que se fundem em ossos maiores.",
    "A Terra orbita o Sol a uma velocidade de, aproximadamente, 107 mil km/h.",
    "O corpo humano tem mais de 96 mil km de vasos sanguíneos.",
    "Estima-se que o Universo conte com mais de 10 bilhões de galáxias.",
    "A luz do Sol leva cerca de 8 minutos e 20 segundos para chegar à Terra.",
    "O dia tem, aproximadamente, 23 horas e 56 minutos, não 24 horas. Por isso, a cada quatro anos, adicionamos um dia ao mês de fevereiro. Esses anos são chamados de bissextos.",
    "O recorde de voo de uma galinha é de 13 segundos.",
    "Os mosquitos são os animais mais letais do mundo, causando mais mortes humanas do que todas as guerras da história. Esses seres vivos matam cerca de 725 mil humanos anualmente.",
    "Uma pulga pode saltar até 350 vezes sua altura.",
    "As formigas são capazes de levantar até 50 vezes seu próprio peso.",
    "As formigas podem levantar objetos várias vezes mais pesados que seus corpos.",
    "Todos os mamíferos são capazes de saltar, menos os elefantes.",
    "Girafas não têm cordas vocais.",
    "A língua de uma baleia-azul pode pesar até 3,6 toneladas, o equivalente ao peso de um elefante médio.",
    "As borboletas têm cerca de 12 mil olhos.",
    "Os vertebrados mais longevos do mundo são os tubarões da Groenlândia, que podem viver cerca de 400 anos.",
    "Existem algumas árvores vivas espalhadas pelo mundo que têm, pelo menos, 5000 anos de idade.",
    "Os ursos-polares são, praticamente, invisíveis pelas câmeras de calor em virtude da eficiente camada de gordura isolante que os protege do frio.",
    "O nome oficial do Brasil é República Federativa do Brasil.",
    "A palavra “brasil” significa “vermelho como brasa”.",
    "O Brasil é o quinto maior país do mundo.",
    "O Brasil é o maior produtor de café do mundo.",
    "O Brasil é também o país que mais desmata a natureza em todo o mundo.",
    "O Brasil tem a maior biodiversidade do mundo graças à Floresta Amazônica.",
    "Das 30 cidades mais violentas do mundo, 12 estão localizadas no Brasil.",
    "Toda moeda circulante e oficial do Brasil é produzida na Casa da Moeda, no Rio de Janeiro.",
    "Tocantins é o estado mais novo do Brasil, fundado em 1988.",
    "A feijoada é considerada o prato nacional do Brasil.",
  ];
  randomFunFact: string;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.randomFunFact =
      this.curiosities[Math.floor(Math.random() * this.curiosities.length)];

    this.httpClient
      .get("/api/skills")
      .subscribe((ret: Array<any>) => (this.cards = ret));
  }
}
