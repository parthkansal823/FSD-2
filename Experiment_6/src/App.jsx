import { useState } from "react"
import StudentForm from "./components/Form"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <StudentForm />
    </>
  )
}

export default App
