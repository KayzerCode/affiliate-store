import Head from "next/head";

export default function AffiliateDisclaimer() {
 return (
  <>
   <Head>
    <title>Affiliate Disclaimer - Affiliate Products Store</title>
   </Head>
   <div className="min-h-screen bg-gray-50 p-6">
    <h1 className="text-3xl font-bold mb-6 text-center">Affiliate Disclaimer</h1>
    <div className="max-w-3xl mx-auto text-gray-700 leading-relaxed space-y-4">
     <p>
      Some of the links on this website are affiliate links. This means that if you click on the link and purchase an item, we may receive an affiliate commission at no extra cost to you.
     </p>
     <p>
      We only recommend products that we believe will add value to our visitors. All opinions are our own.
     </p>
     <p>
      Affiliate Products Store is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.
     </p>
    </div>
   </div>
  </>
 );
}
