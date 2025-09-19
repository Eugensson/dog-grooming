import Image from "next/image";

import dogImg from "@/public/assets/dogs/dog-contact.png";

export const Contact = () => {
  return (
    <section id="contact" className="pt-6 bg-yellow-secondary">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-around">
          <div className="order-1 lg:-order-1 lg:mt-16">
            <Image src={dogImg} alt="Lying dog image" className="-mb-3" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-orange font-semibold mb-4">Contact Us</p>
            <p className="mb-4 text-4xl font-extrabold text-blue">
              +49 123 456 7890
            </p>
            <p className="mb-8 text-blue">Opening Hours: Mon-Sun: 10am-6pm</p>
            <button type="button" className="btn">
              Get an appointment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
