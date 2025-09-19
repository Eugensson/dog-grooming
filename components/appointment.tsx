import Image from "next/image";

import dogImage from "@/public/assets/dogs/dog-appointment.png";

export const Appointment = () => {
  return (
    <section
      id="appointment"
      className="relative min-h-146 py-12 lg:pb-12 lg:mt-32 bg-yellow-secondary"
    >
      <div className="container">
        <div className="hidden w-full max-w-197.5 mx-auto lg:flex justify-center">
          <Image src={dogImage} alt="Lying dog image" />
        </div>
        <form className="px-6 py-8 lg:-mt-5 h-125 w-full max-w-197.5 mx-auto flex flex-col justify-start items-center gap-4 rounded-4xl text-center bg-yellow">
          <h2 className="h2 my-4">Get an appointment</h2>
          <input
            type="text"
            name="name"
            id="name"
            className="input-control"
            placeholder="Full name"
          />
          <input
            type="email"
            name="email"
            id="email"
            className="input-control"
            placeholder="Email address"
          />
          <input
            type="text"
            name="phone"
            id="phone"
            className="input-control"
            placeholder="Phone number"
          />
          <button type="submit" className="btn w-full max-w-128.5">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};
