import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-center p-5">
      <h1 className="text-5xl font-bold mb-4">Oops! Lost in Space?</h1>
      <p className="text-xl mb-6">
        The page you're looking for seems to have wandered off...
      </p>
      <Link
        href="/"
        className="bg-red-600 text-white px-6 py-3 rounded-full text-lg hover:bg-red-500 transition-colors"
      >
        Take Me Home
      </Link>
      <div className="mt-10 text-sm">
        <p>Or, you can explore the rest of my portfolio!</p>
      </div>
    </div>
  );
}
