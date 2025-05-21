export default function ArticleSlug({params}) {
  return (
    <div className="">
      <h1 className="text-black text-2xl uppercase">hello world</h1>
     {params.slug} article
    </div>
  );
}


export const metadata = {
  title: "Article",
  description: "This is the article page",
  };