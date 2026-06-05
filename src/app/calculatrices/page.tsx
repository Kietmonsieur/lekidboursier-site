"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

type ProjectionPoint = {
  year: number;
  estimatedValue: number;
  investedTotal: number;
};

type ContributionFrequency = "monthly" | "weekly";

const currencyFormatter = new Intl.NumberFormat("fr-CA", {
  style: "currency",
  currency: "CAD",
  maximumFractionDigits: 0,
});

const parseInputNumber = (value: string) => {
  const normalized = value.replace(",", ".");
  const parsed = Number.parseFloat(normalized);
  return Number.isFinite(parsed) ? parsed : 0;
};

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

const buildProjection = (
  initialAmount: number,
  regularContribution: number,
  contributionFrequency: ContributionFrequency,
  annualReturn: number,
  years: number,
) => {
  const safeInitial = Math.max(0, initialAmount);
  const safeContribution = Math.max(0, regularContribution);
  const safeReturn = clamp(annualReturn, -50, 50);
  const safeYears = clamp(Math.round(years), 1, 60);
  const contributionsPerYear = contributionFrequency === "weekly" ? 52 : 12;
  const periodicReturn = safeReturn / 100 / contributionsPerYear;
  const data: ProjectionPoint[] = [
    {
      year: 0,
      estimatedValue: safeInitial,
      investedTotal: safeInitial,
    },
  ];

  let estimatedValue = safeInitial;

  for (
    let period = 1;
    period <= safeYears * contributionsPerYear;
    period += 1
  ) {
    estimatedValue = estimatedValue * (1 + periodicReturn) + safeContribution;

    if (period % contributionsPerYear === 0) {
      const year = period / contributionsPerYear;
      data.push({
        year,
        estimatedValue,
        investedTotal: safeInitial + safeContribution * period,
      });
    }
  }

  return data;
};

const formatCurrency = (value: number) => currencyFormatter.format(value);

const pathFromPoints = (
  data: ProjectionPoint[],
  key: "estimatedValue" | "investedTotal",
  maxValue: number,
  width: number,
  height: number,
  padding: number,
) =>
  data
    .map((point, index) => {
      const x =
        padding +
        (index / Math.max(data.length - 1, 1)) * (width - padding * 2);
      const y =
        height -
        padding -
        (point[key] / Math.max(maxValue, 1)) * (height - padding * 2);

      return `${index === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`;
    })
    .join(" ");

const CalculatorsHeroIllustration = () => (
  <svg
    role="img"
    aria-hidden="true"
    viewBox="0 0 560 380"
    className="w-full max-w-md"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="calculatorGlow" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#2E7D4F" stopOpacity="0.28" />
        <stop offset="100%" stopColor="#2E7D4F" stopOpacity="0.02" />
      </linearGradient>
    </defs>

    <rect x="20" y="20" width="520" height="340" rx="28" fill="#151515" />
    <g stroke="#D3CDB9" strokeWidth="1" opacity="0.08">
      <line x1="58" y1="70" x2="504" y2="70" />
      <line x1="58" y1="122" x2="504" y2="122" />
      <line x1="58" y1="174" x2="504" y2="174" />
      <line x1="58" y1="226" x2="504" y2="226" />
      <line x1="58" y1="278" x2="504" y2="278" />
      <line x1="102" y1="42" x2="102" y2="326" />
      <line x1="176" y1="42" x2="176" y2="326" />
      <line x1="250" y1="42" x2="250" y2="326" />
      <line x1="324" y1="42" x2="324" y2="326" />
      <line x1="398" y1="42" x2="398" y2="326" />
      <line x1="472" y1="42" x2="472" y2="326" />
    </g>

    <path
      d="M68 282 C128 270 152 244 198 242 C244 240 256 214 298 202 C338 191 360 166 398 140 C430 118 454 92 500 82"
      fill="none"
      stroke="#2E7D4F"
      strokeWidth="5"
      strokeLinecap="round"
    />
    <path
      d="M68 282 C128 270 152 244 198 242 C244 240 256 214 298 202 C338 191 360 166 398 140 C430 118 454 92 500 82"
      fill="none"
      stroke="#2E7D4F"
      strokeWidth="14"
      strokeLinecap="round"
      opacity="0.08"
    />

    <g fill="#D3CDB9" opacity="0.42" fontFamily="monospace" fontSize="18">
      <text x="92" y="105">%</text>
      <text x="446" y="154">$</text>
      <text x="380" y="304" fontSize="13">
        20 ans
      </text>
    </g>

    <g transform="translate(172 112)">
      <rect
        x="18"
        y="22"
        width="230"
        height="202"
        rx="22"
        fill="url(#calculatorGlow)"
      />
      <rect
        x="0"
        y="0"
        width="230"
        height="202"
        rx="22"
        fill="#111111"
        stroke="#D3CDB9"
        strokeOpacity="0.22"
        strokeWidth="2"
      />
      <rect
        x="24"
        y="24"
        width="182"
        height="42"
        rx="10"
        fill="#D3CDB9"
        opacity="0.14"
      />
      <path
        d="M44 45 H136"
        stroke="#F5F1E8"
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.26"
      />
      <path
        d="M158 45 H184"
        stroke="#2E7D4F"
        strokeWidth="5"
        strokeLinecap="round"
      />
      {[0, 1, 2].map((row) =>
        [0, 1, 2].map((col) => (
          <rect
            key={`${row}-${col}`}
            x={24 + col * 58}
            y={88 + row * 42}
            width="34"
            height="28"
            rx="8"
            fill={row === 2 && col === 2 ? "#2E7D4F" : "#D3CDB9"}
            opacity={row === 2 && col === 2 ? "0.86" : "0.18"}
          />
        )),
      )}
    </g>
  </svg>
);

function NumberField({
  label,
  value,
  suffix,
  helper,
  min = 0,
  step = 1,
  onChange,
}: {
  label: string;
  value: string;
  suffix: string;
  helper?: string;
  min?: number;
  step?: number;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-[#F5F1E8]">{label}</span>
      <span className="mt-3 flex items-center rounded-2xl border border-[#D3CDB9]/15 bg-[#151515] px-4 py-3 transition-colors focus-within:border-[#2E7D4F]/70">
        <input
          type="number"
          min={min}
          step={step}
          inputMode="decimal"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="w-full bg-transparent text-base font-semibold text-[#F5F1E8] outline-none [appearance:textfield] placeholder:text-[#D3CDB9]/50 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        />
        <span className="ml-3 text-sm font-semibold text-[#D3CDB9]">
          {suffix}
        </span>
      </span>
      {helper ? (
        <span className="mt-2 block text-xs leading-6 text-[#D3CDB9]/80">
          {helper}
        </span>
      ) : null}
    </label>
  );
}

function FrequencyToggle({
  value,
  onChange,
}: {
  value: ContributionFrequency;
  onChange: (value: ContributionFrequency) => void;
}) {
  const options: { label: string; value: ContributionFrequency }[] = [
    { label: "Par mois", value: "monthly" },
    { label: "Par semaine", value: "weekly" },
  ];

  return (
    <div className="inline-grid grid-cols-2 rounded-full border border-[#D3CDB9]/15 bg-[#151515] p-1">
      {options.map((option) => {
        const isActive = value === option.value;

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors sm:px-4 ${
              isActive
                ? "bg-[#2E7D4F] text-[#F5F1E8]"
                : "text-[#D3CDB9] hover:bg-[#2E7D4F]/10 hover:text-[#F5F1E8]"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

function ProjectionChart({ data }: { data: ProjectionPoint[] }) {
  const [activeIndex, setActiveIndex] = useState(data.length - 1);
  const width = 680;
  const height = 300;
  const padding = 42;
  const maxValue = Math.max(
    ...data.map((point) => Math.max(point.estimatedValue, point.investedTotal)),
    1,
  );
  const safeActiveIndex = clamp(activeIndex, 0, data.length - 1);
  const activePoint = data[safeActiveIndex];
  const activeX =
    padding +
    (safeActiveIndex / Math.max(data.length - 1, 1)) * (width - padding * 2);
  const activeEstimatedY =
    height -
    padding -
    (activePoint.estimatedValue / maxValue) * (height - padding * 2);
  const activeInvestedY =
    height -
    padding -
    (activePoint.investedTotal / maxValue) * (height - padding * 2);

  const updateActivePoint = (clientX: number, currentTarget: SVGSVGElement) => {
    const rect = currentTarget.getBoundingClientRect();
    const ratio = clamp((clientX - rect.left) / rect.width, 0, 1);
    setActiveIndex(Math.round(ratio * (data.length - 1)));
  };

  return (
    <div className="rounded-3xl border border-[#D3CDB9]/10 bg-[#111111] p-4 sm:p-5">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-[#F5F1E8]">
            Évolution estimée
          </h3>
          <p className="mt-1 text-xs leading-5 text-[#D3CDB9]">
            Survole ou touche le graphique pour voir une année précise.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 text-xs text-[#D3CDB9]">
          <span className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#2E7D4F]" />
            Valeur estimée
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#D3CDB9]" />
            Total investi
          </span>
        </div>
      </div>

      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="h-auto w-full"
        role="img"
        aria-label="Graphique montrant la valeur estimée et le total investi par année"
        onMouseMove={(event) =>
          updateActivePoint(event.clientX, event.currentTarget)
        }
        onTouchMove={(event) => {
          const touch = event.touches[0];
          if (touch) updateActivePoint(touch.clientX, event.currentTarget);
        }}
        onTouchStart={(event) => {
          const touch = event.touches[0];
          if (touch) updateActivePoint(touch.clientX, event.currentTarget);
        }}
      >
        <g stroke="#D3CDB9" strokeWidth="1" opacity="0.08">
          {[0, 1, 2, 3].map((line) => {
            const y = padding + line * ((height - padding * 2) / 3);
            return <line key={line} x1={padding} y1={y} x2={width - padding} y2={y} />;
          })}
        </g>
        <line
          x1={padding}
          y1={height - padding}
          x2={width - padding}
          y2={height - padding}
          stroke="#D3CDB9"
          strokeOpacity="0.18"
        />
        <line
          x1={padding}
          y1={padding}
          x2={padding}
          y2={height - padding}
          stroke="#D3CDB9"
          strokeOpacity="0.18"
        />

        <path
          d={pathFromPoints(data, "investedTotal", maxValue, width, height, padding)}
          fill="none"
          stroke="#D3CDB9"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.86"
        />
        <path
          d={pathFromPoints(data, "estimatedValue", maxValue, width, height, padding)}
          fill="none"
          stroke="#2E7D4F"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <line
          x1={activeX}
          y1={padding}
          x2={activeX}
          y2={height - padding}
          stroke="#F5F1E8"
          strokeOpacity="0.16"
          strokeDasharray="5 7"
        />
        <circle cx={activeX} cy={activeEstimatedY} r="6" fill="#2E7D4F" />
        <circle cx={activeX} cy={activeInvestedY} r="5" fill="#D3CDB9" />

        {[0, Math.floor((data.length - 1) / 2), data.length - 1].map((index) => {
          const point = data[index];
          const x =
            padding +
            (index / Math.max(data.length - 1, 1)) * (width - padding * 2);
          return (
            <text
              key={point.year}
              x={x}
              y={height - 12}
              textAnchor="middle"
              fill="#D3CDB9"
              opacity="0.72"
              fontSize="13"
            >
              {point.year} ans
            </text>
          );
        })}
      </svg>

      <div className="mt-4 rounded-2xl border border-[#2E7D4F]/15 bg-[#2E7D4F]/10 p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2E7D4F]">
          Année {activePoint.year}
        </p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <p className="text-sm text-[#D3CDB9]">
            Valeur estimée{" "}
            <span className="block text-base font-semibold text-[#F5F1E8]">
              {formatCurrency(activePoint.estimatedValue)}
            </span>
          </p>
          <p className="text-sm text-[#D3CDB9]">
            Total investi{" "}
            <span className="block text-base font-semibold text-[#F5F1E8]">
              {formatCurrency(activePoint.investedTotal)}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

function CompoundCalculator() {
  const [initialAmount, setInitialAmount] = useState("1000");
  const [regularContribution, setRegularContribution] = useState("200");
  const [contributionFrequency, setContributionFrequency] =
    useState<ContributionFrequency>("monthly");
  const [annualReturn, setAnnualReturn] = useState("7");
  const [years, setYears] = useState("20");
  const frequencyLabel =
    contributionFrequency === "weekly" ? "hebdomadaire" : "mensuelle";
  const frequencySuffix = contributionFrequency === "weekly" ? "$/sem." : "$/mois";

  const projection = useMemo(
    () =>
      buildProjection(
        parseInputNumber(initialAmount),
        parseInputNumber(regularContribution),
        contributionFrequency,
        parseInputNumber(annualReturn),
        parseInputNumber(years),
      ),
    [
      initialAmount,
      regularContribution,
      contributionFrequency,
      annualReturn,
      years,
    ],
  );

  const finalPoint = projection[projection.length - 1];
  const estimatedGain = finalPoint.estimatedValue - finalPoint.investedTotal;

  return (
    <section className="mb-16 rounded-3xl border border-[#D3CDB9]/15 bg-[#111111]/90 p-6 shadow-sm sm:p-8 lg:p-10">
      <div className="mb-8 max-w-3xl">
        <p className="text-sm uppercase tracking-[0.22em] text-[#D3CDB9]">
          Outil interactif
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-[#F5F1E8] sm:text-4xl">
          Rendement composé
        </h2>
        <p className="mt-4 text-base leading-8 text-[#F5F1E8]/80 sm:text-lg">
          Estime la valeur future d’un investissement selon un montant de
          départ, des contributions régulières, un rendement annuel estimé et
          une durée.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
        <div className="rounded-3xl border border-[#D3CDB9]/10 bg-[#111111] p-5 sm:p-6">
          <div className="grid gap-5">
            <NumberField
              label="Montant initial"
              value={initialAmount}
              suffix="$"
              min={0}
              step={100}
              onChange={setInitialAmount}
            />
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm font-semibold text-[#F5F1E8]">
                Fréquence de contribution
              </p>
              <FrequencyToggle
                value={contributionFrequency}
                onChange={setContributionFrequency}
              />
            </div>
            <NumberField
              label="Montant de contribution"
              value={regularContribution}
              suffix={frequencySuffix}
              min={0}
              step={25}
              helper={`Cette contribution est calculée sur une base ${frequencyLabel}.`}
              onChange={setRegularContribution}
            />
            <NumberField
              label="Rendement annuel estimé"
              value={annualReturn}
              suffix="%"
              min={-50}
              step={0.1}
              helper="Tu peux utiliser un rendement historique de marché comme repère, par exemple celui du S&P 500 après inflation. Ce chiffre reste une hypothèse, pas une garantie."
              onChange={setAnnualReturn}
            />
            <NumberField
              label="Durée en années"
              value={years}
              suffix="ans"
              min={1}
              step={1}
              onChange={setYears}
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-[#2E7D4F]/18 bg-[#151515] p-5 sm:p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#2E7D4F]">
              Résultats
            </p>
            <p className="mt-3 text-sm leading-6 text-[#D3CDB9]">
              Contribution {frequencyLabel} prise en compte dans le calcul.
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              <div>
                <p className="text-sm text-[#D3CDB9]">Valeur finale estimée</p>
                <p className="mt-2 text-2xl font-semibold text-[#F5F1E8]">
                  {formatCurrency(finalPoint.estimatedValue)}
                </p>
              </div>
              <div>
                <p className="text-sm text-[#D3CDB9]">Total investi</p>
                <p className="mt-2 text-2xl font-semibold text-[#F5F1E8]">
                  {formatCurrency(finalPoint.investedTotal)}
                </p>
              </div>
              <div>
                <p className="text-sm text-[#D3CDB9]">Gain estimé</p>
                <p className="mt-2 text-2xl font-semibold text-[#2E7D4F]">
                  {formatCurrency(estimatedGain)}
                </p>
              </div>
            </div>
            <p className="mt-5 border-l-4 border-[#2E7D4F] pl-4 text-sm leading-7 text-[#F5F1E8]/80">
              Plus l’horizon est long, plus l’effet du rendement composé peut
              devenir important.
            </p>
          </div>

          <ProjectionChart data={projection} />
        </div>
      </div>

      <div className="mt-6 rounded-3xl border border-[#2E7D4F]/20 border-l-[#2E7D4F]/70 bg-[#2E7D4F]/8 p-5 text-sm leading-7 text-[#D3CDB9]">
        Cette calculatrice donne une estimation basée sur tes hypothèses. Elle
        ne tient pas compte des impôts, des frais, de l’inflation future ou des
        variations réelles du marché.
      </div>
    </section>
  );
}

export default function CalculatricesPage() {
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
              <Link
                href="/finance-personnelle"
                className="transition-colors font-normal hover:text-[#2E7D4F]"
              >
                Finance personnelle
              </Link>
              <Link
                href="/vocabulaire"
                className="transition-colors font-normal hover:text-[#2E7D4F]"
              >
                Vocabulaire
              </Link>
              <Link
                href="/investir"
                className="transition-colors font-normal hover:text-[#2E7D4F]"
              >
                Investir
              </Link>
              <Link
                href="/economie"
                className="transition-colors font-normal hover:text-[#2E7D4F]"
              >
                Économie
              </Link>
              <Link
                href="/calculatrices"
                className="transition-colors font-semibold text-[#2E7D4F] hover:text-[#2E7D4F]"
              >
                Calculatrices
              </Link>
              <Link
                href="/articles"
                className="transition-colors font-normal hover:text-[#2E7D4F]"
              >
                Articles
              </Link>
            </nav>
          </div>
        </header>

        <section className="mb-16 rounded-3xl border border-[#D3CDB9]/15 bg-[#111111]/95 p-8 shadow-sm sm:p-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex rounded-full border border-[#2E7D4F]/40 bg-[#2E7D4F]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#D3CDB9]">
                CALCULATRICES
              </span>
              <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#F5F1E8] sm:text-5xl">
                Calculer pour mieux comprendre.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-[#F5F1E8]/80 sm:text-lg">
                Des outils simples pour visualiser l’impact du temps, de
                l’épargne et du rendement sur tes objectifs financiers.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <CalculatorsHeroIllustration />
            </div>
          </div>
        </section>

        <CompoundCalculator />

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
                Finance personnelle, économie et investissement long terme,
                expliqués simplement.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#111111]">
                Explorer
              </p>
              <nav className="space-y-3 text-sm text-[#111111]">
                <Link
                  href="/finance-personnelle"
                  className="block font-normal hover:text-[#2E7D4F]"
                >
                  Finance personnelle
                </Link>
                <Link
                  href="/vocabulaire"
                  className="block font-normal hover:text-[#2E7D4F]"
                >
                  Vocabulaire
                </Link>
                <Link
                  href="/investir"
                  className="block font-normal hover:text-[#2E7D4F]"
                >
                  Investir
                </Link>
                <Link
                  href="/economie"
                  className="block font-normal hover:text-[#2E7D4F]"
                >
                  Économie
                </Link>
                <Link
                  href="/calculatrices"
                  className="block font-semibold text-[#2E7D4F] hover:text-[#2E7D4F]"
                >
                  Calculatrices
                </Link>
                <Link
                  href="/articles"
                  className="block font-normal hover:text-[#2E7D4F]"
                >
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
              <Link
                href="/mentions-legales"
                className="font-normal hover:text-[#2E7D4F]"
              >
                Mentions légales
              </Link>
              <Link
                href="/confidentialite"
                className="font-normal hover:text-[#2E7D4F]"
              >
                Confidentialité
              </Link>
            </nav>
          </div>
        </footer>
      </main>
    </div>
  );
}
