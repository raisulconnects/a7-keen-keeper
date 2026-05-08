import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Page Not Found
        </h2>
        <Link
          href="/"
          className="inline-block bg-[#295943] text-white px-6 py-4 my-5 rounded-lg hover:bg-[#1e3029] transition cursor-pointer"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
