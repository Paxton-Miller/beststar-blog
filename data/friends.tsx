/* eslint-disable @stylistic/indent */
export type Friend = {
  title: string
  description: string
  website: string
  avatar?: string
}

export const Friends: Friend[] = [
    // 示例友链，请替换为你自己的友链
    //   {
    //     title: '示例友链',
    //     description: '这是一个示例友链，请替换为实际友链',
    //     website: 'https://example.com',
    //     avatar: '/img/friend/example.png',
    //   },
    ////////////////////////////////
  {
    title: '峰华前端工程师',
    description: '致力于帮助你以最直观、最快速的方式学会前端开发',
    website: 'https://zxuqian.cn',
    avatar: '/img/friend/zxuqian.png',
  },
  {
    title: 'YcSoku',
    description: 'GISer ❎ Toy Maker ✅ Toy Factory',
    website: 'https://github.com/YcSoku',
    avatar: '/img/friend/YcSoku.png',
  },
  // 添加更多友链...
]
