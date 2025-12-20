import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "株式会社メディカル東京の個人情報保護方針です。",
};

const items = [
  {
    title: "取得する情報",
    detail:
      "お問い合わせフォームに入力された氏名・連絡先・お問い合わせ内容など。",
  },
  {
    title: "利用目的",
    detail:
      "お問い合わせ対応、サービス提供に関する連絡、必要なご案内のために利用します。",
  },
  {
    title: "第三者提供",
    detail:
      "法令に基づく場合を除き、本人の同意なく第三者へ提供しません。",
  },
  {
    title: "安全管理",
    detail:
      "個人情報の漏えい、滅失、毀損の防止のため適切な安全管理を行います。",
  },
  {
    title: "開示・訂正・削除",
    detail:
      "ご本人からの請求があった場合、法令に基づき適切に対応します。",
  },
];

export default function PrivacyPage() {
  return (
    <div className="bg-[var(--sand)]">
      <Header />

      <main className="mx-auto max-w-6xl px-6 py-16">
        <Reveal className="rounded-3xl border border-[rgba(11,33,66,0.12)] bg-white p-10 shadow-[0_30px_60px_rgba(11,33,66,0.08)]">
          <p className="text-xs uppercase tracking-[0.28em] text-[var(--brand)]">
            Privacy Policy
          </p>
          <h1 className="mt-3 text-3xl font-semibold md:text-4xl">
            プライバシーポリシー
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-[var(--ink-muted)]">
            株式会社メディカル東京は、個人情報の保護を重要な責務と考え、適切に取り扱います。
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {items.map((item) => (
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

        <Reveal className="mt-10 rounded-3xl border border-[rgba(11,33,66,0.12)] bg-[var(--mist)] p-6 text-sm text-[var(--ink-muted)]">
          お問い合わせ窓口：ココ薬局 千葉中央店（TEL：043-441-5489）
        </Reveal>
      </main>

      <Footer />
    </div>
  );
}
