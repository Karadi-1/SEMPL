import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Footer from "@/components/footer";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <Hero />
      <Footer />
    </main>
  );
}
