/*
* Author: stevenlee
* Date: 2018/3/31
* Description: ... 
*/

module.export = {
    get isIOS() {
        const iosReg = /iphone|ipad|ipod/i;
        return iosReg.test(this.get('user-agent'));
    }
};