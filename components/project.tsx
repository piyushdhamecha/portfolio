'use client'

import { projectsData } from "@/lib/data"
import { useScroll, motion, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"

type ProjectProps = (typeof projectsData)[number]

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  url
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"]
  })

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.2, 1])

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress
      }}
      className="group mb-3 sm:mb-8 last:mb-0 "
    >
      <Link href={url} target="_blank">
        <section className='bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative 
    sm:h-[20rem] sm:group-even:pl-8 hover:bg-gray-200 transition rounded-lg 
    dark:bg-white/10 dark:hover:bg-white/20 dark:text-white'
        >
          <div className='pt-4 pb-7 px-5 sm:pl-10 sm:pt-10 sm:max-w-[50%] 
      flex flex-col h-full sm:group-even:ml-[18rem]'>
            <h3 className='text-2xl font-semibold'>{title}</h3>
            <p className='mt-2 leading-relaxed text-gray-700 
          dark:text-white/70 '>{description}</p>
            <ul className='flex flex-wrap nt-4 gap-2 sm:mt-auto'>
              {tags.map((tag, index) => (
                <li
                  key={index}
                  className='bg-black/[0.7] px-2 py-1 text-[0.7rem] uppercase tracking-wide text-white rounded-full'
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <Image
            src={imageUrl}
            alt='Project image'
            quality={95}
            className='absolute  hidden sm:block top-6 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3 
        group-hover:translate-y-3 
        group-hover:-rotate-2 

        group-even:group-hover:translate-x-3 
        group-even:group-hover:translate-y-3 
        group-even:group-hover:rotate-2 
        
        group-even:right-[initial] group-even:-left-40 
        transition'
          />
        </section>
      </Link>
    </motion.div>
  )
}