/*
* Author: stevenlee
* Date: 2018/3/31
* Description: ... 
*/

const moment = require('moment');
exports.relativeTime = time => moment(new Date(time * 1000)).fromNow();