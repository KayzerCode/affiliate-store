import Link from "next/link";

const categories = [
  "vlogging-camera",
  "ring-light",
  "microphone-youtube",
  "tripod-phone",
  "monopod-camera",
  "camera-carry-bag",
  "usb-c-charger-camera",
  "vlogging-kit",
  "cold-shoe-mount",
  "portable-video-light",
];

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">All Categories</h1>
      <div className="flex flex-wrap gap-4 justify-center">
        {categories.map((slug) => (
          <Link
            key={slug}
            href={`/category/${slug}`}
            className="bg-blue-100 text-blue-800 px-4 py-2 rounded-xl hover:bg-blue-200"
          >
            {slug.replace(/-/g, " ")}
          </Link>
        ))}
      </div>
    </div>
  );
}
