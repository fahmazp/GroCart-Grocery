import React, { forwardRef } from 'react'
import { 
    Apple, Carrot, Milk, Cookie, Croissant, Ham, Home, Coffee, Grid3X3,
    ChevronLeft,
    ChevronRight,
    IceCream,
    IceCream2
} from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react'
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 1,
    name: "Fruits",
    icon: Apple,
    image: "/images/home/fruits.jpg",
    path: "/product-catalog-category-browse?category=fruits",
    color: "bg-red-50 border-red-200",
    iconColor: "text-red-500"
  },
  {
    id: 2,
    name: "Vegetables",
    icon: Carrot,
    image: "/images/home/vegs.jpg",
    path: "/product-catalog-category-browse?category=vegetables",
    color: "bg-green-50 border-green-200",
    iconColor: "text-green-500"
  },
  {
    id: 3,
    name: "Dairy",
    icon: Milk,
    image: "/images/home/milk.jpg",
    path: "/product-catalog-category-browse?category=dairy",
    color: "bg-blue-50 border-blue-200",
    iconColor: "text-blue-500"
  },
  {
    id: 4,
    name: "Snacks",
    icon: Cookie,
    image: "/images/home/snacks.jpg",
    path: "/product-catalog-category-browse?category=snacks",
    color: "bg-orange-50 border-orange-200",
    iconColor: "text-orange-500"
  },
  {
    id: 5,
    name: "Beverages",
    icon: Coffee,
    image: "/images/home/beve.jpg",
    path: "/product-catalog-category-browse?category=beverages",
    color: "bg-purple-50 border-purple-200",
    iconColor: "text-purple-500"
  },
  {
    id: 6,
    name: "Bakery",
    icon: Croissant,
    image: "/images/home/bakery.jpg",
    path: "/product-catalog-category-browse?category=bakery",
    color: "bg-yellow-50 border-amber-200",
    iconColor: "text-yellow-500"
  },
  {
    id: 7,
    name: "Meat & Fish",
    icon: Ham,
    image: "/images/home/meatandfish.jpg",
    path: "/product-catalog-category-browse?category=meat-fish",
    color: "bg-pink-50 border-pink-200",
    iconColor: "text-pink-500"
  },
  {
    id: 8,
    name: "Frozen",
    icon: IceCream2,
    image: "/images/home/frozen.jpg",
    path: "/product-catalog-category-browse?category=frozen",
    color: "bg-sky-50 border-sky-200",
    iconColor: "text-sky-500"
  },  
  {
    id: 9,
    name: "Household",
    icon: Home,
    image: "/images/home/homeneeds.jpeg",
    path: "/product-catalog-category-browse?category=household",
    color: "bg-gray-50 border-gray-200",
    iconColor: "text-gray-500"
  }
]

const CategoryCarousel = forwardRef((props, ref) => {

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "start" });
  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <section ref={ref} className="relative my-14">
      <div className="max-w-7xl mx-auto px-4 lg:px-5">

        {/* Section Header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-foreground">
              Shop by Category
            </h2>
            <p className="text-muted-foreground">
              Find everything you need in our organized categories
            </p>
          </div>
          <div className="hidden sm:flex gap-2">
            <Button className="w-7 h-7 rounded-full" variant="outline"  onClick={scrollPrev}>
              <ChevronLeft />
            </Button>
            <Button className="w-7 h-7 rounded-full" variant="outline"  onClick={scrollNext}>
              <ChevronRight />
            </Button>
          </div>

        </div>

      <img src="/images/elements/carrot.svg" alt="svg-element" className="absolute size-10 -top-12 left-3 opacity-50 dark:opacity-40 brightness-125 animate-wiggle z-0 pointer-events-none"/>
      <img src="/images/elements/orange.png" alt="svg-element" className="absolute w-12 bottom-4 right-12 opacity-70 z-0 animate-floaty pointer-events-none"/>

        <div className="overflow-hidden py-2" ref={emblaRef}>
          <div className="flex gap-2 md:gap-4 ">
            {categories.map((category) => (
              <div
                key={category.id}
                className="flex-[0_0_25%] md:flex-[0_0_16.666%] xl:flex-[0_0_12.5%]"
              >
                <Link to={category.path} className="block group">
                <div className={`${category.color} rounded-2xl p-5 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border sm:border-2`}>
                  <div className="relative mb-4 w-[82px] h-[82px] mx-auto">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                    <div className={`absolute -bottom-2 -right-2 w-9 h-9 ${category.color} rounded-full flex items-center justify-center border-2 border-white`}>
                      <category.icon size={16} className={category.iconColor} />
                    </div>
                  </div>
                  <h3 className="font-semibold text-yellow-950 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-3 md:mt-8">
          <Link to="/product-catalog-category-browse">
          
            <Button
              variant="outline"
              className=""
            >
              View All Categories
              <Grid3X3 className="size-3.5"/>
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
})

export default CategoryCarousel;
