import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Profile from './pages/Profile'

function getPathFromHash(): string {
  const hash = window.location.hash.replace('#', '')
  return hash || '/'
}

function App() {
  const [path, setPath] = useState<string>(getPathFromHash())

  useEffect(() => {
    const onHashChange = () => setPath(getPathFromHash())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const renderPage = () => {
    if (path === '/about') return <About />
    if (path === '/contact') return <Contact />
    if (path === '/profile') return <Profile />
    return <Home />
  }

  return (
    <main className="app-shell">
      <header>
        <h2 className="title">TS Components</h2>
        <Navbar currentPath={path} />
      </header>
      <div className="page-wrap">
        {renderPage()}
      </div>
    </main>
  )
}

export default App
