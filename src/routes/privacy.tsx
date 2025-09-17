import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/privacy')({
  component: Privacy,
})

function Section(props: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={props.id} className="rounded-xl border border-neutral-200 bg-white p-6 md:p-7">
      <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 mb-3">{props.title}</h2>
      <div className="prose prose-neutral max-w-none">
        {props.children}
      </div>
    </section>
  )
}

function UL(props: { children: React.ReactNode }) {
  return (
    <ul className="list-disc pl-5 md:pl-6 marker:text-tertiary-100 space-y-2">
      {props.children}
    </ul>
  )
}

function Privacy() {
  const updatedAt = '17/09/2025'

  return (
    <main className="py-[64px]">
      <div className="container">
        {/* Hero */}
        <header className="mb-8 md:mb-10">
          <p className="text-xs uppercase tracking-wide text-neutral-60">
            Política de privacidade
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-neutral-900 mt-2">
            Privacidade e Coleta de Dados
          </h1>
          <p className="text-neutral-500 mt-2">Última atualização: {updatedAt}</p>
        </header>

        <div className="grid grid-cols-1 gap-8">
          <article className="space-y-8 md:space-y-10">
            <Section id="coleta" title="Coleta de dados e privacidade">
              <p className="mb-4">
                O público em geral pode navegar na plataforma sem necessidade de cadastro
                ou envio de dados pessoais. No entanto, algumas funcionalidades dependem
                de cadastro e envio de dados para concluir a contratação do serviço e
                viabilizar sua prestação pela TSERVE. Durante o uso da plataforma, podemos coletar:
              </p>
              <UL>
                <li>
                  <strong>Dados de contato:</strong> nome, sobrenome, telefone, endereço,
                  cidade, estado e e-mail.
                </li>
                <li>
                  <strong>Informações enviadas:</strong> dados fornecidos via formulários
                  (dúvidas, reclamações, sugestões, críticas, elogios etc.).
                </li>
                <li>
                  <strong>Negociação livre:</strong> a negociação entre clientes e profissionais
                  é livre e pode ocorrer pelo chat dos apps da TSERVE ou WhatsApp, conforme preferência.
                </li>
              </UL>
            </Section>

            <Section id="navegacao" title="Durante a navegação">
              <p className="mb-4">Durante a navegação na plataforma, podemos coletar:</p>
              <UL>
                <li>
                  <strong>Dados de localização:</strong> geolocalização ao acessar a plataforma.
                </li>
                <li>
                  <strong>Preferências:</strong> informações sobre preferências e interesses
                  em relação a produtos/serviços (fornecidas diretamente ou inferidas pelas interações).
                </li>
                <li>
                  <strong>Dados de navegação:</strong> visitas e atividades, conteúdo/anúncios
                  visualizados e interações, informações do navegador e dispositivo, endereço IP,
                  localização e página de origem.
                </li>
              </UL>
            </Section>

            <Section id="ferramentas" title="Ferramentas automáticas de coleta">
              <p>
                Algumas dessas informações são coletadas utilizando nossas ferramentas automáticas
                de coleta de dados, que incluem cookies, web beacons e links da web incorporados.
              </p>
            </Section>

            <Section id="anonimos" title="Dados anônimos ou agregados">
              <UL>
                <li>
                  <strong>Pesquisas e métricas:</strong> respostas anônimas e informações agregadas
                  sobre o uso da plataforma. Em certos casos, aplicamos desidentificação/pseudonimização
                  para impedir a identificação do usuário com a tecnologia disponível.
                </li>
              </UL>
            </Section>

            <Section id="imagens" title="Imagens">
              <p className="mb-4">
                Durante o cadastro na plataforma, poderão ser solicitadas imagens de clientes
                e profissionais para ilustrar/identificar perfis e apoiar a análise e confecção
                de orçamentos pelos profissionais.
              </p>
              <UL>
                <li>
                  As imagens têm finalidade informativa/ilustrativa e podem ser removidas pelo próprio
                  usuário a qualquer momento.
                </li>
                <li>
                  Permanecem disponíveis enquanto a conta estiver ativa.
                </li>
                <li>
                  Ao se cadastrar e fornecer imagens, o usuário autoriza seu uso conforme esta política.
                </li>
              </UL>
            </Section>

            <Section id="outras" title="Outras informações">
              <UL>
                <li>
                  Informações que não revelem especificamente a identidade do usuário ou não estejam
                  diretamente relacionadas a um indivíduo, como dados do navegador e dispositivo,
                  métricas de uso e dados coletados via cookies, pixel tags e tecnologias similares.
                </li>
              </UL>
            </Section>
          </article>
        </div>
      </div>
    </main>
  )
}