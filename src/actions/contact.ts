"use server"

import nodemailer from "nodemailer"

export async function sendContactEmail(prevState: any, formData: FormData) {
  const email = formData.get("email") as string
  const message = formData.get("message") as string

  if (!email || !message) {
    // 1. Updated to return all three properties
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

    // 2. Updated to return all three properties
    return { error: "", success: true, message: "Message sent successfully." }
    
  } catch (error) {
    console.error("Email Error:", error)
    
    // 3. Updated to return all three properties
    return { error: "Failed to send message. Please try again.", success: false, message: "" }
  }
}