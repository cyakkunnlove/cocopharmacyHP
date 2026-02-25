import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "AIエージェント導入",
  description:
    "医療・介護・中小企業向けAIエージェント導入支援。業務を理解し、自ら動くAIを御社の事業所内に。",
};

const painPoints = [
  {
    icon: "📋",
    title: "事務作業に追われている",
    detail: "記録・報告書・請求書…本来の業務以外に毎日何時間も費やしていませんか？",
  },
  {
    icon: "🧑‍💼",
    title: "人を雇いたいが採用できない",
    detail: "求人を出しても応募が来ない。人件費も年々上がる。でも業務は増える一方。",
  },
  {
    icon: "💻",
    title: "ITツールを入れたが定着しない",
    detail: "操作が複雑で現場が使わない。結局、紙とExcelに戻ってしまう。",
  },
  {
    icon: "🔒",
    title: "クラウドにデータを預けたくない",
    detail: "患者情報・顧客情報を外部サーバーに置くリスクが気になる。",
  },
];

const features = [
  {
    title: "スマホで話すだけ",
    description:
      "専用アプリ不要。Telegram/LINEで話しかけるだけで業務が動きます。ITスキルは一切不要。",
    icon: "📱",
  },
  {
    title: "業務を覚えて自ら動く",
    description:
      "御社のルール・フォーマット・業務フローを学習。指示がなくても定期レポートや期限管理を実行。",
    icon: "🧠",
  },
  {
    title: "データは事業所内のみ",
    description:
      "Mac mini 1台を事業所に設置。データは外に出ません。医療情報ガイドライン準拠の設計。",
    icon: "🏠",
  },
  {
    title: "既存システムと併用OK",
    description:
      "電子カルテ・会計ソフト・既存の業務フローはそのまま。追加するだけで効果を発揮。",
    icon: "🔄",
  },
];

const useCases = [
  {
    industry: "訪問看護ステーション",
    tasks: [
      "音声で訪問記録 → SOAP形式ドラフト自動生成",
      "月次報告書の一括自動作成",
      "オンコール時の利用者情報即時提示",
      "バイタルトレンドの変化検知・アラート",
      "指示書期限管理・自動リマインド",
    ],
    effect: "記録業務 85%削減、月末残業 15時間→1時間",
  },
  {
    industry: "調剤薬局",
    tasks: [
      "患者情報の即時検索・要約",
      "処方変更の自動検知・通知",
      "施設別の訪問スケジュール管理",
      "未収金管理・請求リマインド",
      "朝礼レポートの自動生成",
    ],
    effect: "事務作業 月40時間削減、請求漏れゼロ",
  },
  {
    industry: "中小企業全般",
    tasks: [
      "請求書ドラフトの自動作成",
      "法改正・期限の監視と通知",
      "日報・報告書の自動整理",
      "問い合わせ対応の情報提示",
      "経営数値の自動レポート",
    ],
    effect: "事務員1人分の業務を月5〜12万円で実現",
  },
];

const comparisonItems = [
  {
    label: "操作方法",
    ours: "スマホに話しかけるだけ",
    others: "PCでログイン→画面操作",
  },
  {
    label: "データの場所",
    ours: "事業所内のMac miniのみ",
    others: "クラウドサーバー（海外含む）",
  },
  {
    label: "AI学習への利用",
    ours: "一切なし（API規約で禁止）",
    others: "不明な場合あり",
  },
  {
    label: "業務への対応",
    ours: "御社専用にカスタマイズ",
    others: "汎用SaaS（機能固定）",
  },
  {
    label: "自律動作",
    ours: "自分で監視・判断・実行",
    others: "聞かないと動かない",
  },
  {
    label: "定着率",
    ours: "話すだけなので全員使える",
    others: "操作が複雑で現場が離脱",
  },
];

const plans = [
  {
    name: "ライト",
    price: "50,000",
    description: "導入+1ヶ月サポート",
    features: [
      "初期設定・導入サポート",
      "1ヶ月間の保証・調整対応",
      "基本機能すべて利用可能",
      "サポート終了後は自走運用",
    ],
    recommended: false,
  },
  {
    name: "スタンダード",
    price: "80,000",
    description: "継続サポート+ツール作成",
    features: [
      "ライトプランの全機能",
      "定期的なAI・機能の更新",
      "業務相談・悩み対応",
      "相談に応じたツール追加作成",
    ],
    recommended: true,
  },
  {
    name: "プレミアム",
    price: "120,000",
    description: "フルサポート+直接相談",
    features: [
      "スタンダードの全機能",
      "即時対応（優先サポート）",
      "最新AI・機能を随時適用",
      "担当者への直接相談OK",
    ],
    recommended: false,
  },
];

const steps = [
  {
    step: "01",
    title: "無料ヒアリング",
    detail: "業務の洗い出しと自動化ポイントを特定。費用は一切かかりません。",
  },
  {
    step: "02",
    title: "設計・構築",
    detail: "御社の業務に合わせたAIエージェントを構築。2〜4週間で完了。",
  },
  {
    step: "03",
    title: "試験運用",
    detail: "1〜2名で試用開始。フィードバックを反映しながら精度を向上。",
  },
  {
    step: "04",
    title: "本格運用",
    detail: "全スタッフに展開。継続的な改善と新機能の追加。",
  },
];

const faqs = [
  {
    q: "パソコンが苦手なスタッフでも使えますか？",
    a: "スマホに話しかけるだけです。アプリのインストールも最小限。特別な研修は不要です。",
  },
  {
    q: "既存の電子カルテや会計ソフトとの連携は？",
    a: "AIが作成したテキストをコピー＆ペーストで転記する設計です。既存システムの変更は不要です。API連携が可能なソフトウェアには直接連携も対応します。",
  },
  {
    q: "AIが間違った内容を生成したら？",
    a: "重要な出力は必ず人間の確認ステップを挟みます。AIが作成→人間が確認→承認の流れです。",
  },
  {
    q: "インターネットが止まったらどうなりますか？",
    a: "AI生成機能は一時停止しますが、蓄積データは事業所内のMac miniにあるため消失しません。復旧後に自動で再開します。",
  },
  {
    q: "補助金は使えますか？",
    a: "デジタル化・AI導入補助金（補助率1/2〜4/5）等の活用が可能です。申請サポートも行います。",
  },
];

export default function AIAgentPage() {
  return (
    <div className="bg-[var(--sand)]">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0b2142] to-[#1a3a6b] py-24 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.28em] text-sky-300">
              AI Agent Service
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
              AIエージェント導入支援
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-sky-100">
              ChatGPTとは違います。御社の業務を覚え、自分で考えて動く
              <br className="hidden md:block" />
              「もう1人の社員」を、事業所の中に。
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-sky-400 px-8 py-3 text-sm font-semibold text-[#0b2142] shadow-lg transition hover:bg-sky-300"
              >
                無料ヒアリングを申し込む
              </Link>
              <a
                href="#plans"
                className="rounded-full border border-sky-400/40 px-8 py-3 text-sm font-semibold text-sky-200 transition hover:border-sky-300 hover:text-white"
              >
                料金プランを見る
              </a>
            </div>
          </Reveal>
        </div>
        {/* decorative */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-sky-400/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-10 -left-10 h-60 w-60 rounded-full bg-sky-500/10 blur-2xl" />
      </section>

      {/* Pain Points */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--brand)]">
              Pain Points
            </p>
            <h2 className="mt-3 text-3xl font-semibold">
              こんなお悩みはありませんか？
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {painPoints.map((item) => (
              <Reveal key={item.title}>
                <div className="rounded-2xl border border-[rgba(11,33,66,0.08)] bg-white p-8 shadow-sm transition hover:shadow-md">
                  <span className="text-3xl">{item.icon}</span>
                  <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-[var(--ink-muted)]">
                    {item.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--brand)]">
              Features
            </p>
            <h2 className="mt-3 text-3xl font-semibold">
              AIエージェントの特長
            </h2>
            <p className="mt-4 max-w-2xl text-sm text-[var(--ink-muted)]">
              ChatGPTは「聞けば答える辞書」。AIエージェントは「自分で働く社員」です。
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <Reveal key={f.title}>
                <div className="rounded-2xl border border-[rgba(11,33,66,0.06)] bg-[var(--sand)] p-6">
                  <span className="text-3xl">{f.icon}</span>
                  <h3 className="mt-4 text-base font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm text-[var(--ink-muted)]">
                    {f.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--brand)]">
              Comparison
            </p>
            <h2 className="mt-3 text-3xl font-semibold">
              一般的なITツールとの違い
            </h2>
          </Reveal>
          <Reveal>
            <div className="mt-10 overflow-hidden rounded-2xl border border-[rgba(11,33,66,0.08)] bg-white shadow-sm">
              <div className="hidden grid-cols-3 border-b border-[rgba(11,33,66,0.08)] bg-[#0b2142] text-white sm:grid">
                <div className="px-6 py-4 text-sm font-semibold" />
                <div className="px-6 py-4 text-center text-sm font-semibold">
                  🤖 AIエージェント（本サービス）
                </div>
                <div className="px-6 py-4 text-center text-sm font-semibold">
                  💻 一般的なクラウドツール
                </div>
              </div>
              {comparisonItems.map((item, i) => (
                <div
                  key={item.label}
                  className={`grid grid-cols-1 gap-2 border-b border-[rgba(11,33,66,0.06)] px-6 py-4 last:border-b-0 sm:grid-cols-3 sm:gap-0 ${
                    i % 2 === 0 ? "bg-white" : "bg-[rgba(11,33,66,0.02)]"
                  }`}
                >
                  <div className="text-sm font-semibold text-[var(--ink)]">
                    {item.label}
                  </div>
                  <div className="text-center text-sm text-emerald-700">
                    ✅ {item.ours}
                  </div>
                  <div className="text-center text-sm text-[var(--ink-muted)]">
                    {item.others}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--brand)]">
              Use Cases
            </p>
            <h2 className="mt-3 text-3xl font-semibold">導入事例・活用例</h2>
            <p className="mt-4 max-w-2xl text-sm text-[var(--ink-muted)]">
              医療・介護から中小企業まで、業種を問わず導入いただけます。
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {useCases.map((uc) => (
              <Reveal key={uc.industry}>
                <div className="flex h-full flex-col rounded-2xl border border-[rgba(11,33,66,0.08)] bg-[var(--sand)] p-8">
                  <h3 className="text-lg font-semibold text-[var(--brand)]">
                    {uc.industry}
                  </h3>
                  <ul className="mt-4 flex-1 space-y-2">
                    {uc.tasks.map((task) => (
                      <li
                        key={task}
                        className="flex items-start gap-2 text-sm text-[var(--ink-muted)]"
                      >
                        <span className="mt-0.5 text-emerald-500">✓</span>
                        {task}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 rounded-xl bg-emerald-50 px-4 py-3 text-center text-sm font-semibold text-emerald-700">
                    {uc.effect}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section id="plans" className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--brand)]">
              Plans
            </p>
            <h2 className="mt-3 text-3xl font-semibold">料金プラン</h2>
          </Reveal>

          <Reveal>
            <div className="mt-8 rounded-2xl border border-sky-200 bg-sky-50 p-6 text-center">
              <p className="text-sm text-[var(--ink-muted)]">初期費用</p>
              <p className="mt-1 text-3xl font-bold text-[var(--brand)]">
                ¥1,500,000〜
                <span className="text-base font-normal text-[var(--ink-muted)]">
                  （税別）
                </span>
              </p>
              <p className="mt-2 text-xs text-[var(--ink-muted)]">
                デバイス本体・セットアップ・業務ヒアリング・初期研修・データ初期登録を含みます
              </p>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <Reveal key={plan.name}>
                <div
                  className={`relative flex h-full flex-col rounded-2xl border p-8 shadow-sm transition hover:shadow-md ${
                    plan.recommended
                      ? "border-[var(--brand)] bg-white ring-2 ring-[var(--brand)]/20"
                      : "border-[rgba(11,33,66,0.08)] bg-white"
                  }`}
                >
                  {plan.recommended && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--brand)] px-4 py-1 text-xs font-semibold text-white">
                      おすすめ
                    </span>
                  )}
                  <p className="text-sm font-semibold text-[var(--ink-muted)]">
                    {plan.name}プラン
                  </p>
                  <p className="mt-2 text-3xl font-bold">
                    ¥{plan.price}
                    <span className="text-base font-normal text-[var(--ink-muted)]">
                      /月
                    </span>
                  </p>
                  <p className="mt-1 text-xs text-[var(--ink-muted)]">
                    {plan.description}
                  </p>
                  <ul className="mt-6 flex-1 space-y-3">
                    {plan.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-sm text-[var(--ink)]"
                      >
                        <span className="mt-0.5 text-emerald-500">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`mt-8 block rounded-full py-3 text-center text-sm font-semibold transition ${
                      plan.recommended
                        ? "bg-[var(--brand)] text-white hover:bg-[var(--brand-dark)]"
                        : "border border-[var(--brand)] text-[var(--brand)] hover:bg-[var(--brand)] hover:text-white"
                    }`}
                  >
                    お問い合わせ
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mt-6 text-center text-xs text-[var(--ink-muted)]">
              ※ 表示価格はすべて税別です。補助金（デジタル化・AI導入補助金等）の活用で実質負担を軽減できる場合があります。
            </p>
          </Reveal>
        </div>
      </section>

      {/* Security */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--brand)]">
              Security
            </p>
            <h2 className="mt-3 text-3xl font-semibold">
              セキュリティ・データ管理
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "🏠",
                title: "データは事業所内のみ",
                detail:
                  "Mac mini 1台を設置。患者情報・顧客情報はクラウドに保管しません。",
              },
              {
                icon: "🔐",
                title: "AI学習に使用しない",
                detail:
                  "API事業者（Anthropic社）との契約で、データのAI学習利用は明確に禁止。",
              },
              {
                icon: "🛡️",
                title: "匿名化処理",
                detail:
                  "AI処理時は氏名・住所・保険番号を除去。ID＋カナ姓のみ送信。",
              },
              {
                icon: "📋",
                title: "監査ログ",
                detail: "すべての操作を記録・保管。いつ誰が何をしたかを追跡可能。",
              },
              {
                icon: "🔒",
                title: "暗号化",
                detail: "通信はTLS暗号化。ディスクはFileVaultで全体暗号化。",
              },
              {
                icon: "📖",
                title: "ガイドライン準拠",
                detail:
                  "医療情報システムの安全管理ガイドライン第6.0版に準拠した設計。",
              },
            ].map((s) => (
              <Reveal key={s.title}>
                <div className="rounded-2xl border border-[rgba(11,33,66,0.06)] bg-[var(--sand)] p-6">
                  <span className="text-2xl">{s.icon}</span>
                  <h3 className="mt-3 text-base font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-[var(--ink-muted)]">
                    {s.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--brand)]">
              Flow
            </p>
            <h2 className="mt-3 text-3xl font-semibold">導入の流れ</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.step}>
                <div className="relative rounded-2xl border border-[rgba(11,33,66,0.08)] bg-white p-6 shadow-sm">
                  <span className="text-4xl font-bold text-[var(--brand)]/20">
                    {s.step}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-[var(--ink-muted)]">
                    {s.detail}
                  </p>
                  {i === 0 && (
                    <span className="mt-3 inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                      無料
                    </span>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--brand)]">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-semibold">よくあるご質問</h2>
          </Reveal>
          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <Reveal key={faq.q}>
                <details className="group rounded-2xl border border-[rgba(11,33,66,0.08)] bg-[var(--sand)] shadow-sm">
                  <summary className="cursor-pointer px-6 py-5 text-sm font-semibold text-[var(--ink)] [&::-webkit-details-marker]:hidden">
                    <span className="mr-2 text-[var(--brand)]">Q.</span>
                    {faq.q}
                  </summary>
                  <div className="border-t border-[rgba(11,33,66,0.06)] px-6 py-5">
                    <p className="text-sm text-[var(--ink-muted)]">
                      <span className="mr-2 font-semibold text-[var(--brand)]">
                        A.
                      </span>
                      {faq.a}
                    </p>
                  </div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#0b2142] to-[#1a3a6b] py-20 text-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <h2 className="text-3xl font-bold md:text-4xl">
              まずは無料ヒアリングから
            </h2>
            <p className="mt-4 text-sky-200">
              「うちの業務にも使えるの？」その疑問に、
              <br className="hidden md:block" />
              具体的な数字と実際の画面でお答えします。
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-sky-400 px-10 py-4 text-base font-semibold text-[#0b2142] shadow-lg transition hover:bg-sky-300"
            >
              無料ヒアリングを申し込む
            </Link>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-sky-300">
              <span>✅ 初期費用 150万円〜</span>
              <span>✅ 月額 5〜12万円</span>
              <span>✅ 補助金活用可</span>
              <span>✅ データは事業所内のみ</span>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
