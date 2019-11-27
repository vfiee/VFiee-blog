const {
    baseCof,
    themeCof,
    markdownCof,
    webpackCof
} = require('./config/');

module.exports = {
    dest: 'dist',
    base: '/blog/',
    title: "记录生活,记录成长",
    locales: baseCof,
    markdown: markdownCof,
    themeConfig: themeCof,
    configureWebpack: webpackCof,
    description: "blog,bavascript,dart,flutter,vfiee",
    // Stay hungry, Stay foolish.
    // 学会选择,懂得放弃,耐得住寂寞,禁得起诱惑.
    head: [
        ['link', { rel: 'icon', href: `/logo.png` }],
    ],
};