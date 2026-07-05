import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { newsItems } from "@/data/news";

export const metadata: Metadata = {
  title: "お知らせ",
  description: "株式会社メディカル東京からのお知らせ一覧です。",
};

const categories = ["お知らせ", "採用", "医療IT", "在宅医療"];

export default function NewsPage() {
  return (
    <div className="bg-[var(--sand)]">
      <Header />

      <main className="mx-auto max-w-6xl px-6 py-16">
        <Reveal className="rounded-3xl border border-[rgba(11,33,66,0.12)] bg-white p-10 shadow-[0_30px_60px_rgba(11,33,66,0.08)]">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--brand)]">
              News
            </p>
            <h1 className="mt-3 text-3xl font-semibold md:text-4xl">
              お知らせ
            </h1>
            <p className="mt-4 max-w-2xl text-sm text-[var(--ink-muted)]">
              株式会社メディカル東京からのお知らせを掲載します。
            </p>
          </div>
        </Reveal>

        <div className="stagger mt-10 grid gap-6 md:grid-cols-2">
          {newsItems.map((news) => (
            <Reveal
              key={`${news.date}-${news.title}`}
              className="card-lift rounded-3xl border border-[rgba(11,33,66,0.12)] bg-white p-6 shadow-sm"
            >
              <div className="img-zoom relative h-40 overflow-hidden rounded-2xl border border-[rgba(11,33,66,0.08)]">
                <Image
                  src={news.image ?? "/legacy/news-hero.jpg"}
                  alt={news.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <p className="mt-4 text-xs text-[var(--ink-muted)]">
                {news.category} ・ {news.date}
              </p>
              <h2 className="mt-2 text-xl font-semibold">{news.title}</h2>
              <p className="mt-3 text-sm text-[var(--ink-muted)]">
                {news.detail}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 rounded-3xl border border-[rgba(11,33,66,0.12)] bg-[var(--mist)] p-8">
          <h2 className="text-xl font-semibold">カテゴリ</h2>
          <div className="mt-4 flex flex-wrap gap-3 text-xs text-[var(--ink-muted)]">
            {categories.map((category) => (
              <span
                key={category}
                className="rounded-full border border-[rgba(11,33,66,0.2)] px-3 py-1"
              >
                {category}
              </span>
            ))}
          </div>
          <p className="mt-4 text-xs text-[var(--ink-muted)]">
            RSS配信や詳細ページは順次整備予定です。
          </p>
        </Reveal>
      </main>

      <Footer />
    </div>
  );
}
