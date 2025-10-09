import { useState, useEffect } from "react"

export const EmployeeInformation = () => {
  const [employeeData, setEmployeeData] = useState({
    employeeName: "",
    employeeDOB: "",
    employeeStatus: false,
  })
  const [toggleEmployeeStatus, setToggleEmployeeStatus] = useState(false)

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const url = "https://api.example.com/employee"
        const response = await fetch(url)
        const data = await response.json()
        const { employeeName, employeeDOB, employeeStatus } = data

        setEmployeeData({ employeeName, employeeDOB, employeeStatus })
        setToggleEmployeeStatus(employeeStatus)
      } catch (error) {
        console.error("Error fetching employee data:", error)
      }
    }

    fetchEmployeeData()
  }, [])

  const handleChangeStatus = () => {
    setToggleEmployeeStatus(prevStatus => !prevStatus)
  }

  return (
    <div>
      <div>Employee Name: {employeeData.employeeName}</div>
      <div>Employee DOB: {employeeData.employeeDOB}</div>
      <div onClick={handleChangeStatus}>
        Employee Status: {toggleEmployeeStatus ? "Active" : "Inactive"}
      </div>
    </div>
  )
}
