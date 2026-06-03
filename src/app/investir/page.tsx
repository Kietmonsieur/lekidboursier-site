import Image from "next/image";
import Link from "next/link";

const HeroViz = () => (
  <svg
    role="img"
    aria-hidden="true"
    viewBox="0 0 900 560"
    className="w-full max-w-[900px]"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
  >
    <defs>
      <filter id="shadow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="0" dy="6" stdDeviation="6" floodOpacity="0.06" />
      </filter>
    </defs>

    {/* very subtle grid background */}
    <g stroke="#D3CDB9" strokeWidth="1" opacity="0.06">
      {/* horizontal lines */}
      <line x1="40" y1="320" x2="860" y2="320" />
      <line x1="40" y1="360" x2="860" y2="360" />
      <line x1="40" y1="400" x2="860" y2="400" />
      <line x1="40" y1="440" x2="860" y2="440" />
      {/* vertical lines */}
      <line x1="180" y1="260" x2="180" y2="480" />
      <line x1="360" y1="260" x2="360" y2="480" />
      <line x1="540" y1="260" x2="540" y2="480" />
      <line x1="720" y1="260" x2="720" y2="480" />
    </g>

    {/* baseline / axis */}
    <line x1="40" y1="440" x2="860" y2="440" stroke="#D3CDB9" strokeWidth="1" opacity="0.08" strokeLinecap="round" />

    {/* market-like polyline (more angular, not overly smooth) */}
    <path
      d="M60 420 L140 360 L200 380 L260 340 L320 360 L380 320 L440 340 L500 300 L560 320 L620 300 L680 330 L740 300 L820 260"
      fill="none"
      stroke="#2E7D4F"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
      vectorEffect="non-scaling-stroke"
    />

    {/* decorative small plant in pot (kept minimal and secondary) */}
    <g transform="translate(120,470) scale(1)">
      <rect x="-12" y="0" width="64" height="18" rx="3" fill="#D3CDB9" opacity="0.12" />
      <rect x="0" y="-2" width="40" height="18" rx="2" fill="#111111" stroke="#D3CDB9" strokeWidth="1" />
      <path d="M20 -6 C 20 -18, 16 -28, 10 -36" stroke="#2E7D4F" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M12 -20 C 4 -26, -2 -26, -8 -18 C 2 -18, 10 -14, 12 -20 Z" fill="#2E7D4F" />
      <path d="M24 -22 C 32 -28, 40 -28, 48 -20 C 36 -20, 28 -16, 24 -22 Z" fill="#2E7D4F" />
    </g>
  </svg>
);

export default function InvestirPage() {
  return (
    <div className="min-h-screen bg-[#111111] text-[#F5F1E8]">
      <main className="mx-auto max-w-6xl px-6 py-8 sm:px-10 lg:px-12">
        <header className="mb-10 rounded-3xl bg-[#D3CDB9] px-6 py-5 text-[#111111] shadow-sm sm:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <a href="/" className="flex items-center gap-3">
              <Image
                src="/logo-icon-lekidboursier-clean.png"
                alt="Icône LeKidBoursier"
                width={36}
                height={36}
                className="h-8 w-auto"
              />
              <span className="text-sm font-semibold uppercase tracking-[0.26em] text-[#111111]">
                LeKidBoursier
              </span>
            </a>
            <nav className="flex flex-wrap gap-4 text-sm font-normal text-[#111111]">
              <a href="/finance-personnelle" className="transition-colors hover:text-[#2E7D4F]">
                Finance personnelle
              </a>
              <a href="/vocabulaire" className="transition-colors hover:text-[#2E7D4F]">
                Vocabulaire
              </a>
              <a href="/investir" className="transition-colors font-semibold text-[#2E7D4F] hover:text-[#2E7D4F]">
                Investir
              </a>
              <a href="/economie" className="transition-colors hover:text-[#2E7D4F]">
                Économie
              </a>
              <a href="#" className="transition-colors hover:text-[#2E7D4F]">
                Calculatrices
              </a>
            </nav>
          </div>
        </header>

        <section className="mb-16 rounded-3xl border border-[#D3CDB9]/15 bg-[#111111]/95 p-8 shadow-sm sm:p-10">
          <div className="grid gap-6 items-center lg:grid-cols-2">
            <div className="space-y-6">
              <span className="inline-flex rounded-full border border-[#2E7D4F]/40 bg-[#2E7D4F]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#D3CDB9]">
                INVESTIR
              </span>
              <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#F5F1E8] sm:text-5xl">
                Investir avec un plan.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-[#F5F1E8]/80 sm:text-lg">
                Avant d’acheter une action ou un ETF, il faut comprendre ton objectif, ton horizon de temps et le risque que tu es prêt à accepter.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-[900px]">
                <HeroViz />
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16 rounded-3xl border border-[#D3CDB9]/15 bg-[#111111]/90 p-8 sm:p-10">
          <div className="max-w-4xl space-y-6">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-[#D3CDB9]">Avant d’investir, pose les bonnes questions.</p>
              <h2 className="mt-4 text-3xl font-semibold text-[#F5F1E8] sm:text-4xl">
                Trois questions avant ton premier achat.
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-[#F5F1E8]/80 sm:text-lg">
                Investir commence avant le premier achat. La première étape, c’est de comprendre pourquoi tu investis, combien de temps tu peux laisser l’argent placé et comment tu réagis au risque.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              <article className="rounded-[2rem] border border-[#2E7D4F]/15 bg-[#111111]/95 p-8 shadow-sm">
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#2E7D4F]/10 text-sm font-semibold uppercase tracking-[0.2em] text-[#2E7D4F]">
                    01
                  </span>
                  <h3 className="text-xl font-semibold text-[#F5F1E8]">Pourquoi tu investis ?</h3>
                </div>
                <p className="mt-4 text-sm leading-7 text-[#F5F1E8]/80 sm:text-base">
                  Tu n’investis pas de la même façon pour un projet dans 2 ans que pour un objectif dans 20 ans. Ton objectif influence ton horizon, ton risque et le type de placement que tu peux considérer.
                </p>
              </article>

              <article className="rounded-[2rem] border border-[#2E7D4F]/15 bg-[#111111]/95 p-8 shadow-sm">
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#2E7D4F]/10 text-sm font-semibold uppercase tracking-[0.2em] text-[#2E7D4F]">
                    02
                  </span>
                  <h3 className="text-xl font-semibold text-[#F5F1E8]">Quand vas-tu avoir besoin de cet argent ?</h3>
                </div>
                <p className="mt-4 text-sm leading-7 text-[#F5F1E8]/80 sm:text-base">
                  Plus ton horizon est court, plus une baisse temporaire peut devenir un vrai problème. L’argent dont tu as besoin bientôt devrait être traité avec plus de prudence.
                </p>
              </article>

              <article className="rounded-[2rem] border border-[#2E7D4F]/15 bg-[#111111]/95 p-8 shadow-sm">
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#2E7D4F]/10 text-sm font-semibold uppercase tracking-[0.2em] text-[#2E7D4F]">
                    03
                  </span>
                  <h3 className="text-xl font-semibold text-[#F5F1E8]">Quelle baisse peux-tu supporter ?</h3>
                </div>
                <p className="mt-4 text-sm leading-7 text-[#F5F1E8]/80 sm:text-base">
                  Le marché peut monter, mais il peut aussi baisser. Le vrai test, c’est souvent ta réaction quand ton portefeuille perd de la valeur.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="mb-16 rounded-3xl border border-[#2E7D4F]/10 bg-[#151515] p-10 sm:p-12">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <p className="text-sm uppercase tracking-[0.22em] font-semibold text-[#2E7D4F]">La règle simple</p>
            <h2 className="text-3xl font-semibold leading-tight text-[#F5F1E8] sm:text-4xl">
              L’argent dont tu as besoin bientôt ne devrait pas être investi.
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-8 text-[#F5F1E8]/80 sm:text-lg">
              Investir peut être puissant à long terme, mais les marchés ne montent pas en ligne droite. Si une dépense est prévue à court terme, il faut réfléchir avant d’exposer cet argent à la volatilité.
            </p>
          </div>
        </section>

        <section className="mb-16 rounded-3xl border border-[#D3CDB9]/15 bg-[#111111]/90 p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <h2 className="text-2xl font-semibold text-[#F5F1E8]">Le compte n’est pas l’investissement.</h2>
              <p className="mt-4 text-sm leading-7 text-[#F5F1E8]/80 sm:text-base">
                Un CELI, un REER ou un CELIAPP ne sont pas des investissements en soi. Ce sont des comptes avec des règles différentes. À l’intérieur, tu peux détenir différents placements comme des actions, des ETF ou d’autres produits.
              </p>
            </div>
            <div className="space-y-4 rounded-3xl border border-[#D3CDB9]/10 bg-[#111111] p-6 text-sm text-[#F5F1E8]/90 sm:p-8">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] font-semibold text-[#D3CDB9]">Compte</p>
                <p className="mt-2 text-sm leading-7 text-[#F5F1E8]/80">
                  L’enveloppe qui définit les règles fiscales et les protections disponibles.
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.22em] font-semibold text-[#D3CDB9]">Placement</p>
                <p className="mt-2 text-sm leading-7 text-[#F5F1E8]/80">
                  Ce que tu mets dans le compte : actions, ETF, obligations ou autres produits.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16 rounded-3xl border border-[#D3CDB9]/15 bg-[#111111]/90 p-8 sm:p-10">
          <div className="max-w-3xl space-y-6">
            <h2 className="text-2xl font-semibold text-[#F5F1E8]">Où peut-on ouvrir un compte ?</h2>
            <p className="text-sm leading-7 text-[#F5F1E8]/80 sm:text-base">
              Au Canada, tu peux ouvrir un compte d’investissement avec différentes plateformes ou institutions financières. Le bon choix dépend de tes besoins, des frais, de la simplicité, des produits disponibles et de ton niveau d’autonomie.
            </p>
            <ul className="space-y-3 text-sm leading-7 text-[#F5F1E8]/80 sm:text-base">
              <li>Wealthsimple</li>
              <li>Disnat</li>
              <li>Banque Nationale Courtage direct</li>
              <li>RBC Placements en Direct</li>
              <li>Autres banques ou courtiers en ligne</li>
            </ul>
            <p className="text-sm leading-7 text-[#F5F1E8]/80 sm:text-base">
              Les frais et les fonctionnalités peuvent changer. Il faut toujours vérifier directement auprès de la plateforme avant d’ouvrir un compte.
            </p>
          </div>
        </section>

        <section className="rounded-3xl border border-[#D3CDB9]/15 bg-[#111111]/90 p-8 sm:p-10">
          <h2 className="text-2xl font-semibold text-[#F5F1E8]">Important à comprendre</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[#F5F1E8]/80 sm:text-base">
            Cette page est éducative. Elle ne dit pas quoi acheter et ne remplace pas un conseiller financier. L’objectif est de t’aider à mieux comprendre les décisions à prendre avant d’investir.
          </p>
        </section>

        <footer className="mt-16 rounded-3xl bg-[#D3CDB9] px-6 py-10 text-[#111111] sm:px-8">
          <div className="grid gap-8 md:grid-cols-[1.8fr_1fr_1fr]">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/logo-icon-lekidboursier-clean.png"
                  alt="Icône LeKidBoursier"
                  width={36}
                  height={36}
                  className="h-8 w-auto"
                />
                <span className="text-sm font-semibold uppercase tracking-[0.24em] text-[#111111]">
                  LeKidBoursier
                </span>
              </div>
              <p className="max-w-md text-sm leading-7 text-[#111111]/90">
                Finance personnelle, économie et investissement long terme, expliqués simplement.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#111111]">
                Explorer
              </p>
              <nav className="space-y-3 text-sm text-[#111111]">
                <a href="/finance-personnelle" className="block font-normal hover:text-[#2E7D4F]">
                  Finance personnelle
                </a>
                <a href="/vocabulaire" className="block font-normal hover:text-[#2E7D4F]">
                  Vocabulaire
                </a>
                <a href="/investir" className="block font-normal hover:text-[#2E7D4F]">
                  Investir
                </a>
                <a href="#" className="block font-normal hover:text-[#2E7D4F]">
                  Économie
                </a>
                <a href="#" className="block font-normal hover:text-[#2E7D4F]">
                  Calculatrices
                </a>
              </nav>
            </div>

            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#111111]">
                Suivre
              </p>
              <nav className="space-y-3 text-sm text-[#111111]">
                <a href="#" className="block font-normal hover:text-[#2E7D4F]">
                  Instagram
                </a>
                <a href="#" className="block font-normal hover:text-[#2E7D4F]">
                  Facebook
                </a>
              </nav>
            </div>
          </div>

          <div className="mt-8 border-t border-[#111111]/10 pt-6 text-sm text-[#111111]/80">
            © LeKidBoursier
          </div>
        </footer>
      </main>
    </div>
  );
}
