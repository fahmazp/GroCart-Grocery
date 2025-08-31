import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-black px-4">
      <div className="max-w-md w-full text-center bg-green-100/60 dark:bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-lg border border-gray-300/30 dark:border-white/20">
        <h1 className="text-6xl font-extrabold text-red-600 dark:text-red-400">404</h1>
        <h2 className="mt-4 text-2xl font-semibold text-gray-800 dark:text-white">
          Page Not Found
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>

        <Link
          to="/"
          className="mt-6 inline-block px-6 py-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-md transition-colors duration-200"
        >
        Back to Home
        </Link>
      </div>
    </div>
  );
}
