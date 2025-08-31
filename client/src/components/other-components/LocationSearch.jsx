import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useEffect, useState } from "react"
import locationsData from "..//../data/locations.json"
import { MapPin } from "lucide-react"

export function SelectLocationScroll() {

  const [locations, setLocations] = useState([])
  useEffect(() => {
    setLocations(locationsData)
  }, [])

  return (
    <Select>
      <SelectTrigger className="w-full sm:w-auto max-w-full sm:max-w-[180px] truncate flex items-center justify-center pl-1 border border-green-300 bg-green-100/50">
        <MapPin fill="green" className="text-gray-300 dark:text-gray-100" strokeWidth={1.5}/>
        <SelectValue placeholder="Select location" />
      </SelectTrigger>
      <SelectContent className="max-h-[300px] overflow-y-auto">
        {locations.map((city, index) => (
          <SelectItem key={index} value={city.toLowerCase().replace(/\s/g, "-")}>
            {city}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
