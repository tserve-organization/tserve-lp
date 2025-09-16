export type ReviewProps = {
  name: string
  info: string
  description: string
}

export const reviews: ReviewProps[] = [
  {
    name: 'Ana Paula',
    info: 'Contratou um eletricista',
    description: 'Foi super rápido fazer meu cadastro e em minutos encontrei o eletricista que eu precisava. Resolvi tudo no mesmo dia!',
  },
  {
    name: 'Carlos Henrique',
    info: 'Pintor',
    description: 'Adorei a experiência! Publiquei meu serviço de pintura e já no primeiro dia recebi contato de clientes interessados.',
  },
  {
    name: 'João Silveira',
    info: 'Contratou uma diarista',
    description: 'Nunca tinha usado um app assim, mas foi bem simples. Consegui chamar uma diarista em poucos cliques, sem enrolação.',
  },
]