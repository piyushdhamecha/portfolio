'use client'

import { SectionName } from '@/lib/types'
import React, { createContext, useContext, useState } from 'react'

type ActiveSectionContextProps = { children: React.ReactNode }

type ActiveSectionContextType = {
  activeSection: SectionName
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>
  timeOfLastClick: number
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
}

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null)

export default function ActiveSectionContextProvider({ children }: ActiveSectionContextProps) {
  const [activeSection, setActiveSection] = useState<SectionName>('Home')
  const [timeOfLastClick, setTimeOfLastClick] = useState(0)

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >{children}
    </ActiveSectionContext.Provider>
  )
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext)

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    )
  }

  return context
}