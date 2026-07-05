// お知らせデータ（新しいものを上に追加してください）
// このファイルに1件追加するだけで、トップページと /news の両方に反映されます。
// category は「お知らせ」「採用」「医療IT」「在宅医療」のいずれか。
// image は /public/legacy 内のファイルを指定（省略時は news-hero.jpg）。

export type NewsItem = {
  date: string; // 例: "2026/2/26"
  title: string;
  detail: string;
  category: "お知らせ" | "採用" | "医療IT" | "在宅医療";
  image?: string;
};

export const newsItems: NewsItem[] = [
  {
    date: "2026/2/26",
    title: "AIエージェント導入支援サービスを開始",
    detail:
      "医療・介護・中小企業向けに、事業所内で完結するAIエージェントの導入支援を開始しました。ご案内ページを公開しています。",
    category: "医療IT",
    image: "/legacy/news-it.jpg",
  },
  {
    date: "2026/1/18",
    title: "SECURITY ACTION「一つ星」を宣言",
    detail:
      "IPA（独立行政法人情報処理推進機構）が推進するSECURITY ACTION制度において、「一つ星」を宣言しました。",
    category: "お知らせ",
    image: "/legacy/news-hero.jpg",
  },
  {
    date: "2025/12/29",
    title: "医療IT支援の対応領域を拡充",
    detail:
      "医療機関・薬局向けのIT支援について、対応領域と今後のロードマップを更新しました。",
    category: "医療IT",
    image: "/legacy/news-it.jpg",
  },
  {
    date: "2025/12/27",
    title: "電子カルテ製品「CoCoKarte」のご紹介ページを公開",
    detail:
      "自社開発プロダクト CoCoKarte の製品紹介ページとデモ環境のご案内を公開しました。",
    category: "医療IT",
    image: "/legacy/news-it.jpg",
  },
  {
    date: "2024/8/1",
    title: "ホームページ公開",
    detail: "コーポレートサイトを公開しました。",
    category: "お知らせ",
    image: "/legacy/news-hero.jpg",
  },
  {
    date: "2024/8/1",
    title: "採用情報公開",
    detail: "採用情報の掲載を開始しました。",
    category: "採用",
    image: "/legacy/news-recruit.jpg",
  },
  {
    date: "2024/8/1",
    title: "店舗情報公開",
    detail: "ココ薬局 千葉中央店の情報を掲載しました。",
    category: "在宅医療",
    image: "/legacy/news-homecare.jpg",
  },
];
