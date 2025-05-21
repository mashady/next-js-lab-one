import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-semibold">
            <Link href="/">
            mashady nextJS
            </Link>
          </div>

          <div className="hidden md:flex space-x-4">
            <Link href="/">
              Home
            </Link>
            <Link href="/about">
              About
            </Link>
            <Link href="/services">
              Services
            </Link>
            <Link href="/contact">
              Contact
            </Link>
            <Link href="/weather">
              Weather
            </Link>
          </div>

          <div className="md:hidden">
            <button className="text-white">
              menu
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
