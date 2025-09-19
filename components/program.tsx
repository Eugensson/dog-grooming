import Link from "next/link";
import Image from "next/image";

export const Program = () => {
  return (
    <section>
      <div className="flex items-baseline justify-end lg:gap-x-2.5">
        <Image
          src="/assets/phone.svg"
          width={28}
          height={28}
          alt="Phone icon"
          className="object-cover object-center aspect-square size-7 lg:size-8.5"
        />
        <Link
          href="tel:+491234567890"
          className="lg:text-2xl text-blue font-bold hover:text-blue/80 transition-colors duration-300"
          rel="noreferrer noopener"
          aria-label="Call to phone"
        >
          +49 123 456 7890
        </Link>
      </div>
      <div className="text-sm">
        <p className="text-right lg:hidden">Mon-Sun: 10am-6pm</p>
        <p className="hidden lg:flex justify-end text-base font-medium">
          Opening Hours: Mon-Sun: 10am-6pm
        </p>
      </div>
    </section>
  );
};
