import { useState } from "react"

const ValidatedLogin = () => {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  const login = async () => {
    try {
      const response = await fetch("https://api.example.com/login", {
        method: "POST",
        body: JSON.stringify({ email }),
      })
      if (!response.ok) {
        throw new Error("Failed to login")
      }
      const data = await response.json()
      console.log("Login successful with email:", email)
      return data
    } catch (error) {
      console.error("Error logging in:", error)
      return error
    }
  }

  const handleEmailChange = async value => {
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
    login()
  }
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

export default ValidatedLogin
