"use server"

export async function submitContact(formData: FormData) {
  const rawName = formData.get("name")
  const rawEmail = formData.get("email")
  const rawMessage = formData.get("message")

  // Type guard: Check if all values exist and are strings
  if (
    typeof rawName !== "string" || 
    typeof rawEmail !== "string" || 
    typeof rawMessage !== "string"
  ) {
    return { error: "Please fill out all fields correctly." }
  }

  // Now TypeScript safely treats these as strings
  const name = rawName.trim()
  const email = rawEmail.trim()
  const message = rawMessage.trim()

  if (!name || !email || !message) {
    return { error: "Fields cannot be empty." }
  }

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // No more linting errors here
  console.log(`New message from ${name} (${email}): ${message}`)

  return { success: "Message received. We will be in touch shortly." }
}