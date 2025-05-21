
export default function Card({ image, title, description, buttonText, buttonLink }) {
  return (
    <div className="max-w-sm rounded-lg border border-gray-200 shadow-lg overflow-hidden">
      <img className="w-full h-48 object-cover" src={image} alt={title} width={300} height={150} />

      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="mt-2 text-gray-600">{description}</p>
        <a
          href={buttonLink}
          className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
}
