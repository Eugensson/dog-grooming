import { HeroSlider } from "@/components/hero-slider";

const Hero = () => {
  return (
    <section className="relative pt-24 pb-12 lg:px-12.5 min-h-187 after:lg:size-185 flex items-center overflow-hidden after:lg:bg-orange-tertiary after:lg:absolute after:lg:-top-24 after:lg:-right-28 after:lg:rounded-full">
      <HeroSlider />
    </section>
  );
};

export default Hero;
