import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "事業紹介",
  description:
    "薬局事業・在宅医療支援・医療IT支援の3領域で地域医療を支援します。",
};

const services = [
  {
    title: "薬局事業",
    tagline: "調剤・服薬指導を基盤にした地域支援",
    description:
      "処方箋調剤・服薬指導を中心に、患者さまの生活に寄り添った支援を行います。",
    image: "/legacy/patient.png",
    items: ["処方箋調剤", "服薬指導", "在宅訪問", "医療機関との連携"],
  },
  {
    title: "在宅医療支援",
    tagline: "医療機関・施設と連携した運用体制",
    description:
      "医療機関・施設との連携を前提に、在宅医療を支える運用体制を整備します。",
    image: "/legacy/homecare-consult.png",
    items: ["訪問体制の設計", "連携フロー構築", "継続フォロー"],
  },
  {
    title: "医療IT事業",
    tagline: "現場課題に即したIT実装支援",
    description:
      "医療現場の業務効率化と価値向上を目的に、実装とプロダクト導入を支援します。",
    image: "/legacy/it-dashboard.png",
    items: [
      "Webアプリ開発",
      "業務フロー可視化・要件定義",
      "導入・定着支援（研修/マニュアル）",
      "外部連携支援（LINE/予約/決済/会計/電子署名）",
      "プロダクト提供",
    ],
  },
];

const workflowSteps = [
  {
    title: "ヒアリング",
    description: "課題・背景・現場フローを整理します。",
  },
  {
    title: "設計",
    description: "医療現場に適した運用設計・仕様を作成。",
  },
  {
    title: "実装",
    description: "薬局/医療ITの両視点で実装・検証。",
  },
  {
    title: "運用支援",
    description: "定着支援と改善サイクルを継続。",
  },
];

const caseStudies = [
  {
    title: "在宅訪問体制の再設計",
    detail:
      "訪問スケジュールと服薬管理を見直し、対応スピードを向上。",
    tag: "在宅医療支援",
  },
  {
    title: "医療機関向けWeb改善",
    detail:
      "患者導線を整理し、問い合わせ率の改善につながる構成へ。",
    tag: "Web制作",
  },
  {
    title: "業務効率化支援",
    detail:
      "業務フローを可視化し、事務作業の負担を軽減。",
    tag: "DX支援",
  },
];

const serviceHighlights = [
  {
    title: "連携領域",
    detail: "医療機関 / 施設 / 自治体 / メーカー",
  },
  {
    title: "対応エリア",
    detail: "千葉県内全域",
  },
  {
    title: "支援範囲",
    detail: "調剤 / 在宅 / 医療IT / DX / プロダクト",
  },
  {
    title: "体制",
    detail: "現場知見 + 実装力",
  },
];

const supportValues = [
  "現場の負担を抑えた進行設計",
  "守秘義務を前提とした情報管理",
  "運用定着までの伴走支援",
  "医療現場の視点を重視",
];

export default function ServicesPage() {
  return (
    <div className="bg-[var(--sand)]">
      <Header />

      <main className="mx-auto max-w-6xl px-6 py-16">
        <Reveal className="grid gap-6 rounded-3xl border border-[rgba(11,33,66,0.12)] bg-white p-10 shadow-[0_30px_60px_rgba(11,33,66,0.08)] lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--brand)]">
              Services
            </p>
            <h1 className="mt-3 text-3xl font-semibold md:text-4xl">
              事業紹介
            </h1>
            <p className="mt-4 max-w-2xl text-sm text-[var(--ink-muted)]">
              薬局事業と医療IT事業を同格に展開。医療現場の実務に即した支援で地域医療の基盤を支えます。
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {serviceHighlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[rgba(11,33,66,0.12)] bg-[var(--mist)] p-4"
                >
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--brand)]">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[var(--ink)]">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-[rgba(11,33,66,0.12)]">
            <Image
              src="/legacy/homecare-teamwork.png"
              alt="事業紹介のイメージ"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <Reveal
              key={service.title}
              className="rounded-3xl border border-[rgba(11,33,66,0.12)] bg-white p-6 shadow-sm"
            >
              <div className="relative h-36 overflow-hidden rounded-2xl border border-[rgba(11,33,66,0.08)]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <h2 className="mt-4 text-xl font-semibold">{service.title}</h2>
              <p className="mt-2 text-xs text-[var(--brand)]">
                {service.tagline}
              </p>
              <p className="mt-3 text-sm text-[var(--ink-muted)]">
                {service.description}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-[var(--ink-muted)]">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 rounded-3xl border border-[rgba(11,33,66,0.12)] bg-white p-10 shadow-[0_30px_60px_rgba(11,33,66,0.08)]">
          <p className="text-xs uppercase tracking-[0.28em] text-[var(--brand)]">
            Workflow
          </p>
          <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
            支援のワークフロー
          </h2>
          <p className="mt-4 text-sm text-[var(--ink-muted)]">
            医療現場に負担をかけない進め方で、課題整理から運用支援まで一貫して対応します。
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-4">
            {workflowSteps.map((step, index) => (
              <div
                key={step.title}
                className="relative rounded-2xl border border-[rgba(11,33,66,0.12)] bg-[var(--mist)] p-5"
              >
                <p className="text-xs font-semibold text-[var(--brand)]">
                  STEP {index + 1}
                </p>
                <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-[var(--ink-muted)]">
                  {step.description}
                </p>
                {index < workflowSteps.length - 1 && (
                  <span className="pointer-events-none absolute right-[-14px] top-1/2 hidden h-[2px] w-7 -translate-y-1/2 bg-[rgba(11,33,66,0.2)] lg:block" />
                )}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-10 rounded-3xl border border-[rgba(11,33,66,0.12)] bg-white p-10 shadow-sm">
          <p className="text-xs uppercase tracking-[0.28em] text-[var(--brand)]">
            Case Studies
          </p>
          <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
            実績（匿名・概要）
          </h2>
          <p className="mt-4 text-sm text-[var(--ink-muted)]">
            守秘義務のため名称は非公開。公開可能な範囲で概要のみ掲載しています。
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {caseStudies.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[rgba(11,33,66,0.12)] bg-[var(--mist)] p-5"
              >
                <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--gold)]">
                  {item.tag}
                </p>
                <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm text-[var(--ink-muted)]">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-10 rounded-3xl border border-[rgba(11,33,66,0.12)] bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold">支援の価値</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {supportValues.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[rgba(11,33,66,0.12)] bg-[var(--mist)] p-4 text-sm text-[var(--ink-muted)]"
              >
                {item}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-10 rounded-3xl border border-[rgba(11,33,66,0.12)] bg-[var(--mist)] p-8 text-sm text-[var(--ink-muted)]">
          実績は守秘義務のため名称非公開です。詳細は個別にご相談ください。
        </Reveal>

        <Reveal className="mt-10 rounded-3xl border border-[rgba(11,33,66,0.12)] bg-[var(--ink)] p-8 text-white shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[rgba(255,255,255,0.7)]">
                Contact
              </p>
              <h2 className="mt-2 text-2xl font-semibold">
                事業のご相談はお気軽に
              </h2>
              <p className="mt-2 text-sm text-[rgba(255,255,255,0.75)]">
                課題整理から実装・運用まで、段階に応じてご提案します。
              </p>
            </div>
            <a
              href="/contact"
              className="rounded-full bg-[var(--brand)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[rgba(27,141,138,0.25)] transition hover:bg-[var(--brand-dark)]"
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
