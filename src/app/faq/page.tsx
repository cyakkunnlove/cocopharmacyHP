import type { Metadata } from "next";
import Script from "next/script";
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
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <div className="bg-[var(--sand)]">
      <Header />
      <Script
        id="jsonld-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

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

        <Reveal className="mt-10">
          <div className="stagger space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="faq-item rounded-2xl border border-[rgba(11,33,66,0.12)] bg-white shadow-sm transition hover:border-[rgba(27,141,138,0.3)]"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 text-base font-semibold text-[var(--ink)] [&::-webkit-details-marker]:hidden">
                  <span>
                    <span className="mr-2 text-[var(--brand)]">Q.</span>
                    {faq.question}
                  </span>
                  <span className="faq-marker shrink-0 text-lg font-normal text-[var(--brand)]">
                    ＋
                  </span>
                </summary>
                <div className="border-t border-[rgba(11,33,66,0.06)] px-6 py-4">
                  <p className="text-sm leading-relaxed text-[var(--ink-muted)]">
                    <span className="mr-2 font-semibold text-[var(--brand)]">
                      A.
                    </span>
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </Reveal>
      </main>

      <Footer />
    </div>
  );
}
