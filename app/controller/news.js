/*
* Author: stevenlee
* Date: 2018/3/31
* Description: ... 
*/
// app/controller/news.js
const Controller = require('egg').Controller;

class NewsController extends Controller {
    async list() {
        const dataList = {
            list: [
                {id: 1, title: 'this is first news', url: '/news/1'},
                {id: 2, title: 'this is second news', url: '/news/2'}
            ]
        };
        await this.ctx.render('news/list.qc', dataList);

    }
}

module.exports = NewsController;

