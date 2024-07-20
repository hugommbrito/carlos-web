export type Course = {
  id: number
	name: string
  introductionEmbedVideoId: string
	modules: iModule[]
}

type iModule = {
  id: number
	name: string
	lectures: iLecture[]
}

export type iLecture = {
  id: number
	name: string
	is_watched: boolean
  youtubeEmbedId: string
	description: string
}

export const cursoBodybuilding: Course = {
	id: 1,
  name: 'Curso Avançado de Alta Performance - METODOLOGIA CF',
  introductionEmbedVideoId: 'Te1mIzwml5k?si=uxeqh0w4RsKHvgeo',
	modules: [
		{
			id: 1,
      name: 'Introdução ao Bodybuilding',
			lectures: [
				{
					id: 1,
          name: 'História do Bodybuilding',
					is_watched: true,
          youtubeEmbedId: 'OJuB_JnlNrU?si=JPutpxcLl_H3-uEP',
					description:
						'Explora a evolução do bodybuilding desde seus primórdios até a modernidade.',
				},
				{
					id: 2,
          name: 'Categorias e Competições',
					is_watched: true,
          youtubeEmbedId: 'WsD7Et_HxSI?si=Bqj68bFu8FY-JKQW',
					description:
						'Descreve as diferentes categorias de competição no bodybuilding e os critérios de julgamento.',
				},
				{
					id: 3,
          name: 'Ícones do Esporte',
					is_watched: true,
          youtubeEmbedId: 'evAuBNe4hpU?si=xU9Z_jrApaOAYwgJ',
					description:
						'Apresenta biografias de alguns dos atletas mais influentes na história do bodybuilding.',
				},
			],
		},
		{
			id: 2,
      name: 'Nutrição para Hipertrofia',
			lectures: [
				{
					id: 4,
          name: 'Macronutrientes',
					is_watched: true,
          youtubeEmbedId: 'evAuBNe4hpU?si=U9C6hnlQ7mEj0dbu',
					description:
						'Explica as funções dos macronutrientes e seu papel na construção muscular.',
				},
				{
					id: 5,
          name: 'Micronutrientes e Suplementação',
					is_watched: true,
          youtubeEmbedId: 'hH64f8ZslCs?si=4SKFl1j7y-bUIYRW',
					description:
						'Avalia a importância dos micronutrientes e a eficácia de diferentes tipos de suplementos.',
				},
				{
					id: 6,
          name: 'Dietas para Bodybuilders',
					is_watched: true,
          youtubeEmbedId: 'IvdFLv5CTcA?si=bDiEyqmeaTX9tk3W',
					description:
						'Analisa diversas abordagens dietéticas utilizadas durante as fases de bulking e cutting.',
				},
				{
					id: 7,
          name: 'Timing Nutricional',
					is_watched: true,
          youtubeEmbedId: 'na6Yy3OGoag?si=sPSUmFGJPTKQc008',
					description:
						'Aborda a importância do timing nutricional para maximizar os ganhos de treinamento.',
				},
			],
		},
		{
			id: 3,
      name: 'Treinamento de Força',
			lectures: [
				{
					id: 8,
          name: 'Fundamentos do Treinamento de Força',
					is_watched: true,
          youtubeEmbedId: 'tD1ydVn945g?si=8U9SfmAF0A7TRtDZ',
					description:
						'Introduz os princípios básicos do treinamento de força para hipertrofia.',
				},
				{
					id: 9,
          name: 'Periodização e Programação',
					is_watched: true,
          youtubeEmbedId: 'K5vB4Rftca0?si=TUYl_gyxJ6spRv9v',
					description:
						'Discute como estruturar ciclos de treinamento para otimizar resultados ao longo do tempo.',
				},
				{
					id: 10,
          name: 'Exercícios Compostos vs. Isolados',
					is_watched: false,
          youtubeEmbedId: 'KRzhabsljlU?si=xy5IYeolUx_KjenT',
					description:
						'Compara os benefícios dos exercícios compostos e isolados na rotina de treinamento.',
				},
				{
					id: 11,
          name: 'Treinamento de Simetria e Proporção',
					is_watched: false,
          youtubeEmbedId: 'eAlNvWgTDZQ?si=VB8W0NjaiMO6fTPB',
					description:
						'Ensina técnicas específicas para melhorar a simetria e a proporção física.',
				},
				{
					id: 12,
          name: 'Prevenção de Lesões',
					is_watched: false,
          youtubeEmbedId: '5bxNWszH_sw?si=-O9HyGl-TAhomEVB',
					description:
						'Fornece dicas e estratégias para evitar lesões comuns no treinamento de força.',
				},
			],
		},
		{
			id: 4,
      name: 'Recuperação Muscular',
			lectures: [
				{
					id: 13,
          name: 'Importância do Descanso',
					is_watched: false,
          youtubeEmbedId: 'embed13',
					description:
						'Detalha como o descanso adequado contribui para a recuperação muscular e o crescimento.',
				},
				{
					id: 14,
          name: 'Técnicas de Recuperação',
					is_watched: false,
          youtubeEmbedId: 'embed14',
					description:
						'Explica diferentes técnicas de recuperação, como massagens e terapias com frio/calor.',
				},
				{
					id: 15,
          name: 'Sleep and Bodybuilding',
					is_watched: false,
          youtubeEmbedId: 'embed15',
					description:
						'Discute o papel vital do sono na performance e recuperação dos bodybuilders.',
				},
			],
		},
		{
			id: 5,
      name: 'Psicologia do Esporte',
			lectures: [
				{
					id: 16,
          name: 'Mentalidade de Campeão',
					is_watched: false,
          youtubeEmbedId: 'embed16',
					description:
						'Explora como desenvolver uma mentalidade vencedora necessária para o sucesso no bodybuilding.',
				},
				{
					id: 17,
          name: 'Gestão de Estresse e Ansiedade',
					is_watched: false,
          youtubeEmbedId: 'embed17',
					description:
						'Oferece estratégias para gerenciar o estresse e a ansiedade comuns em atletas de competição.',
				},
				{
					id: 18,
          name: 'Foco e Disciplina',
					is_watched: false,
          youtubeEmbedId: 'embed18',
					description:
						'Aborda a importância de manter o foco e a disciplina tanto no treinamento quanto na vida diária.',
				},
			],
		},
		{
			id: 6,
      name: 'Fisiologia do Exercício',
			lectures: [
				{
					id: 19,
          name: 'Bases Fisiológicas da Hipertrofia',
					is_watched: false,
          youtubeEmbedId: 'embed19',
					description:
						'Analisa os mecanismos corporais que levam ao aumento da massa muscular.',
				},
				{
					id: 20,
          name: 'Hormônios e Bodybuilding',
					is_watched: false,
          youtubeEmbedId: 'embed20',
					description:
						'Discute como os hormônios influenciam o crescimento muscular e como podem ser otimizados.',
				},
				{
					id: 21,
          name: 'Metabolismo e Energia',
					is_watched: false,
          youtubeEmbedId: 'embed21',
					description:
						'Explica como o metabolismo funciona e como a energia é utilizada durante o exercício.',
				},
			],
		},
		{
			id: 7,
      name: 'Técnicas Avançadas de Treinamento',
			lectures: [
				{
					id: 22,
          name: 'Drop Sets e Super Sets',
					is_watched: false,
          youtubeEmbedId: 'embed22',
					description:
						'Ensina como implementar drop sets e super sets para maximizar a intensidade do treino.',
				},
				{
					id: 23,
          name: 'Treinamento de Oclusão',
					is_watched: false,
          youtubeEmbedId: 'embed23',
					description:
						'Descreve a técnica de treinamento de oclusão e seus benefícios para o crescimento muscular.',
				},
				{
					id: 24,
          name: 'Uso de Cintas e Equipamentos',
					is_watched: false,
          youtubeEmbedId: 'embed24',
					description:
						'Discute quando e como usar equipamentos auxiliares, como cintas, para treinamento efetivo e seguro.',
				},
			],
		},
		{
			id: 8,
      name: 'Programas de Treinamento',
			lectures: [
				{
					id: 25,
          name: 'Treinos para Bulking',
					is_watched: false,
          youtubeEmbedId: 'embed26',
					description:
						'Fornece guias de treinamento orientados para a fase de ganho de massa muscular.',
				},
				{
					id: 26,
          name: 'Treinos para Cutting',
					is_watched: false,
          youtubeEmbedId: 'embed27',
					description:
						'Apresenta técnicas de treino e dicas para a fase de definição muscular.',
				},
				{
					id: 27,
          name: 'Abordagens de Treino Durante a Off-season',
					is_watched: false,
          youtubeEmbedId: 'embed28',
					description:
						'Explora estratégias de treinamento para manter a forma física fora da temporada de competições.',
				},
			],
		},
		{
			id: 9,
      name: 'Avaliação de Desempenho',
			lectures: [
				{
					id: 28,
          name: 'Métricas e Testes de Performance',
					is_watched: false,
          youtubeEmbedId: 'embed29',
					description:
						'Introduz várias métricas e testes utilizados para avaliar o desempenho atlético.',
				},
				{
					id: 29,
          name: 'Avaliando Progresso Sem Balança',
					is_watched: false,
          youtubeEmbedId: 'embed30',
					description:
						'Ensina métodos para medir o progresso físico que não dependem de uma balança.',
				},
			],
		},
	],
};

