import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "よくある質問",
  description: "薬局・在宅医療・医療ITに関するよくある質問です。",
};

const faqs = [
  {
    question: "市販薬と処方薬の違いは？",
    answer:
      "市販薬（一般用医薬品）は自己判断で購入できる医薬品です。処方薬は医師の診断に基づき調剤されます。",
  },
  {
    question: "ジェネリック医薬品は選べますか？",
    answer:
      "処方箋に「変更不可」の指示がなければ、患者さまの希望でジェネリック医薬品を選べます。",
  },
  {
    question: "在宅訪問の相談は可能ですか？",
    answer:
      "千葉県内全域で在宅医療支援を行っています。状況を伺いながら対応方法をご案内します。",
  },
  {
    question: "お薬カレンダーへのセットは対応していますか？",
    answer:
      "ご希望や状況に応じて、服薬管理のサポート方法をご提案しています。",
  },
  {
    question: "医療ITの相談はどのような内容が対象ですか？",
    answer:
      "Webアプリ開発、業務効率化、サイト制作、DX/AI連携など幅広く対応しています。",
  },
];

export default function FaqPage() {
  return (
    <div className="bg-[var(--sand)]">
      <Header />

      <main className="mx-auto max-w-6xl px-6 py-16">
        <Reveal className="rounded-3xl border border-[rgba(11,33,66,0.12)] bg-white p-10 shadow-[0_30px_60px_rgba(11,33,66,0.08)]">
          <p className="text-xs uppercase tracking-[0.28em] text-[var(--brand)]">
            FAQ
          </p>
          <h1 className="mt-3 text-3xl font-semibold md:text-4xl">
            よくある質問
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-[var(--ink-muted)]">
            薬局・在宅医療・医療ITに関するご質問をまとめています。
          </p>
        </Reveal>

        <div className="mt-10 space-y-6">
          {faqs.map((faq) => (
            <Reveal
              key={faq.question}
              className="rounded-3xl border border-[rgba(11,33,66,0.12)] bg-white p-6 shadow-sm"
            >
              <h2 className="text-lg font-semibold">{faq.question}</h2>
              <p className="mt-3 text-sm text-[var(--ink-muted)]">
                {faq.answer}
              </p>
            </Reveal>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
