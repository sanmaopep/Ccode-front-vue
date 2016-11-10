import config from './config.js'

class Util {

    /**
     * 更改当前页面
     * @param  {[string]} url 切换的页面地址
     * @return {[undefined]}    
     */
    static changeView(url) {
        window.location.href = url;
    }

    /**
     * 验证这个是不是手机号码
     * @param  {[string]} phoneNum 验证对象
     * @return {[boolean]}          [description]
     */
    static vertifyPhone(phoneNum) {
        var regex = /^0?1[3|4|5|8|7][0-9]\d{8}$/;
        if (regex.test(phoneNum)) {
            return true;
        } else {
            return false;
        }
    }

}

export default Util