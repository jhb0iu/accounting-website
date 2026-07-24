import { useEffect, useRef } from 'react'
import { ChevronDown } from 'lucide-react'
import './Hero.css'

// 简财云官网 — Hero 首屏组件
// 包含：动态网格 Canvas 背景、主标题、CTA 按钮、滚动指示箭头

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Canvas 2D 动态网格背景
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let mouseX = -1000
    let mouseY = -1000

    // 节点配置
    const nodes: { x: number; y: number; vx: number; vy: number }[] = []
    const NODE_COUNT = 60
    const CONNECTION_DIST = 150
    const MOUSE_DIST = 200

    function resize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initNodes()
    }

    function initNodes() {
      nodes.length = 0
      for (let i = 0; i < NODE_COUNT; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
        })
      }
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // 绘制静态网格线（极淡）
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)'
      ctx.lineWidth = 1

      // 节点连线
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < CONNECTION_DIST) {
            const alpha = (1 - dist / CONNECTION_DIST) * 0.04
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }

        // 鼠标附近金色连线
        const mdx = nodes[i].x - mouseX
        const mdy = nodes[i].y - mouseY
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy)

        if (mDist < MOUSE_DIST) {
          const alpha = (1 - mDist / MOUSE_DIST) * 0.08
          ctx.strokeStyle = `rgba(201, 169, 110, ${alpha})`
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(nodes[i].x, nodes[i].y)
          ctx.lineTo(mouseX, mouseY)
          ctx.stroke()
        }
      }

      // 绘制节点
      for (const node of nodes) {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.06)'
        ctx.beginPath()
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2)
        ctx.fill()
      }

      // 更新节点位置
      for (const node of nodes) {
        node.x += node.vx
        node.y += node.vy

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1
      }

      animationId = requestAnimationFrame(draw)
    }

    function handleMouseMove(e: MouseEvent) {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    function handleMouseLeave() {
      mouseX = -1000
      mouseY = -1000
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)
    draw()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <section id="home" className="hero">
      {/* 动态网格 Canvas */}
      <canvas ref={canvasRef} className="hero-canvas" />

      {/* Hero 内容 */}
      <div className="hero-content">
        {/* Badge 标签 */}
        <div className="hero-badge">
          专为中小企业打造的智能财务系统
        </div>

        {/* 大标题 */}
        <h1 className="hero-title">
          <span className="hero-title-line">让财务管理</span>
          <span className="hero-title-line hero-title-accent">回归简单</span>
        </h1>

        {/* 副标题 */}
        <p className="hero-subtitle">
          简财云 · 本地数据存储 · 智能凭证识别 · 专业财务报表 — 一次购买，永久使用
        </p>

        {/* CTA 按钮 */}
        <div className="hero-cta">
          <a href="#contact" className="btn btn-primary hero-btn hero-btn-lg">立即下载</a>
          <a href="#features" className="btn btn-secondary hero-btn hero-btn-lg">了解功能</a>
        </div>
      </div>

      {/* 向下滚动指示箭头 */}
      <div className="hero-scroll-indicator">
        <ChevronDown size={28} color="var(--text-muted)" />
      </div>
    </section>
  )
}
