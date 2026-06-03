import Image from "next/image";

export default function FinancePersonnellePage() {
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
              <a href="/finance-personnelle" className="transition-colors font-semibold text-[#2E7D4F] hover:text-[#2E7D4F]">
                Finance personnelle
              </a>
              <a href="/vocabulaire" className="transition-colors font-normal hover:text-[#2E7D4F]">
                Vocabulaire
              </a>
              <a href="/investir" className="transition-colors font-normal hover:text-[#2E7D4F]">
                Investir
              </a>
              <a href="/economie" className="transition-colors font-normal hover:text-[#2E7D4F]">
                Économie
              </a>
              <a href="#" className="transition-colors font-normal hover:text-[#2E7D4F]">
                Calculatrices
              </a>
            </nav>
          </div>
        </header>

        <section className="mb-16 rounded-3xl border border-[#D3CDB9]/15 bg-[#111111]/95 p-8 shadow-sm sm:p-10">
          <div className="space-y-6">
            <span className="inline-flex rounded-full border border-[#2E7D4F]/40 bg-[#2E7D4F]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#D3CDB9]">
              Finance personnelle
            </span>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#F5F1E8] sm:text-5xl">
              Prends le contrôle de tes finances
            </h1>
            <p className="max-w-2xl text-base leading-8 text-[#F5F1E8]/80 sm:text-lg">
              Avant de parler d’investissement, il faut comprendre ton budget, tes dettes, ton crédit et les outils financiers disponibles au Canada.
            </p>
          </div>
        </section>

        <section className="mb-16 rounded-3xl border border-[#D3CDB9]/15 bg-[#111111]/90 p-8 sm:p-10">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.22em] text-[#D3CDB9]">Les bases à comprendre</p>
            <h2 className="mt-4 text-3xl font-semibold text-[#F5F1E8] sm:text-4xl">
              Les 6 bases pour mieux gérer ton argent.
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-[#F5F1E8]/80 sm:text-lg">
              Commence par comprendre les notions qui influencent le plus ta situation financière au quotidien.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <article className="rounded-3xl border border-[#D3CDB9]/10 bg-[#111111] p-5 shadow-sm transition duration-150 hover:border-[#2E7D4F]/50 hover:bg-[#161616]">
              <span className="inline-flex rounded-full bg-[#2E7D4F]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#2E7D4F]">
                01
              </span>
              <h3 className="mt-4 text-lg font-semibold text-[#F5F1E8]">Budget et cashflow</h3>
              <p className="mt-3 text-sm leading-7 text-[#F5F1E8]/80">
                Comprendre combien tu gagnes, combien tu dépenses et combien il te reste réellement à la fin du mois.
              </p>
              <button className="mt-6 inline-flex cursor-not-allowed rounded-full border border-[#2E7D4F]/20 bg-[#111111] px-4 py-2 text-sm font-semibold text-[#F5F1E8]/70 opacity-80" disabled>
                En savoir plus
              </button>
            </article>
            <article className="rounded-3xl border border-[#D3CDB9]/10 bg-[#111111] p-5 shadow-sm transition duration-150 hover:border-[#2E7D4F]/50 hover:bg-[#161616]">
              <span className="inline-flex rounded-full bg-[#2E7D4F]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#2E7D4F]">
                02
              </span>
              <h3 className="mt-4 text-lg font-semibold text-[#F5F1E8]">Revenus et impôts</h3>
              <p className="mt-3 text-sm leading-7 text-[#F5F1E8]/80">
                Comprendre la différence entre ton salaire brut, ton salaire net, les retenues sur ta paie et l’impact des impôts au Québec et au Canada.
              </p>
              <button className="mt-6 inline-flex cursor-not-allowed rounded-full border border-[#2E7D4F]/20 bg-[#111111] px-4 py-2 text-sm font-semibold text-[#F5F1E8]/70 opacity-80" disabled>
                En savoir plus
              </button>
            </article>
            <article className="rounded-3xl border border-[#D3CDB9]/10 bg-[#111111] p-5 shadow-sm transition duration-150 hover:border-[#2E7D4F]/50 hover:bg-[#161616]">
              <span className="inline-flex rounded-full bg-[#2E7D4F]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#2E7D4F]">
                03
              </span>
              <h3 className="mt-4 text-lg font-semibold text-[#F5F1E8]">Fonds d’urgence</h3>
              <p className="mt-3 text-sm leading-7 text-[#F5F1E8]/80">
                Bâtir un coussin de sécurité pour absorber les imprévus sans dépendre immédiatement du crédit.
              </p>
              <button className="mt-6 inline-flex cursor-not-allowed rounded-full border border-[#2E7D4F]/20 bg-[#111111] px-4 py-2 text-sm font-semibold text-[#F5F1E8]/70 opacity-80" disabled>
                En savoir plus
              </button>
            </article>
            <article className="rounded-3xl border border-[#D3CDB9]/10 bg-[#111111] p-5 shadow-sm transition duration-150 hover:border-[#2E7D4F]/50 hover:bg-[#161616]">
              <span className="inline-flex rounded-full bg-[#2E7D4F]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#2E7D4F]">
                04
              </span>
              <h3 className="mt-4 text-lg font-semibold text-[#F5F1E8]">Dettes et crédit</h3>
              <p className="mt-3 text-sm leading-7 text-[#F5F1E8]/80">
                Comprendre les intérêts, les paiements minimums, les cartes de crédit et la cote de crédit.
              </p>
              <button className="mt-6 inline-flex cursor-not-allowed rounded-full border border-[#2E7D4F]/20 bg-[#111111] px-4 py-2 text-sm font-semibold text-[#F5F1E8]/70 opacity-80" disabled>
                En savoir plus
              </button>
            </article>
            <article className="rounded-3xl border border-[#D3CDB9]/10 bg-[#111111] p-5 shadow-sm transition duration-150 hover:border-[#2E7D4F]/50 hover:bg-[#161616]">
              <span className="inline-flex rounded-full bg-[#2E7D4F]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#2E7D4F]">
                05
              </span>
              <h3 className="mt-4 text-lg font-semibold text-[#F5F1E8]">Objectifs financiers</h3>
              <p className="mt-3 text-sm leading-7 text-[#F5F1E8]/80">
                Savoir si ton argent sert à un projet court terme, moyen terme ou long terme.
              </p>
              <button className="mt-6 inline-flex cursor-not-allowed rounded-full border border-[#2E7D4F]/20 bg-[#111111] px-4 py-2 text-sm font-semibold text-[#F5F1E8]/70 opacity-80" disabled>
                En savoir plus
              </button>
            </article>
            <article className="rounded-3xl border border-[#D3CDB9]/10 bg-[#111111] p-5 shadow-sm transition duration-150 hover:border-[#2E7D4F]/50 hover:bg-[#161616]">
              <span className="inline-flex rounded-full bg-[#2E7D4F]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#2E7D4F]">
                06
              </span>
              <h3 className="mt-4 text-lg font-semibold text-[#F5F1E8]">Comptes au Canada</h3>
              <p className="mt-3 text-sm leading-7 text-[#F5F1E8]/80">
                Comprendre le CELI, le REER, le CELIAPP et le compte non enregistré comme des enveloppes avec des règles différentes.
              </p>
              <button className="mt-6 inline-flex cursor-not-allowed rounded-full border border-[#2E7D4F]/20 bg-[#111111] px-4 py-2 text-sm font-semibold text-[#F5F1E8]/70 opacity-80" disabled>
                En savoir plus
              </button>
            </article>
          </div>
        </section>

        <section className="mb-16 rounded-3xl border border-[#D3CDB9]/15 bg-[#111111]/90 p-8 sm:p-10">
          <h2 className="text-2xl font-semibold text-[#F5F1E8]">Un ordre simple pour commencer</h2>
          <div className="mt-6 rounded-3xl border border-[#D3CDB9]/10 bg-[#1c1c1c] p-6">
            <p className="text-sm leading-7 text-[#F5F1E8]/80">Commence par ces étapes claires, une à la fois.</p>
            <div className="relative mt-6 pl-10">
              <div className="absolute left-4 top-5 bottom-0 w-px bg-[#D3CDB9]/20" />
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#2E7D4F]/10 text-sm font-semibold text-[#2E7D4F]">
                    1
                  </span>
                  <p className="text-sm leading-7 text-[#F5F1E8]/80 sm:text-base">
                    Comprendre tes revenus et tes dépenses
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#2E7D4F]/10 text-sm font-semibold text-[#2E7D4F]">
                    2
                  </span>
                  <p className="text-sm leading-7 text-[#F5F1E8]/80 sm:text-base">
                    Identifier les dépenses qui te nuisent vraiment
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#2E7D4F]/10 text-sm font-semibold text-[#2E7D4F]">
                    3
                  </span>
                  <p className="text-sm leading-7 text-[#F5F1E8]/80 sm:text-base">
                    Réduire les mauvaises dettes
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#2E7D4F]/10 text-sm font-semibold text-[#2E7D4F]">
                    4
                  </span>
                  <p className="text-sm leading-7 text-[#F5F1E8]/80 sm:text-base">
                    Construire un fonds d’urgence
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#2E7D4F]/10 text-sm font-semibold text-[#2E7D4F]">
                    5
                  </span>
                  <p className="text-sm leading-7 text-[#F5F1E8]/80 sm:text-base">
                    Définir tes objectifs financiers
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#2E7D4F]/10 text-sm font-semibold text-[#2E7D4F]">
                    6
                  </span>
                  <p className="text-sm leading-7 text-[#F5F1E8]/80 sm:text-base">
                    Commencer à investir avec une vision long terme
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="rounded-3xl border border-[#D3CDB9]/15 bg-[#111111]/90 p-8 sm:p-10">
          <h2 className="text-2xl font-semibold text-[#F5F1E8]">Important à comprendre</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[#F5F1E8]/80 sm:text-base">
            Le contenu de cette page est éducatif. Il ne remplace pas un conseiller financier et ne constitue pas une recommandation personnalisée. Le but est de t’aider à mieux comprendre avant de prendre tes propres décisions.
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
