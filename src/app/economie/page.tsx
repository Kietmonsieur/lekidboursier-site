import Image from "next/image";
import Link from "next/link";

export default function EconomiePage() {
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
              <Link href="/finance-personnelle" className="transition-colors hover:text-[#2E7D4F]">
                Finance personnelle
              </Link>
              <Link href="/vocabulaire" className="transition-colors hover:text-[#2E7D4F]">
                Vocabulaire
              </Link>
              <Link href="/investir" className="transition-colors hover:text-[#2E7D4F]">
                Investir
              </Link>
              <Link href="/economie" className="transition-colors font-semibold text-[#2E7D4F] hover:text-[#2E7D4F]">
                Économie
              </Link>
              <a href="#" className="transition-colors hover:text-[#2E7D4F]">
                Calculatrices
              </a>
            </nav>
          </div>
        </header>

        <section className="mb-16 rounded-3xl border border-[#D3CDB9]/15 bg-[#111111]/95 p-8 shadow-sm sm:p-10">
          <div className="grid gap-8 items-start lg:grid-cols-2">
            <div className="space-y-6">
              <span className="inline-flex rounded-full border border-[#2E7D4F]/40 bg-[#2E7D4F]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#D3CDB9]">
                ÉCONOMIE
              </span>
              <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#F5F1E8] sm:text-5xl">
                L'économie et ses principaux indicateurs.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-[#F5F1E8]/80 sm:text-lg">
                Une mauvaise nouvelle économique ne veut pas toujours dire que ton portefeuille va baisser.
              </p>
            </div>

            {/* Economic Hero Illustration */}
            <div className="flex items-center justify-center">
              <svg
                role="img"
                aria-hidden="true"
                viewBox="0 0 280 320"
                className="w-full max-w-xs"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* Subtle dashboard grid */}
                <g stroke="#D3CDB9" strokeWidth="0.5" opacity="0.08">
                  <line x1="20" y1="70" x2="260" y2="70" />
                  <line x1="20" y1="130" x2="260" y2="130" />
                  <line x1="20" y1="190" x2="260" y2="190" />
                  <line x1="20" y1="250" x2="260" y2="250" />
                  <line x1="60" y1="40" x2="60" y2="280" />
                  <line x1="120" y1="40" x2="120" y2="280" />
                  <line x1="180" y1="40" x2="180" y2="280" />
                  <line x1="240" y1="40" x2="240" y2="280" />
                </g>

                {/* Minimal bars */}
                <g opacity="0.7">
                  <rect x="50" y="220" width="10" height="50" rx="2" fill="#D3CDB9" />
                  <rect x="72" y="200" width="10" height="70" rx="2" fill="#D3CDB9" opacity="0.55" />
                  <rect x="94" y="230" width="10" height="40" rx="2" fill="#2E7D4F" opacity="0.75" />
                  <rect x="116" y="215" width="10" height="55" rx="2" fill="#D3CDB9" opacity="0.5" />
                </g>

                {/* Subtle curve accent */}
                <path
                  d="M42 160 C72 140, 108 120, 138 130 C168 140, 198 150, 228 120"
                  fill="none"
                  stroke="#2E7D4F"
                  strokeWidth="2"
                  strokeLinecap="round"
                  opacity="0.65"
                />

                {/* Simple symbols */}
                <text x="48" y="60" fill="#F5F1E8" opacity="0.72" fontSize="18" fontWeight="700" fontFamily="Inter, system-ui, sans-serif">
                  %
                </text>
                <text x="176" y="58" fill="#D3CDB9" opacity="0.7" fontSize="18" fontWeight="700" fontFamily="Inter, system-ui, sans-serif">
                  CAD
                </text>
                <text x="112" y="105" fill="#2E7D4F" opacity="0.8" fontSize="18" fontWeight="700" fontFamily="Inter, system-ui, sans-serif">
                  2.0
                </text>
                <text x="186" y="175" fill="#F5F1E8" opacity="0.68" fontSize="18" fontWeight="700" fontFamily="Inter, system-ui, sans-serif">
                  4.5
                </text>
              </svg>
            </div>
          </div>
        </section>

        <section className="mb-16 rounded-3xl border border-[#D3CDB9]/15 bg-[#111111]/90 p-8 sm:p-10">
          <div className="max-w-5xl space-y-8">
            <div className="space-y-4">

              <h2 className="text-3xl font-semibold text-[#F5F1E8] sm:text-4xl">
                Un tableau de bord pour mieux suivre l’économie.
              </h2>
              <p className="max-w-3xl text-base leading-8 text-[#F5F1E8]/80 sm:text-lg">
                Ces indicateurs ne prédisent pas l’avenir, mais ils peuvent t’aider à mieux comprendre l’environnement dans lequel ton argent est investi.
              </p>
            </div>

            <div className="space-y-4">
              <details className="group overflow-hidden rounded-3xl border border-[#D3CDB9]/10 bg-[#111111]/95 shadow-sm transition duration-150 focus-within:border-[#2E7D4F]/60">
                <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 text-sm font-semibold text-[#F5F1E8] transition-colors hover:text-[#D3CDB9]">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-[#2E7D4F]/10 text-sm font-semibold uppercase tracking-[0.22em] text-[#2E7D4F]">
                      01
                    </div>
                    <div className="space-y-1">
                      <p className="text-lg font-semibold text-[#F5F1E8]">Inflation</p>
                      <p className="text-sm text-[#D3CDB9]">La hausse générale des prix dans l’économie.</p>
                    </div>
                  </div>
                  <span className="text-xl font-semibold text-[#D3CDB9] transition-transform duration-150 group-open:rotate-45">+</span>
                </summary>
                <div className="border-t border-[#D3CDB9]/10 bg-[#111111] px-6 py-6 text-sm leading-7 text-[#F5F1E8]/80">
                  <div className="space-y-5">
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-[#D3CDB9]">Ce que ça mesure</p>
                      <p className="mt-3">La hausse générale des prix dans l’économie.</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-[#D3CDB9]">Comment le lire</p>
                      <p className="mt-3">Regarde si l’inflation monte, baisse ou reste stable. Une inflation élevée peut influencer les décisions des banques centrales.</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-[#D3CDB9]">Pourquoi ça compte</p>
                      <p className="mt-3">Quand l’inflation reste élevée, les taux d’intérêt peuvent rester plus hauts plus longtemps, ce qui peut affecter les consommateurs, les entreprises et les marchés.</p>
                    </div>
                  </div>
                </div>
              </details>

              <details className="group overflow-hidden rounded-3xl border border-[#D3CDB9]/10 bg-[#111111]/95 shadow-sm transition duration-150 focus-within:border-[#2E7D4F]/60">
                <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 text-sm font-semibold text-[#F5F1E8] transition-colors hover:text-[#D3CDB9]">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-[#2E7D4F]/10 text-sm font-semibold uppercase tracking-[0.22em] text-[#2E7D4F]">
                      02
                    </div>
                    <div className="space-y-1">
                      <p className="text-lg font-semibold text-[#F5F1E8]">Taux d’intérêt</p>
                      <p className="text-sm text-[#D3CDB9]">Le coût de l’argent dans l’économie.</p>
                    </div>
                  </div>
                  <span className="text-xl font-semibold text-[#D3CDB9] transition-transform duration-150 group-open:rotate-45">+</span>
                </summary>
                <div className="border-t border-[#D3CDB9]/10 bg-[#111111] px-6 py-6 text-sm leading-7 text-[#F5F1E8]/80">
                  <div className="space-y-5">
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-[#D3CDB9]">Ce que ça mesure</p>
                      <p className="mt-3">Le coût de l’argent.</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-[#D3CDB9]">Comment le lire</p>
                      <p className="mt-3">Des taux plus élevés rendent les emprunts plus coûteux. Des taux plus bas peuvent soutenir l’emprunt, l’investissement et la consommation.</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-[#D3CDB9]">Pourquoi ça compte</p>
                      <p className="mt-3">Les taux influencent les hypothèques, les prêts, les obligations, les valorisations boursières et les décisions des entreprises.</p>
                    </div>
                  </div>
                </div>
              </details>

              <details className="group overflow-hidden rounded-3xl border border-[#D3CDB9]/10 bg-[#111111]/95 shadow-sm transition duration-150 focus-within:border-[#2E7D4F]/60">
                <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 text-sm font-semibold text-[#F5F1E8] transition-colors hover:text-[#D3CDB9]">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-[#2E7D4F]/10 text-sm font-semibold uppercase tracking-[0.22em] text-[#2E7D4F]">
                      03
                    </div>
                    <div className="space-y-1">
                      <p className="text-lg font-semibold text-[#F5F1E8]">Emploi</p>
                      <p className="text-sm text-[#D3CDB9]">La solidité du marché du travail.</p>
                    </div>
                  </div>
                  <span className="text-xl font-semibold text-[#D3CDB9] transition-transform duration-150 group-open:rotate-45">+</span>
                </summary>
                <div className="border-t border-[#D3CDB9]/10 bg-[#111111] px-6 py-6 text-sm leading-7 text-[#F5F1E8]/80">
                  <div className="space-y-5">
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-[#D3CDB9]">Ce que ça mesure</p>
                      <p className="mt-3">La solidité du marché du travail.</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-[#D3CDB9]">Comment le lire</p>
                      <p className="mt-3">Un marché de l’emploi solide peut soutenir la consommation. Un ralentissement peut signaler une économie moins forte.</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-[#D3CDB9]">Pourquoi ça compte</p>
                      <p className="mt-3">L’emploi influence les revenus des ménages, la confiance des consommateurs et parfois les décisions des banques centrales.</p>
                    </div>
                  </div>
                </div>
              </details>

              <details className="group overflow-hidden rounded-3xl border border-[#D3CDB9]/10 bg-[#111111]/95 shadow-sm transition duration-150 focus-within:border-[#2E7D4F]/60">
                <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 text-sm font-semibold text-[#F5F1E8] transition-colors hover:text-[#D3CDB9]">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-[#2E7D4F]/10 text-sm font-semibold uppercase tracking-[0.22em] text-[#2E7D4F]">
                      04
                    </div>
                    <div className="space-y-1">
                      <p className="text-lg font-semibold text-[#F5F1E8]">Croissance économique</p>
                      <p className="text-sm text-[#D3CDB9]">La progression de l’activité économique.</p>
                    </div>
                  </div>
                  <span className="text-xl font-semibold text-[#D3CDB9] transition-transform duration-150 group-open:rotate-45">+</span>
                </summary>
                <div className="border-t border-[#D3CDB9]/10 bg-[#111111] px-6 py-6 text-sm leading-7 text-[#F5F1E8]/80">
                  <div className="space-y-5">
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-[#D3CDB9]">Ce que ça mesure</p>
                      <p className="mt-3">La progression de l’activité économique, souvent observée avec le PIB.</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-[#D3CDB9]">Comment le lire</p>
                      <p className="mt-3">Une économie qui accélère peut montrer une demande solide. Une économie qui ralentit peut signaler plus de prudence.</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-[#D3CDB9]">Pourquoi ça compte</p>
                      <p className="mt-3">La croissance peut influencer les ventes des entreprises, leurs profits et le sentiment des investisseurs.</p>
                    </div>
                  </div>
                </div>
              </details>

              <details className="group overflow-hidden rounded-3xl border border-[#D3CDB9]/10 bg-[#111111]/95 shadow-sm transition duration-150 focus-within:border-[#2E7D4F]/60">
                <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 text-sm font-semibold text-[#F5F1E8] transition-colors hover:text-[#D3CDB9]">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-[#2E7D4F]/10 text-sm font-semibold uppercase tracking-[0.22em] text-[#2E7D4F]">
                      05
                    </div>
                    <div className="space-y-1">
                      <p className="text-lg font-semibold text-[#F5F1E8]">Consommation</p>
                      <p className="text-sm text-[#D3CDB9]">La façon dont les ménages dépensent leur argent.</p>
                    </div>
                  </div>
                  <span className="text-xl font-semibold text-[#D3CDB9] transition-transform duration-150 group-open:rotate-45">+</span>
                </summary>
                <div className="border-t border-[#D3CDB9]/10 bg-[#111111] px-6 py-6 text-sm leading-7 text-[#F5F1E8]/80">
                  <div className="space-y-5">
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-[#D3CDB9]">Ce que ça mesure</p>
                      <p className="mt-3">La façon dont les ménages dépensent leur argent.</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-[#D3CDB9]">Comment le lire</p>
                      <p className="mt-3">Si les consommateurs dépensent moins, ça peut indiquer que les ménages sont plus prudents ou plus serrés financièrement.</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-[#D3CDB9]">Pourquoi ça compte</p>
                      <p className="mt-3">La consommation représente une partie importante de l’économie. Elle peut influencer les revenus des entreprises et les attentes du marché.</p>
                    </div>
                  </div>
                </div>
              </details>
            </div>
          </div>
        </section>

        <section className="mb-16 rounded-3xl border border-[#D3CDB9]/20 bg-[#111111]/90 p-8 sm:p-10">
          <div className="mx-auto max-w-6xl space-y-8">
            <div className="space-y-3 text-center">
              <h2 className="text-3xl font-semibold text-[#F5F1E8] sm:text-4xl">L’économie et la bourse sont-elles vraiment liées ?</h2>
              <p className="max-w-3xl mx-auto text-base leading-7 text-[#F5F1E8]/80">
                Oui, mais elles ne racontent pas toujours la même chose au même moment.
              </p>
              <div className="mx-auto mt-3 h-0.5 w-14 rounded bg-[#2E7D4F] opacity-80"></div>
            </div>

            <div className="grid gap-6 items-center lg:grid-cols-[1fr_auto_1fr]">
              <div className="rounded-3xl border border-[#D3CDB9]/10 bg-[#111111]/95 p-6">
                <h3 className="text-2xl font-semibold text-[#F5F1E8]">Économie</h3>
                <p className="mt-4 text-base leading-7 text-[#F5F1E8]/80">
                  L’économie s’appuie surtout sur des données concrètes du moment : inflation, emploi, consommation, production, croissance et taux d’intérêt. Elle reflète davantage la situation réelle et actuelle.
                </p>
              </div>

              <div className="flex items-center justify-center py-4 lg:py-0">
                <span className="text-5xl font-semibold leading-none text-[#2E7D4F]">≠</span>
              </div>

              <div className="rounded-3xl border border-[#D3CDB9]/10 bg-[#111111]/95 p-6">
                <h3 className="text-2xl font-semibold text-[#F5F1E8]">Marché boursier</h3>
                <p className="mt-4 text-base leading-7 text-[#F5F1E8]/80">
                  La bourse regarde surtout vers l’avant. À court terme, elle peut réagir rapidement aux nouvelles. À plus long terme, elle suit davantage la croissance, les profits, les marges et les attentes des investisseurs.
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-3xl">
              <div className="rounded-2xl border-l-4 border-[#2E7D4F] bg-[#111111]/95 p-6">
                <h4 className="text-lg font-semibold text-[#2E7D4F]">À retenir</h4>
                <p className="mt-3 text-base leading-7 text-[#F5F1E8]/80">
                  Le marché ne réagit pas seulement à une donnée économique parce qu’elle est bonne ou mauvaise. Il réagit surtout à ce que cette donnée change par rapport aux attentes : les taux, les profits, les marges et la croissance future.
                </p>
                <p className="mt-3 text-base leading-7 text-[#F5F1E8]/80">
                  C’est pour ça qu’une mauvaise nouvelle économique peut parfois faire monter la bourse, et qu’une bonne nouvelle peut parfois la faire baisser.
                </p>
              </div>
            </div>
          </div>
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
                <Link href="/finance-personnelle" className="block font-normal hover:text-[#2E7D4F]">
                  Finance personnelle
                </Link>
                <Link href="/vocabulaire" className="block font-normal hover:text-[#2E7D4F]">
                  Vocabulaire
                </Link>
                <Link href="/investir" className="block font-normal hover:text-[#2E7D4F]">
                  Investir
                </Link>
                <Link href="/economie" className="block font-normal hover:text-[#2E7D4F]">
                  Économie
                </Link>
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
