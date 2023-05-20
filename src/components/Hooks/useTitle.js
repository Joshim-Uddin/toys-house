import { useEffect } from "react"

const useTitle =title=>{
  useEffect(()=>{
    document.title = `Toys House | ${title}`
  }, [title])
}

export default useTitle;