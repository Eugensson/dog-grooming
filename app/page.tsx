import Hero from "@/components/hero";
import { Header } from "@/components/header";
import { Prices } from "@/components/prices";
import { Contact } from "@/components/contact";
import { Appointment } from "@/components/appointment";
import { Footer } from "@/components/footer";

const Home = () => {
  return (
    <main className="relative w-full max-w-360 mx-auto bg-orange-quaternary">
      <Header />
      <Hero />
      <Appointment />
      <Prices />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
