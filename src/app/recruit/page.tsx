import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "採用情報",
  description: "株式会社メディカル東京の採用情報をご案内します。",
};

const roles = [
  {
    title: "薬剤師（正社員）",
    status: "現在募集していません",
  },
  {
    title: "薬剤師（アルバイト）",
    status: "現在募集していません",
  },
  {
    title: "事務スタッフ（正社員）",
    status: "現在募集していません",
  },
  {
    title: "事務スタッフ（アルバイト）",
    status: "現在募集していません",
  },
];

const values = [
  "在宅医療の現場で実務に強い支援を学べる環境",
  "医療とITの両方に触れられる柔軟な体制",
  "地域医療に貢献するやりがい",
  "小規模ならではのフットワーク",
];

const culture = [
  {
    title: "現場起点で考える",
    detail:
      "患者さまの生活を第一に考え、現場の声を大切にする文化です。",
  },
  {
    title: "多職種連携を歓迎",
    detail: "職種の壁を越えた連携を重視し、協力体制を築きます。",
  },
  {
    title: "挑戦を応援",
    detail:
      "在宅医療や医療ITの新しい取り組みに挑戦する姿勢を応援します。",
  },
];

const flow = [
  { title: "お問い合わせ", detail: "まずはお問い合わせフォームからご連絡ください。" },
  { title: "面談", detail: "業務内容や働き方のご希望を伺います。" },
  { title: "選考", detail: "経験・適性を確認し、条件をご相談します。" },
  { title: "入社", detail: "入社後は現場に合わせて研修を実施します。" },
];

const faq = [
  {
    title: "現在募集はありますか？",
    detail:
      "現在は募集停止中です。募集を開始する際に本ページでお知らせします。",
  },
  {
    title: "在宅医療の経験がなくても大丈夫ですか？",
    detail:
      "経験がなくても、現場での研修やサポートを通じて学べる環境です。",
  },
  {
    title: "医療ITへの関与は可能ですか？",
    detail:
      "希望や適性に応じて、医療IT支援の業務に関わる機会があります。",
  },
];

export default function RecruitPage() {
  return (
    <div className="bg-[var(--sand)]">
      <Header />

      <main className="mx-auto max-w-6xl px-6 py-16">
        <Reveal className="grid gap-6 rounded-3xl border border-[rgba(11,33,66,0.12)] bg-white p-10 shadow-[0_30px_60px_rgba(11,33,66,0.08)] lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--brand)]">
              Recruit
            </p>
            <h1 className="mt-3 text-3xl font-semibold md:text-4xl">
              採用情報
            </h1>
            <p className="mt-4 max-w-2xl text-sm text-[var(--ink-muted)]">
              医療の現場に寄り添い、地域医療を支える仲間を募集しています。募集状況は随時更新します。
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs text-[var(--ink-muted)]">
              <span className="rounded-full border border-[rgba(11,33,66,0.15)] px-3 py-1">
                在宅医療
              </span>
              <span className="rounded-full border border-[rgba(11,33,66,0.15)] px-3 py-1">
                医療IT
              </span>
              <span className="rounded-full border border-[rgba(11,33,66,0.15)] px-3 py-1">
                地域連携
              </span>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-[rgba(11,33,66,0.12)]">
            <Image
              src="/legacy/recruit-hero.png"
              alt="採用情報のイメージ"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
          <Reveal className="rounded-3xl border border-[rgba(11,33,66,0.12)] bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold">募集職種</h2>
            <ul className="mt-6 space-y-3 text-sm text-[var(--ink-muted)]">
              {roles.map((role) => (
                <li
                  key={role.title}
                  className="flex items-center justify-between rounded-2xl border border-[rgba(11,33,66,0.08)] bg-[var(--mist)] px-4 py-3"
                >
                  <span>{role.title}</span>
                  <span className="text-xs font-semibold text-[var(--ink)]">
                    {role.status}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-[var(--ink-muted)]">
              募集を開始する際は本ページでご案内します。
            </p>
          </Reveal>
          <Reveal className="rounded-3xl border border-[rgba(11,33,66,0.12)] bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold">働く環境の特徴</h2>
            <ul className="mt-6 space-y-3 text-sm text-[var(--ink-muted)]">
              {values.map((value) => (
                <li key={value} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
          <Reveal className="rounded-3xl border border-[rgba(11,33,66,0.12)] bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">職場の雰囲気</h2>
            <div className="mt-4 relative h-48 overflow-hidden rounded-2xl border border-[rgba(11,33,66,0.08)]">
              <Image
                src="/legacy/recruit-culture.png"
                alt="職場の雰囲気"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <p className="mt-3 text-sm text-[var(--ink-muted)]">
              在宅医療と医療ITの現場に触れながら、チームで学び合える環境です。
            </p>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {culture.map((item) => (
              <Reveal
                key={item.title}
                className="rounded-3xl border border-[rgba(11,33,66,0.12)] bg-white p-6 shadow-sm"
              >
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="mt-3 text-sm text-[var(--ink-muted)]">
                  {item.detail}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-10 rounded-3xl border border-[rgba(11,33,66,0.12)] bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold">選考の流れ</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {flow.map((step, index) => (
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
            <h2 className="text-xl font-semibold">よくある質問</h2>
            <div className="mt-6 space-y-4 text-sm text-[var(--ink-muted)]">
              {faq.map((item) => (
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
            <h2 className="text-xl font-semibold">医療ITに関わる機会</h2>
            <div className="mt-4 relative h-40 overflow-hidden rounded-2xl border border-[rgba(11,33,66,0.08)]">
              <Image
                src="/legacy/recruit-it.png"
                alt="医療ITに関わる機会"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <p className="mt-4 text-sm text-[var(--ink-muted)]">
              在宅医療の現場経験を活かし、医療IT支援の業務にも関わるチャンスがあります。
            </p>
            <a
              href="/contact"
              className="mt-6 inline-flex rounded-full bg-[var(--brand)] px-5 py-2 text-xs font-semibold text-white"
            >
              お問い合わせへ
            </a>
          </Reveal>
        </div>
      </main>

      <Footer />
    </div>
  );
}
