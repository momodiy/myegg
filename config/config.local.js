/*
* Author: stevenlee
* Date: 2018/3/31
* Description: ... 
*/
// app/service/some.js

// only read at development mode, will override default
exports.robot = {
    ua: [
        /Baiduspider/i,
    ],
};