import { PaginatedResponse } from "./base"

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

export enum PlanoEnum {
  BASIC = "BASIC",
  PRO = "PRO",
  ULTIMATE = "ULTIMATE",
}

export interface Avaliacao {
  id: string
  vencimento: string
  objetivo: string
  fotos?: any
  plano: PlanoEnum
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

export interface Receita {
  id: string
  titulo: string
  descricao: string
  created_at: string
  updated_at: string
}

export interface ReceitaResponse extends PaginatedResponse<Receita> {}

export interface AvaliacaoResponse extends PaginatedResponse<Avaliacao> {}

export interface IUserData {
  id: string
  nome: string
  email: string
  sexo: string
  estado: string
  cidade: string
  notas: string
  contato: string
  avaliacoes: Avaliacao[]
  receitas: Receita[]
  data_nascimento: string
}

export interface WhoAmI {
  id: string
  nome: string
  email: string
  roles: string[]
  status: string
  is_enabled: boolean
  is_account_non_expired: boolean
  created_at: string
  updated_at: string
}
