'use client'

import { Suspense } from 'react'
import Hero from '@/app/components/Hero'
import About from '@/app/components/About'
import Expertise from '@/app/components/Expertise'
import Experience from '@/app/components/Experience'
import TherapeuticAreas from '@/app/components/TherapeuticAreas'
import ToolsTechnologies from '@/app/components/ToolsTechnologies'
import Contact from '@/app/components/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Expertise />
      <Experience />
      <Suspense fallback={null}>
        <TherapeuticAreas />
      </Suspense>
      <ToolsTechnologies />
      <Contact />
    </>
  )
}
