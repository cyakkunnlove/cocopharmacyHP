import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ParallaxController from "@/components/ParallaxController";
import WaterBackground from "@/components/WaterBackground";
import { newsItems } from "@/data/news";

const demoUrl =
  process.env.NEXT_PUBLIC_COCOKARTE_DEMO_URL ??
  "https://cocokarte-demo.vercel.app/";
const isExternalDemo = demoUrl.startsWith("http");

const headlineCards = [
  {
    title: "在宅医療を核にした広域連携",
    description:
      "千葉県内全域をカバーし、医療機関・施設との連携体制を整備。",
  },
  {
    title: "薬局事業と医療IT事業の両輪",
    description:
      "調剤・在宅の実務知見を基盤に、医療IT支援まで一気通貫。",
  },
  {
    title: "守秘義務を徹底した実務対応",
    description:
      "連携先・事例は非公開。公開可能な範囲で順次掲載。",
  },
];

const focusAreas = [
  {
    title: "薬局事業",
    detail: "調剤・服薬指導・在宅訪問を柱に、地域医療の基盤を支援。",
  },
  {
    title: "在宅医療支援",
    detail: "医療機関・施設と連携し、運用支援まで一貫して対応。",
  },
  {
    title: "医療IT事業",
    detail:
      "医療向けWebアプリ/業務効率化/サイト制作/DX/AI連携/プロダクト提供。",
  },
];

const latestNews = newsItems.slice(0, 3);

export default function Home() {
  const parallaxSlow = { "--parallax": "0.04" } as CSSProperties;
  const parallaxMid = { "--parallax": "0.08" } as CSSProperties;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Pharmacy",
    name: "株式会社メディカル東京（ココ薬局 千葉中央店）",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.cocopharmacy1.com",
    telephone: "043-441-5489",
    address: {
      "@type": "PostalAddress",
      streetAddress: "松波1-18-13 ロッキー松波B102",
      addressLocality: "千葉市中央区",
      addressRegion: "千葉県",
      postalCode: "260-0044",
      addressCountry: "JP",
    },
    areaServed: "千葉県",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Wednesday", "Friday"],
        opens: "10:00",
        closes: "13:00",
      },
    ],
  };

  return (
    <div className="bg-[var(--sand)]">
      <ParallaxController />
      <Header />
      <Script
        id="jsonld-medical-tokyo"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        <section className="relative overflow-hidden bg-[linear-gradient(120deg,#ffffff_0%,#f5f1ea_45%,#e8f2f1_100%)]">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_20%,rgba(27,141,138,0.06),transparent_55%),radial-gradient(ellipse_at_15%_85%,rgba(199,168,118,0.08),transparent_50%)]" />
            <WaterBackground />
          </div>
          <div
            className="parallax-layer absolute -right-24 top-12 h-72 w-72 rounded-full bg-[rgba(27,141,138,0.18)] blur-3xl"
            style={parallaxSlow}
          />
          <div
            className="parallax-layer absolute -left-24 bottom-10 h-60 w-60 rounded-full bg-[rgba(199,168,118,0.22)] blur-3xl"
            style={parallaxMid}
          />
          <div className="mx-auto grid max-w-6xl gap-14 px-6 pb-24 pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="relative z-10">
              <Reveal>
                <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--brand)]">
                  <span className="inline-block h-px w-10 bg-[var(--gold)]" />
                  Corporate Mission
                </p>
                <h1 className="mt-5 text-4xl font-semibold leading-[1.3] md:text-5xl">
                  医療の現場を起点に、<br />
                  テクノロジーで
                  <span className="inline-block">
                    地域の基盤を
                    <span className="relative inline-block">
                      支える。
                      <span className="absolute -bottom-1 left-0 h-[6px] w-[calc(100%-0.6em)] rounded-full bg-[rgba(199,168,118,0.35)]" />
                    </span>
                  </span>
                </h1>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--ink-muted)]">
                  株式会社メディカル東京は、在宅医療の現場力と医療IT支援の実装力を両輪に、
                  千葉県全域の医療機関・施設・自治体と連携し、地域医療の質向上を支援します。
                </p>
              </Reveal>
              <Reveal className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="pulse-ring rounded-full bg-[var(--brand)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[rgba(27,141,138,0.25)] transition hover:bg-[var(--brand-dark)]"
                >
                  ご相談・お問い合わせ
                </Link>
                <Link
                  href={demoUrl}
                  target={isExternalDemo ? "_blank" : undefined}
                  rel={isExternalDemo ? "noopener noreferrer" : undefined}
                  className="rounded-full border border-[rgba(11,33,66,0.2)] bg-white px-6 py-3 text-sm font-semibold text-[var(--brand)] transition hover:border-[var(--brand)] hover:text-[var(--brand-dark)]"
                >
                  CoCoKarte デモを見る
                </Link>
                <Link
                  href="/services"
                  className="rounded-full border border-[rgba(11,33,66,0.2)] bg-white px-6 py-3 text-sm font-semibold text-[var(--ink)] transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
                >
                  事業の詳細を見る
                </Link>
              </Reveal>
              <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-[rgba(11,33,66,0.1)] bg-[rgba(11,33,66,0.1)] shadow-sm sm:grid-cols-3">
                {headlineCards.map((item, i) => (
                  <Reveal key={item.title} className="h-full">
                    <div className="group h-full bg-white/95 p-5 transition hover:bg-white">
                      <p className="font-[var(--font-heading)] text-xs tracking-[0.2em] text-[var(--gold)]">
                        {String(i + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-2 text-[15px] font-semibold leading-snug">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-[var(--ink-muted)]">
                        {item.description}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
              <div className="mt-10 hidden items-center gap-3 lg:flex">
                <span className="scroll-cue" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--ink-muted)]">
                  Scroll
                </span>
              </div>
            </div>
            <div className="relative z-10 mx-auto w-full max-w-[480px] pb-10 pl-6 pr-3 sm:pl-12 lg:max-w-[440px] lg:justify-self-end">
              <Reveal className="relative">
                <div
                  className="pointer-events-none absolute -right-4 -top-4 h-full w-full rounded-[2rem] border border-[rgba(199,168,118,0.5)]"
                  aria-hidden
                />
                <div className="img-zoom relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[0_40px_80px_rgba(11,33,66,0.25)]">
                  <Image
                    src="/legacy/patient.jpg"
                    alt="在宅訪問で患者さまと話す薬剤師"
                    fill
                    className="object-cover object-[62%_center]"
                    priority
                    sizes="(max-width: 1024px) 100vw, 440px"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(200deg,transparent_55%,rgba(11,33,66,0.35))]" />
                  <div className="absolute bottom-4 right-4 rounded-xl border border-white/40 bg-white/85 px-4 py-3 text-right shadow-lg backdrop-blur-md">
                    <p className="text-[9px] uppercase tracking-[0.22em] text-[var(--brand)]">
                      Home Care
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-[var(--ink)]">
                      在宅対応 千葉県内全域
                    </p>
                    <p className="mt-0.5 text-[10px] text-[var(--ink-muted)]">
                      医療機関・施設と連携した運用体制
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-9 -left-6 w-36 rotate-[-3deg] overflow-hidden rounded-2xl border-4 border-white shadow-[0_20px_40px_rgba(11,33,66,0.25)] sm:-left-12 sm:w-44">
                  <div className="relative aspect-square">
                    <Image
                      src="/legacy/patienthand-2-v2.jpg"
                      alt="服薬支援のためのお薬整理"
                      fill
                      className="object-cover"
                      sizes="176px"
                    />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <Reveal className="grid gap-6 rounded-3xl border border-[rgba(11,33,66,0.1)] bg-white p-8 shadow-[0_30px_60px_rgba(11,33,66,0.08)] md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.26em] text-[var(--gold)]">
                Corporate Statement
              </p>
              <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
                「医療の現場視点」を中心に、薬局とITの両方で価値を届ける。
              </h2>
              <p className="mt-4 text-sm text-[var(--ink-muted)]">
                在宅医療で培った実務知識をベースに、ITの力で医療現場の課題を改善。
                医療とテクノロジーをつなぐ実装型の支援を行います。
              </p>
            </div>
            <div className="grid gap-3 text-sm text-[var(--ink-muted)]">
              {focusAreas.map((area) => (
                <div
                  key={area.title}
                  className="card-lift rounded-2xl border border-[rgba(11,33,66,0.08)] bg-[var(--mist)] p-4"
                >
                  <p className="font-semibold text-[var(--ink)]">{area.title}</p>
                  <p className="mt-2 text-xs">{area.detail}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-4">
          <Reveal className="stagger grid gap-6 rounded-3xl border border-[rgba(11,33,66,0.12)] bg-white p-8 shadow-sm md:grid-cols-3">
            {[
              {
                title: "連携領域",
                detail: "医療機関・施設・自治体・メーカー",
              },
              {
                title: "対応範囲",
                detail: "千葉県内全域（千葉市〜松戸まで実績）",
              },
              {
                title: "支援領域",
                detail: "在宅医療 / 調剤 / 医療IT / DX / AI連携 / プロダクト",
              },
            ].map((item) => (
              <div key={item.title} className="card-lift rounded-2xl bg-[var(--mist)] p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--brand)]">
                  {item.title}
                </p>
                <p className="mt-3 text-sm font-semibold text-[var(--ink)]">
                  {item.detail}
                </p>
              </div>
            ))}
          </Reveal>
        </section>

        <section className="bg-[var(--mist)] py-16">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal className="grid gap-6 md:grid-cols-[1fr_0.7fr] md:items-center">
              <div className="rounded-3xl border border-[rgba(11,33,66,0.12)] bg-white p-8 shadow-sm">
                <h3 className="text-xl font-semibold">連携・信頼について</h3>
                <p className="mt-3 text-sm text-[var(--ink-muted)]">
                  医療機関・メーカー・自治体との連携実績が多数ありますが、守秘義務のため名称や詳細は非公開としています。
                  公開可能な事例は順次掲載します。
                </p>
                <div className="mt-6 flex flex-wrap gap-3 text-xs text-[var(--ink-muted)]">
                  <span className="rounded-full border border-[rgba(11,33,66,0.15)] px-3 py-1">
                    守秘義務順守
                  </span>
                  <span className="rounded-full border border-[rgba(11,33,66,0.15)] px-3 py-1">
                    医療現場起点
                  </span>
                  <span className="rounded-full border border-[rgba(11,33,66,0.15)] px-3 py-1">
                    地域連携
                  </span>
                </div>
              </div>
              <div className="rounded-3xl border border-[rgba(11,33,66,0.12)] bg-white p-8 shadow-sm">
                <h3 className="text-xl font-semibold">お知らせ</h3>
                <div className="mt-4 space-y-3 text-sm text-[var(--ink-muted)]">
                  {latestNews.map((news) => (
                    <div
                      key={`${news.date}-${news.title}`}
                      className="flex items-center justify-between border-b border-[rgba(11,33,66,0.08)] pb-2"
                    >
                      <span>{news.title}</span>
                      <span className="text-xs">{news.date}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/news"
                  className="mt-6 inline-flex text-xs font-semibold text-[var(--brand)]"
                >
                  お知らせ一覧へ →
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <Reveal className="grid gap-6 rounded-3xl border border-[rgba(11,33,66,0.12)] bg-white p-8 shadow-[0_20px_50px_rgba(11,33,66,0.08)] md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.26em] text-[var(--brand)]">
                Company
              </p>
              <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
                株式会社メディカル東京
              </h2>
              <p className="mt-4 text-sm text-[var(--ink-muted)]">
                在宅医療の現場に強い調剤薬局として地域医療を支えるだけでなく、
                医療IT支援を通じて現場の課題解決に取り組みます。
              </p>
              <Link
                href="/company"
                className="mt-6 inline-flex rounded-full border border-[rgba(11,33,66,0.2)] px-5 py-2 text-xs font-semibold text-[var(--ink)] transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
              >
                会社情報を見る
              </Link>
            </div>
            <div className="grid gap-4 text-sm text-[var(--ink-muted)]">
              <div className="card-lift rounded-2xl border border-[rgba(11,33,66,0.08)] bg-[var(--mist)] p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--ink-muted)]">
                  Office
                </p>
                <p className="mt-2 font-semibold text-[var(--ink)]">
                  ココ薬局 千葉中央店
                </p>
                <p className="mt-2">
                  〒260-0044 千葉県千葉市中央区松波1-18-13 ロッキー松波B102
                </p>
              </div>
              <div className="card-lift rounded-2xl border border-[rgba(11,33,66,0.08)] bg-[var(--mist)] p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--ink-muted)]">
                  Access
                </p>
                <p className="mt-2">JR「西千葉駅」「千葉駅」より徒歩8分</p>
                <p className="mt-2">TEL：043-441-5489 / FAX：043-441-5396</p>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="bg-[var(--ink)] py-16">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[rgba(255,255,255,0.6)]">
                Contact
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
                医療とITの課題、まずはご相談ください。
              </h2>
              <p className="mt-3 text-sm text-[rgba(255,255,255,0.72)]">
                薬局のご相談・在宅医療のご相談・医療IT支援まで、目的別に窓口を分けて対応します。
              </p>
            </div>
            <Link
              href="/contact"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--ink)] transition hover:bg-[var(--brand-soft)]"
            >
              お問い合わせへ進む
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
