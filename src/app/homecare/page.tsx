import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "在宅医療支援",
  description: "千葉県内全域で在宅医療を支える体制をご紹介します。",
};

const steps = [
  {
    title: "相談・課題整理",
    description:
      "患者さまや施設の状況、医療機関の方針を丁寧にヒアリングします。",
  },
  {
    title: "連携体制の設計",
    description:
      "医師・看護師・施設職員との連携フローを設計し、役割分担を明確化します。",
  },
  {
    title: "訪問・運用支援",
    description:
      "現場の変化に合わせ、継続的に運用を支える体制を整えます。",
  },
];

const supportItems = [
  "千葉県内全域での在宅訪問対応",
  "医療機関・施設との連携サポート",
  "服薬管理や服薬指導のフォロー",
  "訪問体制の継続的な改善",
];

const collaborationItems = [
  "医師・看護師・ケアマネジャーとの情報連携",
  "施設職員との服薬管理の共有",
  "訪問スケジュールの調整・最適化",
  "多職種連携による課題解決",
];

const serviceMenu = [
  {
    title: "服薬管理・一包化",
    description:
      "飲み忘れや飲み間違いを防ぐため、服薬管理と一包化を支援します。",
  },
  {
    title: "在宅訪問・服薬指導",
    description:
      "患者さまの生活に合わせた服薬指導を行い、継続的にフォローします。",
  },
  {
    title: "施設・医療機関連携",
    description:
      "施設・医療機関と連携し、情報共有と運用の改善を支援します。",
  },
  {
    title: "緊急時の相談体制",
    description:
      "状況に応じた相談ルートを整備し、迅速な対応を目指します。",
  },
];

const faqItems = [
  {
    title: "どの地域まで対応できますか？",
    description:
      "千葉県内全域に対応しています。千葉市から松戸まで訪問実績があります。",
  },
  {
    title: "施設との連携は可能ですか？",
    description:
      "可能です。施設職員と服薬管理の共有を行い、運用面もサポートします。",
  },
  {
    title: "在宅訪問の流れを知りたい",
    description:
      "ご相談 → 連携体制設計 → 訪問・運用支援の流れで進めます。",
  },
];

export default function HomecarePage() {
  return (
    <div className="bg-[var(--sand)]">
      <Header />

      <main className="mx-auto max-w-6xl px-6 py-16">
        <Reveal className="grid gap-6 rounded-3xl border border-[rgba(11,33,66,0.12)] bg-white p-10 shadow-[0_30px_60px_rgba(11,33,66,0.08)] lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--brand)]">
              Home Care
            </p>
            <h1 className="mt-3 text-3xl font-semibold md:text-4xl">
              在宅医療支援
            </h1>
            <p className="mt-4 max-w-2xl text-sm text-[var(--ink-muted)]">
              千葉県内全域で在宅医療を支援。医療機関・施設と連携し、
              患者さまの生活を支える運用体制を構築します。
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs text-[var(--ink-muted)]">
              <span className="rounded-full border border-[rgba(11,33,66,0.15)] px-3 py-1">
                千葉県内全域
              </span>
              <span className="rounded-full border border-[rgba(11,33,66,0.15)] px-3 py-1">
                医療機関連携
              </span>
              <span className="rounded-full border border-[rgba(11,33,66,0.15)] px-3 py-1">
                施設連携
              </span>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-[rgba(11,33,66,0.12)]">
            <Image
              src="/legacy/patienthand-2-v2.png"
              alt="在宅医療のイメージ"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
          <Reveal className="rounded-3xl border border-[rgba(11,33,66,0.12)] bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold">支援の流れ</h2>
            <div className="mt-4 relative h-40 overflow-hidden rounded-2xl border border-[rgba(11,33,66,0.08)]">
              <Image
                src="/legacy/homecare-consult.png"
                alt="在宅医療の相談イメージ"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>
            <div className="mt-6 grid gap-4">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-2xl border border-[rgba(11,33,66,0.08)] bg-[var(--mist)] p-4"
                >
                  <p className="text-xs font-semibold text-[var(--brand)]">
                    STEP {index + 1}
                  </p>
                  <p className="mt-2 font-semibold text-[var(--ink)]">
                    {step.title}
                  </p>
                  <p className="mt-2 text-sm text-[var(--ink-muted)]">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal className="rounded-3xl border border-[rgba(11,33,66,0.12)] bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold">対応内容</h2>
            <ul className="mt-6 space-y-3 text-sm text-[var(--ink-muted)]">
              {supportItems.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-2xl border border-[rgba(11,33,66,0.12)] bg-[var(--sand)] p-4 text-xs text-[var(--ink-muted)]">
              医療機関・施設との連携実績は守秘義務のため個別名は非公開です。
            </div>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Reveal className="rounded-3xl border border-[rgba(11,33,66,0.12)] bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold">提供メニュー</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {serviceMenu.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[rgba(11,33,66,0.08)] bg-[var(--mist)] p-4"
                >
                  <p className="text-sm font-semibold text-[var(--ink)]">
                    {item.title}
                  </p>
                  <p className="mt-2 text-xs text-[var(--ink-muted)]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal className="rounded-3xl border border-[rgba(11,33,66,0.12)] bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold">よくあるご相談</h2>
            <div className="mt-6 space-y-4 text-sm text-[var(--ink-muted)]">
              {faqItems.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[rgba(11,33,66,0.08)] bg-[var(--mist)] p-4"
                >
                  <p className="text-sm font-semibold text-[var(--ink)]">
                    {item.title}
                  </p>
                  <p className="mt-2 text-xs">{item.description}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-10 grid gap-6 rounded-3xl border border-[rgba(11,33,66,0.12)] bg-white p-8 shadow-sm lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--brand)]">
              Medication Support Robot
            </p>
            <h2 className="mt-3 text-2xl font-semibold">
              服薬支援ロボ（ケアボット）導入
            </h2>
            <p className="mt-4 text-sm text-[var(--ink-muted)]">
              服薬管理の負担を減らし、正確で継続しやすい服薬支援を実現するため、
              服薬支援ロボを活用しています。ご本人・ご家族・施設スタッフの
              連携をスムーズにし、安心できる在宅医療を支えます。
            </p>
            <ul className="mt-5 space-y-2 text-sm text-[var(--ink-muted)]">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
                <span>服薬スケジュールの可視化</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
                <span>服薬忘れの予防</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
                <span>多職種との情報連携を支援</span>
              </li>
            </ul>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-[rgba(11,33,66,0.12)]">
            <Image
              src="/legacy/homecare-robot.png"
              alt="服薬支援ロボの活用イメージ"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Reveal className="rounded-3xl border border-[rgba(11,33,66,0.12)] bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold">連携体制</h2>
            <div className="mt-4 relative h-36 overflow-hidden rounded-2xl border border-[rgba(11,33,66,0.08)]">
              <Image
                src="/legacy/homecare-teamwork.png"
                alt="多職種連携のイメージ"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <ul className="mt-6 space-y-3 text-sm text-[var(--ink-muted)]">
              {collaborationItems.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="rounded-3xl border border-[rgba(11,33,66,0.12)] bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold">対応エリア</h2>
            <p className="mt-4 text-sm text-[var(--ink-muted)]">
              千葉県内全域に対応しています。千葉市から松戸まで訪問実績があります。
            </p>
            <div className="mt-6 rounded-2xl border border-[rgba(11,33,66,0.12)] bg-[var(--mist)] p-4 text-xs text-[var(--ink-muted)]">
              具体的な対応可否は状況により変動しますので、お問い合わせください。
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-10 rounded-3xl border border-[rgba(11,33,66,0.12)] bg-[var(--ink)] p-8 text-white shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[rgba(255,255,255,0.7)]">
                Contact
              </p>
              <h2 className="mt-2 text-2xl font-semibold">
                在宅医療のご相談はお気軽に
              </h2>
              <p className="mt-2 text-sm text-[rgba(255,255,255,0.75)]">
                施設・医療機関のご相談に応じて、最適な連携体制をご提案します。
              </p>
            </div>
            <a
              href="/contact"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--ink)]"
            >
              お問い合わせへ
            </a>
          </div>
        </Reveal>
      </main>

      <Footer />
    </div>
  );
}
