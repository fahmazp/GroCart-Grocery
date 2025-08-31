import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const sampleProducts = [
  {
    id: 1,
    name: "Fresh Apple",
    price: 120,
    img: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=500", 
  },
  {
    id: 2,
    name: "Banana (1 Dozen)",
    price: 60,
    img: "https://images.unsplash.com/photo-1574226516831-e1dff420e43e?w=500",
  },
  {
    id: 3,
    name: "Tomato (1 Kg)",
    price: 40,
    img: "https://images.unsplash.com/photo-1604895559644-48e46d8d1db8?w=500",
  },
  {
    id: 4,
    name: "Potato (1 Kg)",
    price: 35,
    img: "https://images.unsplash.com/photo-1584270354949-1a18f85db61d?w=500",
  },
  {
    id: 5,
    name: "Mango",
    price: 150,
    img: "https://images.unsplash.com/photo-1622207727332-46f5dc11ad1f?w=500",
  },
];

export default function HomeProducts({ title, viewAllLink }) {
  return (
    <div className="px-4 py-8 relative">
      {/* Section Header */}
      <img src="/images/elements/strawberry.png" alt="svg-element" className="absolute w-10 top-10 left-46 opacity-80 animate-wiggle z-0 pointer-events-none"/>

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl md:text-2xl font-semibold text-green-800 dark:text-green-500">{title}</h2>
        <Link to={viewAllLink} className="text-lime-700 text-sm hover:underline">View All</Link>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {sampleProducts.slice(0, 5).map((product) => (
          <div
            key={product.id}
            className="bg-white dark:bg-zinc-900 rounded-xl shadow hover:shadow-md transition p-3 flex flex-col"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-32 object-cover rounded-lg"
            />
            <h3 className="mt-2 text-sm font-medium text-zinc-700 dark:text-zinc-200 truncate">
              {product.name}
            </h3>
            <p className="text-green-600 font-semibold text-sm">₹{product.price}</p>
            <Button size="sm" className="mt-auto w-full bg-green-500 hover:bg-green-600">
              Add to Cart
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
