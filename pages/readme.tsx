import { useState } from "react";
import { en } from "@/locales/readme.en";

const locales = {
  en,
};

export default function ReadmePage() {
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
        <h2 className="text-2xl font-semibold mb-2">{t.featuresTitle}</h2>
        <ul className="list-disc list-inside space-y-1">
          {t.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-8 text-center">{t.plansTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {t.plans.map((plan) => (
            <div
              key={plan.name}
              className="border border-gray-200 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold mb-5">
                {plan.name}
              </h3>
              <p className="text-red-500 text-2xl mb-4">{plan.desc}</p>
              <div className="mb-6">
                <span className="text-3xl font-bold">
                  {plan.name.includes('💼') && '€49'}
                  {plan.name.includes('🚀') && '€99'}
                  {plan.name.includes('🧠') && '€199'}
                </span>
              </div>
              <ul className="space-y-3 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition">
                Sign Up!
              </button>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">{t.contactTitle}</h2>
        <p>
          📬 Telegram: <strong><a href="https://t.me/chopkritters">@chopkritters</a></strong>
        </p>
        <p>
          🌐 Demo: <a href="https://affiliate-store-iota.vercel.app/" className="text-blue-600 underline">Demo of Affiliate Shop</a>
        </p>
      </section>
    </div>
  );
}