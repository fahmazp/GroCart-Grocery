export default function ProductsCard({ item }) {
  return (
    <li key={item?.title} className="text-center p-4 hover:shadow-lg transition-all rounded-sm border border-green-300 ">
      <img
        alt={item?.title || "Product"}
        src={item?.image}
        className="mx-auto size-40 rounded outline-1 -outline-offset-1 outline-black/5"
      />
      <h3 className="mt-4 text-base font-semibold tracking-tight text-gray-900 dark:text-green-200">
        {item?.title}
      </h3>
      <p className="text-sm text-green-500 mt-1 font-semibold tracking-wide">
          {new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0
          }).format(item?.price)}
      </p>

    </li>
  )
}
