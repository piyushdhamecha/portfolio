'use client'

import React from 'react'
import SectionHeading from './section-heading'
import { skillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'

const fadeInAnimationVariant = {
  initial: {
    opacity: 0,
    y: 100
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index
    }
  })
}

export default function Skills() {
  const { ref } = useSectionInView('Skills')

  return (
    <section
      id="skills"
      className='mb-28 max-w-[53rem] scroll-mt-28 text-center sb:mb-40'
      ref={ref}
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul
        className='flex flex-wrap justify-center gap-2 text-gray-800'
      >
        {skillsData.map(({ skill, icon: Icon }, index) => (
          <motion.li
            key={index}
            className='bg-white border border-black/[0.1] rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white flex gap-2 items-center justify-center'
            initial="initial"
            whileInView="animate"
            variants={fadeInAnimationVariant}
            viewport={{
              once: true
            }}
            custom={index}
          >
            <Icon size={12} />
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  )
}
