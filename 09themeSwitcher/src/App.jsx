import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }
  const darkTheme = () => {
    setThemeMode("dark")
  }

  /* Actual Change in Theme */
  useEffect(() => {
    // Remove default theme
    document.querySelector('html').classList.remove("light", "dark")
    // Add new theme
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode]) 

  // Here in return We wrapped the whole thing inside <ThemeProvider> </ThemeProvider>
  /* Direct Access to values inside ThemeProvider */
  return (

    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
                  <div className="w-full">
                      <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                          <ThemeBtn />
                      </div>

                      <div className="w-full max-w-sm mx-auto">
                          <Card />
                      </div>
                  </div>
      </div>
    </ThemeProvider>
  )
}

export default App
