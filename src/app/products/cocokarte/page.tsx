import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "CoCoKarte",
  description:
    "LINE連携型 予約・カルテ一元管理システム「CoCoKarte（ココカルテ）」のご紹介。",
};

const challenges = [
  {
    title: "電話・受付対応で現場が止まる",
    detail:
      "LINEから24時間予約・変更・キャンセルを受け付け、対応負荷を軽減。",
  },
  {
    title: "紙や分散した記録が探しづらい",
    detail:
      "クラウドで一元管理し、権限に応じた即時検索と共有を実現。",
  },
  {
    title: "ドタキャン・無断キャンセルが多い",
    detail:
      "前日リマインドなどの自動配信で来店率改善を支援。",
  },
  {
    title: "再来店施策が属人化している",
    detail:
      "条件指定のセグメント配信で、再来店のきっかけを設計。",
  },
];

const strengths = [
  {
    title: "LINE予約で迷わない導線",
    detail:
      "専用アプリは不要。友だち追加から予約・変更までを統一。",
  },
  {
    title: "医療現場視点のデジタルカルテ",
    detail:
      "診療記録・施術写真・同意書などを時系列で一元管理。",
  },
  {
    title: "CRM・分析で経営判断を支援",
    detail:
      "再来店促進や稼働率など、現場の判断材料を可視化。",
  },
];

const coreFunctions = [
  "LINE連携予約・変更・キャンセル",
  "問診・同意書の事前回収",
  "カルテ・写真・添付ファイル管理",
  "スタッフ/拠点ごとの権限管理",
  "リマインド配信・タグ配信",
  "売上/稼働率/来店分析ダッシュボード",
];

const industries = [
  "美容クリニック",
  "歯科医院",
  "整体院・治療院",
  "エステサロン",
  "パーソナルジム",
  "訪問系サービス",
];

const steps = [
  {
    title: "ヒアリング",
    detail: "現場フローと課題を整理し、導入目的を明確化。",
  },
  {
    title: "設計・構築",
    detail: "予約導線・カルテ項目・運用ルールを構築。",
  },
  {
    title: "データ移行・レクチャー",
    detail: "既存データ移行と現場向け操作レクチャーを実施。",
  },
  {
    title: "運用・改善",
    detail: "運用定着と改善サイクルを継続支援。",
  },
];

const securityPoints = [
  "権限管理・ログ管理を前提に運用設計",
  "定期バックアップとリカバリ体制",
  "契約・運用・情報管理のガイド整備",
];

export default function CoCoKartePage() {
  return (
    <div className="bg-[var(--sand)]">
      <Header />

      <main className="mx-auto max-w-6xl px-6 py-16">
        <Reveal className="grid gap-6 rounded-3xl border border-[rgba(11,33,66,0.12)] bg-white p-10 shadow-[0_30px_60px_rgba(11,33,66,0.08)] lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--brand)]">
              Product
            </p>
            <h1 className="mt-3 text-3xl font-semibold md:text-4xl">
              CoCoKarte（ココカルテ）
            </h1>
            <p className="mt-2 text-sm font-semibold text-[var(--brand)]">
              LINE連携型 予約・カルテ一元管理システム
            </p>
            <p className="mt-4 max-w-2xl text-sm text-[var(--ink-muted)]">
              株式会社メディカル東京が薬局運営で培った現場改善の知見を凝縮。
              予約管理、問診、カルテ、顧客フォローまでを一元化し、
              現場運用をスマホ中心に整えます。
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs text-[var(--ink-muted)]">
              <span className="rounded-full border border-[rgba(11,33,66,0.15)] px-3 py-1">
                LINE予約
              </span>
              <span className="rounded-full border border-[rgba(11,33,66,0.15)] px-3 py-1">
                デジタルカルテ
              </span>
              <span className="rounded-full border border-[rgba(11,33,66,0.15)] px-3 py-1">
                CRM・分析
              </span>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-[var(--brand)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[rgba(27,141,138,0.25)] transition hover:bg-[var(--brand-dark)]"
              >
                デモ・ご相談はこちら
              </Link>
              <a
                href="#pricing"
                className="rounded-full border border-[rgba(11,33,66,0.2)] bg-white px-6 py-3 text-sm font-semibold text-[var(--ink)] transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
              >
                料金プランを見る
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-[rgba(11,33,66,0.12)]">
            <Image
              src="/legacy/it-dashboard.png"
              alt="CoCoKarteの画面イメージ"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Reveal className="rounded-3xl border border-[rgba(11,33,66,0.12)] bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold">こんな課題を解決します</h2>
            <div className="mt-6 grid gap-4">
              {challenges.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[rgba(11,33,66,0.08)] bg-[var(--mist)] p-4"
                >
                  <p className="text-sm font-semibold text-[var(--ink)]">
                    {item.title}
                  </p>
                  <p className="mt-2 text-xs text-[var(--ink-muted)]">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal className="rounded-3xl border border-[rgba(11,33,66,0.12)] bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold">CoCoKarteの強み</h2>
            <div className="mt-6 space-y-4">
              {strengths.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[rgba(11,33,66,0.08)] bg-[var(--mist)] p-4"
                >
                  <p className="text-sm font-semibold text-[var(--ink)]">
                    {item.title}
                  </p>
                  <p className="mt-2 text-xs text-[var(--ink-muted)]">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
          <Reveal className="rounded-3xl border border-[rgba(11,33,66,0.12)] bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold">主な機能</h2>
            <ul className="mt-6 grid gap-3 text-sm text-[var(--ink-muted)] md:grid-cols-2">
              {coreFunctions.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="rounded-3xl border border-[rgba(11,33,66,0.12)] bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold">想定業種</h2>
            <div className="mt-6 grid gap-3 text-sm text-[var(--ink-muted)]">
              {industries.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[rgba(11,33,66,0.08)] bg-[var(--mist)] px-4 py-3"
                >
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div id="pricing">
          <Reveal className="mt-10 rounded-3xl border border-[rgba(11,33,66,0.12)] bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold">価格について</h2>
            <div className="mt-6 rounded-3xl border border-[rgba(11,33,66,0.12)] bg-[var(--mist)] p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--brand)]">
                基本プラン（標準価格）
              </p>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div>
                  <p className="text-sm font-semibold text-[var(--ink)]">
                    初期導入費：1,200,000円（税別） ※IT導入補助金 対象ツール（予定）。
                    補助金を活用することで、実質負担額を大幅に抑えて導入可能です。
                  </p>
                  <p className="mt-2 text-sm text-[var(--ink-muted)]">
                    システム構築・LINE公式アカウント開設支援・
                    データ移行支援・操作レクチャーを含みます。
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--ink)]">
                    月額利用料：30,000円（税別）
                  </p>
                  <p className="mt-2 text-sm text-[var(--ink-muted)]">
                    サーバー保守・セキュリティ監視・LINE連携費を含みます。
                  </p>
                </div>
              </div>
              <p className="mt-4 text-xs text-[var(--ink-muted)]">
                機能追加、外部連携、拠点数、ユーザー数、移行量、運用体制により
                費用は変動します。要件確認のうえ個別にお見積りします。
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-10 rounded-3xl border border-[rgba(11,33,66,0.12)] bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold">導入の流れ</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-2xl border border-[rgba(11,33,66,0.12)] bg-[var(--mist)] p-4"
              >
                <p className="text-xs font-semibold text-[var(--brand)]">
                  STEP {index + 1}
                </p>
                <p className="mt-2 font-semibold text-[var(--ink)]">
                  {step.title}
                </p>
                <p className="mt-2 text-xs text-[var(--ink-muted)]">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-10 rounded-3xl border border-[rgba(11,33,66,0.12)] bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold">情報管理・運用</h2>
          <ul className="mt-6 space-y-3 text-sm text-[var(--ink-muted)]">
            {securityPoints.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-[rgba(11,33,66,0.12)] bg-[var(--mist)] p-4 sm:flex-row sm:items-center">
            <div className="relative h-12 w-40 overflow-hidden">
              <Image
                src="/security-action-one-star.png"
                alt="SECURITY ACTION 一つ星"
                fill
                className="object-contain"
                sizes="160px"
              />
            </div>
            <p className="text-xs text-[var(--ink-muted)]">
              ※IPA（独立行政法人情報処理推進機構）の「SECURITY ACTION」一つ星を宣言しています。
            </p>
          </div>
          <div className="mt-6 rounded-2xl border border-[rgba(11,33,66,0.12)] bg-[var(--mist)] p-4 text-xs text-[var(--ink-muted)]">
            詳細なセキュリティ仕様や運用ルールは個別にご案内します。
          </div>
        </Reveal>

        <Reveal className="mt-10 rounded-3xl border border-[rgba(11,33,66,0.12)] bg-[var(--ink)] p-8 text-white shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[rgba(255,255,255,0.7)]">
                Contact
              </p>
              <h2 className="mt-2 text-2xl font-semibold">
                まずはデモ・ご相談から
              </h2>
              <p className="mt-2 text-sm text-[rgba(255,255,255,0.75)]">
                現場フローや個別要件のご相談まで、導入から運用まで伴走します。
              </p>
            </div>
            <Link
              href="/contact"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--ink)]"
            >
              お問い合わせへ
            </Link>
          </div>
        </Reveal>
      </main>

      <Footer />
    </div>
  );
}
