import { use, useEffect, useState } from "react"
import Header from "./components/Header"
import ToggleTheme from "./components/ToggleTheme"
import UserProfile from "./components/UserProfile"
import Card from "./components/Card"

function App() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved) {
      setTheme(saved)
      document.body.setAttribute('data-theme', saved)
    }
  }, [])

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])


  const toggleTheme = () => {
    setTheme(theme => theme === 'dark' ? 'light' : 'dark')
  }

  const user = {
    nama : "Pangeran Juhrifar",
    job : "React Dev",
    joinAt : 2025,
    avatar : "/assets/react.svg"
  }

  return (
  <div className="p-6  dark:bg-gray-800 text-gray-800 bg-gray-200 dark:text-gray-200">
        <Header size={`text-2xl`} title={`Belajar React Props dan State`} />

        <ToggleTheme theme={theme} onToggleTheme={toggleTheme} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
              <UserProfile user={user} />
          </Card>
          <Card>
              <UserProfile user={user} />
          </Card>
        </div>
    </div>
  )
}

export default App
