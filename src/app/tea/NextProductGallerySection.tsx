import ProductGalleryCard from "./ProductGalleryCard";
import { mangoAndGingerTea } from "./product-gallery.data";

export default function NextProductGallerySection() {
  return (
    <section className="bg-[radial-gradient(circle_at_top,#fff4df,transparent_45%),linear-gradient(180deg,#f8f1e6_0%,#f4ede2_100%)] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#9f6a35]">
            Featured product
          </p>
          <h2 className="mt-2 text-4xl font-semibold tracking-tight text-stone-900">
            Reusable Next.js product gallery card
          </h2>
          <p className="mt-3 text-base text-stone-600">
            This wrapper is ready for a Next.js app. Put your images in the
            public folder and import this section into an app route or page
            component.
          </p>
        </div>

        <ProductGalleryCard
          {...mangoAndGingerTea}
          onAddToCart={() => {
            console.log("Add to cart clicked");
          }}
        />
      </div>
    </section>
  );
}
