import { motion, type Variants } from 'framer-motion'
import { Mail, MessageCircle, Clock } from 'lucide-react'
import './Contact.css'

// 简财云官网 — 底部联系方式 + CTA 收尾页

const contactItems = [
  { icon: <Mail size={18} />, label: '邮箱', value: 'contact@jiancaiyun.com' },
  { icon: <MessageCircle size={18} />, label: '微信', value: 'jiancaiyun' },
  { icon: <Clock size={18} />, label: '工作时间', value: '周一至周五 9:00-18:00' },
]

const titleVariants: Variants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0)',
    transition: { duration: 0.7, ease: [0.16 as const, 1 as const, 0.3 as const, 1 as const] },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16 as const, 1 as const, 0.3 as const, 1 as const] },
  },
}

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-inner">
        <motion.div
          className="contact-text"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className="contact-heading">开始您的智能财务之旅</h2>
          <p className="contact-subtitle">下载简财云，让记账回归简单</p>

          <div className="contact-cta">
            <motion.a
              href="#"
              className="btn btn-primary contact-btn-lg"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              onClick={(e) => e.preventDefault()}
            >
              立即下载 Windows 版
            </motion.a>
            <motion.a
              href="#"
              className="btn btn-secondary contact-btn-lg"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              onClick={(e) => e.preventDefault()}
            >
              联系客服咨询
            </motion.a>
          </div>

          <div className="contact-info">
            {contactItems.map((item) => (
              <div key={item.label} className="contact-info-item">
                <span className="contact-info-icon">{item.icon}</span>
                <div className="contact-info-text">
                  <span className="contact-info-label">{item.label}</span>
                  <span className="contact-info-value">{item.value}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="contact-copyright">
        &copy; 2026 简财云 版权所有
      </div>
    </section>
  )
}
