/*
* Author: stevenlee
* Date: 2018/3/30
* Description: ... 
*/

exports.keys = 'ab8ebYZ8U5w%2F7PTQaWbDyAaNV18bk6rKGoBtuyh6b4JWSM3JIQOzqEDb4%2Fg';

// 添加 view 配置
exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
        '.qc': 'nunjucks',
    }
};

// 添加 news 的配置项
exports.news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
};

// add middleware robot
exports.middleware = [
    'robot'
];
// robot's configurations
exports.robot = {
    ua: [
        /Baiduspider/i,
    ]
};

exports.robot = {
    ua: [
        /curl/i,
        /Baiduspider/i,
    ],
};