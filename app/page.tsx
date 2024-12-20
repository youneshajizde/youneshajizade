import About from "@/components/About";
import Experties from "@/components/Experties";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <section>
      <Navbar />
      <section className="w-[100%] md:w-[70%] lg:w-[55%] xl:w-[40%] mx-auto px-5 mt-20 space-y-14 pb-10 ">
        <Header />
        <Projects />
        <Experties />
        <Footer />
      </section>
    </section>
  );
}
