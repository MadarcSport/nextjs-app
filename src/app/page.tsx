import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <div className="mb-4 text-6xl">🕶️👓🥽</div>
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl bg-gradient-to-r from-violet-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
        Welcome to MyShop!
      </h1>
      <p className="mt-4 max-w-md text-violet-500 font-medium">
        Discover our awesome collection of cool eyewear. Style meets fun! 🌈
      </p>
      <div className="mt-8 flex gap-3">
        <Link href="/products" className={buttonVariants()}>
          🛒 Shop Now
        </Link>
        <Link
          href="/products"
          className={buttonVariants({ variant: "outline" })}
        >
          View All
        </Link>
      </div>
    </div>
  );
}
