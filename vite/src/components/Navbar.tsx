import { useState, useEffect } from 'react'
import { Landmark, Briefcase, Menu, X } from 'lucide-react'
import './Navbar.css'

// 简财云官网 — 导航栏组件
// 功能：固定顶部、滚动变色、锚点高亮、移动端汉堡菜单

interface NavbarProps {
  activeSection: string
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  // 监听滚动，超过 80px 后改变导航栏背景
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 导航项配置
  const navItems = [
    { id: 'home', label: '首页', href: '#home' },
    { id: 'features', label: '产品功能', href: '#features' },
    { id: 'solutions', label: '解决方案', href: '#solutions' },
    { id: 'about', label: '关于我们', href: '#about' },
    { id: 'contact', label: '联系我们', href: '#contact' },
  ]

  // 处理锚点点击，关闭移动端菜单
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-inner">
        {/* 左侧 Logo */}
        <a href="#home" className="navbar-logo" onClick={(e) => handleClick(e, '#home')}>
          <Landmark size={22} color="var(--accent-gold)" />
          <span className="navbar-brand">简财云</span>
        </a>

        {/* 桌面端中间导航 */}
        <ul className="navbar-links desktop-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className={`navbar-link ${activeSection === item.id ? 'nav-link-active' : ''}`}
                onClick={(e) => handleClick(e, item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* 桌面端右侧按钮 */}
        <a href="#contact" className="btn btn-primary navbar-download-btn desktop-only" onClick={(e) => handleClick(e, '#contact')}>
          免费下载
        </a>

        {/* 移动端汉堡菜单 */}
        <button
          className="hamburger-btn mobile-only"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? '关闭菜单' : '打开菜单'}
        >
          {mobileOpen ? <X size={24} color="#f0f0f0" /> : <Menu size={24} color="#f0f0f0" />}
        </button>
      </div>

      {/* 移动端全屏菜单 */}
      {mobileOpen && (
        <div className="mobile-menu">
          <ul className="mobile-menu-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={`mobile-menu-link ${activeSection === item.id ? 'nav-link-active' : ''}`}
                  onClick={(e) => handleClick(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn btn-primary mobile-menu-download" onClick={(e) => handleClick(e, '#contact')}>
            免费下载
          </a>
        </div>
      )}
    </nav>
  )
}
