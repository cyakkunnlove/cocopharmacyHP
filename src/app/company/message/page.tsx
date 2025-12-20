import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "代表挨拶",
  description: "代表挨拶と会社の取り組みについてご紹介します。",
};

export default function MessagePage() {
  return (
    <div className="bg-[var(--sand)]">
      <Header />

      <main className="mx-auto max-w-6xl px-6 py-16">
        <Reveal className="rounded-3xl border border-[rgba(11,33,66,0.12)] bg-white p-10 shadow-[0_30px_60px_rgba(11,33,66,0.08)]">
          <p className="text-xs uppercase tracking-[0.28em] text-[var(--brand)]">
            Message
          </p>
          <h1 className="mt-3 text-3xl font-semibold md:text-4xl">
            代表挨拶
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-[var(--ink-muted)]">
            医療とITの両視点から、現場に本当に必要な支援を届けることを大切にしています。
          </p>
        </Reveal>

        <Reveal className="mt-10 rounded-3xl border border-[rgba(11,33,66,0.12)] bg-white p-8 shadow-sm">
          <p className="text-sm text-[var(--ink-muted)]">
            ココ薬局 千葉中央店は、在宅医療の現場で培った知見をもとに、
            患者さまの生活を支える体制づくりに取り組んでいます。
            同時に、医療機関や自治体が抱える課題に対し、医療ITの実装支援を行い、
            現場の改善を着実に進めてきました。
          </p>
          <p className="mt-4 text-sm text-[var(--ink-muted)]">
            医療とITの両輪で地域医療を支えることが、私たちの使命です。
            今後も地域の皆さま、連携する医療機関・施設の皆さまと共に、
            信頼される支援体制を築いてまいります。
          </p>
          <p className="mt-4 text-sm text-[var(--ink-muted)]">
            在宅医療に取り組む中で、ITを組み込むことで職種や立場の壁が薄れ、
            連携の可能性が大きく広がることを実感しました。
            その学びを土台に、医療・介護・行政・メーカーなど
            さまざまな業界の方々と協力しながら、
            新しい薬剤師像と薬局のあり方を目指していきます。
          </p>
          <p className="mt-6 text-sm font-semibold text-[var(--ink)]">
            株式会社メディカル東京
          </p>
        </Reveal>
      </main>

      <Footer />
    </div>
  );
}
