import { forwardRef } from "react"
import { Apple, Carrot, Cookie, Ham } from "lucide-react"
import { Badge } from "../ui/badge"

const categories = [
  {
    label: "Fresh Fruits",
    items: "30+ items",
    icon: <Apple size={54} className="" fill="#84cc16" strokeWidth={0} />,
    bg: "bg-lime-100",
  },
  {
    label: "Vegetables",
    items: "25+ items",
    icon: <Carrot size={54} className="text-green-200" fill="#328f67" strokeWidth={1} />,
    bg: "bg-green-100",
  },
  {
    label: "Meat & Fish",
    items: "15+ items",
    icon: <Ham size={54} className="text-red-100" fill="#ef4444" strokeWidth={1}/>,
    bg: "bg-red-100",
  },
  {
    label: "Bakery",
    items: "20+ items",
    icon: <Cookie size={54} className="text-orange-500" />,
    bg: "bg-orange-100",
  },
]

const CategorySection = forwardRef((props, ref) => {

  return (
    <div>


    <section className="relative px-4 py-8 overflow-hidden" >
      <img src="/images/elements/IconDiscount.svg" alt="svg-element" className="absolute size-6 top-12 left-1/3 opacity-40 dark:opacity-15 dark:invert brightness-125 animate-floaty z-0 pointer-events-none"/>

      <h2 className="text-xl md:text-2xl text-center font-semibold mb-4 text-green-800 dark:text-green-500">Top Deals For You</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          
          <div className="rounded-2xl overflow-hidden drop-shadow-xl border-0 bg-violet-100 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:ring-2 hover:ring-green-300 group">       
            <div className="text-left px-4 py-4 space-y-1">
              <Badge className="px-3 py-1 bg-blue-500 text-white dark:bg-blue-600 text-sm rounded-full" variant="secondary">50% Off</Badge>
              <h3 className="text-lg font-medium text-gray-800">Fresh Ice creams</h3>
              <p className="text-sm text-gray-500">Get 50% off on selected ice-creams. Limited time offer!</p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden drop-shadow-md border-0 bg-violet-100 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:ring-2 hover:ring-green-300 group">       
            <div className="text-left px-4 py-4 space-y-1">
              <Badge className="px-3 py-1 bg-orange-500 text-white dark:bg-orange-600 text-sm rounded-full" variant="secondary">Buy 2 Get 1</Badge>
              <h3 className="text-lg font-medium text-gray-800">Dairy Products</h3>
              <p className="text-sm text-gray-500">Buy 2 dairy products and get 1 absolutely free!</p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden drop-shadow-md border-0 bg-violet-100 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:ring-2 hover:ring-green-300 group">       
            <div className="text-left px-4 py-4 space-y-1">
              <Badge className="px-3 py-1 bg-teal-400 text-white dark:bg-teal-600 text-sm rounded-full" variant="secondary">20% Off</Badge>
              <h3 className="text-lg font-medium text-gray-800">Refreshing Beverages</h3>
              <p className="text-sm text-gray-500">Enjoy 20% off beverages — stock up while the offer lasts!</p>
            </div>
          </div>          

        </div>
    </section>
    </div>
  )
})

export default CategorySection
