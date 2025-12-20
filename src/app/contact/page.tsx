import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "薬局・在宅医療・医療ITに関するお問い合わせはこちら。",
};

export default function ContactPage() {
  const mapQuery = encodeURIComponent("ココ薬局 千葉中央店");
  const mapSrc = `https://www.google.com/maps?q=${mapQuery}&output=embed`;

  return (
    <div className="bg-[var(--sand)]">
      <Header />

      <main className="mx-auto max-w-6xl px-6 py-16">
        <Reveal className="rounded-3xl border border-[rgba(11,33,66,0.12)] bg-white p-10 shadow-[0_30px_60px_rgba(11,33,66,0.08)]">
          <p className="text-xs uppercase tracking-[0.28em] text-[var(--brand)]">
            Contact
          </p>
          <h1 className="mt-3 text-3xl font-semibold md:text-4xl">
            お問い合わせ
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-[var(--ink-muted)]">
            薬局に関するご相談と、医療IT支援のご相談を分けて承ります。2営業日以内にご連絡いたします。
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <ContactForm
            category="pharmacy"
            title="薬局へのお問い合わせ"
            description="処方箋・在宅訪問・服薬相談など、薬局に関するご相談はこちら。"
          />
          <ContactForm
            category="it"
            title="医療IT支援のお問い合わせ"
            description="医療機関・メーカー・自治体向けのWeb/IT支援のご相談はこちら。"
          />
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr,1.1fr]">
          <Reveal className="rounded-3xl border border-[rgba(11,33,66,0.12)] bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold">連絡先・アクセス</h2>
            <div className="mt-4 space-y-2 text-sm text-[var(--ink-muted)]">
              <p>〒260-0044 千葉県千葉市中央区松波1-18-13 ロッキー松波B102</p>
              <p>TEL：043-441-5489 / FAX：043-441-5396</p>
              <p>JR「西千葉駅」「千葉駅」より徒歩8分</p>
              <p>営業時間：水・金 10:00〜13:00（他曜日・祝日は定休）</p>
            </div>
          </Reveal>
          <Reveal className="overflow-hidden rounded-3xl border border-[rgba(11,33,66,0.12)] bg-white shadow-sm">
            <iframe
              title="ココ薬局 千葉中央店の地図"
              src={mapSrc}
              loading="lazy"
              className="h-72 w-full border-0"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </main>

      <Footer />
    </div>
  );
}
