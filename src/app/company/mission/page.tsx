import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "理念・ビジョン",
  description: "株式会社メディカル東京の理念とビジョンをご紹介します。",
};

const values = [
  {
    title: "医療の現場視点を尊重する",
    description:
      "患者さまの生活と医療現場のリアルを理解し、実務に即した支援を行います。",
  },
  {
    title: "医療とITの橋渡しをする",
    description:
      "現場に必要な改善を整理し、運用に定着する形で実装します。",
  },
  {
    title: "信頼と守秘義務を守る",
    description:
      "医療情報や機密情報を適切に扱い、連携先の信頼を最優先にします。",
  },
];

const principles = [
  "患者さまの生活を中心に据えた支援",
  "現場の声を反映した実装",
  "連携先との長期的な信頼関係",
  "地域医療の持続可能性の向上",
];

export default function MissionPage() {
  return (
    <div className="bg-[var(--sand)]">
      <Header />

      <main className="mx-auto max-w-6xl px-6 py-16">
        <Reveal className="rounded-3xl border border-[rgba(11,33,66,0.12)] bg-white p-10 shadow-[0_30px_60px_rgba(11,33,66,0.08)]">
          <p className="text-xs uppercase tracking-[0.28em] text-[var(--brand)]">
            Mission / Vision
          </p>
          <h1 className="mt-3 text-3xl font-semibold md:text-4xl">
            理念・ビジョン
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-[var(--ink-muted)]">
            医療の現場力とITの実装力を両輪に、地域の健康基盤を支えることが私たちの使命です。
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {values.map((value) => (
            <Reveal
              key={value.title}
              className="rounded-3xl border border-[rgba(11,33,66,0.12)] bg-white p-6 shadow-sm"
            >
              <h2 className="text-lg font-semibold">{value.title}</h2>
              <p className="mt-3 text-sm text-[var(--ink-muted)]">
                {value.description}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 rounded-3xl border border-[rgba(11,33,66,0.12)] bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold">行動指針</h2>
          <ul className="mt-5 space-y-3 text-sm text-[var(--ink-muted)]">
            {principles.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </main>

      <Footer />
    </div>
  );
}
