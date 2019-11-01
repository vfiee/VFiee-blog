module.exports = {
    smoothScroll: true,
    displayAllHeaders: true,
    searchMaxSuggestions: 6,
    lastUpdated: "最近更新时间",
    repo: "https://github.com/VFiee/VFiee-blog",
    nav: [
        {
            text: 'JavaScript',
            items: [
                { text: '基础回顾', link: '/javascript/review/', },
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
    ],
    sidebar: {
        "/javascript/": [
            {
                title: 'JavaScript',
                children: [
                    '/javascript/review/',
                    '/javascript/design-pattern/',
                    '/javascript/regular-express/'
                ]
            }
        ],
        "/flutter/": [
            {
                title: "Flutter",
                children: [
                    '/flutter/set-up/',
                ]
            }
        ]
    }
};