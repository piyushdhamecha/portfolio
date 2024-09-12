import { useActiveSectionContext } from "@/context/active-section"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { SectionName } from "./types"

export function useSectionInView(sectionName: SectionName, threshold = 0.5) {
  const { ref, inView } = useInView({ threshold })
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext()

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName)
    }
  }, [sectionName, inView, setActiveSection, timeOfLastClick])

  return {
    ref
  }
}