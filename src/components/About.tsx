import { motion } from 'framer-motion'
import './About.css'

// 简财云官网 — 公司简介 + 为什么选择我们
// 左右分栏布局，左侧文字介绍，右侧软件界面示意框

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-grid">
          {/* 左侧文字区 */}
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="about-label">关于简财云</span>
            <h2 className="about-heading">十年财税深耕，只为让记账更轻松</h2>
            <p className="about-desc">
              简财云由资深会计师与前端设计师联合打造，深知传统财务软件的痛点：操作复杂、数据上云不安全、年费订阅负担重。我们坚持单机本地化方案，让财务数据完全掌握在自己手中。
            </p>
            <p className="about-desc">
              从凭证录入到报表生成，从固定资产折旧到工资社保计提，简财云内置完整的财务逻辑体系，期末自动结转损益，让非专业用户也能轻松上手。
            </p>
          </motion.div>

          {/* 右侧软件界面示意框 */}
          <motion.div
            className="about-visual"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="app-mockup">
              {/* 窗口标题栏 */}
              <div className="app-mockup-titlebar">
                <span className="mockup-dot mockup-dot-red"></span>
                <span className="mockup-dot mockup-dot-yellow"></span>
                <span className="mockup-dot mockup-dot-green"></span>
                <span className="mockup-title-text">简财云 · 财务管理软件</span>
              </div>

              {/* 窗口内容区 */}
              <div className="app-mockup-body">
                {/* 左侧导航栏 */}
                <div className="mockup-sidebar">
                  <div className="mockup-sidebar-item active"></div>
                  <div className="mockup-sidebar-item"></div>
                  <div className="mockup-sidebar-item"></div>
                  <div className="mockup-sidebar-item"></div>
                  <div className="mockup-sidebar-item"></div>
                  <div className="mockup-sidebar-spacer"></div>
                  <div className="mockup-sidebar-item"></div>
                </div>

                {/* 右侧表格区域 */}
                <div className="mockup-main">
                  {/* 顶部工具栏 */}
                  <div className="mockup-toolbar">
                    <div className="mockup-toolbar-search"></div>
                    <div className="mockup-toolbar-btn"></div>
                  </div>

                  {/* 表格标题行 */}
                  <div className="mockup-table-header">
                    <div className="mockup-table-cell"></div>
                    <div className="mockup-table-cell"></div>
                    <div className="mockup-table-cell"></div>
                    <div className="mockup-table-cell"></div>
                  </div>

                  {/* 表格数据行 */}
                  {[1, 2, 3, 4, 5].map((row) => (
                    <div key={row} className="mockup-table-row">
                      <div className="mockup-table-cell"></div>
                      <div className="mockup-table-cell"></div>
                      <div className="mockup-table-cell"></div>
                      <div className="mockup-table-cell"></div>
                    </div>
                  ))}

                  {/* 底部统计栏 */}
                  <div className="mockup-footer-bar">
                    <div className="mockup-footer-stat"></div>
                    <div className="mockup-footer-stat"></div>
                    <div className="mockup-footer-stat gold-stat"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
