/*
* Author: stevenlee
* Date: 2018/3/30
* Description: ... 
*/
// app/controller/home.js
const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        this.ctx.body = 'Hello world';
    }

    async fuck() {
        this.ctx.body = 'Steven Lee';
    }
}

module.exports = HomeController;