import { useState } from "react"

export default function About() {

  const [count,setCount] = useState(0);

  return (
    <button className="bg-red-300 p-2 rounded mx-auto ml-10" onClick={() => setCount(count-1)}> 
    {count}
    </button>
  )
}