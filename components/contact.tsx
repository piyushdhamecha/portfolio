'use client'

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'
import { sendEmail } from '@/actions/sendEmail'
import SubmitBtn from './submit-btn'
import toast from 'react-hot-toast'

export default function Contact() {
  const { ref } = useSectionInView('Contact')


  return (
    <motion.section
      ref={ref}
      id="contact"
      className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className='text-gray-700 -mt-6 dark:text-white/80'>
        Please contact me directly at <a className='underline' href="mailto:piyush.dhamecha@gmail.com">piyush.dhamecha@gmail.com</a> or through this form.
      </p>
      <form
        className='flex flex-col mt-10 dark:text-black'
        action={async (formData) => {
          const { error } = await sendEmail(formData)

          if (error) {
            toast.error(error)

            return
          }

          toast.success('Email send successfully!')
        }}
      >
        <input
          type="email"
          placeholder='Your email'
          className='h-14 rounded-lg borderBlack px-4 
          dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none transition-all'
          required
          name="senderEmail"
          maxLength={500}
        />
        <textarea
          placeholder='Your message'
          className='h-52 my-3 rounded-lg borderBlack p-4 
          dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none transition-all'
          required
          name='message'
          maxLength={500}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  )
}
