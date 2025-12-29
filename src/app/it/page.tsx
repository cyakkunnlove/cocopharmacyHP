import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "医療IT支援",
  description:
    "医療機関・メーカー・自治体向けの医療IT支援と自社プロダクトをご紹介します。",
};

const demoUrl =
  process.env.NEXT_PUBLIC_COCOKARTE_DEMO_URL ?? "/products/cocokarte";
const isExternalDemo = demoUrl.startsWith("http");

const capabilities = [
  {
    title: "Webアプリ開発",
    description: "医療現場の課題に合わせた業務アプリを設計・実装します。",
  },
  {
    title: "業務効率化支援",
    description: "業務フローを可視化し、改善提案から実装まで支援します。",
  },
  {
    title: "サイト制作",
    description: "医療機関・施設向けのコーポレート/採用サイト制作に対応。",
  },
  {
    title: "DX支援",
    description: "医療現場のDX導入を推進し、定着まで伴走します。",
  },
  {
    title: "AI連携",
    description: "AI活用を前提とした業務改善や自動化を支援します。",
  },
  {
    title: "プロダクト提供",
    description: "現場課題に合わせた自社プロダクトの導入・運用を支援。",
  },
  {
    title: "運用設計",
    description: "導入後の運用設計や現場フォローを重視します。",
  },
];

const values = [
  "医療現場の実務視点をもとにした要件整理",
  "守秘義務を前提にした機密情報の取り扱い",
  "現場に定着する運用設計とサポート",
  "薬局運営で培った現場改善の知見",
];

const processSteps = [
  {
    title: "課題整理",
    detail: "現場の業務フローと課題を整理します。",
  },
  {
    title: "要件定義",
    detail: "実務に合った要件・設計を策定します。",
  },
  {
    title: "実装・検証",
    detail: "小さく確実に実装し、運用性を確認します。",
  },
  {
    title: "運用支援",
    detail: "定着支援と改善サイクルを伴走します。",
  },
];

const domains = [
  {
    title: "医療機関向け",
    detail: "診療所・病院向けの業務改善やWeb/システム支援。",
  },
  {
    title: "メーカー向け",
    detail: "製品連携や運用改善のためのIT支援。",
  },
  {
    title: "自治体向け",
    detail: "地域医療の仕組みづくりや情報発信を支援。",
  },
  {
    title: "薬局・介護連携",
    detail: "多職種連携を前提にした運用設計と実装。",
  },
];

const faqs = [
  {
    title: "どのような相談が可能ですか？",
    detail:
      "業務効率化、Webアプリ、サイト制作、DX/AI連携など幅広く対応します。",
  },
  {
    title: "実績は公開できますか？",
    detail:
      "守秘義務のため非公開です。公開可能な範囲は順次掲載します。",
  },
  {
    title: "医療の知識は必要ですか？",
    detail:
      "当社は医療現場の実務知見を持つため、専門知識も補いながら進めます。",
  },
];

const outcomes = [
  "業務時間の削減・運用負荷の軽減",
  "情報共有のスピード向上",
  "属人化の解消と標準化",
  "現場定着までの伴走支援",
];

export default function ItPage() {
  return (
    <div className="bg-[var(--sand)]">
      <Header />

      <main className="mx-auto max-w-6xl px-6 py-16">
        <Reveal className="grid gap-6 rounded-3xl border border-[rgba(11,33,66,0.12)] bg-white p-10 shadow-[0_30px_60px_rgba(11,33,66,0.08)] lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--brand)]">
              Medical IT
            </p>
            <h1 className="mt-3 text-3xl font-semibold md:text-4xl">
              医療IT支援
            </h1>
            <p className="mt-4 max-w-2xl text-sm text-[var(--ink-muted)]">
              医療機関・メーカー・自治体向けに、現場視点のIT支援を提供します。
              医療とITの両方を理解した実装型支援に加え、プロダクト導入も支援します。
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs text-[var(--ink-muted)]">
              <span className="rounded-full border border-[rgba(11,33,66,0.15)] px-3 py-1">
                Webアプリ
              </span>
              <span className="rounded-full border border-[rgba(11,33,66,0.15)] px-3 py-1">
                業務効率化
              </span>
              <span className="rounded-full border border-[rgba(11,33,66,0.15)] px-3 py-1">
                DX/AI連携
              </span>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-[rgba(11,33,66,0.12)]">
            <Image
              src="/legacy/it-hero.png"
              alt="医療IT支援のイメージ"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </Reveal>

        <Reveal className="mt-10 grid gap-6 rounded-3xl border border-[rgba(11,33,66,0.12)] bg-white p-8 shadow-sm lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--brand)]">
              Product
            </p>
            <h2 className="mt-3 text-2xl font-semibold">CoCoKarte</h2>
            <p className="mt-2 text-sm font-semibold text-[var(--brand)]">
              LINE連携型 予約・カルテ一元管理システム
            </p>
            <p className="mt-4 text-sm text-[var(--ink-muted)]">
              予約・問診・カルテ・顧客フォローを一元化し、現場負担を抑えた運用設計を支援します。
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/products/cocokarte"
                className="inline-flex rounded-full border border-[rgba(11,33,66,0.2)] px-5 py-2 text-xs font-semibold text-[var(--ink)] transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
              >
                製品ページを見る
              </a>
              <a
                href={demoUrl}
                target={isExternalDemo ? "_blank" : undefined}
                rel={isExternalDemo ? "noopener noreferrer" : undefined}
                className="inline-flex rounded-full bg-[var(--brand)] px-5 py-2 text-xs font-semibold text-white transition hover:bg-[var(--brand-dark)]"
              >
                CoCoKarte デモを見る
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-[rgba(11,33,66,0.12)]">
            <Image
              src="/legacy/it-dashboard.png"
              alt="CoCoKarteの画面イメージ"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
          <Reveal className="rounded-3xl border border-[rgba(11,33,66,0.12)] bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold">支援内容</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {capabilities.map((capability) => (
                <div
                  key={capability.title}
                  className="rounded-2xl border border-[rgba(11,33,66,0.08)] bg-[var(--mist)] p-4"
                >
                  <h3 className="text-sm font-semibold text-[var(--ink)]">
                    {capability.title}
                  </h3>
                  <p className="mt-2 text-xs text-[var(--ink-muted)]">
                    {capability.description}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal className="rounded-3xl border border-[rgba(11,33,66,0.12)] bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold">支援の価値</h2>
            <ul className="mt-6 space-y-3 text-sm text-[var(--ink-muted)]">
              {values.map((value) => (
                <li key={value} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
                  <span>{value}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-2xl border border-[rgba(11,33,66,0.12)] bg-[var(--sand)] p-4 text-xs text-[var(--ink-muted)]">
              守秘義務のため具体的な連携先・事例は非公開です。
            </div>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Reveal className="rounded-3xl border border-[rgba(11,33,66,0.12)] bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold">対応領域</h2>
            <div className="mt-4 relative h-40 overflow-hidden rounded-2xl border border-[rgba(11,33,66,0.08)]">
              <Image
                src="/legacy/it-teamwork.png"
                alt="多職種連携のイメージ"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {domains.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[rgba(11,33,66,0.08)] bg-[var(--mist)] p-4"
                >
                  <p className="text-sm font-semibold text-[var(--ink)]">
                    {item.title}
                  </p>
                  <p className="mt-2 text-xs text-[var(--ink-muted)]">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal className="rounded-3xl border border-[rgba(11,33,66,0.12)] bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold">期待できる効果</h2>
            <div className="mt-4 relative h-40 overflow-hidden rounded-2xl border border-[rgba(11,33,66,0.08)]">
              <Image
                src="/legacy/it-dashboard.png"
                alt="医療ITの成果イメージ"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <ul className="mt-6 space-y-3 text-sm text-[var(--ink-muted)]">
              {outcomes.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal className="mt-10 rounded-3xl border border-[rgba(11,33,66,0.12)] bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold">導入プロセス</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-2xl border border-[rgba(11,33,66,0.12)] bg-[var(--mist)] p-4"
              >
                <p className="text-xs font-semibold text-[var(--brand)]">
                  STEP {index + 1}
                </p>
                <p className="mt-2 font-semibold text-[var(--ink)]">
                  {step.title}
                </p>
                <p className="mt-2 text-xs text-[var(--ink-muted)]">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Reveal className="rounded-3xl border border-[rgba(11,33,66,0.12)] bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold">よくある相談</h2>
            <div className="mt-6 space-y-4 text-sm text-[var(--ink-muted)]">
              {faqs.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[rgba(11,33,66,0.08)] bg-[var(--mist)] p-4"
                >
                  <p className="text-sm font-semibold text-[var(--ink)]">
                    {item.title}
                  </p>
                  <p className="mt-2 text-xs">{item.detail}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal className="rounded-3xl border border-[rgba(11,33,66,0.12)] bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold">守秘義務・情報管理</h2>
            <div className="mt-4 relative h-40 overflow-hidden rounded-2xl border border-[rgba(11,33,66,0.08)]">
              <Image
                src="/legacy/it-security.png"
                alt="情報管理のイメージ"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <p className="mt-4 text-sm text-[var(--ink-muted)]">
              医療情報・業務情報の取り扱いは守秘義務を最優先に設計します。契約・運用・権限管理を含めた
              安全な体制で支援します。
            </p>
            <div className="mt-6 rounded-2xl border border-[rgba(11,33,66,0.12)] bg-[var(--mist)] p-4 text-xs text-[var(--ink-muted)]">
              詳細は個別にご案内します。まずはご相談ください。
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-10 rounded-3xl border border-[rgba(11,33,66,0.12)] bg-[var(--ink)] p-8 text-white shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[rgba(255,255,255,0.7)]">
                Contact
              </p>
              <h2 className="mt-2 text-2xl font-semibold">
                医療IT支援のご相談はこちら
              </h2>
              <p className="mt-2 text-sm text-[rgba(255,255,255,0.75)]">
                現場課題の整理から実装・運用まで、段階に合わせた支援を行います。
              </p>
            </div>
            <a
              href="/contact"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--ink)]"
            >
              お問い合わせへ
            </a>
          </div>
        </Reveal>
      </main>

      <Footer />
    </div>
  );
}
