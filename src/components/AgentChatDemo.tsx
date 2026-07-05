const messages = [
  {
    from: "user" as const,
    kind: "voice" as const,
    text: "音声メッセージ 0:42",
    caption: "「昨日の山田様の訪問、バイタル異常なし。服薬は…」",
  },
  {
    from: "agent" as const,
    kind: "text" as const,
    text: "訪問記録のドラフトを作成しました。ご確認ください。",
  },
  {
    from: "agent" as const,
    kind: "card" as const,
    title: "訪問記録（下書き）",
    lines: ["S: 体調変化の訴えなし", "O: BP 128/76 / SpO2 98%", "A: 服薬アドヒアランス良好", "P: 次回訪問時に残薬確認"],
  },
  {
    from: "user" as const,
    kind: "text" as const,
    text: "OK。今月の訪問件数もまとめておいて",
  },
  {
    from: "agent" as const,
    kind: "text" as const,
    text: "承知しました。月次レポートは明朝7時にお送りします。",
  },
];

export default function AgentChatDemo() {
  return (
    <div className="relative mx-auto w-full max-w-[340px]">
      <div className="rounded-[2.2rem] border border-[rgba(11,33,66,0.14)] bg-white p-3 shadow-[0_40px_80px_rgba(11,33,66,0.18)]">
        <div className="overflow-hidden rounded-[1.7rem] border border-[rgba(11,33,66,0.08)] bg-[var(--mist)]">
          <div className="flex items-center gap-3 border-b border-[rgba(11,33,66,0.08)] bg-white px-4 py-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--brand)] text-xs font-bold text-white">
              AI
            </span>
            <div>
              <p className="text-xs font-semibold text-[var(--ink)]">
                AIエージェント
              </p>
              <p className="flex items-center gap-1 text-[10px] text-[var(--ink-muted)]">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
                オンライン・24時間対応
              </p>
            </div>
          </div>
          <div className="space-y-3 px-3 py-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`chat-msg flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
                style={{ animationDelay: `${0.3 + i * 0.5}s` }}
              >
                {m.kind === "voice" ? (
                  <div className="max-w-[85%] rounded-2xl rounded-br-md bg-[var(--brand)] px-4 py-3 text-white">
                    <div className="flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-[10px]">
                        ▶
                      </span>
                      <span className="voice-wave flex items-end gap-[2px]">
                        <i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i />
                      </span>
                      <span className="text-[10px]">0:42</span>
                    </div>
                    <p className="mt-2 text-[11px] leading-relaxed text-white/85">
                      {m.caption}
                    </p>
                  </div>
                ) : m.kind === "card" ? (
                  <div className="max-w-[88%] overflow-hidden rounded-2xl rounded-bl-md border border-[rgba(11,33,66,0.1)] bg-white">
                    <p className="border-b border-[rgba(11,33,66,0.08)] bg-[rgba(27,141,138,0.08)] px-4 py-2 text-[11px] font-semibold text-[var(--brand-dark)]">
                      {m.title}
                    </p>
                    <ul className="space-y-1 px-4 py-3">
                      {m.lines?.map((line) => (
                        <li
                          key={line}
                          className="text-[11px] leading-relaxed text-[var(--ink-muted)]"
                        >
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-[12px] leading-relaxed ${
                      m.from === "user"
                        ? "rounded-br-md bg-[var(--brand)] text-white"
                        : "rounded-bl-md border border-[rgba(11,33,66,0.1)] bg-white text-[var(--ink)]"
                    }`}
                  >
                    {m.text}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="mt-3 text-center text-[10px] text-[var(--ink-muted)]">
        ※ 画面はイメージです。実際の応答内容は業務設計により異なります。
      </p>
    </div>
  );
}
