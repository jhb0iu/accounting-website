import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import Solutions from './components/Solutions'
import Contact from './components/Contact'
import './App.css'

// 简财云官网 — 主应用组件
// 功能：滚动监听当前区块，用于导航高亮

export default function App() {
  const [activeSection, setActiveSection] = useState('home')

  // 监听滚动，更新当前激活区块
  useEffect(() => {
    const sections = ['home', 'about', 'features', 'solutions', 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 }
    )

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="app">
      <Navbar activeSection={activeSection} />
      <Hero />
      <About />
      <Features />
      <Solutions />
      <Contact />
    </div>
  )
}
