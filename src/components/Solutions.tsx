import { motion } from 'framer-motion'
import './Solutions.css'

interface SolutionItem {
  number: string
  title: string
  desc: string
  bullets: string[]
}

const solutions: SolutionItem[] = [
  {
    number: '01',
    title: '小微企业',
    desc: '初创公司财务起步难？简财云内置标准科目模板，凭证录入、报表生成一步到位，无需聘请专职会计。',
    bullets: ['内置标准会计科目模板', '凭证录入与报表生成一体化', '零基础也能快速上手'],
  },
  {
    number: '02',
    title: '中小企业',
    desc: '业务增长带来账务复杂度上升？支持固定资产折旧、进销存管理、工资社保自动计提，满足成长期全部需求。',
    bullets: ['固定资产折旧自动计算', '进销存管理与库存预警', '工资社保自动计提'],
  },
  {
    number: '03',
    title: '代账公司',
    desc: '同时为几十家客户做账？多公司账套秒级切换，OCR 批量识别票据，人均处理账套数量翻倍。',
    bullets: ['多公司账套秒级切换', 'OCR 批量识别票据凭证', '客户数据完全独立隔离'],
  },
  {
    number: '04',
    title: '个人会计',
    desc: '自由会计接私单？单机版随身携带，数据存在自己电脑，客户资料绝不外泄，专业又安心。',
    bullets: ['单机本地存储，数据自主可控', '便携式安装，无服务器依赖', '客户资料加密保护'],
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

const titleVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0)', transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export default function Solutions() {
  return (
    <section id="solutions" className="section solutions-section">
      <div className="container">
        <motion.div className="section-header" variants={titleVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}>
          <p className="section-label">解决方案</p>
          <h2 className="section-title">面向不同规模企业的全业务场景</h2>
        </motion.div>

        <motion.div className="solutions-grid" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}>
          {solutions.map((solution) => (
            <motion.div key={solution.number} className="solution-card" variants={itemVariants}>
              <span className="solution-number">{solution.number}</span>
              <h3 className="solution-title">{solution.title}</h3>
              <p className="solution-desc">{solution.desc}</p>
              <ul className="solution-bullets">
                {solution.bullets.map((bullet) => (
                  <li key={bullet}>
                    <span className="solution-bullet-dot"></span>
                    {bullet}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="solution-link">了解更多 →</a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
