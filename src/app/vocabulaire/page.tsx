import Image from "next/image";
import Link from "next/link";

const VocabulaireHeroIllustration = () => (
  <svg
    role="img"
    aria-hidden="true"
    viewBox="0 0 520 360"
    className="w-full max-w-md"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g stroke="#D3CDB9" strokeWidth="1" opacity="0.08">
      <line x1="40" y1="52" x2="480" y2="52" />
      <line x1="40" y1="104" x2="480" y2="104" />
      <line x1="40" y1="156" x2="480" y2="156" />
      <line x1="40" y1="208" x2="480" y2="208" />
      <line x1="40" y1="260" x2="480" y2="260" />
      <line x1="84" y1="28" x2="84" y2="320" />
      <line x1="148" y1="28" x2="148" y2="320" />
      <line x1="212" y1="28" x2="212" y2="320" />
      <line x1="276" y1="28" x2="276" y2="320" />
      <line x1="340" y1="28" x2="340" y2="320" />
      <line x1="404" y1="28" x2="404" y2="320" />
    </g>

    <g transform="rotate(-6 188 116)">
      <rect x="92" y="72" width="150" height="84" rx="14" fill="#F5F1E8" opacity="0.94" />
      <path d="M112 104 H174" stroke="#111111" strokeWidth="5" strokeLinecap="round" opacity="0.22" />
      <path d="M112 128 H202" stroke="#111111" strokeWidth="5" strokeLinecap="round" opacity="0.16" />
      <text x="188" y="112" fill="#2E7D4F" fontSize="24" fontWeight="700" fontFamily="Inter, system-ui, sans-serif">
        ETF
      </text>
    </g>

    <g transform="rotate(7 338 104)">
      <rect x="282" y="58" width="140" height="82" rx="14" fill="#D3CDB9" opacity="0.92" />
      <path d="M302 92 H354" stroke="#111111" strokeWidth="5" strokeLinecap="round" opacity="0.2" />
      <path d="M302 116 H374" stroke="#111111" strokeWidth="5" strokeLinecap="round" opacity="0.15" />
      <text x="364" y="101" fill="#2E7D4F" fontSize="22" fontWeight="700" fontFamily="Inter, system-ui, sans-serif">
        CELI
      </text>
    </g>

    <g transform="rotate(3 206 230)">
      <rect x="122" y="186" width="168" height="104" rx="16" fill="#111111" stroke="#D3CDB9" strokeWidth="2" />
      <rect x="144" y="208" width="56" height="14" rx="4" fill="#2E7D4F" opacity="0.86" />
      <path d="M144 242 H250" stroke="#D3CDB9" strokeWidth="5" strokeLinecap="round" opacity="0.62" />
      <path d="M144 266 H226" stroke="#F5F1E8" strokeWidth="5" strokeLinecap="round" opacity="0.34" />
      <path d="M238 214 H262" stroke="#F5F1E8" strokeWidth="5" strokeLinecap="round" opacity="0.74" />
      <path d="M250 202 V226" stroke="#F5F1E8" strokeWidth="5" strokeLinecap="round" opacity="0.74" />
    </g>

    <g transform="rotate(-8 376 236)">
      <rect x="326" y="194" width="118" height="78" rx="14" fill="#F5F1E8" opacity="0.94" />
      <path d="M346 224 H398" stroke="#111111" strokeWidth="5" strokeLinecap="round" opacity="0.2" />
      <text x="382" y="253" fill="#2E7D4F" fontSize="24" fontWeight="700" fontFamily="Inter, system-ui, sans-serif">
        P/E
      </text>
    </g>

    <g>
      <circle cx="362" cy="284" r="34" fill="none" stroke="#2E7D4F" strokeWidth="7" />
      <path d="M386 308 L420 338" stroke="#2E7D4F" strokeWidth="8" strokeLinecap="round" />
      <circle cx="362" cy="284" r="18" fill="#D3CDB9" opacity="0.16" />
    </g>

    <text x="76" y="250" fill="#D3CDB9" fontSize="28" fontWeight="700" fontFamily="Inter, system-ui, sans-serif" opacity="0.86">
      %
    </text>
  </svg>
);

export default function VocabulairePage() {
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
              <Link href="/vocabulaire" className="transition-colors font-semibold text-[#2E7D4F] hover:text-[#2E7D4F]">
                Vocabulaire
              </Link>
              <Link href="/investir" className="transition-colors hover:text-[#2E7D4F]">
                Investir
              </Link>
              <Link href="/economie" className="transition-colors hover:text-[#2E7D4F]">
                Économie
              </Link>
              <a href="#" className="transition-colors hover:text-[#2E7D4F]">
                Calculatrices
              </a>
            </nav>
          </div>
        </header>

        <section className="mb-16 rounded-3xl border border-[#D3CDB9]/15 bg-[#111111]/95 p-8 shadow-sm sm:p-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="max-w-3xl space-y-7">
              <span className="inline-flex rounded-full border border-[#2E7D4F]/40 bg-[#2E7D4F]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#D3CDB9]">
                VOCABULAIRE
              </span>

              <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#F5F1E8] sm:text-5xl">
                Comprendre le langage de la finance, simplement.
              </h1>

              <p className="max-w-2xl text-base leading-8 text-[#F5F1E8]/80 sm:text-lg">
                Des définitions simples pour mieux comprendre les marchés, les entreprises et l’investissement long terme.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <VocabulaireHeroIllustration />
            </div>
          </div>
        </section>

        <section className="mb-16 rounded-3xl border border-[#D3CDB9]/15 bg-[#111111]/90 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-[#F5F1E8]">Les mots qui reviennent souvent</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#F5F1E8]/80">
            Choisis une section, puis ouvre seulement les définitions dont tu as besoin.
          </p>

          <div className="mt-8 space-y-4">
            <details className="group overflow-hidden rounded-3xl border border-[#D3CDB9]/20 bg-[#111111]">
              <summary className="flex cursor-pointer items-center justify-between gap-3 px-4 py-4 text-sm font-semibold text-[#F5F1E8] transition-colors hover:text-[#D3CDB9]">
                <span>Vocabulaire de base</span>
                <span className="text-base font-semibold text-[#2E7D4F]">+</span>
              </summary>

              <div className="border-t border-[#D3CDB9]/10 px-4 py-4">
                <p className="text-sm leading-6 text-[#F5F1E8]/80">
                  Les mots généraux qu’on retrouve souvent quand on parle d’argent, de marchés et d’investissement.
                </p>
                <div className="mt-4 space-y-2">
                  <details className="overflow-hidden rounded-2xl border border-[#D3CDB9]/10 bg-[#111111] px-3 py-3">
                    <summary className="cursor-pointer text-sm font-medium text-[#F5F1E8] hover:text-[#D3CDB9]">
                      Rendement
                    </summary>
                    <p className="mt-2 text-sm leading-6 text-[#D3CDB9]">
                      Le rendement mesure ce qu’un placement a gagné ou perdu sur une période donnée, souvent exprimé en pourcentage.
                    </p>
                  </details>
                  <details className="overflow-hidden rounded-2xl border border-[#D3CDB9]/10 bg-[#111111] px-3 py-3">
                    <summary className="cursor-pointer text-sm font-medium text-[#F5F1E8] hover:text-[#D3CDB9]">
                      Dividende
                    </summary>
                    <p className="mt-2 text-sm leading-6 text-[#D3CDB9]">
                      Une partie des profits qu’une entreprise peut verser à ses actionnaires. Toutes les entreprises ne versent pas de dividendes.
                    </p>
                  </details>
                  <details className="overflow-hidden rounded-2xl border border-[#D3CDB9]/10 bg-[#111111] px-3 py-3">
                    <summary className="cursor-pointer text-sm font-medium text-[#F5F1E8] hover:text-[#D3CDB9]">
                      Volatilité
                    </summary>
                    <p className="mt-2 text-sm leading-6 text-[#D3CDB9]">
                      La volatilité représente les variations du prix d’un actif. Plus un prix bouge fortement, plus il est volatil.
                    </p>
                  </details>
                  <details className="overflow-hidden rounded-2xl border border-[#D3CDB9]/10 bg-[#111111] px-3 py-3">
                    <summary className="cursor-pointer text-sm font-medium text-[#F5F1E8] hover:text-[#D3CDB9]">
                      Diversification
                    </summary>
                    <p className="mt-2 text-sm leading-6 text-[#D3CDB9]">
                      Répartir son argent entre plusieurs placements pour éviter de dépendre d’un seul actif, secteur ou pays.
                    </p>
                  </details>
                  <details className="overflow-hidden rounded-2xl border border-[#D3CDB9]/10 bg-[#111111] px-3 py-3">
                    <summary className="cursor-pointer text-sm font-medium text-[#F5F1E8] hover:text-[#D3CDB9]">
                      Intérêt composé
                    </summary>
                    <p className="mt-2 text-sm leading-6 text-[#D3CDB9]">
                      Le principe où les gains peuvent générer d’autres gains avec le temps. C’est un concept important en investissement long terme.
                    </p>
                  </details>
                  <details className="overflow-hidden rounded-2xl border border-[#D3CDB9]/10 bg-[#111111] px-3 py-3">
                    <summary className="cursor-pointer text-sm font-medium text-[#F5F1E8] hover:text-[#D3CDB9]">
                      Risque
                    </summary>
                    <p className="mt-2 text-sm leading-6 text-[#D3CDB9]">
                      La possibilité qu’un placement perde de la valeur ou que le résultat soit différent de ce qui était attendu.
                    </p>
                  </details>
                  <details className="overflow-hidden rounded-2xl border border-[#D3CDB9]/10 bg-[#111111] px-3 py-3">
                    <summary className="cursor-pointer text-sm font-medium text-[#F5F1E8] hover:text-[#D3CDB9]">
                      Liquidité
                    </summary>
                    <p className="mt-2 text-sm leading-6 text-[#D3CDB9]">
                      La facilité avec laquelle un actif peut être vendu ou converti en argent sans trop affecter son prix.
                    </p>
                  </details>
                  <details className="overflow-hidden rounded-2xl border border-[#D3CDB9]/10 bg-[#111111] px-3 py-3">
                    <summary className="cursor-pointer text-sm font-medium text-[#F5F1E8] hover:text-[#D3CDB9]">
                      Inflation
                    </summary>
                    <p className="mt-2 text-sm leading-6 text-[#D3CDB9]">
                      L’augmentation générale des prix avec le temps, ce qui réduit le pouvoir d’achat de l’argent.
                    </p>
                  </details>
                </div>
              </div>
            </details>

            <details className="group overflow-hidden rounded-3xl border border-[#D3CDB9]/20 bg-[#111111]">
              <summary className="flex cursor-pointer items-center justify-between gap-3 px-4 py-4 text-sm font-semibold text-[#F5F1E8] transition-colors hover:text-[#D3CDB9]">
                <span>Placements et produits</span>
                <span className="text-base font-semibold text-[#2E7D4F]">+</span>
              </summary>

              <div className="border-t border-[#D3CDB9]/10 px-4 py-4">
                <p className="text-sm leading-6 text-[#F5F1E8]/80">
                  Les principaux types de placements ou produits financiers qu’un investisseur peut rencontrer.
                </p>
                <div className="mt-4 space-y-2">
                  <details className="overflow-hidden rounded-2xl border border-[#D3CDB9]/10 bg-[#111111] px-3 py-3">
                    <summary className="cursor-pointer text-sm font-medium text-[#F5F1E8] hover:text-[#D3CDB9]">
                      Action
                    </summary>
                    <p className="mt-2 text-sm leading-6 text-[#D3CDB9]">
                      Une petite part de propriété dans une entreprise. Quand tu achètes une action, tu deviens propriétaire d’une fraction de cette entreprise.
                    </p>
                  </details>
                  <details className="overflow-hidden rounded-2xl border border-[#D3CDB9]/10 bg-[#111111] px-3 py-3">
                    <summary className="cursor-pointer text-sm font-medium text-[#F5F1E8] hover:text-[#D3CDB9]">
                      ETF
                    </summary>
                    <p className="mt-2 text-sm leading-6 text-[#D3CDB9]">
                      Un fonds négocié en bourse qui regroupe plusieurs actifs, comme des actions ou des obligations, dans un seul produit.
                    </p>
                  </details>
                  <details className="overflow-hidden rounded-2xl border border-[#D3CDB9]/10 bg-[#111111] px-3 py-3">
                    <summary className="cursor-pointer text-sm font-medium text-[#F5F1E8] hover:text-[#D3CDB9]">
                      Obligation
                    </summary>
                    <p className="mt-2 text-sm leading-6 text-[#D3CDB9]">
                      Un titre de dette. En achetant une obligation, tu prêtes de l’argent à une entreprise ou à un gouvernement en échange d’intérêts.
                    </p>
                  </details>
                  <details className="overflow-hidden rounded-2xl border border-[#D3CDB9]/10 bg-[#111111] px-3 py-3">
                    <summary className="cursor-pointer text-sm font-medium text-[#F5F1E8] hover:text-[#D3CDB9]">
                      Fonds indiciel
                    </summary>
                    <p className="mt-2 text-sm leading-6 text-[#D3CDB9]">
                      Un fonds qui cherche à suivre la performance d’un indice, comme le S&P 500 ou un indice canadien.
                    </p>
                  </details>
                  <details className="overflow-hidden rounded-2xl border border-[#D3CDB9]/10 bg-[#111111] px-3 py-3">
                    <summary className="cursor-pointer text-sm font-medium text-[#F5F1E8] hover:text-[#D3CDB9]">
                      Fonds commun
                    </summary>
                    <p className="mt-2 text-sm leading-6 text-[#D3CDB9]">
                      Un fonds géré par des professionnels qui regroupe l’argent de plusieurs investisseurs pour acheter différents placements.
                    </p>
                  </details>
                </div>
              </div>
            </details>

            <details className="group overflow-hidden rounded-3xl border border-[#D3CDB9]/20 bg-[#111111]">
              <summary className="flex cursor-pointer items-center justify-between gap-3 px-4 py-4 text-sm font-semibold text-[#F5F1E8] transition-colors hover:text-[#D3CDB9]">
                <span>Analyser une entreprise</span>
                <span className="text-base font-semibold text-[#2E7D4F]">+</span>
              </summary>

              <div className="border-t border-[#D3CDB9]/10 px-4 py-4">
                <p className="text-sm leading-6 text-[#F5F1E8]/80">
                  Quelques termes utiles pour mieux comprendre les chiffres d’une entreprise cotée en bourse.
                </p>
                <div className="mt-4 space-y-2">
                  <details className="overflow-hidden rounded-2xl border border-[#D3CDB9]/10 bg-[#111111] px-3 py-3">
                    <summary className="cursor-pointer text-sm font-medium text-[#F5F1E8] hover:text-[#D3CDB9]">
                      Capitalisation boursière / Market cap
                    </summary>
                    <p className="mt-2 text-sm leading-6 text-[#D3CDB9]">
                      La valeur totale d’une entreprise en bourse. Elle se calcule en multipliant le prix de l’action par le nombre d’actions en circulation.
                    </p>
                  </details>
                  <details className="overflow-hidden rounded-2xl border border-[#D3CDB9]/10 bg-[#111111] px-3 py-3">
                    <summary className="cursor-pointer text-sm font-medium text-[#F5F1E8] hover:text-[#D3CDB9]">
                      Bénéfice par action / EPS
                    </summary>
                    <p className="mt-2 text-sm leading-6 text-[#D3CDB9]">
                      Le profit d’une entreprise divisé par le nombre d’actions en circulation. Il aide à voir combien de profit revient à chaque action.
                    </p>
                  </details>
                  <details className="overflow-hidden rounded-2xl border border-[#D3CDB9]/10 bg-[#111111] px-3 py-3">
                    <summary className="cursor-pointer text-sm font-medium text-[#F5F1E8] hover:text-[#D3CDB9]">
                      P/E ratio
                    </summary>
                    <p className="mt-2 text-sm leading-6 text-[#D3CDB9]">
                      Un ratio qui compare le prix d’une action aux profits de l’entreprise. Il aide à évaluer combien les investisseurs paient pour chaque dollar de profit.
                    </p>
                  </details>
                  <details className="overflow-hidden rounded-2xl border border-[#D3CDB9]/10 bg-[#111111] px-3 py-3">
                    <summary className="cursor-pointer text-sm font-medium text-[#F5F1E8] hover:text-[#D3CDB9]">
                      Revenus
                    </summary>
                    <p className="mt-2 text-sm leading-6 text-[#D3CDB9]">
                      L’argent qu’une entreprise génère grâce à ses ventes avant de retirer ses dépenses.
                    </p>
                  </details>
                  <details className="overflow-hidden rounded-2xl border border-[#D3CDB9]/10 bg-[#111111] px-3 py-3">
                    <summary className="cursor-pointer text-sm font-medium text-[#F5F1E8] hover:text-[#D3CDB9]">
                      Profit net
                    </summary>
                    <p className="mt-2 text-sm leading-6 text-[#D3CDB9]">
                      Ce qu’il reste à l’entreprise après avoir payé ses dépenses, ses intérêts, ses impôts et ses autres coûts.
                    </p>
                  </details>
                  <details className="overflow-hidden rounded-2xl border border-[#D3CDB9]/10 bg-[#111111] px-3 py-3">
                    <summary className="cursor-pointer text-sm font-medium text-[#F5F1E8] hover:text-[#D3CDB9]">
                      Marge bénéficiaire
                    </summary>
                    <p className="mt-2 text-sm leading-6 text-[#D3CDB9]">
                      La proportion des revenus qui devient du profit. Elle aide à comprendre l’efficacité d’une entreprise.
                    </p>
                  </details>
                  <details className="overflow-hidden rounded-2xl border border-[#D3CDB9]/10 bg-[#111111] px-3 py-3">
                    <summary className="cursor-pointer text-sm font-medium text-[#F5F1E8] hover:text-[#D3CDB9]">
                      Croissance
                    </summary>
                    <p className="mt-2 text-sm leading-6 text-[#D3CDB9]">
                      L’augmentation des revenus, des profits ou d’autres mesures importantes d’une entreprise avec le temps.
                    </p>
                  </details>
                </div>
              </div>
            </details>

            <details className="group overflow-hidden rounded-3xl border border-[#D3CDB9]/20 bg-[#111111]">
              <summary className="flex cursor-pointer items-center justify-between gap-3 px-4 py-4 text-sm font-semibold text-[#F5F1E8] transition-colors hover:text-[#D3CDB9]">
                <span>États financiers</span>
                <span className="text-base font-semibold text-[#2E7D4F]">+</span>
              </summary>

              <div className="border-t border-[#D3CDB9]/10 px-4 py-4">
                <p className="text-sm leading-6 text-[#F5F1E8]/80">
                  Les documents et notions qu’on retrouve souvent quand on regarde les résultats financiers d’une entreprise.
                </p>
                <div className="mt-4 space-y-2">
                  <details className="overflow-hidden rounded-2xl border border-[#D3CDB9]/10 bg-[#111111] px-3 py-3">
                    <summary className="cursor-pointer text-sm font-medium text-[#F5F1E8] hover:text-[#D3CDB9]">
                      État des résultats
                    </summary>
                    <p className="mt-2 text-sm leading-6 text-[#D3CDB9]">
                      Un document qui montre les revenus, les dépenses et les profits d’une entreprise sur une période donnée.
                    </p>
                  </details>
                  <details className="overflow-hidden rounded-2xl border border-[#D3CDB9]/10 bg-[#111111] px-3 py-3">
                    <summary className="cursor-pointer text-sm font-medium text-[#F5F1E8] hover:text-[#D3CDB9]">
                      Bilan
                    </summary>
                    <p className="mt-2 text-sm leading-6 text-[#D3CDB9]">
                      Un document qui montre ce que l’entreprise possède, ce qu’elle doit et la valeur appartenant aux actionnaires à un moment précis.
                    </p>
                  </details>
                  <details className="overflow-hidden rounded-2xl border border-[#D3CDB9]/10 bg-[#111111] px-3 py-3">
                    <summary className="cursor-pointer text-sm font-medium text-[#F5F1E8] hover:text-[#D3CDB9]">
                      Flux de trésorerie
                    </summary>
                    <p className="mt-2 text-sm leading-6 text-[#D3CDB9]">
                      Un document qui montre les entrées et sorties d’argent de l’entreprise.
                    </p>
                  </details>
                  <details className="overflow-hidden rounded-2xl border border-[#D3CDB9]/10 bg-[#111111] px-3 py-3">
                    <summary className="cursor-pointer text-sm font-medium text-[#F5F1E8] hover:text-[#D3CDB9]">
                      Actifs
                    </summary>
                    <p className="mt-2 text-sm leading-6 text-[#D3CDB9]">
                      Ce que l’entreprise possède, comme de l’argent, des immeubles, de l’inventaire ou des équipements.
                    </p>
                  </details>
                  <details className="overflow-hidden rounded-2xl border border-[#D3CDB9]/10 bg-[#111111] px-3 py-3">
                    <summary className="cursor-pointer text-sm font-medium text-[#F5F1E8] hover:text-[#D3CDB9]">
                      Passifs
                    </summary>
                    <p className="mt-2 text-sm leading-6 text-[#D3CDB9]">
                      Ce que l’entreprise doit, comme des dettes, des comptes à payer ou d’autres obligations.
                    </p>
                  </details>
                  <details className="overflow-hidden rounded-2xl border border-[#D3CDB9]/10 bg-[#111111] px-3 py-3">
                    <summary className="cursor-pointer text-sm font-medium text-[#F5F1E8] hover:text-[#D3CDB9]">
                      Capitaux propres
                    </summary>
                    <p className="mt-2 text-sm leading-6 text-[#D3CDB9]">
                      La valeur qui appartient aux actionnaires après avoir soustrait les passifs des actifs.
                    </p>
                  </details>
                  <details className="overflow-hidden rounded-2xl border border-[#D3CDB9]/10 bg-[#111111] px-3 py-3">
                    <summary className="cursor-pointer text-sm font-medium text-[#F5F1E8] hover:text-[#D3CDB9]">
                      Dette
                    </summary>
                    <p className="mt-2 text-sm leading-6 text-[#D3CDB9]">
                      L’argent emprunté par une entreprise qu’elle devra rembourser avec le temps.
                    </p>
                  </details>
                  <details className="overflow-hidden rounded-2xl border border-[#D3CDB9]/10 bg-[#111111] px-3 py-3">
                    <summary className="cursor-pointer text-sm font-medium text-[#F5F1E8] hover:text-[#D3CDB9]">
                      Trésorerie
                    </summary>
                    <p className="mt-2 text-sm leading-6 text-[#D3CDB9]">
                      L’argent disponible qu’une entreprise possède pour financer ses opérations, investir ou faire face aux imprévus.
                    </p>
                  </details>
                  <details className="overflow-hidden rounded-2xl border border-[#D3CDB9]/10 bg-[#111111] px-3 py-3">
                    <summary className="cursor-pointer text-sm font-medium text-[#F5F1E8] hover:text-[#D3CDB9]">
                      Free cash flow
                    </summary>
                    <p className="mt-2 text-sm leading-6 text-[#D3CDB9]">
                      L’argent qu’il reste à une entreprise après avoir payé ses dépenses d’exploitation et ses investissements nécessaires.
                    </p>
                  </details>
                </div>
              </div>
            </details>
          </div>
        </section>

        <section className="mb-16 rounded-3xl border border-[#D3CDB9]/15 bg-[#111111]/90 p-6 sm:p-8">
          <div className="rounded-3xl border border-[#D3CDB9]/10 bg-[#1c1c1c] p-6 text-sm leading-7 text-[#F5F1E8]">
            Comprendre les mots de base ne garantit pas de meilleurs rendements, mais ça aide à prendre des décisions plus réfléchies et à éviter de suivre les marchés sans comprendre ce qui se passe.
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
