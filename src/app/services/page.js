import Card from '../components/Card';

export default function Services() {
  return (
    <div className="flex justify-center items-center ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        <Card
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuHnJDLOcdm_0b6N6kNj-1OvO9KhKYgqIy0w&s"
          title="JavaScript"
          description="loremloremloremloremloremloremloremlor"
          buttonText="Learn More"
          buttonLink=""
        />
        <Card
          image="https://upload.wikimedia.org/wikipedia/commons/a/ab/Official_CSS_Logo.svg"
          title="CSS"
          description="loremloremloremloremloremloremloremlor"
          buttonText="Learn More"
          buttonLink=""
        />
        <Card
          image="https://nouvil.net/wp-content/uploads/2021/08/maxresdefault.jpg"
          title="HTML"
          description="loremloremloremloremloremloremloremlor"
          buttonText="Learn More"
          buttonLink=""
        />
      </div>
    </div>
  );
}
