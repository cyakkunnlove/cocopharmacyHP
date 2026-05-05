import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "AIエージェント導入",
  description:
    "医療・介護・中小企業向けAIエージェント導入支援。業務を理解し自ら動くAIを事業所内に。",
};

const highlights = [
  { title: "操作", detail: "スマホに話しかけるだけ" },
  { title: "データ", detail: "事業所内のMac miniに保管" },
  { title: "初期費用", detail: "¥2,800,000〜（税別）" },
  { title: "月額", detail: "¥120,000〜（税別）" },
];

const painPoints = [
  {
    icon: "📋",
    title: "事務作業に追われている",
    detail:
      "記録・報告書・請求書…本来の業務以外に毎日何時間も費やしていませんか？",
  },
  {
    icon: "🧑‍💼",
    title: "人を雇いたいが採用できない",
    detail:
      "求人を出しても応募が来ない。人件費も年々上がる。でも業務は増える一方。",
  },
  {
    icon: "💻",
    title: "ITツールを入れたが定着しない",
    detail:
      "操作が複雑で現場が使わない。結局、紙とExcelに戻ってしまう。",
  },
  {
    icon: "🔒",
    title: "データを外部に預けたくない",
    detail:
      "患者情報・顧客情報を外部サーバーに置くリスクが気になる。",
  },
];

const features = [
  {
    icon: "📱",
    title: "スマホで話すだけ",
    detail:
      "専用アプリ不要。Telegram/LINEで話しかけるだけ。Excel/PDFを送れば即集計・分析。ITスキルは一切不要。",
  },
  {
    icon: "🧠",
    title: "業務を覚えて自ら動く",
    detail:
      "御社のルール・業務フローを学習し、使うほど御社に最適化。定期レポートや期限管理も自動で実行します。",
  },
  {
    icon: "🏠",
    title: "データは事業所内のみ",
    detail:
      "Mac mini 1台を事業所に設置。データは外に出ません。医療情報ガイドライン準拠。",
  },
  {
    icon: "🔄",
    title: "多拠点・人数無制限",
    detail:
      "1台で複数拠点に対応。人数無制限で全スタッフが利用可能。既存システムはそのまま併用OK。",
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
    ours: "定期的な監視・通知・レポートを自動実行",
    others: "聞かないと動かない",
  },
  {
    label: "定着率",
    ours: "話すだけなので全員使える",
    others: "操作が複雑で現場が離脱",
  },
];

const useCases = [
  {
    industry: "訪問看護ステーション",
    tag: "医療・介護",
    tasks: [
      "音声で訪問記録 → SOAP形式ドラフト自動生成",
      "月次報告書の一括自動作成",
      "オンコール時の利用者情報即時提示",
      "バイタルトレンドの変化検知・アラート",
    ],
    effect: "記録業務の大幅削減、月末残業の短縮（想定効果）",
  },
  {
    industry: "調剤薬局",
    tag: "医療",
    tasks: [
      "患者情報の即時検索・要約",
      "処方変更の自動検知・通知",
      "施設別の訪問スケジュール管理",
      "未収金管理・請求リマインド",
    ],
    effect: "事務作業の大幅削減、請求漏れの低減（想定効果）",
  },
  {
    industry: "中小企業全般",
    tag: "業種不問",
    tasks: [
      "請求書ドラフトの自動作成",
      "法改正・期限の監視と通知",
      "日報・報告書の自動整理",
      "経営数値の自動レポート",
    ],
    effect: "専任人材を雇わずに月12〜38万円で継続改善",
  },
];

const plans = [
  {
    name: "ライト",
    price: "120,000",
    description: "小さく始める基本運用",
    features: [
      "基本AIエージェント1系統",
      "月1回の運用レビュー",
      "軽微なプロンプト・文面調整",
      "メール/チャットでの通常サポート",
    ],
    recommended: false,
  },
  {
    name: "スタンダード",
    price: "180,000",
    description: "改善しながら定着させる標準プラン",
    features: [
      "ライトプランの全機能",
      "月2回の業務改善ミーティング",
      "月1件までの小規模ツール追加",
      "業務フロー変更に伴う調整対応",
    ],
    recommended: true,
  },
  {
    name: "プレミアム",
    price: "380,000",
    description: "複数業務をまとめて任せる伴走プラン",
    features: [
      "スタンダードの全機能",
      "月2件までの小規模ツール追加",
      "優先サポート・緊急時の初動対応",
      "経営/現場向けレポート改善支援",
    ],
    recommended: false,
  },
];

const options = [
  {
    name: "追加業務フロー構築",
    price: "¥150,000〜",
    detail: "請求、報告書、予約管理など新しい業務をAIに追加する場合",
  },
  {
    name: "既存データ移行・整備",
    price: "¥100,000〜",
    detail: "Excel、CSV、PDF、紙運用からの初期データ整理・登録",
  },
  {
    name: "外部システム連携",
    price: "¥300,000〜",
    detail: "電子カルテ、会計、予約、LINE、Google Workspace等との連携",
  },
  {
    name: "現地研修・運用定着支援",
    price: "¥80,000〜/半日",
    detail: "スタッフ向け説明、初回利用サポート、現場オペレーション整理",
  },
  {
    name: "追加拠点・追加端末設定",
    price: "¥150,000〜 + 実費",
    detail: "複数店舗・複数拠点で使う場合のネットワーク/端末追加設定",
  },
  {
    name: "補助金申請サポート",
    price: "¥150,000〜",
    detail: "申請資料の整理、事業計画のたたき台作成、導入効果の言語化",
  },
];

const securityItems = [
  {
    title: "データは事業所内のみ",
    detail:
      "Mac mini 1台を設置。患者情報・顧客情報はクラウドに保管しません。",
  },
  {
    title: "AI学習に使用しない",
    detail:
      "API事業者（Anthropic社）との契約で、データのAI学習利用は明確に禁止。",
  },
  {
    title: "匿名化処理",
    detail:
      "AI処理時は氏名・住所・保険番号を除去。ID＋カナ姓のみ送信。",
  },
  {
    title: "監査ログ",
    detail:
      "すべての操作を記録・保管。いつ誰が何をしたかを追跡可能。",
  },
  {
    title: "暗号化",
    detail: "通信はTLS暗号化。ディスクはFileVaultで全体暗号化。",
  },
  {
    title: "ガイドライン準拠",
    detail:
      "医療情報システムの安全管理ガイドライン第6.0版に準拠した設計。",
  },
];

const steps = [
  {
    title: "無料ヒアリング",
    detail:
      "業務の洗い出しと自動化ポイントを特定。無料トライアルのご相談もこちらから。",
  },
  {
    title: "設計・構築",
    detail:
      "御社の業務に合わせたAIエージェントを構築。2〜4週間で完了。",
  },
  {
    title: "試験運用",
    detail:
      "1〜2名で試用開始。フィードバックを反映しながら精度を向上。",
  },
  {
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
    a: "AIが作成したテキストをコピー＆ペーストで転記する設計です。既存システムの変更は不要。API連携が可能なソフトウェアには直接連携も対応します。",
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

      <main className="mx-auto max-w-6xl px-6 py-16">
        {/* Hero */}
        <Reveal className="grid gap-6 rounded-3xl border border-[rgba(11,33,66,0.12)] bg-white p-10 shadow-[0_30px_60px_rgba(11,33,66,0.08)] lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--brand)]">
              AI Agent Service
            </p>
            <h1 className="mt-3 text-3xl font-semibold md:text-4xl">
              AIエージェント導入支援
            </h1>
            <p className="mt-4 max-w-2xl text-sm text-[var(--ink-muted)]">
              ChatGPTとは違います。御社の業務を覚え、自分で考えて動く「もう1人の社員」を、事業所の中に。
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[rgba(11,33,66,0.12)] bg-[var(--mist)] p-4"
                >
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--brand)]">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[var(--ink)]">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-[rgba(11,33,66,0.12)]">
            <Image
              src="/legacy/it-dashboard.png"
              alt="AIエージェント管理画面のイメージ"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </Reveal>

        {/* Pain Points */}
        <Reveal className="mt-10 rounded-3xl border border-[rgba(11,33,66,0.12)] bg-white p-10 shadow-sm">
          <p className="text-xs uppercase tracking-[0.28em] text-[var(--brand)]">
            Pain Points
          </p>
          <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
            こんなお悩みはありませんか？
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {painPoints.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[rgba(11,33,66,0.12)] bg-[var(--mist)] p-6"
              >
                <span className="text-2xl">{item.icon}</span>
                <h3 className="mt-3 text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-[var(--ink-muted)]">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Features */}
        <Reveal className="mt-10 rounded-3xl border border-[rgba(11,33,66,0.12)] bg-white p-10 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-[1fr,0.6fr] lg:items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--brand)]">
                Features
              </p>
              <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
                AIエージェントの特長
              </h2>
              <p className="mt-4 text-sm text-[var(--ink-muted)]">
                ChatGPTは「聞けば答える辞書」。AIエージェントは「自分で働く社員」です。
              </p>
            </div>
            <div className="relative hidden aspect-[4/3] overflow-hidden rounded-2xl border border-[rgba(11,33,66,0.08)] lg:block">
              <Image
                src="/legacy/homecare-robot.png"
                alt="AIテクノロジーのイメージ"
                fill
                className="object-cover"
                sizes="33vw"
              />
            </div>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-[rgba(11,33,66,0.12)] bg-[var(--mist)] p-5"
              >
                <span className="text-2xl">{f.icon}</span>
                <h3 className="mt-3 text-base font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-[var(--ink-muted)]">
                  {f.detail}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Comparison */}
        <Reveal className="mt-10 rounded-3xl border border-[rgba(11,33,66,0.12)] bg-white p-10 shadow-sm">
          <p className="text-xs uppercase tracking-[0.28em] text-[var(--brand)]">
            Comparison
          </p>
          <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
            一般的なITツールとの違い
          </h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-[rgba(11,33,66,0.08)]">
            <div className="hidden grid-cols-3 border-b border-[rgba(11,33,66,0.08)] bg-[var(--ink)] text-white sm:grid">
              <div className="px-6 py-3 text-xs font-semibold" />
              <div className="px-6 py-3 text-center text-xs font-semibold">
                AIエージェント（本サービス）
              </div>
              <div className="px-6 py-3 text-center text-xs font-semibold">
                一般的なクラウドツール
              </div>
            </div>
            {comparisonItems.map((item, i) => (
              <div
                key={item.label}
                className={`grid grid-cols-1 gap-2 border-b border-[rgba(11,33,66,0.06)] px-6 py-3 last:border-b-0 sm:grid-cols-3 sm:gap-0 ${
                  i % 2 === 0 ? "bg-white" : "bg-[var(--mist)]"
                }`}
              >
                <div className="text-sm font-semibold text-[var(--ink)]">
                  {item.label}
                </div>
                <div className="text-center text-sm text-[var(--brand)]">
                  ✓ {item.ours}
                </div>
                <div className="text-center text-sm text-[var(--ink-muted)]">
                  {item.others}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Use Cases */}
        <Reveal className="mt-10 rounded-3xl border border-[rgba(11,33,66,0.12)] bg-white p-10 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-[1fr,0.5fr] lg:items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--brand)]">
                Use Cases
              </p>
              <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
                導入事例・活用例
              </h2>
              <p className="mt-4 text-sm text-[var(--ink-muted)]">
                医療・介護から中小企業まで、業種を問わず導入いただけます。
              </p>
            </div>
            <div className="relative hidden aspect-[4/3] overflow-hidden rounded-2xl border border-[rgba(11,33,66,0.08)] lg:block">
              <Image
                src="/legacy/homecare-consult.png"
                alt="導入相談のイメージ"
                fill
                className="object-cover"
                sizes="33vw"
              />
            </div>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {useCases.map((uc) => (
              <div
                key={uc.industry}
                className="flex flex-col rounded-2xl border border-[rgba(11,33,66,0.12)] bg-[var(--mist)] p-6"
              >
                <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--gold)]">
                  {uc.tag}
                </p>
                <h3 className="mt-2 text-lg font-semibold">{uc.industry}</h3>
                <ul className="mt-4 flex-1 space-y-2">
                  {uc.tasks.map((task) => (
                    <li
                      key={task}
                      className="flex items-start gap-2 text-sm text-[var(--ink-muted)]"
                    >
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 rounded-xl border border-[rgba(11,33,66,0.08)] bg-white px-4 py-3 text-center text-sm font-semibold text-[var(--brand)]">
                  {uc.effect}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Plans */}
        <Reveal className="mt-10 rounded-3xl border border-[rgba(11,33,66,0.12)] bg-white p-10 shadow-[0_30px_60px_rgba(11,33,66,0.08)]">
          <p className="text-xs uppercase tracking-[0.28em] text-[var(--brand)]">
            Plans
          </p>
          <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
            料金プラン
          </h2>

          <div className="mt-6 rounded-2xl border border-[rgba(11,33,66,0.12)] bg-[var(--mist)] p-6 text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--brand)]">
              初期費用
            </p>
            <p className="mt-2 text-3xl font-bold text-[var(--ink)]">
              ¥2,800,000〜
              <span className="text-base font-normal text-[var(--ink-muted)]">
                （税別）
              </span>
            </p>
            <p className="mt-2 text-xs text-[var(--ink-muted)]">
              デバイス本体・セットアップ・業務ヒアリング・初期設計・初期研修・基本データ登録を含みます
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl border p-6 ${
                  plan.recommended
                    ? "border-[var(--brand)] ring-2 ring-[var(--brand)]/20"
                    : "border-[rgba(11,33,66,0.12)]"
                } bg-[var(--mist)]`}
              >
                {plan.recommended && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--brand)] px-4 py-1 text-xs font-semibold text-white">
                    おすすめ
                  </span>
                )}
                <p className="text-xs font-semibold text-[var(--brand)]">
                  {plan.name}プラン
                </p>
                <p className="mt-2 text-2xl font-bold text-[var(--ink)]">
                  ¥{plan.price}
                  <span className="text-sm font-normal text-[var(--ink-muted)]">
                    /月（税別）
                  </span>
                </p>
                <p className="mt-1 text-xs text-[var(--ink-muted)]">
                  {plan.description}
                </p>
                <ul className="mt-5 flex-1 space-y-2">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-[var(--ink-muted)]"
                    >
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`mt-6 block rounded-full py-3 text-center text-sm font-semibold transition ${
                    plan.recommended
                      ? "bg-[var(--brand)] text-white hover:bg-[var(--brand-dark)]"
                      : "border border-[var(--brand)] text-[var(--brand)] hover:bg-[var(--brand)] hover:text-white"
                  }`}
                >
                  お問い合わせ
                </Link>
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-xs text-[var(--ink-muted)]">
            ※ 表示価格は標準構成の目安です。業務範囲、連携先、データ量、現地対応の有無により個別見積となります。
          </p>

          <div className="mt-8 rounded-2xl border border-[rgba(11,33,66,0.12)] bg-white p-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--brand)]">
                  Options
                </p>
                <h3 className="mt-2 text-xl font-semibold">主なオプション</h3>
              </div>
              <p className="text-xs text-[var(--ink-muted)]">
                必要な分だけ追加できます
              </p>
            </div>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {options.map((option) => (
                <div
                  key={option.name}
                  className="rounded-2xl border border-[rgba(11,33,66,0.08)] bg-[var(--mist)] p-5"
                >
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                    <h4 className="text-sm font-semibold text-[var(--ink)]">
                      {option.name}
                    </h4>
                    <p className="text-sm font-bold text-[var(--brand)]">
                      {option.price}
                    </p>
                  </div>
                  <p className="mt-2 text-sm text-[var(--ink-muted)]">
                    {option.detail}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-[var(--ink-muted)]">
              補助金・助成金の活用は、対象要件を確認したうえで申請方針をご提案します。採択や補助額を保証するものではありません。
            </p>
          </div>
        </Reveal>

        {/* Security */}
        <Reveal className="mt-10 rounded-3xl border border-[rgba(11,33,66,0.12)] bg-white p-10 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-[1fr,0.5fr] lg:items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--brand)]">
                Security
              </p>
              <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
                セキュリティ・データ管理
              </h2>
            </div>
            <div className="relative hidden aspect-[4/3] overflow-hidden rounded-2xl border border-[rgba(11,33,66,0.08)] lg:block">
              <Image
                src="/legacy/it-security.png"
                alt="セキュリティのイメージ"
                fill
                className="object-cover"
                sizes="33vw"
              />
            </div>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {securityItems.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-[rgba(11,33,66,0.12)] bg-[var(--mist)] p-5"
              >
                <h3 className="text-sm font-semibold text-[var(--ink)]">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--ink-muted)]">
                  {s.detail}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Steps */}
        <Reveal className="mt-10 rounded-3xl border border-[rgba(11,33,66,0.12)] bg-white p-10 shadow-[0_30px_60px_rgba(11,33,66,0.08)]">
          <div className="grid gap-8 lg:grid-cols-[1fr,0.5fr] lg:items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--brand)]">
                Flow
              </p>
              <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
                導入の流れ
              </h2>
            </div>
            <div className="relative hidden aspect-[4/3] overflow-hidden rounded-2xl border border-[rgba(11,33,66,0.08)] lg:block">
              <Image
                src="/legacy/it-teamwork.png"
                alt="チームワークのイメージ"
                fill
                className="object-cover"
                sizes="33vw"
              />
            </div>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div
                key={s.title}
                className="relative rounded-2xl border border-[rgba(11,33,66,0.12)] bg-[var(--mist)] p-5"
              >
                <p className="text-xs font-semibold text-[var(--brand)]">
                  STEP {i + 1}
                </p>
                <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-[var(--ink-muted)]">
                  {s.detail}
                </p>
                {i === 0 && (
                  <span className="mt-3 inline-block rounded-full bg-[rgba(11,33,66,0.06)] px-3 py-1 text-xs font-semibold text-[var(--brand)]">
                    無料
                  </span>
                )}
                {i < steps.length - 1 && (
                  <span className="pointer-events-none absolute right-[-14px] top-1/2 hidden h-[2px] w-7 -translate-y-1/2 bg-[rgba(11,33,66,0.2)] lg:block" />
                )}
              </div>
            ))}
          </div>
        </Reveal>

        {/* FAQ */}
        <Reveal className="mt-10 rounded-3xl border border-[rgba(11,33,66,0.12)] bg-white p-10 shadow-sm">
          <p className="text-xs uppercase tracking-[0.28em] text-[var(--brand)]">
            FAQ
          </p>
          <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
            よくあるご質問
          </h2>
          <div className="mt-8 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl border border-[rgba(11,33,66,0.08)] bg-[var(--mist)]"
              >
                <summary className="cursor-pointer px-6 py-4 text-sm font-semibold text-[var(--ink)] [&::-webkit-details-marker]:hidden">
                  <span className="mr-2 text-[var(--brand)]">Q.</span>
                  {faq.q}
                </summary>
                <div className="border-t border-[rgba(11,33,66,0.06)] px-6 py-4">
                  <p className="text-sm text-[var(--ink-muted)]">
                    <span className="mr-2 font-semibold text-[var(--brand)]">
                      A.
                    </span>
                    {faq.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal className="mt-10 rounded-3xl border border-[rgba(11,33,66,0.12)] bg-[var(--ink)] p-8 text-white shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[rgba(255,255,255,0.7)]">
                Contact
              </p>
              <h2 className="mt-2 text-2xl font-semibold">
                まずは無料ヒアリングから
              </h2>
              <p className="mt-2 text-sm text-[rgba(255,255,255,0.75)]">
                「うちの業務にも使えるの？」その疑問に、具体的な数字でお答えします。
              </p>
            </div>
            <Link
              href="/contact"
              className="rounded-full bg-[var(--brand)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[rgba(27,141,138,0.25)] transition hover:bg-[var(--brand-dark)]"
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
