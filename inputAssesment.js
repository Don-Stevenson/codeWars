import { useState } from "react"

const ValidatedLogin = () => {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  const login = async () => {
    const response = await fetch("https://api.example.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(errorData.message || "Failed to login")
    }

    return await response.json()
  }

  const handleEmailChange = value => {
    setEmail(value)
    // Clear error and success messages when user starts typing
    if (error) setError("")
    if (successMessage) setSuccessMessage("")
  }

  const handleLogin = async () => {
    // Validate email
    if (!email) {
      setError("Email is required")
      return
    }

    if (!email.match(emailRegex)) {
      setError("Invalid email format")
      return
    }

    // Clear previous messages and start loading
    setError("")
    setSuccessMessage("")
    setIsLoading(true)

    try {
      const data = await login()
      setSuccessMessage("Login successful!")
      console.log("Login successful:", data)

      // Handle successful login (e.g., save token, redirect)
      // localStorage.setItem('token', data.token)
      // navigate('/dashboard')
    } catch (err) {
      setError(err.message || "An error occurred during login")
      console.error("Login error:", err)
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = e => {
    if (e.key === "Enter" && !isLoading) {
      handleLogin()
      e.preventDefault()
    }
  }

  return (
    <div style={{ padding: "20px", maxWidth: "400px" }}>
      <h2>Login</h2>
      <div style={{ marginBottom: "15px" }}>
        <input
          type='email'
          value={email}
          onChange={e => handleEmailChange(e.target.value)}
          onKeyDown={e => handleKeyPress(e)}
          placeholder='Enter your email'
          disabled={isLoading}
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "16px",
            borderRadius: "4px",
            border: error ? "2px solid red" : "1px solid #ccc",
          }}
        />
      </div>

      {error && (
        <p style={{ color: "red", margin: "10px 0", fontSize: "14px" }}>
          {error}
        </p>
      )}

      {successMessage && (
        <p style={{ color: "green", margin: "10px 0", fontSize: "14px" }}>
          {successMessage}
        </p>
      )}

      <button
        onClick={handleLogin}
        disabled={isLoading}
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px",
          backgroundColor: isLoading ? "#ccc" : "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: isLoading ? "not-allowed" : "pointer",
        }}
      >
        {isLoading ? "Logging in..." : "Login"}
      </button>
    </div>
  )
}

export default ValidatedLogin
