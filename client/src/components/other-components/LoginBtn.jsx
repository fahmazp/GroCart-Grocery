import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

export default function BtnHeader() {
  const navigate = useNavigate()
  return (
    <Button className="rounded-full text-xs md:text-sm"  onClick={()=>navigate('/login')}>
      Sign in
    </Button>
  )
}
