import { useState } from "react"

const ValidatedLogin = () => {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  const handleEmailChange = value => {
    setEmail(value)
    // Clear error when user starts typing
    if (error) {
      setError("")
    }
  }

  const handleLogin = () => {
    if (!email) {
      setError("Email is required")
      return
    }

    if (!email.match(emailRegex)) {
      setError("Invalid email format")
      return
    }

    // Clear error and proceed with login
    setError("")
    console.log("Login successful with email:", email)
    // Add your login logic here
  }

  return (
    <div>
      <input
        type='email'
        value={email}
        onChange={e => handleEmailChange(e.target.value)}
        placeholder='Enter your email'
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default ValidatedLogin
