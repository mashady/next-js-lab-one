import Link from "next/link";
export default function Home() {
  return (
    <div >
      <h1 className="text-black text-2xl uppercase">hello world</h1>
      <p>welcome to the home page</p>
      <button className="bg-blue-500 text-white rounded p-2 mt-2">
        <Link href="/services">
          Go To Services
        </Link>
      </button>
    </div>
  );
}
