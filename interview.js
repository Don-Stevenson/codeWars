import { useState, useEffect } from "react"

const useFetchComponent = () => {
  const [data, setData] = useFetch()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.example.com/data")
        const data = await response.json()
        setData(data)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }
    fetchData()
  }, [])

  return (
    <div>
      <h1>Data</h1>
      <p>{data}</p>
    </div>
  )
}
export default useFetchComponent
