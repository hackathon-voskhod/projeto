import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  public logoUrl =
    'https://image.freepik.com/vetores-gratis/ilustracao-do-conceito-de-vida-na-arvore_114360-6058.jpg';
  public titulo = 'Quem somos?';
  public descricao =
    'O Projeto Por Elas foi idealizado diante da preocupação com o aumento dos casos de violência. Esta é uma rede que visa informar, apoiar, fortalecer e encorajar as meninas e mulheres que estão em situação de violência doméstica. Juntas somos mais fortes!';

  public titulo2 = 'Informações Estatísticas';
  public descricao2 =
    'Para 87% da população, a pandemia fez com que a violência contra mulheres aumentasse. O número de denúncias à Central de Atendimento à Mulher - número 180 - entre março e abril de 2020 foi 27% maior do que no mesmo período de 2019. Vale lembrar que a violência contra a mulher não se restringe ao campo físico, esta se caracteriza por qualquer conduta, ação ou omissão de discriminação, agressão ou coerção, ocasionada pelo simples fato de a vítima ser mulher e que cause dano, morte, constrangimento, limitação, sofrimento físico, sexual, moral, psicológico, social, político ou econômico.';

  public titulo3 = 'Como podemos ajudar?';
  public descricao3 =
    'Aqui você encontra uma lista de instituições que buscam atender meninas e mulheres vítimas de violência, reunindo o maior número possível de voluntários nas áreas da Assistência Social, Direito e Psicologia, que visam acolher, apoiar e prestar orientação técnica a quem as busca. Além disto, temos um compilado de leis fundamentais que asseguram seus direitos.';

  constructor() {}

  ngOnInit(): void {}
}
