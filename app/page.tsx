import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import FeaturedProjects from "@/components/projects/FeaturedProjects";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/layout/Footer";
import Certificates from "@/components/certificates/Certificates";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <FeaturedProjects />
      <Certificates />
      <Contact />
      <Footer />
    </>
  );
}