import Image from "next/image";
import Link from "next/link";

const ArticleHeroIllustration = () => (
  <svg
    role="img"
    aria-hidden="true"
    viewBox="0 0 560 380"
    className="w-full max-w-md"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g stroke="#D3CDB9" strokeWidth="1" opacity="0.07">
      <line x1="64" y1="54" x2="496" y2="54" />
      <line x1="64" y1="106" x2="496" y2="106" />
      <line x1="64" y1="158" x2="496" y2="158" />
      <line x1="64" y1="210" x2="496" y2="210" />
      <line x1="64" y1="262" x2="496" y2="262" />
      <line x1="112" y1="30" x2="112" y2="318" />
      <line x1="184" y1="30" x2="184" y2="318" />
      <line x1="256" y1="30" x2="256" y2="318" />
      <line x1="328" y1="30" x2="328" y2="318" />
      <line x1="400" y1="30" x2="400" y2="318" />
      <line x1="472" y1="30" x2="472" y2="318" />
    </g>

    <g transform="rotate(-5 198 140)">
      <rect
        x="96"
        y="78"
        width="204"
        height="126"
        rx="18"
        fill="#111111"
        stroke="#D3CDB9"
        strokeWidth="2"
      />
      <rect x="122" y="104" width="70" height="12" rx="4" fill="#2E7D4F" opacity="0.86" />
      <path d="M122 136 H262" stroke="#D3CDB9" strokeWidth="6" strokeLinecap="round" opacity="0.5" />
      <path d="M122 160 H244" stroke="#F5F1E8" strokeWidth="6" strokeLinecap="round" opacity="0.3" />
      <path d="M122 184 H206" stroke="#D3CDB9" strokeWidth="6" strokeLinecap="round" opacity="0.38" />
    </g>

    <g transform="rotate(6 350 160)">
      <rect x="278" y="94" width="174" height="118" rx="18" fill="#D3CDB9" opacity="0.9" />
      <path d="M304 124 H388" stroke="#111111" strokeWidth="6" strokeLinecap="round" opacity="0.24" />
      <path d="M304 150 H422" stroke="#111111" strokeWidth="6" strokeLinecap="round" opacity="0.16" />
      <path d="M304 176 H374" stroke="#111111" strokeWidth="6" strokeLinecap="round" opacity="0.16" />
      <path
        d="M404 174 C416 160 432 160 444 174"
        fill="none"
        stroke="#2E7D4F"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </g>

    <g transform="translate(156 230)">
      <rect
        x="0"
        y="0"
        width="196"
        height="92"
        rx="16"
        fill="#151515"
        stroke="#D3CDB9"
        strokeWidth="2"
        opacity="0.96"
      />
      <path d="M26 30 H108" stroke="#D3CDB9" strokeWidth="6" strokeLinecap="round" opacity="0.45" />
      <path d="M26 56 H146" stroke="#F5F1E8" strokeWidth="6" strokeLinecap="round" opacity="0.28" />
      <circle cx="158" cy="46" r="18" fill="none" stroke="#2E7D4F" strokeWidth="5" />
      <path d="M171 59 L190 78" stroke="#2E7D4F" strokeWidth="5" strokeLinecap="round" />
    </g>

    <g transform="translate(376 238)">
      <path
        d="M32 20 C54 36 48 72 16 96 C22 62 14 38 32 20Z"
        fill="#2E7D4F"
        opacity="0.84"
      />
      <path d="M31 24 C30 54 24 76 14 98" stroke="#F5F1E8" strokeWidth="3" strokeLinecap="round" opacity="0.55" />
      <path d="M10 104 H78" stroke="#D3CDB9" strokeWidth="5" strokeLinecap="round" opacity="0.38" />
    </g>
  </svg>
);

const upcomingSections = [
  {
    title: "Articles LeKidBoursier",
    text: "Des textes éducatifs et des réflexions personnelles pour expliquer simplement l’argent, les marchés et l’investissement long terme.",
  },
  {
    title: "Publications à retenir",
    text: "Certains posts importants repris dans un format plus durable, pour garder les idées utiles accessibles au même endroit.",
  },
  {
    title: "Lectures et liens externes",
    text: "Des articles, études ou ressources trouvés en ligne, accompagnés de courts commentaires et de liens vers les sources originales.",
  },
];

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-[#111111] text-[#F5F1E8]">
      <main className="mx-auto max-w-6xl px-6 py-8 sm:px-10 lg:px-12">
        <header className="mb-10 rounded-3xl bg-[#D3CDB9] px-6 py-5 text-[#111111] shadow-sm sm:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/" className="flex items-center gap-3">
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
            </Link>
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
              <Link href="/economie" className="transition-colors hover:text-[#2E7D4F]">
                Économie
              </Link>
              <Link href="/calculatrices" className="transition-colors hover:text-[#2E7D4F]">
                Calculatrices
              </Link>
              <Link href="/articles" className="transition-colors font-semibold text-[#2E7D4F] hover:text-[#2E7D4F]">
                Articles
              </Link>
            </nav>
          </div>
        </header>

        <section className="mb-16 rounded-3xl border border-[#D3CDB9]/15 bg-[#111111]/95 p-8 shadow-sm sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="max-w-3xl space-y-7">
              <span className="inline-flex rounded-full border border-[#2E7D4F]/40 bg-[#2E7D4F]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#D3CDB9]">
                ARTICLES
              </span>

              <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#F5F1E8] sm:text-5xl">
                Des lectures pour aller plus loin.
              </h1>

              <p className="max-w-2xl text-base leading-8 text-[#F5F1E8]/80 sm:text-lg">
                Une sélection de contenus, réflexions et lectures pour approfondir la finance,
                l’économie, l’investissement et les tendances qui influencent les marchés.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <ArticleHeroIllustration />
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-[#D3CDB9]/15 bg-[#111111]/90 p-8 sm:p-10">
          <h2 className="text-2xl font-semibold text-[#F5F1E8]">Ce qui s’en vient</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {upcomingSections.map((section) => (
              <article
                key={section.title}
                className="rounded-3xl border border-[#D3CDB9]/10 bg-[#111111] p-6 text-[#F5F1E8] shadow-sm transition-colors duration-150 hover:border-[#2E7D4F]/50 hover:bg-[#2E7D4F]/10"
              >
                <div className="flex flex-col gap-4">
                  <span className="w-fit rounded-full border border-[#2E7D4F]/35 bg-[#2E7D4F]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#D3CDB9]">
                    À venir
                  </span>
                  <h3 className="text-lg font-semibold text-[#F5F1E8]">{section.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-7 text-[#D3CDB9]">{section.text}</p>
              </article>
            ))}
          </div>

          <p className="mt-8 max-w-3xl text-sm leading-7 text-[#D3CDB9]/80">
            Cette section servira à regrouper mes contenus et certaines lectures utiles.
            Les sources externes seront toujours liées vers leur contenu original lorsque nécessaire.
          </p>
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
