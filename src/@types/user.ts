export interface Alimento {
  id: string
  nome: string
  umidade: number
  proteina: number
  lipideos: number
  colesterol: number
  carboidratos: number
  cinzas: number
  calcio: number
  magnesio: number
  manganes: number
  fosforo: number
  ferro: number
  sodio: number
  potassio: number
  cobre: number
  zinco: number
  retinol: number
  re: number
  rae: number
  tiamina: number
  riboflavina: number
  piridoxina: number
  niacina: number
  energia_1: number
  energia_2: number
  fibra_alimentar: number
  vitamina_c: number
  created_at: string
  updated_at: string
}

export interface Item {
  id: string
  descricao: string
  medida: string
  quantidade: number
  alimento: Alimento
}

export interface Refeicao {
  id: string
  titulo: string
  itens: Item[]
  horario_inicio: string
  horario_fim: string
  created_at: string
  updated_at: string
}

export interface Dieta {
  id: string
  titulo: string
  refeicoes: Refeicao[]
  is_dia_de_treino: boolean
  created_at: string
  updated_at: string
}

export interface Exercicio {
  id: string
  series: number
  repeticoes: number
  carga: number
  observacao: string
  atividade: Atividade
  tempo_descanso: number
  created_at: string
  updated_at: string
}

export interface Atividade {
  id: string
  titulo: string
  equipamento: string
  video: string
  grupo_muscular: string
  created_at: string
  updated_at: string
}

export interface Treino {
  id: string
  titulo: string
  foco: string
  dias: string[]
  exercicios: any[]
  created_at: string
  updated_at: string
}

export interface Avaliacoes {
  id: string
  vencimento: string
  fotos?: any
  plano: string
  peso: number
  altura: number
  torax: number
  cintura: number
  abdomen: number
  quadril: number
  coxa: number
  abdominal: number
  suprailiaca: number
  peitoral: number
  bicepital: number
  tricipital: number
  subescapular: number
  dietas: Dieta[]
  treinos: Treino[]
  pressao_arterial: number
  fc_repouso: number
  antebraco_d: number
  antebraco_e: number
  braco_d: number
  braco_e: number
  coxa_d: number
  coxa_e: number
  panturrilha_d: number
  panturrilha_e: number
  axilar_media: number
  created_at: string
  updated_at: string
}

export interface IUserData {
  id: string
  nome: string
  email: string
  sexo: string
  estado: string
  cidade: string
  notas: string
  contato: string
  objetivo: string
  avaliacoes: Avaliacoes[]
  receitas: any[]
  data_nascimento: string
}
