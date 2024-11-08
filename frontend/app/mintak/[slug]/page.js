import { notFound } from "next/navigation";

export default async function MintaPage({ params }) {
  const { slug } = params;

  const res = await fetch(
    `http://localhost:1337/api/mintaks?filters[slug][$eq]=${slug}&populate=*`,
    {
      next: { revalidate: 10 }, // ISR (Incremental Static Regeneration)
    }
  );

  const data = await res.json();

  if (!data.data.length) {
    notFound(); // Visszaadja a 404 oldalt, ha nincs adat
  }

  const pattern = data.data[0];

  return (
    <div className="relative bg-white py-12 max-w-screen-xl mx-auto font-mono mt-32">
      <h1 className="text-3xl font-bold mb-4">{pattern.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: pattern.bovebben }} />
    </div>
  );
}

export async function generateStaticParams() {
  const res = await fetch("http://localhost:1337/api/mintaks");
  const patterns = await res.json();

  return patterns.data.map((pattern) => ({
    slug: pattern.slug,
  }));
}
