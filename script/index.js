const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const dirPath = path.resolve(__dirname, '../docs');
const sidebarPath = `${dirPath}/.vuepress/config/sidebar.json`;
const navPath = `${dirPath}/.vuepress/config/nav.json`;

// 生成sidebar
function initSidebar() {
    let dirs = fs.readdirSync(dirPath);
    dirs = _.without(dirs, '.DS_Store', '.vuepress', 'README.md');
    let sidebar = {};
    if (!dirs || _.isEmpty(dirs)) {
        fs.writeFileSync(sidebarPath, JSON.stringify(sidebar));
        return;
    }
    sidebar = _.reduce(dirs, (result, curr) => {
        let files = fs.readdirSync(`${dirPath}/${curr}`);
        result[`/${curr}/`] = files;
        return result;
    }, {});
    fs.writeFileSync(sidebarPath, JSON.stringify(sidebar));
}

// 生成nav导航
function initNavs() {
    let dirs = fs.readdirSync(dirPath);
    dirs = _.without(dirs, '.DS_Store', '.vuepress', 'README.md');
    let nav = {};
    if (!dirs || _.isEmpty(dirs)) {
        fs.writeFileSync(sidebarPath, JSON.stringify(nav));
        return;
    }
    nav = _.map(dirs, curr => {
        let currPath = `${dirPath}/${curr}`;
        let files = fs.readdirSync(currPath);
        files = _.without(files, '.DS_Store');
        let items = _.map(files, item => {
            return {
                text: getTitle(item),
                link: `/${curr}/${item}`
            }
        });
        return {
            items,
            text: getTitle(curr),
        }
    });
    fs.writeFileSync(navPath, JSON.stringify(nav));
}
// 获取文章标题
function getTitle(curr, noSuf = true) {
    let arr = curr.split('_');
    let result = arr[1] || _.upperFirst(arr[0]);
    return noSuf ? result.split('.')[0] : result;
}

init();
function init() {
    initNavs();
    initSidebar();
}