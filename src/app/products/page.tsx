import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const cardAccents = [
  "border-t-4 border-pink-400",
  "border-t-4 border-violet-400",
  "border-t-4 border-orange-400",
  "border-t-4 border-emerald-400",
  "border-t-4 border-sky-400",
  "border-t-4 border-yellow-400",
];

const badgeColors = [
  "bg-pink-100 text-pink-700 hover:bg-pink-200",
  "bg-violet-100 text-violet-700 hover:bg-violet-200",
  "bg-orange-100 text-orange-700 hover:bg-orange-200",
  "bg-emerald-100 text-emerald-700 hover:bg-emerald-200",
  "bg-sky-100 text-sky-700 hover:bg-sky-200",
  "bg-yellow-100 text-yellow-700 hover:bg-yellow-200",
];

const glasses = [
  {
    id: 1,
    name: "Classic Aviator",
    brand: "RayBan",
    price: "$149",
    color: "Gold/Green",
  },
  { id: 2, name: "Wayfarer", brand: "RayBan", price: "$129", color: "Black" },
  {
    id: 3,
    name: "Round Metal",
    brand: "Persol",
    price: "$199",
    color: "Silver/Blue",
  },
  { id: 4, name: "Cat Eye", brand: "Oakley", price: "$169", color: "Tortoise" },
  {
    id: 5,
    name: "Clubmaster",
    brand: "RayBan",
    price: "$159",
    color: "Brown/Gold",
  },
  {
    id: 6,
    name: "Sport Wrap",
    brand: "Oakley",
    price: "$189",
    color: "Matte Black",
  },
];

export default function ProductsPage() {
  return (
    <div className="w-full">
      <h1 className="mb-6 text-2xl font-extrabold tracking-tight bg-gradient-to-r from-violet-600 to-pink-500 bg-clip-text text-transparent">
        🕶️ Glasses
      </h1>
      <ul className="grid gap-3 sm:grid-cols-2">
        {glasses.map((item, i) => (
          <li key={item.id}>
            <Card className={`p-4 ${cardAccents[i % cardAccents.length]}`}>
              <CardHeader className="p-0 mb-3">
                <CardTitle className="text-violet-700">{item.name}</CardTitle>
                <CardDescription className="text-pink-500 font-medium">
                  {item.brand} &mdash; {item.color}
                </CardDescription>
                <CardAction>
                  <Badge className={badgeColors[i % badgeColors.length]}>
                    {item.price}
                  </Badge>
                </CardAction>
              </CardHeader>
              <CardContent className="p-0 text-xs text-violet-400 font-medium">
                🚀 Free shipping on orders over $100
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
}
