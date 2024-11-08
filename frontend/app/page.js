import Amigurumi from "@/components/Amigurumi";
import Hero from "@/components/Hero";
import Mintak from "@/components/Mintak";
import Welcome from "@/components/Welcome";

export default function Home() {
  return (
    <div>
      <Hero />
      <Welcome />
      <Amigurumi />
      <Mintak />
    </div>
  );
}
