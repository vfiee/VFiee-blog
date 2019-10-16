module.exports = {
    dest: 'dist',
    title: "Vyron",
    description: "Stay hungry, Stay foolish",
    themeConfig: {
        searchMaxSuggestions: 6,
        nav: [
            {
                text: 'JavaScript',
                items: [
                    { text: '面试', link: '/javascript/interview/concept-explain' },
                    { text: '设计模式', link: '/javascript/design-pattern/' },
                    { text: '正则表达式', link: '/javascript/regular-express/' },
                ]
            },
            {
                text: 'Flutter',
                items: [
                    { text: '环境搭建', link: '/flutter/set-up/' },
                ]
            },
            { text: 'GitHub', link: 'https://github.com/VFiee' },
        ],
        sidebar: {
            "/javascript/interview/": [
                "concept-explain",
                "archieve-methods",
            ]
        }
    }
}