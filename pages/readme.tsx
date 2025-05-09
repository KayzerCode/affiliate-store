import { useState } from "react";
import { en } from "@/locales/readme.en";
// Future: import { fi } from "@/locales/readme.fi"; etc.

const locales = {
  en,
  // fi,
  // de,
};

export default function ReadmePage() {
  const [lang, setLang] = useState<keyof typeof locales>("en");
  const t = locales[lang];

  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <div className="flex justify-end mb-4">
        <button onClick={() => setLang("en")}>🇬🇧</button>
        {/* <button onClick={() => setLang("fi")}>🇫🇮</button> */}
      </div>

      <h1 className="text-3xl font-bold mb-4">{t.title}</h1>
      <p className="mb-6">{t.subtitle}</p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">{t.featuresTitle}</h2>
        <ul className="list-disc list-inside space-y-1">
          {t.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">{t.plansTitle}</h2>
        {t.plans.map((plan) => (
          <div key={plan.name} className="border rounded-xl p-4 mb-4">
            <h3 className="text-xl font-bold">{plan.name}</h3>
            <p className="italic mb-2">{plan.desc}</p>
            <ul className="list-disc list-inside">
              {plan.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

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
