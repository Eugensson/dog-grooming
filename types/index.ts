export type Service = {
  subtitle: string;
  price: number;
  list: string[];
};

export type PriceListItem = {
  id: string;
  title: string;
  image: string;
  dogCategory: string;
  services: Service[];
};
