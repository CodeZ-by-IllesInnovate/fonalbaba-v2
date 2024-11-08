"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Mintak() {
  const [patterns, setPatterns] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPatterns = async () => {
      try {
        const res = await fetch(
          "http://localhost:1337/api/mintaks?sort=createdAt:desc&pagination[limit]=3&populate=*"
        );
        const data = await res.json();
        const formattedPatterns = data.data.map((pattern) => ({
          id: pattern.id,
          title: pattern.title,
          slug: pattern.slug,
          description: pattern.description,
        }));
        setPatterns(formattedPatterns);
        setLoading(false);
      } catch (error) {
        console.error("Hiba a minták lekérése során:", error);
        setLoading(false);
      }
    };

    fetchPatterns();
  }, []);

  if (loading) {
    return <div>Betöltés...</div>;
  }

  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Legújabb minták</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {patterns.map((pattern) => (
            <div
              key={pattern.id}
              className="border p-4 rounded shadow hover:shadow-lg transition-shadow"
            >
              {/* Kép megjelenítése, ha elérhető */}
              {pattern.image?.[0]?.formats?.thumbnail?.url && (
                <img
                  src="http://localhost:1337/uploads/thumbnail_2_20241007_210335_0001_b638319c34.png"
                  alt={pattern.title}
                  className="w-full h-48 object-cover rounded mb-4"
                />
              )}

              <h3 className="text-xl font-semibold mb-2">{pattern.title}</h3>
              <p className="text-gray-600 mb-4">{pattern.description}</p>
              <Link
                className="text-blue-500 hover:underline"
                href={`/mintak/${pattern.slug}`}
              >
                Részletek
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
