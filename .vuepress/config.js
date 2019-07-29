module.exports = {
  title: 'Daily Frontend',
  description: '记录前端学习的日常',
  permalink: '/:year/:month/:day/:slug',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      {
        text: '知识清单',
        link: '/interviews/',
      },
      {
        text: '算法题',
        link: '/algorithm/',
      },
    ],
    sidebar: 'auto',
    lastUpdated: '上次更新',
  },
  markdown: {
    lineNumbers: true,
  },
};
