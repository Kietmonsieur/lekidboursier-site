import Image from "next/image";
import Link from "next/link";

export default function MentionsLegalesPage() {
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
              <Link href="/articles" className="transition-colors hover:text-[#2E7D4F]">
                Articles
              </Link>
            </nav>
          </div>
        </header>

        <section className="rounded-3xl border border-[#D3CDB9]/15 bg-[#111111]/95 p-8 shadow-sm sm:p-10">
          <div className="max-w-3xl space-y-7">
            <span className="inline-flex rounded-full border border-[#2E7D4F]/40 bg-[#2E7D4F]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#D3CDB9]">
              MENTIONS LÉGALES
            </span>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#F5F1E8] sm:text-5xl">
              Mentions légales
            </h1>

            <div className="space-y-5 text-base leading-8 text-[#F5F1E8]/80 sm:text-lg">
              <p>
                LeKidBoursier est un site éducatif qui vise à vulgariser des notions de
                finance personnelle, d’économie et d’investissement long terme.
              </p>
              <p>
                Le contenu publié sur ce site est fourni à des fins d’information et
                d’éducation seulement. Il ne constitue pas un conseil financier,
                juridique, fiscal ou professionnel personnalisé.
              </p>
              <p>
                Les décisions financières doivent être prises selon ta propre situation,
                tes objectifs, ton horizon de temps et ta tolérance au risque. Au besoin,
                consulte un professionnel qualifié.
              </p>
            </div>
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
