import { Icon } from '@iconify/react'
import Translate from '@docusaurus/Translate'

export type FeatureItem = {
  title: string | React.ReactNode
  description: string | React.ReactNode
  header: React.ReactNode
  icon?: React.ReactNode
}

// TODO: 根据你的特色修改以下内容
const FEATURES: FeatureItem[] = [
  {
    title: <Translate id="homepage.feature.developer">技术开发</Translate>,
    description: (
      <Translate id="homepage.feature.developer.desc">
        作为一名开发者，致力于学习和分享前沿技术知识
      </Translate>
    ),
    header: <>💻</>,
    icon: <Icon icon="logos:typescript-icon" className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: <Translate id="homepage.feature.blogger">博客写作</Translate>,
    description: (
      <Translate id="homepage.feature.blogger.desc">
        热爱写作，记录技术成长和生活感悟
      </Translate>
    ),
    header: <>✍️</>,
    icon: <Icon icon="logos:react" className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: <Translate id="homepage.feature.openSource">开源贡献</Translate>,
    description: (
      <Translate id="homepage.feature.openSource.desc">
        积极参与开源社区，分享优质项目
      </Translate>
    ),
    header: <>🌟</>,
    icon: <Icon icon="logos:github-icon" className="h-4 w-4 text-neutral-500" />,
  },
]

export default FEATURES
