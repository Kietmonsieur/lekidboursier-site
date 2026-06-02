import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#111111] text-[#F5F1E8]">
      <main className="mx-auto max-w-6xl px-6 py-8 sm:px-10 lg:px-12">
        <header className="mb-10 rounded-3xl bg-[#D3CDB9] px-6 py-5 text-[#111111] shadow-sm sm:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
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
            </div>
            <nav className="flex flex-wrap gap-4 text-sm font-normal text-[#111111]">
              <a href="#" className="transition-colors font-normal hover:text-[#2E7D4F]">
                Les bases
              </a>
              <a href="#" className="transition-colors font-normal hover:text-[#2E7D4F]">
                Finance personnelle
              </a>
              <a href="#" className="transition-colors font-normal hover:text-[#2E7D4F]">
                Investir
              </a>
              <a href="#" className="transition-colors font-normal hover:text-[#2E7D4F]">
                Économie
              </a>
              <a href="#" className="transition-colors font-normal hover:text-[#2E7D4F]">
                Calculatrices
              </a>
            </nav>
          </div>
        </header>

        <section className="mb-16 rounded-3xl bg-[#111111] px-6 py-10 sm:px-8 sm:py-12">
          <div className="max-w-3xl space-y-7">
            <span className="inline-flex rounded-full border border-[#D3CDB9]/20 bg-[#D3CDB9]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#D3CDB9]">
              Finance personnelle Québec / Canada
            </span>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#F5F1E8] sm:text-5xl">
              Comprendre ton argent avant d'investir.
            </h1>

            <p className="max-w-2xl text-base leading-8 text-[#F5F1E8]/80 sm:text-lg">
              Un site bâti pour t'aider à poser tes bases, comprendre où va ton argent, suivre les marchés et investir avec plus de recul.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full bg-[#2E7D4F] px-6 py-3 text-sm font-semibold text-[#F5F1E8] shadow-sm shadow-[#2E7D4F]/20 hover:bg-[#2b7448]"
              >
                Commencer à apprendre
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full border border-[#D3CDB9]/20 bg-[#F5F1E8]/5 px-6 py-3 text-sm font-semibold text-[#D3CDB9] hover:border-[#D3CDB9]/40"
              >
                Explorer les sujets
              </a>
            </div>

            <div className="rounded-3xl border border-[#D3CDB9]/15 bg-[#F5F1E8]/5 p-5 text-sm leading-7 text-[#D3CDB9]">
              Contenu éducatif seulement. Je ne suis pas conseiller financier. Les informations partagées servent à mieux comprendre la finance et ne remplacent pas un avis professionnel.
            </div>
          </div>
        </section>

        <section className="mt-16 rounded-3xl border border-[#D3CDB9]/15 bg-[#111111]/90 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-[#F5F1E8]">Par où commencer ?</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            <article className="rounded-3xl border border-[#D3CDB9]/10 bg-[#111111] p-6 text-[#F5F1E8] shadow-sm">
              <h3 className="text-lg font-semibold">Les bases</h3>
              <p className="mt-3 text-sm leading-7 text-[#D3CDB9]">
                Les mots essentiels pour comprendre la finance : rendement, dividende, ETF, volatilité, P/E ratio.
              </p>
            </article>
            <article className="rounded-3xl border border-[#D3CDB9]/10 bg-[#111111] p-6 text-[#F5F1E8] shadow-sm">
              <h3 className="text-lg font-semibold">Finance personnelle</h3>
              <p className="mt-3 text-sm leading-7 text-[#D3CDB9]">
                Budget, épargne, crédit, dettes, CELI, REER et comptes utiles au Canada.
              </p>
            </article>
            <article className="rounded-3xl border border-[#D3CDB9]/10 bg-[#111111] p-6 text-[#F5F1E8] shadow-sm">
              <h3 className="text-lg font-semibold">Investir</h3>
              <p className="mt-3 text-sm leading-7 text-[#D3CDB9]">
                Actions, ETF, diversification, risque et approche long terme.
              </p>
            </article>
            <article className="rounded-3xl border border-[#D3CDB9]/10 bg-[#111111] p-6 text-[#F5F1E8] shadow-sm">
              <h3 className="text-lg font-semibold">Économie</h3>
              <p className="mt-3 text-sm leading-7 text-[#D3CDB9]">
                Inflation, taux d’intérêt, emploi, Banque du Canada et cycles économiques.
              </p>
            </article>
            <article className="rounded-3xl border border-[#D3CDB9]/10 bg-[#111111] p-6 text-[#F5F1E8] shadow-sm">
              <h3 className="text-lg font-semibold">Calculatrices</h3>
              <p className="mt-3 text-sm leading-7 text-[#D3CDB9]">
                Des outils simples pour estimer tes objectifs et mieux planifier.
              </p>
            </article>
          </div>
        </section>

        <section className="mt-16 rounded-3xl border border-[#D3CDB9]/15 bg-[#111111]/90 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-[#F5F1E8]">Pourquoi LeKidBoursier ?</h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-[#F5F1E8]/80 sm:text-lg">
            LeKidBoursier est né d’une envie simple : apprendre publiquement, créer du contenu utile et rendre la finance plus accessible. En lisant, en publiant et en vulgarisant, j’apprends moi aussi à mieux comprendre l’argent, les marchés et les comportements qui influencent nos décisions.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <article className="rounded-3xl border border-[#D3CDB9]/10 bg-[#111111] p-6 text-[#F5F1E8] shadow-sm">
              <h3 className="text-lg font-semibold">Apprendre en partageant</h3>
              <p className="mt-3 text-sm leading-7 text-[#D3CDB9]">
                Je ne me présente pas comme expert. L’objectif est d’apprendre, de lire, de réfléchir et de partager des explications simples au fur et à mesure.
              </p>
            </article>
            <article className="rounded-3xl border border-[#D3CDB9]/10 bg-[#111111] p-6 text-[#F5F1E8] shadow-sm">
              <h3 className="text-lg font-semibold">Rendre la finance plus accessible</h3>
              <p className="mt-3 text-sm leading-7 text-[#D3CDB9]">
                La finance personnelle peut sembler compliquée, mais plusieurs notions deviennent plus claires quand elles sont expliquées simplement, avec des exemples concrets.
              </p>
            </article>
            <article className="rounded-3xl border border-[#D3CDB9]/10 bg-[#111111] p-6 text-[#F5F1E8] shadow-sm">
              <h3 className="text-lg font-semibold">Penser long terme</h3>
              <p className="mt-3 text-sm leading-7 text-[#D3CDB9]">
                Patience, constance et discipline financière sont au cœur de l’approche. Dans un monde rempli de distractions, apprendre à prendre du recul devient essentiel.
              </p>
            </article>
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
                <a href="#" className="block font-normal hover:text-[#2E7D4F]">
                  Les bases
                </a>
                <a href="#" className="block font-normal hover:text-[#2E7D4F]">
                  Finance personnelle
                </a>
                <a href="#" className="block font-normal hover:text-[#2E7D4F]">
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
