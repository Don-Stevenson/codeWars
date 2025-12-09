import { useState } from "react"

const validatedLogin = () => {
  const [email, setEmail] = useState("")

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  const validateEmail = email => {
    if (!email.match(emailRegex)) {
      return "Invalid email"
    }
    return setEmail(email)
  }

  return (
    <div>
      <input
        type='email'
        value={email}
        onChange={e => validateEmail(e.target.value)}
      />
      <button onClick={() => validateEmail(email)}>Login</button>
    </div>
  )
}
