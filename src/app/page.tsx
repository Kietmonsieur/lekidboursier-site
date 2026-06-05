import Image from "next/image";
import Link from "next/link";

const HomeHeroIllustration = () => (
  <svg
    role="img"
    aria-hidden="true"
    viewBox="0 0 520 420"
    className="w-full max-w-sm sm:max-w-md lg:max-w-[360px]"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g stroke="#D3CDB9" strokeWidth="1" opacity="0.055">
      <line x1="164" y1="56" x2="164" y2="344" />
      <line x1="224" y1="56" x2="224" y2="344" />
      <line x1="284" y1="56" x2="284" y2="344" />
      <line x1="344" y1="56" x2="344" y2="344" />
      <line x1="404" y1="56" x2="404" y2="344" />
      <line x1="120" y1="94" x2="442" y2="94" />
      <line x1="120" y1="154" x2="442" y2="154" />
      <line x1="120" y1="214" x2="442" y2="214" />
      <line x1="120" y1="274" x2="442" y2="274" />
      <line x1="120" y1="334" x2="442" y2="334" />
    </g>

    <path
      d="M118 350 C148 342 180 342 210 350 C250 358 304 336 354 286 C384 258 406 246 432 250"
      fill="none"
      stroke="#D3CDB9"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.14"
    />

    <path
      d="M178 346 C174 302 194 264 224 230 C254 196 274 162 308 136 C342 110 386 126 412 250"
      fill="none"
      stroke="#D3CDB9"
      strokeWidth="18"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.1"
    />
    <path
      d="M178 346 C174 302 194 264 224 230 C254 196 274 162 308 136 C342 110 386 126 412 250"
      fill="none"
      stroke="#2E7D4F"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray="1 15"
    />
    <path
      d="M308 136 C342 110 386 126 412 250"
      fill="none"
      stroke="#2E7D4F"
      strokeWidth="6"
      strokeLinecap="round"
      opacity="0.18"
    />

    <g transform="translate(140 292)">
      <ellipse cx="38" cy="58" rx="52" ry="8" fill="#D3CDB9" opacity="0.1" />
      <path
        d="M38 58 C38 39 34 26 26 12"
        fill="none"
        stroke="#2E7D4F"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M35 36 C20 32 12 23 8 11 C23 11 33 23 35 36Z"
        fill="#2E7D4F"
        opacity="0.9"
      />
      <path
        d="M42 38 C57 31 65 23 70 11 C55 12 45 24 42 38Z"
        fill="#2E7D4F"
        opacity="0.72"
      />
    </g>

    <g transform="translate(330 -70)">
      <ellipse cx="82" cy="320" rx="82" ry="12" fill="#D3CDB9" opacity="0.1" />
      <path
        d="M82 318 C82 260 82 208 86 150"
        fill="none"
        stroke="#D3CDB9"
        strokeWidth="15"
        strokeLinecap="round"
      />
      <path
        d="M85 210 C62 194 44 168 34 136"
        fill="none"
        stroke="#D3CDB9"
        strokeWidth="7"
        strokeLinecap="round"
        opacity="0.86"
      />
      <path
        d="M86 188 C112 170 132 138 144 98"
        fill="none"
        stroke="#D3CDB9"
        strokeWidth="7"
        strokeLinecap="round"
        opacity="0.86"
      />
      <circle cx="86" cy="92" r="60" fill="#2E7D4F" opacity="0.2" />
      <circle cx="42" cy="128" r="44" fill="#2E7D4F" opacity="0.18" />
      <circle cx="132" cy="126" r="48" fill="#2E7D4F" opacity="0.22" />
      <circle cx="86" cy="160" r="52" fill="#2E7D4F" opacity="0.15" />
      <path
        d="M32 148 C58 172 114 178 148 144"
        fill="none"
        stroke="#2E7D4F"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.72"
      />
    </g>
  </svg>
);

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
              <Link href="/finance-personnelle" className="transition-colors font-normal hover:text-[#2E7D4F]">
                Finance personnelle
              </Link>
              <Link href="/vocabulaire" className="transition-colors font-normal hover:text-[#2E7D4F]">
                Vocabulaire
              </Link>
              <Link href="/investir" className="transition-colors font-normal hover:text-[#2E7D4F]">
                Investir
              </Link>
              <Link href="/economie" className="transition-colors font-normal hover:text-[#2E7D4F]">
                Économie
              </Link>
              <Link href="/calculatrices" className="transition-colors font-normal hover:text-[#2E7D4F]">
                Calculatrices
              </Link>
              <Link href="/articles" className="transition-colors font-normal hover:text-[#2E7D4F]">
                Articles
              </Link>
            </nav>
          </div>
        </header>

        <section className="mb-16 rounded-3xl border border-[#D3CDB9]/15 bg-[#111111]/95 p-8 shadow-sm sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="max-w-3xl space-y-7">
            <span className="inline-flex rounded-full border border-[#2E7D4F]/40 bg-[#2E7D4F]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#F5F1E8]">
              Finance simple Québec / Canada
            </span>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#F5F1E8] sm:text-5xl">
              Comprends ton argent pour aider ton futur toi.
            </h1>

            <p className="max-w-2xl text-base leading-8 text-[#F5F1E8]/80 sm:text-lg">
              Un site bâti pour t&apos;aider à poser tes bases, comprendre où va ton argent, suivre les marchés et investir avec plus de recul.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/finance-personnelle"
                className="inline-flex items-center justify-center rounded-full bg-[#2E7D4F] px-6 py-3 text-sm font-semibold text-[#F5F1E8] shadow-sm shadow-[#2E7D4F]/20 hover:bg-[#2b7448]"
              >
                Commencer à apprendre
              </Link>
              <Link
                href="/articles"
                className="inline-flex items-center justify-center rounded-full border border-[#D3CDB9]/20 bg-[#F5F1E8]/5 px-6 py-3 text-sm font-semibold text-[#D3CDB9] transition-colors hover:border-[#2E7D4F]/50 hover:bg-[#2E7D4F]/10"
              >
                Voir les articles
              </Link>
            </div>

            <div className="rounded-3xl border border-[#D3CDB9]/15 border-l-[#2E7D4F]/70 bg-[#F5F1E8]/5 p-5 text-sm leading-7 text-[#D3CDB9]">
              Contenu éducatif seulement. Je ne suis pas conseiller financier. Les informations partagées servent à mieux comprendre la finance et ne remplacent pas un avis professionnel.
            </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <HomeHeroIllustration />
            </div>
          </div>
        </section>

        <section className="mt-16 rounded-3xl border border-[#D3CDB9]/15 bg-[#111111]/90 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-[#F5F1E8]">Par où commencer ?</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            <Link href="/finance-personnelle" className="block">
              <article className="rounded-3xl border border-[#D3CDB9]/10 bg-[#111111] p-6 text-[#F5F1E8] shadow-sm transition-colors duration-150 hover:border-[#2E7D4F]/50 hover:bg-[#2E7D4F]/10">
                <h3 className="text-lg font-semibold">Finance personnelle</h3>
                <p className="mt-3 text-sm leading-7 text-[#D3CDB9]">
                  Budget, épargne, crédit, dettes, CELI, REER et comptes utiles au Canada.
                </p>
              </article>
            </Link>
            <Link href="/vocabulaire" className="block">
              <article className="rounded-3xl border border-[#D3CDB9]/10 bg-[#111111] p-6 text-[#F5F1E8] shadow-sm transition-colors duration-150 hover:border-[#2E7D4F]/50 hover:bg-[#2E7D4F]/10">
                <h3 className="text-lg font-semibold">Vocabulaire</h3>
                <p className="mt-3 text-sm leading-7 text-[#D3CDB9]">
                  Les mots essentiels pour comprendre la finance : rendement, dividende, ETF, volatilité, P/E ratio.
                </p>
              </article>
            </Link>
            <Link href="/investir" className="block">
              <article className="rounded-3xl border border-[#D3CDB9]/10 bg-[#111111] p-6 text-[#F5F1E8] shadow-sm transition-colors duration-150 hover:border-[#2E7D4F]/50 hover:bg-[#2E7D4F]/10">
                <h3 className="text-lg font-semibold">Investir</h3>
                <p className="mt-3 text-sm leading-7 text-[#D3CDB9]">
                  Actions, ETF, diversification, risque et approche long terme.
                </p>
              </article>
            </Link>
            <Link href="/economie" className="block">
              <article className="rounded-3xl border border-[#D3CDB9]/10 bg-[#111111] p-6 text-[#F5F1E8] shadow-sm transition-colors duration-150 hover:border-[#2E7D4F]/50 hover:bg-[#2E7D4F]/10">
                <h3 className="text-lg font-semibold">Économie</h3>
                <p className="mt-3 text-sm leading-7 text-[#D3CDB9]">
                  Inflation, taux d’intérêt, emploi, Banque du Canada et cycles économiques.
                </p>
              </article>
            </Link>
            <Link href="/calculatrices" className="block">
              <article className="rounded-3xl border border-[#D3CDB9]/10 bg-[#111111] p-6 text-[#F5F1E8] shadow-sm transition-colors duration-150 hover:border-[#2E7D4F]/50 hover:bg-[#2E7D4F]/10">
                <h3 className="text-lg font-semibold">Calculatrices</h3>
                <p className="mt-3 text-sm leading-7 text-[#D3CDB9]">
                  Des outils simples pour estimer tes objectifs et mieux planifier.
                </p>
              </article>
            </Link>
          </div>
        </section>

        <section className="mt-16 rounded-3xl border border-[#D3CDB9]/15 bg-[#111111]/90 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-[#F5F1E8]">Pourquoi LeKidBoursier ?</h2>
          <p className="mt-4 max-w-3xl rounded-3xl border border-[#2E7D4F]/20 border-l-[#2E7D4F]/60 bg-[#2E7D4F]/10 p-5 text-base leading-8 text-[#F5F1E8]/80 sm:text-lg">
            LeKidBoursier est né d’une envie simple : apprendre publiquement, créer du contenu utile et rendre la finance plus accessible. En lisant, en publiant et en vulgarisant, j’apprends moi aussi à mieux comprendre l’argent, les marchés et les comportements qui influencent nos décisions.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <article className="rounded-3xl border border-[#D3CDB9]/10 bg-[#111111] p-6 text-[#F5F1E8] shadow-sm transition-colors duration-150 hover:border-[#2E7D4F]/40">
              <h3 className="text-lg font-semibold">Apprendre en partageant</h3>
              <p className="mt-3 text-sm leading-7 text-[#D3CDB9]">
                Je ne me présente pas comme expert. L’objectif est d’apprendre, de lire, de réfléchir et de partager des explications simples au fur et à mesure.
              </p>
            </article>
            <article className="rounded-3xl border border-[#D3CDB9]/10 bg-[#111111] p-6 text-[#F5F1E8] shadow-sm transition-colors duration-150 hover:border-[#2E7D4F]/40">
              <h3 className="text-lg font-semibold">Rendre la finance plus accessible</h3>
              <p className="mt-3 text-sm leading-7 text-[#D3CDB9]">
                La finance personnelle peut sembler compliquée, mais plusieurs notions deviennent plus claires quand elles sont expliquées simplement, avec des exemples concrets.
              </p>
            </article>
            <article className="rounded-3xl border border-[#D3CDB9]/10 bg-[#111111] p-6 text-[#F5F1E8] shadow-sm transition-colors duration-150 hover:border-[#2E7D4F]/40">
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
              <Link href="/" className="flex items-center gap-3">
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
              </Link>
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
                <Link href="/calculatrices" className="block font-normal hover:text-[#2E7D4F]">
                  Calculatrices
                </Link>
                <Link href="/articles" className="block font-normal hover:text-[#2E7D4F]">
                  Articles
                </Link>
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

          <div className="mt-8 flex flex-col gap-4 border-t border-[#111111]/10 pt-6 text-sm text-[#111111]/80 sm:flex-row sm:items-center sm:justify-between">
            <span>© LeKidBoursier</span>
            <nav className="flex flex-wrap gap-4 text-sm text-[#111111]/80">
              <Link href="/mentions-legales" className="font-normal hover:text-[#2E7D4F]">
                Mentions légales
              </Link>
              <Link href="/confidentialite" className="font-normal hover:text-[#2E7D4F]">
                Confidentialité
              </Link>
            </nav>
          </div>
        </footer>
      </main>
    </div>
  );
}
