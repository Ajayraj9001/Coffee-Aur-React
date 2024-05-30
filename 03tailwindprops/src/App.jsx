import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  // Passing Object in props
  let myObj = {
    username: "ajay",
    age: 21
  }

  //Passing Array in props
  let newArr = [1, 2, 3]


  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card username="codeaurcoffee" btnText="click me" />
      <Card username="Ajay" btnText="visit me" />
    </>
  )
}

export default App
