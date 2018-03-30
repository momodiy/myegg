/*
* Author: stevenlee
* Date: 2018/3/30
* Description: export router
*/

module.exports = app => {
    const { router, controller } = app;
    router.get('/', controller.home.index);
    router.get('/momo', controller.home.fuck);
    router.get('/news', controller.news.list);
};