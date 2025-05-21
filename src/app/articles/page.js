import Link from "next/link";
const articles = [
  {
    slug: "learn-nextjs",
    title: "Learn Next.js",
    content: "This is a detailed guide on learning Next.js."
  },
  {
    slug: "master-react",
    title: "Master React",
    content: "This guide helps you master React from basics to advanced."
  },
  {
    slug: "web-development",
    title: "Web Development Basics",
    content: "An introduction to web development concepts and best practices."
  },
];
export default function BlogList() {
  return (
    <div>
      <h1>Blog Articles</h1>
      <ul>
        {articles.map((a) => (
          <li key={a.slug}>
            <Link href={`/articles/${a.slug}`}>
              {a.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
