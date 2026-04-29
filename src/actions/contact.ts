"use server"

import nodemailer from "nodemailer"

// 1. Define the exact shape of the state object
export interface ContactFormState {
  error: string
  success: boolean
  message: string
}

// 2. Replace 'any' with 'ContactFormState'
export async function sendContactEmail(prevState: ContactFormState, formData: FormData) {
  const email = formData.get("email") as string
  const message = formData.get("message") as string

  if (!email || !message) {
    return { error: "Please fill out all fields.", success: false, message: "" }
  }

  const transporter = nodemailer.createTransport({
    service: "gmail", 
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, 
      replyTo: email, 
      subject: `New Project Inquiry from ${email}`,
      text: message,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })

    return { error: "", success: true, message: "Message sent successfully." }
    
  } catch (error) {
    console.error("Email Error:", error)
    return { error: "Failed to send message. Please try again.", success: false, message: "" }
  }
}