import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/terms')({
  component: Terms,
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

function UL(props: { children: React.ReactNode; className?: string }) {
  return (
    <ul className={`list-disc pl-5 md:pl-6 marker:text-tertiary-100 space-y-2 ${props.className ?? ''}`}>
      {props.children}
    </ul>
  )
}

function Sub(props: { title: string }) {
  return <h3 className="text-base md:text-lg font-semibold text-neutral-900 mb-2">{props.title}</h3>
}

function Terms() {
  const updatedAt = '17/09/2025'

  return (
    <main className="py-[64px]">
      <div className="container">
        {/* Hero */}
        <header className="mb-8 md:mb-10" id="topo">
          <p className="text-xs uppercase tracking-wide text-neutral-60">
            Termos de uso
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-neutral-900 mt-2">
            Termos de Uso
          </h1>
          <p className="text-neutral-500 mt-2">Última atualização: {updatedAt}</p>
        </header>

        <div className="grid grid-cols-1 gap-8">
          <article className="space-y-8 md:space-y-10">
            <Section id="intro" title="Introdução">
              <p>
                Estes Termos de Uso (“Termos”) regulam o acesso, as obrigações, consentimentos e direitos
                dos usuários, em todo o Brasil, referentes aos serviços oferecidos pela TSERVE
                (aplicações, websites, conteúdos, produtos e serviços), doravante “TSERVE”,
                “Plataforma TSERVE” ou “Aplicativo”.
              </p>
            </Section>

            <Section id="cap1" title="Capítulo 1 — Sobre o uso da plataforma móvel">
              <Sub title="1.1 Finalidade" />
              <UL className="mb-4">
                <li>Divulgar necessidades de serviços.</li>
                <li>Encontrar “Profissionais” (fornecedores/vendedores).</li>
                <li>Viabilizar encontro, negociação, liquidação financeira e avaliação de serviços.</li>
                <li>Gerar notificações automáticas.</li>
              </UL>

              <Sub title="1.2 Licença de Uso" />
              <p className="mb-4">
                A TSERVE concede licença não exclusiva para (i) acessar e utilizar as aplicações em
                dispositivo pessoal; e (ii) possuir conta web para acessar conteúdos, informações e
                materiais disponibilizados pelos serviços.
              </p>

              <Sub title="1.3 Tecnologias ou Ferramentas de Terceiros" />
              <p className="mb-4">
                A infraestrutura pode incluir serviços de terceiros (mensageria, localização, SO, pagamentos).
                O uso desses serviços pode estar sujeito a termos e políticas próprios. A TSERVE não oferece
                garantias sobre produtos/serviços/conteúdos de terceiros.
              </p>

              <Sub title="1.4 Contas de Usuário" />
              <UL className="mb-4">
                <li>
                  <strong>1.4.1</strong> Cadastro com dados completos, exatos, verdadeiros e atualizados.
                </li>
                <li>
                  <strong>1.4.2</strong> O usuário é responsável pelas atividades da Conta e deve manter
                  confidenciais usuário e senha.
                </li>
                <li>
                  <strong>1.4.3</strong> A TSERVE pode não aceitar/cancelar contas que causem constrangimento
                  a prestadores ou à própria TSERVE.
                </li>
                <li>
                  <strong>1.4.4</strong> O usuário autoriza contatos para comunicações (incl. prevenção a fraudes)
                  e ofertas de produtos/serviços TSERVE.
                </li>
              </UL>

              <Sub title="1.5 Deveres de Conduta dos Usuários" />
              <UL className="mb-4">
                <li><strong>1.5.1</strong> Negociações com ética, cordialidade e observando os processos da plataforma.</li>
                <li><strong>1.5.2</strong> A TSERVE pode moderar/remover conteúdo a qualquer tempo, a seu critério.</li>
                <li><strong>1.5.3</strong> A TSERVE pode cancelar contas por condutas suspeitas, ilegais ou impróprias.</li>
              </UL>

              <Sub title="1.6 Informações Confidenciais dos Usuários" />
              <UL className="mb-4">
                <li>
                  <strong>1.6.1</strong> Tratamento de dados pessoais (ex.: RG, CPF) conforme a LGPD (Lei nº 13.709).
                </li>
                <li>
                  <strong>1.6.2</strong> Demais informações (orçamentos, chats, negociações) continuam sendo do usuário,
                  mas ele concede licença mundial, perpétua, irrevogável, transferível e isenta de royalties para uso
                  anônimo em todos os canais e formatos.
                </li>
                <li>
                  <strong>1.6.3</strong> O usuário pode solicitar a eliminação de dados pessoais pelos canais de atendimento.
                </li>
              </UL>

              <Sub title="1.7 Acesso à Rede ou Equipamentos" />
              <p className="mb-4">
                O usuário é responsável pelo acesso à rede de dados e pelos dispositivos para uso dos serviços.
                A TSERVE não garante funcionamento em determinado equipamento. Serviços estão sujeitos a falhas
                e atrasos inerentes à internet/comunicações.
              </p>

              <Sub title="1.8 Códigos Promocionais" />
              <p className="mb-4">
                Códigos podem ser criados a critério da TSERVE (valor, validade, finalidade, convênios).
                Podem ser cancelados a qualquer momento, sem aviso e sem compensação.
              </p>

              <Sub title="1.9 Garantias Contra Falhas na Plataforma" />
              <p>
                A plataforma é fornecida “como está”. Embora haja esforços de confiabilidade e disponibilidade,
                não há garantias de ausência de falhas. O usuário deve verificar a qualidade das informações
                relativas às suas transações.
              </p>
            </Section>

            <Section id="cap2" title="Capítulo 2 — Sobre as relações entre as partes">
              <UL>
                <li>
                  <strong>2.1.1</strong> A TSERVE não presta serviços nem funciona como empresa de facilities.
                  Serviços são de terceiros, sem vínculo trabalhista/subordinação com a TSERVE.
                </li>
                <li>
                  <strong>2.1.2</strong> Sem interferência da TSERVE em prazos, qualidade e responsabilidades
                  civis/fiscais/trabalhistas. Se o pagamento ocorrer fora da plataforma, a responsabilidade é
                  entre cliente e profissional.
                </li>
                <li>
                  <strong>2.1.3</strong> Pagando pela plataforma, o cliente tem segurança do pagamento e apoio TSERVE.
                </li>
                <li>
                  <strong>2.1.4</strong> O profissional deve comparecer na data/horário combinados; avisar com 24h
                  de antecedência em imprevistos. Reincidência pode gerar penalidades/desligamento. Não comparecimento
                  implica desligamento imediato (inclusive para assinantes Pro).
                </li>
              </UL>
            </Section>

            <Section id="cap3" title="Capítulo 3 — Das condições gerais">
              <Sub title="3.1 Comunicações" />
              <p className="mb-4">
                Notificações podem ocorrer via aviso geral no site, e-mail cadastrado, WhatsApp, mensagens
                no celular ou correspondência física. O usuário pode contatar a TSERVE pelos canais de suporte.
              </p>

              <Sub title="3.2 Alteração dos Termos de Uso" />
              <p className="mb-4">
                A TSERVE pode alterar os termos a qualquer tempo. O uso contínuo após a publicação implica
                aceitação das novas condições.
              </p>

              <Sub title="3.3 Acordo Integral" />
              <p className="mb-4">
                Estes Termos constituem o acordo integral entre as partes, substituindo entendimentos e compromissos
                anteriores quanto ao mesmo assunto.
              </p>

              <Sub title="3.4 Acionamento do Seguro TSERVE" />
              <p>
                O seguro pode ser acionado quando um profissional contratado e pago pela plataforma causar dano
                material acidental com relação direta ao serviço. TSERVE e seguradora analisarão a procedência
                e, sendo procedente, haverá parecer sobre ressarcimento.
              </p>
            </Section>

            <Section id="cap4" title="Capítulo 4 — Modalidades de uso para o profissional">
              <Sub title="4.1 Assinantes dos Planos" />
              <p className="mb-3">
                Assinatura mensal que aumenta relevância e volume de oportunidades, entre outros benefícios:
              </p>
              <UL className="mb-4">
                <li>Acesso a oportunidades;</li>
                <li>Perfil web com forte presença orgânica;</li>
                <li>Recibo automático por e-mail;</li>
                <li>Notificações por e-mail e push;</li>
                <li>Chat para negociação e troca de arquivos;</li>
                <li>Campanhas promocionais de parceiros exclusivas para assinantes.</li>
              </UL>

              <Sub title="4.2 Avaliações de Clientes" />
              <p className="mb-4">
                Profissionais são avaliados após cada serviço. É responsabilidade do profissional manter alta
                qualidade para preservar boas avaliações e mais chances de contratação.
              </p>

              <Sub title="4.3 Penalidades" />
              <p className="mb-4">
                Em caso de conduta inadequada, atrasos recorrentes ou não comparecimento, a TSERVE pode aplicar
                penalidades como suspensão ou desligamento.
              </p>

              <Sub title="4.4 Conduta Profissional" />
              <p>
                Manter postura ética, cumprir prazos e entregar serviços de qualidade, garantindo satisfação
                do cliente.
              </p>
            </Section>

            <Section id="cap5" title="Capítulo 5 — Disposições gerais e finais">
              <UL>
                <li><strong>Solicitação de Serviços:</strong> abertura por WhatsApp, apps, site, integrações etc.</li>
                <li><strong>Negociações via WhatsApp:</strong> pedidos abertos pelo WhatsApp podem ser negociados diretamente com os profissionais.</li>
                <li><strong>Bloqueio de Perfil:</strong> a TSERVE pode bloquear o perfil do profissional a qualquer tempo, a seu critério.</li>
                <li><strong>Negociação Livre:</strong> pode ocorrer via chat da plataforma ou WhatsApp, conforme preferência do cliente.</li>
                <li><strong>Suporte ao Cliente:</strong> oferecido quando o pagamento é feito pela plataforma (apps, site ou link de pagamento).</li>
                <li><strong>Ajuste de Taxas:</strong> valores de taxas podem ser ajustados a qualquer momento.</li>
                <li><strong>Ajuste de Mensalidades:</strong> mensalidades dos planos podem ser ajustadas a qualquer momento.</li>
              </UL>
            </Section>
          </article>
        </div>
      </div>
    </main>
  );
}
