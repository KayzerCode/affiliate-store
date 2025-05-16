import { useState } from "react";
import { en } from "@/locales/partners.en";

const locales = {
  en
};

export default function PartnersPage() {
  const [lang, setLang] = useState<keyof typeof locales>("en");
  const t = locales[lang];

  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <div className="flex justify-end mb-4">
        <button onClick={() => setLang("en")}>🇬🇧</button>
      </div>

      <h1 className="text-3xl font-bold mb-4">{t.title}</h1>
      <p className="mb-6">{t.subtitle}</p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">{t.teamTitle}</h2>
        <ul className="list-disc list-inside space-y-1">
          {t.team.map((role) => (
            <li key={role}>{role}</li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">{t.mvpTitle}</h2>
        <p>{t.mvpText}</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">{t.contactTitle}</h2>
        <p>
          📬 Telegram: <strong>@yourhandle</strong>
        </p>
        <p>
          🌐 Demo: <a href="https://affistart.vercel.app" className="text-blue-600 underline">affistart.vercel.app</a>
        </p>
      </section>
    </div>
  );
}
