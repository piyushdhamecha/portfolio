'use client'

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useInView } from "react-intersection-observer";
import Image, { StaticImageData } from "next/image";
import { MdLocationPin } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";

import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from '@/lib/hooks'
import { useThemeContext } from "@/context/theme-context";

export default function Experience() {
  const { theme } = useThemeContext()
  const { ref } = useSectionInView('Experience')
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div ref={sectionRef}>
      <section
        id="experience"
        className='mb-28 scroll-mt-28 text-center sb:mb-40'
        ref={ref}
      >
        <SectionHeading>
          My Experience
        </SectionHeading>
        <VerticalTimeline lineColor="">
          {experiencesData.map((item, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                visible={inView}
                icon={
                  <Image
                    src={item.icon as StaticImageData}
                    alt="company"
                    height={56}
                    width={56}
                  />}
                iconStyle={{
                  background: theme === 'light' ? "white" : "rgba(55,65,81)",
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                date={item.date}
                contentArrowStyle={{
                  borderRight: theme == 'light'
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255,255,255,0.5)",
                }}
                contentStyle={{
                  background: theme === 'light' ? "#f3f4f6" : 'rgba(255,255,255,0.05)',
                  boxShadow: "none",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                }}
              >
                <h3 className="font-semibold capitalize !mb-1">{item.title}</h3>
                <p className="!font-normal !m-0 !mb-2 flex items-baseline text-gray-400 !text-sm">
                  <FaBuilding size={12} className="mr-1 text-gray-500" />
                  {item.company}
                  <MdLocationPin size={12} className="ml-2 mr-0.5 text-gray-500" />
                  {item.location}
                </p>
                <p className="!mt-0 !font-normal text-gray-700 dark:text-white/25 !text-sm">
                  {item.description}
                </p>

              </VerticalTimelineElement>
            </React.Fragment>
          ))}
        </VerticalTimeline>
      </section>
    </div>
  )
}
