'use client'

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from '@/lib/hooks'
import { useThemeContext } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView('Experience')
  const { theme } = useThemeContext()

  return (
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
              visible={true}
              icon={item.icon}
              iconStyle={{
                background: theme === 'light' ? "white" : "rgba(255,255,255,0.5)",
                fontSize: "1.5rem",
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
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/25">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  )
}
