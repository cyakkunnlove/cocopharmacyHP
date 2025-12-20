import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(11,33,66,0.08)] bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="text-[10px] uppercase tracking-[0.24em] text-[var(--brand)]">
            Medical Tokyo
          </p>
          <h3 className="text-lg font-semibold">株式会社メディカル東京</h3>
          <p className="text-xs text-[var(--ink-muted)]">
            〒260-0044 千葉県千葉市中央区松波1-18-13 ロッキー松波B102
          </p>
          <p className="text-xs text-[var(--ink-muted)]">
            TEL 043-441-5489 / FAX 043-441-5396
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-[var(--ink-muted)]">
          <Link href="/services" className="hover:text-[var(--brand)]">
            事業紹介
          </Link>
          <Link href="/homecare" className="hover:text-[var(--brand)]">
            在宅医療
          </Link>
          <Link href="/it" className="hover:text-[var(--brand)]">
            医療IT
          </Link>
          <Link href="/company" className="hover:text-[var(--brand)]">
            会社情報
          </Link>
          <Link href="/news" className="hover:text-[var(--brand)]">
            お知らせ
          </Link>
          <Link href="/recruit" className="hover:text-[var(--brand)]">
            採用
          </Link>
          <Link href="/faq" className="hover:text-[var(--brand)]">
            FAQ
          </Link>
          <Link href="/privacy" className="hover:text-[var(--brand)]">
            プライバシー
          </Link>
          <Link href="/contact" className="hover:text-[var(--brand)]">
            お問い合わせ
          </Link>
        </div>
      </div>
      <div className="border-t border-[rgba(11,33,66,0.08)] py-3">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-6 text-[11px] text-[var(--ink-muted)] md:flex-row">
          <p>© Medical Tokyo Co., Ltd. All Rights Reserved.</p>
          <p>営業時間：水・金 10:00〜13:00（他曜日・祝日は定休）</p>
        </div>
      </div>
    </footer>
  );
}
