"use client";

import { useState, type FormEvent } from "react";

type ContactCategory = "pharmacy" | "it";

type ContactFormProps = {
  category: ContactCategory;
  title: string;
  description: string;
};

type FormState = "idle" | "loading" | "success" | "error";

const inputBase =
  "w-full rounded-md border border-[rgba(11,33,66,0.18)] bg-white px-4 py-3 text-sm text-[var(--ink)] shadow-sm outline-none transition focus:border-[var(--brand)] focus:ring-2 focus:ring-[rgba(27,141,138,0.2)]";

const categoryLabel: Record<ContactCategory, string> = {
  pharmacy: "薬局について",
  it: "医療IT事業について",
};

export default function ContactForm({
  category,
  title,
  description,
}: ContactFormProps) {
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [startedAt] = useState(() => Date.now().toString());
  const successMessage =
    category === "it"
      ? "送信ありがとうございました。担当より折り返しご連絡いたします。デモ環境のURLとログイン情報は個別にご案内します。"
      : "送信ありがとうございました。担当より折り返しご連絡いたします。";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          category,
          ...payload,
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error ?? "送信に失敗しました。");
      }

      setState("success");
      form.reset();
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "送信に失敗しました。";
      setErrorMessage(message);
      setState("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex h-full flex-col gap-4 rounded-2xl border border-[rgba(11,33,66,0.12)] bg-white p-6 shadow-[0_20px_60px_rgba(11,33,66,0.08)]"
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand)]">
          {categoryLabel[category]}
        </p>
        <h3 className="mt-2 text-2xl font-semibold text-[var(--ink)]">
          {title}
        </h3>
        <p className="mt-2 text-sm text-[var(--ink-muted)]">{description}</p>
      </div>

      <div className="grid gap-4">
        <div className="hidden">
          <label className="grid gap-2 text-sm font-medium text-[var(--ink)]">
            会社Webサイト
            <input name="website" tabIndex={-1} autoComplete="off" />
          </label>
        </div>
        <input type="hidden" name="startedAt" value={startedAt} />
        <label className="grid gap-2 text-sm font-medium text-[var(--ink)]">
          お名前
          <input name="name" required className={inputBase} />
        </label>

        <label className="grid gap-2 text-sm font-medium text-[var(--ink)]">
          連絡先（電話番号またはメール）
          <input name="contact" required className={inputBase} />
        </label>

        <label className="grid gap-2 text-sm font-medium text-[var(--ink)]">
          法人・組織名（任意）
          <input name="organization" className={inputBase} />
        </label>

        <label className="grid gap-2 text-sm font-medium text-[var(--ink)]">
          ご希望の対応方法
          <select name="preferred" className={inputBase}>
            <option value="電話">電話</option>
            <option value="メール">メール</option>
            <option value="オンライン面談">オンライン面談</option>
            <option value="対面面談">対面面談</option>
          </select>
        </label>

        <label className="grid gap-2 text-sm font-medium text-[var(--ink)]">
          お問い合わせ内容
          <textarea
            name="message"
            required
            rows={5}
            className={inputBase}
          />
        </label>
      </div>

      <div className="mt-auto flex flex-col gap-3">
        <button
          type="submit"
          disabled={state === "loading"}
          className="inline-flex items-center justify-center rounded-full bg-[var(--brand)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[rgba(27,141,138,0.25)] transition hover:bg-[var(--brand-dark)] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {state === "loading" ? "送信中..." : "送信する"}
        </button>

        {state === "success" && (
          <p className="text-sm text-[var(--brand-dark)]">
            {successMessage}
          </p>
        )}

        {state === "error" && (
          <p className="text-sm text-red-600">
            {errorMessage || "送信に失敗しました。"}
          </p>
        )}
      </div>
    </form>
  );
}
