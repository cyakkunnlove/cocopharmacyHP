import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ParallaxController from "@/components/ParallaxController";

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
    detail: "医療向けWebアプリ/業務効率化/サイト制作/DX/AI連携。",
  },
];

const newsItems = [
  { date: "2024/8/1", title: "ホームページ公開" },
  { date: "2024/8/1", title: "採用情報公開" },
  { date: "2024/8/1", title: "店舗情報公開" },
];

export default function Home() {
  const parallaxSlow = { "--parallax": "0.04" } as CSSProperties;
  const parallaxMid = { "--parallax": "0.08" } as CSSProperties;
  const parallaxFast = { "--parallax": "0.12" } as CSSProperties;

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
            <video
              className="hero-video"
              autoPlay
              muted
              loop
              playsInline
              poster="/legacy/patient.png"
            >
              <source src="/legacy/hero-video.mp4" type="video/mp4" />
            </video>
            <div className="hero-film" />
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(247,244,239,0.92),rgba(247,244,239,0.75))]" />
          </div>
          <div className="hero-sheen" />
          <div
            className="parallax-layer absolute -right-24 top-12 h-72 w-72 rounded-full bg-[rgba(27,141,138,0.18)] blur-3xl"
            style={parallaxSlow}
          />
          <div
            className="parallax-layer absolute -left-24 bottom-10 h-60 w-60 rounded-full bg-[rgba(199,168,118,0.22)] blur-3xl"
            style={parallaxMid}
          />
          <div
            className="parallax-layer absolute right-10 top-24 hidden h-56 w-56 overflow-hidden rounded-3xl border border-white/40 shadow-xl lg:block"
            style={parallaxFast}
          >
            <Image
              src="/legacy/patienthand-2-v2.png"
              alt="在宅医療のイメージ"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 224px"
            />
          </div>
          <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-20 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <div className="relative z-10">
              <Reveal>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--brand)]">
                  Corporate Mission
                </p>
                <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
                  医療の現場を起点に、<br />
                  テクノロジーで地域の基盤を支える。
                </h1>
                <p className="mt-6 max-w-xl text-base text-[var(--ink-muted)]">
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
                  href="/services"
                  className="rounded-full border border-[rgba(11,33,66,0.2)] bg-white px-6 py-3 text-sm font-semibold text-[var(--ink)] transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
                >
                  事業の詳細を見る
                </Link>
              </Reveal>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {headlineCards.map((item) => (
                  <Reveal key={item.title}>
                    <div className="rounded-2xl border border-[rgba(11,33,66,0.12)] bg-white/90 p-4 shadow-sm">
                      <h3 className="text-base font-semibold">{item.title}</h3>
                      <p className="mt-2 text-xs text-[var(--ink-muted)]">
                        {item.description}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <div className="relative z-10 grid gap-6 sm:grid-cols-2">
              <Reveal className="relative h-60 overflow-hidden rounded-3xl shadow-2xl sm:h-72">
                <Image
                  src="/legacy/patient.png"
                  alt="薬局のイメージ"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </Reveal>
              <Reveal className="relative h-60 overflow-hidden rounded-3xl shadow-2xl sm:h-72">
                <Image
                  src="/legacy/injection.png"
                  alt="医療支援のイメージ"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </Reveal>
              <Reveal className="relative h-48 overflow-hidden rounded-3xl shadow-2xl sm:col-span-2">
                <Image
                  src="/legacy/deliverycar.png"
                  alt="在宅訪問のイメージ"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 100vw"
                />
              </Reveal>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <Reveal className="grid gap-6 rounded-3xl border border-[rgba(11,33,66,0.1)] bg-white p-8 shadow-[0_30px_60px_rgba(11,33,66,0.08)] md:grid-cols-[1.1fr,0.9fr] md:items-center">
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
                  className="rounded-2xl border border-[rgba(11,33,66,0.08)] bg-[var(--mist)] p-4"
                >
                  <p className="font-semibold text-[var(--ink)]">{area.title}</p>
                  <p className="mt-2 text-xs">{area.detail}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-4">
          <Reveal className="grid gap-6 rounded-3xl border border-[rgba(11,33,66,0.12)] bg-white p-8 shadow-sm md:grid-cols-3">
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
                detail: "在宅医療 / 調剤 / 医療IT / DX / AI連携",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl bg-[var(--mist)] p-5">
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
            <Reveal className="grid gap-6 md:grid-cols-[1fr,0.7fr] md:items-center">
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
                  {newsItems.map((news) => (
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
          <Reveal className="grid gap-6 rounded-3xl border border-[rgba(11,33,66,0.12)] bg-white p-8 shadow-[0_20px_50px_rgba(11,33,66,0.08)] md:grid-cols-[0.9fr,1.1fr] md:items-center">
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
              <div className="rounded-2xl border border-[rgba(11,33,66,0.08)] bg-[var(--mist)] p-4">
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
              <div className="rounded-2xl border border-[rgba(11,33,66,0.08)] bg-[var(--mist)] p-4">
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
