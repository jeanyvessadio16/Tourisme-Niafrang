import About from "@/components/ui/about";
import Contact from "@/components/ui/contact";
import Destinations from "@/components/ui/destinations";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";
import Services from "@/components/ui/services";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* navigation */}
      <header>
        <Navbar />
      </header>
      {/* hero section */}
      <main className="" id="hero">
        <div className="w-full min-h-screen max-sm:px-2 px-14 flex flex-col justify-center items-center text-center bg-black/80">
          <div className="text-zinc-50">
            <h1 className="text-3xl max-sm:text-xl md:text-6xl font-black">
              Découvrez Niafrang, un village touristique en Casamance
            </h1>
            <p className="py-4 text-lg max-sm:text-base font-semibold text-zinc-200">
              En visiter Niafrang vous vivez une expérience unique à votre goût
            </p>
            <button className="btn btn-active text-lg bg-blue-500 text-white font-semibold border-none">
              Réserver maintenant
            </button>
          </div>
        </div>
      </main>
      {/* destinations */}
      <div>
        <Destinations />
      </div>
      {/* services */}
      <div>
        <Services />
      </div>
      {/* à poropps de Niafrang */}
      <section>
        <About />
      </section>
      {/* contact */}
      <section>
        <Contact />
      </section>
      {/* pieds de page */}
      <div>
        <Footer />
      </div>
    </>
  );
}
