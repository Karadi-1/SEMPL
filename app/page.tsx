import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import EngineeringPhilosophy from "@/components/engineering-philosophy";
import CapabilitiesGrid from "@/components/capabilities-grid";
import ProductCategories from "@/components/product-categories";
import ConsultationSection from "@/components/consultation-section";
import Footer from "@/components/footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <EngineeringPhilosophy />
      <CapabilitiesGrid />
      <ProductCategories />
      <ConsultationSection />
      <Footer />
    </main>
  );
}
