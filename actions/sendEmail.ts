'use server'

import ContactFormEmail from '@/email/constact-form-email'
import { getErrorMessage, validateString } from '@/lib/utils'
import React from 'react'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData: FormData) => {
  'use server'

  const senderEmail = formData.get("senderEmail")
  const message = formData.get("message")

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email"
    }
  }

  if (!validateString(message, 500)) {
    return {
      error: "Invalid message"
    }
  }

  let data;

  try {
    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'piyush.dhamecha@gmail.com',
      subject: 'Message from contact form',
      replyTo: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string
      })

    })
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error)
    }
  }

  return {
    data
  }
}
