"use server"

export async function submitContact(formData: FormData) {
  const name = formData.get("name")
  const email = formData.get("email")
  const message = formData.get("message")

  if (!name || !email || !message) {
    return { error: "Please fill out all fields." }
  }

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  console.log(`New message from ${name} (${email}): ${message}`)

  return { success: "Message received. We will be in touch shortly." }
}