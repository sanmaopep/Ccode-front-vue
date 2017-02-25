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
            let url = config.url + "appsystem/register";
            let username = data.username;
            $.post(url, data,
                function(data, textStatus, jqXHR) {
                    if (data.code === "T") {
                        // alert("注册成功");
                        // 存储当前用户信息
                        let user = new User(username, data.userid, data.token);
                        user.storeUser(false);
                        Util.changeView('/');
                        resolve();
                    } else {
                        alert(data.msg);
                        reject();
                    }
                },
                "json"
            ).error(() => {
                reject("Fail");
                alert("注册失败，请检查网络");
            });
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
            let url = config.url + "appsystem/sys_login";
            let username = data.username;
            $.post(url, data,
                function(data, textStatus, jqXHR) {
                    if (data.code === "T") {
                        // alert("登录成功");
                        // 存储当前用户信息
                        let user = new User(username, data.userid, data.token);
                        user.storeUser(true);
                        Util.changeView('/');
                        resolve();
                    } else {
                        alert(data.msg);
                        reject();
                    }
                },
                "json"
            ).error(() => {
                reject();
                alert("登录失败，请检查网络问题");
            });
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

    /**
     * 编辑用户个人信息
     * 
     * POST PRAMAS:
     * token:'fdsafasfsaf'
     * file:图片文件,
     * content:'啦啦啦啦啦',
     * className:'移动开发',
     * location:'杭州',
     * school:'浙江工业大学'
     * RET:{
     *  code:"T",
     *  msg:'修改失败'
     *  } or {
     *   code:'F',
     *   msg:'修改失败'
     *  }
     * @static
     * @param {any} data
     * 
     * @memberOf User
     */
    static editInformation(data) {
        return new Promise((resolve, reject) => {});
    }
}

export default User