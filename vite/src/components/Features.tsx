import { motion, type Variants } from 'framer-motion'
import { Shield, ScanLine, Building2, FileText, Calculator, Coins } from 'lucide-react'
import './Features.css'

// 简财云官网 — 产品优势（6大核心能力）

interface FeatureItem {
  icon: React.ReactNode
  title: string
  desc: string
}

const features: FeatureItem[] = [
  {
    icon: <Shield size={48} color="var(--accent-gold)" />,
    title: '数据本地存储',
    desc: 'SQLite 本地数据库，财务数据不上云，彻底杜绝泄露风险，安全可控。',
  },
  {
    icon: <ScanLine size={48} color="var(--accent-gold)" />,
    title: '智能凭证识别',
    desc: 'OCR 自动识别发票、PDF、银行回单，一键生成会计凭证，效率提升 10 倍。',
  },
  {
    icon: <Building2 size={48} color="var(--accent-gold)" />,
    title: '多公司账套管理',
    desc: '轻松切换多家公司账簿，数据完全独立，代账公司必备利器。',
  },
  {
    icon: <FileText size={48} color="var(--accent-gold)" />,
    title: '专业财务报表',
    desc: '资产负债表、利润表、现金流量表实时生成，内置完整会计科目体系。',
  },
  {
    icon: <Calculator size={48} color="var(--accent-gold)" />,
    title: '自动期末结转',
    desc: '期末自动结转损益、计提折旧、工资社保，告别繁琐手工操作。',
  },
  {
    icon: <Coins size={48} color="var(--accent-gold)" />,
    title: '一次购买永久使用',
    desc: '单机授权码激活，无需年费订阅，无隐藏费用，终身免费更新。',
  },
]

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
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

const titleVariants: Variants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0)',
    transition: { duration: 0.7, ease: [0.16 as const, 1 as const, 0.3 as const, 1 as const] },
  },
}

export default function Features() {
  return (
    <section id="features" className="section features-section">
      <div className="container">
        <motion.div
          className="section-header"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <p className="section-label">核心优势</p>
          <h2 className="section-title">为什么选择简财云</h2>
        </motion.div>

        <motion.div
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} className="feature-card" variants={itemVariants}>
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
