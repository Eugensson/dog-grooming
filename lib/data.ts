import DogCateg1 from "@/public/assets/dogs/dog-categ-1.png";
import DogCateg2 from "@/public/assets/dogs/dog-categ-2.png";
import DogCateg3 from "@/public/assets/dogs/dog-categ-3.png";
import DogCateg4 from "@/public/assets/dogs/dog-categ-4.png";
import HeroSlideImage1 from "@/public/assets/dogs/dog-slide-1.png";
import HeroSlideImage2 from "@/public/assets/dogs/dog-slide-2.png";
import HeroSlideImage3 from "@/public/assets/dogs/dog-slide-3.png";

export const navList = [
  {
    label: "home",
    path: "home",
  },
  {
    label: "prices",
    path: "prices",
  },
  {
    label: "contact",
    path: "contact",
  },
  {
    label: "get an appointment",
    path: "appointment",
  },
];

export const heroSliderList = [
  {
    id: "1",
    title: "Caring for your beloved pet!",
    image: HeroSlideImage1,
    subtitle:
      "Professional care, walking and grooming. Your dog will enjoy top service with love and attention.",
    buttonText: "Get on appointment",
  },
  {
    id: "2",
    title: "Comfort and safety come first",
    image: HeroSlideImage2,
    subtitle:
      "Our experts provide calm, tailored care designed to meet the unique needs of your pet.",
    buttonText: "Get on appointment",
  },
  {
    id: "3",
    title: "Quality services for happy tails",
    image: HeroSlideImage3,
    subtitle:
      "We use trusted grooming methods and create a friendly space where every dog feels at home.",
    buttonText: "Get on appointment",
  },
];

export const priceList = [
  {
    id: "1",
    image: DogCateg1,
    title: "Pocket-Sized Stars",
    dogCategory: "1–9 kg",
    services: [
      {
        subtitle: "Essential Tail Care",
        price: 49,
        list: [
          "Hygienic dog bathing",
          "Hair trimming and brushing",
          "Nail clipping",
          "Ear cleaning",
          "Anti-parasite treatment",
        ],
      },
      {
        subtitle: "VIP Paws Package",
        price: 79,
        list: [
          "+ Essential Tail Care",
          "Dog SPA treatments",
          "De-shedding service",
          "Fur coloring",
          "Professional dog dental cleaning",
        ],
      },
      {
        subtitle: "Glamour Tail Deluxe",
        price: 109,
        list: [
          "+ VIP Paws Package",
          "Relaxing dog massage",
          "Personalized cosmetic selection",
          "Hydromassage bath",
          "Designer pet accessories",
          "Premium paw care",
        ],
      },
    ],
  },
  {
    id: "2",
    title: "Lively Companions",
    image: DogCateg2,
    dogCategory: "10–19 kg",
    services: [
      {
        subtitle: "Essential Tail Care",
        price: 69,
        list: [
          "Hygienic dog bathing",
          "Hair trimming and brushing",
          "Nail clipping",
          "Ear cleaning",
          "Anti-parasite treatment",
        ],
      },
      {
        subtitle: "VIP Paws Package",
        price: 109,
        list: [
          "+ Essential Tail Care",
          "Dog SPA treatments",
          "De-shedding service",
          "Fur coloring",
          "Professional dog dental cleaning",
        ],
      },
      {
        subtitle: "Glamour Tail Deluxe",
        price: 139,
        list: [
          "+ VIP Paws Package",
          "Relaxing dog massage",
          "Personalized cosmetic selection",
          "Hydromassage bath",
          "Designer pet accessories",
          "Premium paw care",
        ],
      },
    ],
  },
  {
    id: "3",
    title: "Mighty Paws",
    image: DogCateg3,
    dogCategory: "20–29 kg",
    services: [
      {
        subtitle: "Essential Tail Care",
        price: 89,
        list: [
          "Hygienic dog bathing",
          "Hair trimming and brushing",
          "Nail clipping",
          "Ear cleaning",
          "Anti-parasite treatment",
        ],
      },
      {
        subtitle: "VIP Paws Package",
        price: 139,
        list: [
          "+ Essential Tail Care",
          "Dog SPA treatments",
          "De-shedding service",
          "Fur coloring",
          "Professional dog dental cleaning",
        ],
      },
      {
        subtitle: "Glamour Tail Deluxe",
        price: 169,
        list: [
          "+ VIP Paws Package",
          "Relaxing dog massage",
          "Personalized cosmetic selection",
          "Hydromassage bath",
          "Designer pet accessories",
          "Premium paw care",
        ],
      },
    ],
  },
  {
    id: "4",
    title: "Yard Kings",
    image: DogCateg4,
    dogCategory: "30–39 kg",
    services: [
      {
        subtitle: "Essential Tail Care",
        price: 109,
        list: [
          "Hygienic dog bathing",
          "Hair trimming and brushing",
          "Nail clipping",
          "Ear cleaning",
          "Anti-parasite treatment",
        ],
      },
      {
        subtitle: "VIP Paws Package",
        price: 159,
        list: [
          "+ Essential Tail Care",
          "Dog SPA treatments",
          "De-shedding service",
          "Fur coloring",
          "Professional dog dental cleaning",
        ],
      },
      {
        subtitle: "Glamour Tail Deluxe",
        price: 199,
        list: [
          "+ VIP Paws Package",
          "Relaxing dog massage",
          "Personalized cosmetic selection",
          "Hydromassage bath",
          "Designer pet accessories",
          "Premium paw care",
        ],
      },
    ],
  },
];
