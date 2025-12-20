import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "沿革",
  description: "株式会社メディカル東京の沿革をご紹介します。",
};

const timeline = [
  {
    year: "2018年1月",
    title: "会社設立",
    detail: "株式会社メディカル東京として事業を開始。",
  },
  {
    year: "準備中",
    title: "在宅医療支援の拡充",
    detail: "詳細情報は確定次第公開予定です。",
  },
  {
    year: "準備中",
    title: "医療IT支援の体制整備",
    detail: "連携体制や事例は順次公開予定です。",
  },
  {
    year: "2024年8月",
    title: "コーポレートサイト公開",
    detail: "医療とITの両輪を伝える情報発信を開始。",
  },
];

export default function HistoryPage() {
  return (
    <div className="bg-[var(--sand)]">
      <Header />

      <main className="mx-auto max-w-6xl px-6 py-16">
        <Reveal className="rounded-3xl border border-[rgba(11,33,66,0.12)] bg-white p-10 shadow-[0_30px_60px_rgba(11,33,66,0.08)]">
          <p className="text-xs uppercase tracking-[0.28em] text-[var(--brand)]">
            History
          </p>
          <h1 className="mt-3 text-3xl font-semibold md:text-4xl">
            沿革
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-[var(--ink-muted)]">
            医療現場の課題に向き合いながら、在宅医療と医療IT支援の体制を整えてきました。
          </p>
        </Reveal>

        <div className="mt-10 space-y-6">
          {timeline.map((item) => (
            <Reveal
              key={item.title}
              className="rounded-3xl border border-[rgba(11,33,66,0.12)] bg-white p-6 shadow-sm"
            >
              <p className="text-xs text-[var(--brand)]">{item.year}</p>
              <h2 className="mt-2 text-xl font-semibold">{item.title}</h2>
              <p className="mt-3 text-sm text-[var(--ink-muted)]">
                {item.detail}
              </p>
            </Reveal>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
