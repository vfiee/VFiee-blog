module.exports = {
    smoothScroll: true,
    expandAllGroup: false,
    displayAllHeaders: true,
    searchMaxSuggestions: 6,
    lastUpdated: "最近更新时间",
    repo: "https://github.com/VFiee/VFiee-blog",
    nav: [
        {
            text: 'JavaScript',
            items: [
                { text: '基础回顾', link: '/javascript/review/Type/', },
                { text: '设计模式', link: '/javascript/design-pattern/' },
            ]
        },
        {
            text: "剑指Offer",
            items: [
                { text: "CSS3", link: "/interview/css3/" },
                { text: "HTML5", link: "/interview/html5/" },
                { text: "Javascript", link: "/interview/javascript/" },
                { text: "Vue", link: "/interview/vue/" },
                { text: "React", link: "/interview/react/" },
            ]
        },
        {
            text: 'Flutter',
            items: [
                { text: '环境搭建', link: '/flutter/set-up/' },
            ]
        },
        {
            text: "计算机网络",
            items: [

            ]
        }
    ],
    sidebar: {
        "/javascript/": [
            {
                title: 'JavaScript',
                children: [
                    "/javascript/review/Type.md",
                    "/javascript/review/Symbol.md",
                    "/javascript/review/Array.md",
                    "/javascript/review/Object.md",
                    "/javascript/review/Function.md",
                    "/javascript/review/Date.md",
                    '/javascript/review/RegExp.md',
                    '/javascript/review/SetMap.md',
                ]
            }
        ],
        "/interview/": [
            {
                title: "Javascript",
                children: [
                    "/interview/css3/",
                    "/interview/html5/",
                    "/interview/vue/",
                    "/interview/react/",
                    "/interview/javascript/",
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