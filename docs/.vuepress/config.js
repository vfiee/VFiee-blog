const {
    baseCof,
    themeCof,
    markdownCof,
    webpackCof
} = require('./config/');

module.exports = {
    locales: baseCof,
    markdown: markdownCof,
    themeConfig: themeCof,
    configureWebpack: webpackCof,
    dest: 'dist',
    base: '/blog/',
    title: "Vyron",
    description: "blog,bavascript,dart,flutter,vfiee",
    // Stay hungry, Stay foolish.
    // 学会选择,懂得放弃,耐得住寂寞,禁得起诱惑.
    head: [
        ['link', { rel: 'icon', href: `/logo.png` }],
    ],
};