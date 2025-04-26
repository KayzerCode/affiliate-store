import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Affiliate Products Store</title>
      </Head>
      <div className="min-h-screen bg-gray-50 p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>
        <div className="max-w-3xl mx-auto text-gray-700 leading-relaxed space-y-4">
          <p>
            At Affiliate Products Store, we respect your privacy and are committed to protecting it through this Privacy Policy.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Information We Collect</h2>
          <p>
            We may collect information automatically when you visit our website, such as your IP address, browser type, and pages visited. We do not collect personally identifiable information unless you voluntarily provide it.
          </p>

          <h2 className="text-2xl font-semibold mt-6">How We Use Your Information</h2>
          <p>
            We use collected information to improve our website and deliver better services. We may also use it to analyze website traffic and trends.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Affiliate Links</h2>
          <p>
            Our website contains affiliate links. When you click on these links and make a purchase, we may earn a commission. This does not affect the price you pay.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Third-Party Services</h2>
          <p>
            We may use third-party services like analytics tools that collect, monitor, and analyze information to improve our service.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this page.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us.
          </p>
        </div>
      </div>
    </>
  );
}
