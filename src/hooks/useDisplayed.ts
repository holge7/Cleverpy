import React, {useState, useEffect} from "react";

export default function useDisplayed(ref:React.RefObject<HTMLDivElement>){
    const [isIntersecting, setIntersecting] = useState(false)

    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting)
    )
  
    useEffect(() => {
        if (ref.current) {
            observer.observe(ref.current)
        }
    }, [])
  
    return isIntersecting
}