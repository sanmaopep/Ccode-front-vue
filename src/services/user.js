import Util from './util.js'
import config from './config.js'

class User {

    /**
     * 构造函数
     * @param  {[string]} username [用户名]
     * @param  {[int]} id       [用户id]
     * @param  {[string]} token    [用户token]
     */
    constructor(username, id, token) {
        this.username = username;
        this.id = id;
        this.token = token;
    }

    /**
     * 存储用户数据
     * @this  {[User]} user       User对象
     * @param  {[boolean]} rememberMe 是否记住我
     */
    storeUser(rememberMe) {
        //检测是否存在storge
        if (!localStorage || !sessionStorage) {
            alert("浏览器版本过低，请升级浏览器");
            return;
        }

        (rememberMe ? localStorage : sessionStorage).setItem('token', this.token);
        (rememberMe ? localStorage : sessionStorage).setItem('id', this.id);
        (rememberMe ? localStorage : sessionStorage).setItem('username', this.username);
    }

    /**
     * 获取当前存储的用户
     * @return {[User]} User对象
     */
    static getUser() {
        if (!localStorage || !sessionStorage) {
            alert("浏览器版本过低，请升级浏览器");
            return;
        }

        let ls = localStorage,
            ss = sessionStorage;

        //获取user的值
        let username = ls.getItem('username') || ss.getItem('username');
        let id = ls.getItem('id') || ss.getItem('id');
        let token = ls.getItem('token') || ss.getItem('token');

        // 返回User对象
        return new User(username, id, token);
    }

    /**
     * 注销当前用户（清空存储）
     * @return {[undefined]}
     */
    static quitUser() {
        localStorage.clear();
        sessionStorage.clear();
    }

    /**************************************************************
     ** 接口分割线 ************************************************
     **************************************************************/

    /**
     * register 注册
     * POST PARAMS:
     * username:"sanmaopep",
     * password:"513513mzq",
     * phone:"17816876927",
     * vertifyNum:"1234"
     * RET: {
     * 	code:'F',
     * 	msg:'验证码不正确'	
     * } or {
     * 	code:'T',
     * 	msg:'注册成功',
     * 	userid:'123',
     * 	token:'SAFASDV1231456FADFASF123'
     * }
     */
    static register(data) {
        return new Promise((resolve, reject) => {
            let ret = {
                userid: 123,
                token: '123456'
            };
            console.log(ret);
            // 成功：
            // 存储用户
            new User(data.username, ret.userid, ret.token).storeUser(false);
            resolve();
            // 失败：
            // reject(ret.msg);
        });
    }

    /**
     * login 登录
     * POST PARAMS：
     * username:"sanmaopep"
     * password:"513513mzq"
     * RET: {
     * 	code:'F',
     * 	msg:'密码错误'	
     * } or {
     * 	code:'T',
     * 	msg:'登录成功',
     * 	userid:'123',
     * 	token:'SAFASDV1231456FADFASF123'
     * }
     */
    static login(data) {
        return new Promise((resolve, reject) => {
            let ret = {
                userid: 123,
                token: '123456'
            };
            // 成功：
            // 存储用户
            let user = new User(data.username, ret.userid, ret.token);
            console.log(user);
            user.storeUser(false);
            Util.changeView('/');
            resolve();
            // 失败：
            // reject(ret.msg);
        });
    }

    /**
     * 获取手机验证码
     * POST PARAMS:
     * phoneNum:"17816876927"
     * RET: {
     * 	code:'F',
     * 	msg:'获取验证码错误'	
     * } or {
     * 	code:'T',
     * 	msg:'获取验证码成功',
     * }
     */
    static requestPhoneVertify(phoneNum) {
        return new Promise((resolve, reject) => {
            let ret = {};
            // 成功：
            resolve();
            // 失败：
            reject(ret.msg);
        });
    }
}

export default User