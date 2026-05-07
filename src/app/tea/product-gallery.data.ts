import type { ProductGalleryCardProps } from "./ProductGalleryCard";

export const mangoAndGingerTea: ProductGalleryCardProps = {
  title: "Mango & Ginger Tea",
  price: "$16.99",
  ratingLabel: "Smelly level: diamond diamond diamond diamond diamond",
  images: [
    {
      src: "/img/NewCanBack001.jpg",
      alt: "Mango & Ginger Tea main product image",
    },
    {
      src: "/img/citrus0101.jpg",
      alt: "Mango & Ginger Tea secondary citrus image",
    },
    {
      src: "/img/holdingCitrus1.jpg",
      alt: "Mango & Ginger Tea lifestyle image",
    },
  ],
  buttonLabel: "Add to cart",
};
