/*
* Author: stevenlee
* Date: 2018/3/30
* Description: ... 
*/

// config/plugin.js
exports.nunjucks = {
    enable: true,
    package: 'egg-view-nunjucks'
};

const path = require('path');
exports.ua = {
    enable: true,
    path: path.join(__dirname, '../lib/plugin/egg-ua')
};