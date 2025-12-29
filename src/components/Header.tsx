"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const demoUrl =
  process.env.NEXT_PUBLIC_COCOKARTE_DEMO_URL ??
  "https://cocokarte-demo.vercel.app/";
const isExternalDemo = demoUrl.startsWith("http");

const navItemsPrimary = [
  { label: "トップ", href: "/" },
  { label: "会社情報", href: "/company" },
  { label: "事業紹介", href: "/services" },
  { label: "医療IT", href: "/it" },
  { label: "製品紹介", href: "/products/cocokarte" },
  { label: "お問い合わせ", href: "/contact" },
];

const navItemsSecondary = [
  { label: "在宅医療", href: "/homecare" },
  { label: "お知らせ", href: "/news" },
  { label: "採用", href: "/recruit" },
  { label: "FAQ", href: "/faq" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(11,33,66,0.08)] bg-[rgba(247,244,239,0.92)] backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col px-6">
        <div className="flex flex-wrap items-center justify-between gap-2 py-2 text-[11px] text-[var(--ink-muted)]">
          <div className="flex flex-wrap items-center gap-4">
            <span>営業時間：水・金 10:00〜13:00</span>
            <span>在宅対応：千葉県内全域</span>
          </div>
          <a href="tel:043-441-5489" className="font-semibold text-[var(--ink)]">
            TEL 043-441-5489
          </a>
        </div>
        <div className="flex items-center justify-between gap-6 py-4">
          <Link href="/" className="flex items-center gap-4">
            <Image
              src="/legacy/cocologo.png"
              alt="株式会社メディカル東京 ロゴ"
              width={64}
              height={64}
              className="h-12 w-12 object-contain"
              priority
            />
            <div className="leading-tight">
              <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--brand)]">
                Medical Tokyo
              </p>
              <p className="text-lg font-semibold">ココ薬局 千葉中央店</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-4 text-xs lg:flex">
            {navItemsPrimary.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="whitespace-nowrap transition hover:text-[var(--brand)]"
              >
                {item.label}
              </Link>
            ))}
            <details className="relative">
              <summary className="list-none cursor-pointer whitespace-nowrap rounded-full border border-[rgba(11,33,66,0.15)] px-3 py-1 text-[11px] font-semibold text-[var(--ink)] transition hover:border-[var(--brand)] hover:text-[var(--brand)]">
                その他
              </summary>
              <div className="absolute right-0 mt-2 w-44 rounded-2xl border border-[rgba(11,33,66,0.12)] bg-white p-2 shadow-lg">
                {navItemsSecondary.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-lg px-3 py-2 text-xs text-[var(--ink)] transition hover:bg-[var(--mist)]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </details>
          </nav>

          <Link
            href={demoUrl}
            target={isExternalDemo ? "_blank" : undefined}
            rel={isExternalDemo ? "noopener noreferrer" : undefined}
            className="hidden rounded-full bg-[var(--brand)] px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-[var(--brand-dark)] lg:inline-flex"
          >
            CoCoKarte デモ
          </Link>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex items-center rounded-full border border-[rgba(11,33,66,0.2)] px-4 py-2 text-xs font-semibold text-[var(--ink)] transition hover:border-[var(--brand)] hover:text-[var(--brand)] lg:hidden"
          >
            メニュー
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[rgba(11,33,66,0.08)] bg-white lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-6 py-4 text-sm">
            <Link
              href={demoUrl}
              target={isExternalDemo ? "_blank" : undefined}
              rel={isExternalDemo ? "noopener noreferrer" : undefined}
              onClick={() => setOpen(false)}
              className="mb-3 inline-flex items-center justify-center rounded-full bg-[var(--brand)] px-4 py-2 text-xs font-semibold text-white"
            >
              CoCoKarte デモを見る
            </Link>
            {[...navItemsPrimary, ...navItemsSecondary].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-[rgba(11,33,66,0.06)] py-3 last:border-b-0"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
