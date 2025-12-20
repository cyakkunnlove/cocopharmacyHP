import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "会社情報",
  description:
    "株式会社メディカル東京の会社概要、取り組み、ガバナンスについてご案内します。",
};

const corporateInfo = [
  { label: "商号", value: "株式会社メディカル東京" },
  { label: "設立", value: "平成30年1月" },
  { label: "本社所在地", value: "千葉県中央区松波1丁目18番13号" },
  { label: "代表取締役", value: "冷水 雅行" },
  { label: "TEL", value: "043-441-5489" },
  { label: "資本金", value: "300万円" },
  { label: "事業内容", value: "調剤薬局事業" },
];

const storeInfo = [
  { label: "店舗名", value: "ココ薬局 千葉中央店" },
  {
    label: "所在地",
    value:
      "〒260-0044 千葉県千葉市中央区松波1-18-13 ロッキー松波B102",
  },
  { label: "アクセス", value: "JR「西千葉駅」「千葉駅」より徒歩8分" },
  { label: "営業時間", value: "水・金 10:00〜13:00（他曜日・祝日は定休）" },
  { label: "TEL", value: "043-441-5489" },
  { label: "FAX", value: "043-441-5396" },
];

const policyItems = [
  {
    title: "地域医療に貢献する",
    description:
      "在宅医療の現場に強い薬局として、医療機関・施設と連携し、患者さまの生活を支えます。",
  },
  {
    title: "医療現場視点のIT実装",
    description:
      "現場の業務フローを理解し、必要な改善を着実に実装する支援を行います。",
  },
  {
    title: "守秘義務と信頼を最優先",
    description:
      "連携先や事例は守秘義務のため非公開とし、信頼を守り続けます。",
  },
];

const governance = [
  "個人情報・医療情報の適正な取り扱い",
  "守秘義務の徹底と契約管理",
  "医療機関・施設との連携ルール整備",
  "医療IT導入時の運用支援",
];

const highlights = [
  {
    title: "在宅医療の現場力",
    description:
      "千葉県内全域で在宅支援を行い、医療機関・施設と連携した運用体制を構築。",
  },
  {
    title: "医療ITの実装力",
    description:
      "Webアプリ開発・業務効率化・DX/AI連携まで、現場起点の支援を実装。",
  },
  {
    title: "信頼を守る体制",
    description:
      "守秘義務を前提とした情報管理で、連携先との信頼関係を維持。",
  },
];

const facts = [
  { label: "設立", value: "平成30年1月" },
  { label: "資本金", value: "300万円" },
  { label: "対応エリア", value: "千葉県内全域" },
  { label: "支援領域", value: "在宅医療 / 医療IT" },
];

const timelinePreview = [
  { year: "2018年1月", title: "会社設立" },
  { year: "準備中", title: "在宅医療支援の拡充" },
  { year: "準備中", title: "医療IT支援の体制整備" },
  { year: "2024年8月", title: "コーポレートサイト公開" },
];

export default function CompanyPage() {
  const mapQuery = encodeURIComponent(
    "ココ薬局 千葉中央店"
  );
  const mapSrc = `https://www.google.com/maps?q=${mapQuery}&output=embed`;

  return (
    <div className="bg-[var(--sand)]">
      <Header />

      <main className="mx-auto max-w-6xl px-6 py-16">
        <Reveal className="rounded-3xl border border-[rgba(11,33,66,0.12)] bg-white p-10 shadow-[0_30px_60px_rgba(11,33,66,0.08)]">
          <p className="text-xs uppercase tracking-[0.28em] text-[var(--brand)]">
            Company
          </p>
          <h1 className="mt-3 text-3xl font-semibold md:text-4xl">
            株式会社メディカル東京
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-[var(--ink-muted)]">
            在宅医療の現場力と医療IT支援の実装力を両輪に、地域医療の基盤を支えます。
            医療機関・施設との連携を前提に、実務に強い支援を提供しています。
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {facts.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-[rgba(11,33,66,0.12)] bg-[var(--mist)] p-4"
              >
                <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--brand)]">
                  {item.label}
                </p>
                <p className="mt-2 text-sm font-semibold text-[var(--ink)]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {policyItems.map((item) => (
            <Reveal
              key={item.title}
              className="rounded-3xl border border-[rgba(11,33,66,0.12)] bg-white p-6 shadow-sm"
            >
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="mt-3 text-sm text-[var(--ink-muted)]">
                {item.description}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {highlights.map((item) => (
            <Reveal
              key={item.title}
              className="rounded-3xl border border-[rgba(11,33,66,0.12)] bg-[var(--mist)] p-6 shadow-sm"
            >
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="mt-3 text-sm text-[var(--ink-muted)]">
                {item.description}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { title: "理念・ビジョン", href: "/company/mission" },
            { title: "沿革", href: "/company/history" },
            { title: "代表挨拶", href: "/company/message" },
          ].map((item) => (
            <Reveal
              key={item.title}
              className="rounded-3xl border border-[rgba(11,33,66,0.12)] bg-[var(--mist)] p-6 shadow-sm"
            >
              <p className="text-xs uppercase tracking-[0.22em] text-[var(--brand)]">
                Company
              </p>
              <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
              <a
                href={item.href}
                className="mt-4 inline-flex text-xs font-semibold text-[var(--ink)] hover:text-[var(--brand)]"
              >
                詳しく見る →
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr,0.8fr]">
          <Reveal className="relative overflow-hidden rounded-3xl border border-[rgba(11,33,66,0.12)] bg-white p-8 shadow-sm">
            <div className="absolute inset-0">
              <Image
                src="/legacy/storefront.png"
                alt="ココ薬局 千葉中央店 外観"
                fill
                className="object-cover opacity-70"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.6),rgba(255,255,255,0.45))]" />
            </div>
            <div className="relative z-10">
              <h2 className="text-xl font-semibold">会社概要</h2>
              <dl className="mt-6 space-y-4 text-sm">
                {corporateInfo.map((info) => (
                  <div
                    key={info.label}
                    className="grid gap-2 border-b border-[rgba(11,33,66,0.08)] pb-3 md:grid-cols-[140px,1fr]"
                  >
                    <dt className="font-semibold text-[var(--ink)]">
                      {info.label}
                    </dt>
                    <dd className="text-[var(--ink-muted)]">{info.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <Reveal className="rounded-3xl border border-[rgba(11,33,66,0.12)] bg-[var(--mist)] p-8 shadow-sm">
            <h2 className="text-xl font-semibold">ガバナンス</h2>
            <ul className="mt-5 space-y-3 text-sm text-[var(--ink-muted)]">
              {governance.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
          <Reveal className="rounded-3xl border border-[rgba(11,33,66,0.12)] bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold">店舗情報</h2>
            <dl className="mt-6 space-y-4 text-sm">
              {storeInfo.map((info) => (
                <div
                  key={info.label}
                  className="grid gap-2 border-b border-[rgba(11,33,66,0.08)] pb-3 md:grid-cols-[140px,1fr]"
                >
                  <dt className="font-semibold text-[var(--ink)]">
                    {info.label}
                  </dt>
                  <dd className="text-[var(--ink-muted)]">{info.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal className="rounded-3xl border border-[rgba(11,33,66,0.12)] bg-[var(--mist)] p-8 shadow-sm">
            <h2 className="text-xl font-semibold">拠点・アクセス</h2>
            <p className="mt-3 text-sm text-[var(--ink-muted)]">
              JR「西千葉駅」「千葉駅」より徒歩8分。地域の皆さまに寄り添う拠点として運営しています。
            </p>
            <div className="mt-4 rounded-2xl border border-[rgba(11,33,66,0.12)] bg-white p-4 text-xs text-[var(--ink-muted)]">
              〒260-0044 千葉県千葉市中央区松波1-18-13 ロッキー松波B102
            </div>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr,1.1fr]">
          <Reveal className="rounded-3xl border border-[rgba(11,33,66,0.12)] bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold">沿革ハイライト</h2>
            <div className="mt-6 space-y-3 text-sm text-[var(--ink-muted)]">
              {timelinePreview.map((item) => (
                <div
                  key={`${item.year}-${item.title}`}
                  className="flex items-center justify-between border-b border-[rgba(11,33,66,0.08)] pb-2"
                >
                  <span>{item.title}</span>
                  <span className="text-xs text-[var(--ink-muted)]">
                    {item.year}
                  </span>
                </div>
              ))}
            </div>
            <a
              href="/company/history"
              className="mt-5 inline-flex text-xs font-semibold text-[var(--brand)]"
            >
              沿革ページへ →
            </a>
          </Reveal>

          <Reveal className="overflow-hidden rounded-3xl border border-[rgba(11,33,66,0.12)] bg-white shadow-sm">
            <iframe
              title="ココ薬局 千葉中央店の地図"
              src={mapSrc}
              loading="lazy"
              className="h-80 w-full border-0"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </main>

      <Footer />
    </div>
  );
}
