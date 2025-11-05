export type Tag = {
  label: string
  description: string
  color: string
}

export type TagType =
  | 'favorite'
  | 'opensource'
  | 'product'
  | 'design'
  | 'large'
  | 'personal'

export type ProjectType = 'web' | 'app' | 'commerce' | 'personal' | 'toy' | 'other'

export const projectTypeMap = {
  web: '🖥️ 横向',
  app: '💫 应用',
  commerce: '🛒 商业项目',
  personal: '👨‍💻 个人',
  toy: '🔫 玩具',
  other: '🗃️ 其他',
}

export type Project = {
  title: string
  description: string
  preview?: string
  website: string
  source?: string | null
  tags: TagType[]
  type: ProjectType
}

export const Tags: Record<TagType, Tag> = {
  favorite: {
    label: '喜爱',
    description: '我最喜欢的网站，一定要去看看!',
    color: '#e9669e',
  },
  opensource: {
    label: '开源',
    description: '开源项目可以提供灵感!',
    color: '#39ca30',
  },
  product: {
    label: '产品',
    description: '与产品相关的项目!',
    color: '#dfd545',
  },
  design: {
    label: '设计',
    description: '设计漂亮的网站!',
    color: '#a44fb7',
  },
  large: {
    label: '大型',
    description: '大型项目，原多于平均数的页面',
    color: '#8c2f00',
  },
  personal: {
    label: '个人',
    description: '个人项目',
    color: '#12affa',
  },
}

export const TagList = Object.keys(Tags) as TagType[]

export const projects: Project[] = [
  {
    title: '交互式水动力建模与模拟平台',
    description: '支持香港北部都会区建设的城市洪涝灾害仿真模拟系统',
    preview: '/img/tech/gridman.png',
    website: 'https://github.com/beststarli/gridman',
    source: 'https://github.com/beststarli/gridman',
    tags: ['opensource', 'design', 'large', 'favorite'],
    type: 'web',
  },
  {
    title: 'React项目脚手架',
    description: '封装了TailwindCSS, shadcn/ui, Vite, TypeScript的React项目脚手架',
    preview: '/img/tech/scaffold.png',
    website: 'https://github.com/beststarli/scaffold',
    source: 'https://github.com/beststarli/scaffold',
    tags: ['opensource', 'personal', 'favorite'],
    type: 'personal',
  },
  {
    title: 'AutoWater洪水管网演示系统',
    description: '结合洪水演进、三维地图瓦片、管道管网的可视化演示系统',
    preview: '/img/tech/autowater.png',
    website: 'https://github.com/beststarli/AutoWaterNeo',
    source: 'https://github.com/beststarli/AutoWaterNeo',
    tags: ['opensource', 'design'],
    type: 'app',
  },
  {
    title: 'Verdandi描述性文本文件生成器',
    description: '为信息资源树Yggdrail服务的Schema和Component描述JSON文件生成器',
    preview: '/img/tech/verdandi.png',
    website: 'https://github.com/beststarli/verdandi',
    source: 'https://github.com/beststarli/verdandi',
    tags: ['opensource', 'personal'],
    type: 'app',
  },
]

export const groupByProjects = projects.reduce(
  (group, project) => {
    const { type } = project
    group[type] = group[type] ?? []
    group[type].push(project)
    return group
  },
  {} as Record<ProjectType, Project[]>,
)
