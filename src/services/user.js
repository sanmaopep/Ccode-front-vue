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


    static register(data) {
        return new Promise((resolve, reject) => {
            let url = config.url + "appsystem/register";
            let username = data.username;
            $.post(url, data,
                function (data, textStatus, jqXHR) {
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


    static login(data) {
        return new Promise((resolve, reject) => {
            let url = config.url + "appsystem/sys_login";
            let username = data.username;
            $.post(url, data,
                function (data, textStatus, jqXHR) {
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


    static requestPhoneVertify(phoneNum) {
        return new Promise((resolve, reject) => {
            let url = config.url + "appsystem/getPhoneCode";
            let data = {};
            data["phoneNum"] = phoneNum;
            $.post(url, data,
                function (data, textStatus, jqXHR) {
                    if (data.code === "T") {
                        resolve();
                    } else {
                        alert(data.msg);
                        reject();
                    }
                },
                "json"
            ).error(() => {
                reject();
                alert("获取验证码失败，请检查网络问题");
            });
        });
    }

    static forgetPassword(data) {
        return new Promise((resolve, reject) => {
            let url = config.url + "appsystem/forget";
            $.post(url, data,
                function (data, textStatus, jqXHR) {
                    if (data.code === "T") {
                        resolve();
                    } else {
                        alert(data.msg);
                        reject();
                    }
                },
                "json"
            ).error(() => {
                reject();
                alert("服务器维护中");
            });
        });
    }


    static editInformation(data) {
        return new Promise((resolve, reject) => {
            let myForm = new FormData();
            for (let key in data) {
                if (key == "file") {
                    if (data['file'] == '') {
                        let file = new File([], '');
                        myForm.append('file', file);
                    } else {
                        myForm.append(key, data[key]);
                    }
                } else {
                    myForm.append(key, data[key]);
                }
            }
            let xhr = new XMLHttpRequest();
            let url = config.url + "apptalents/modifyInfo";
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        let data = JSON.parse(xhr.responseText);
                        if (data.code == "T") {
                            resolve();
                        } else {
                            alert(data.msg);
                            reject();
                        }
                    } else {
                        alert("获取数据失败,请检查网络");
                        reject();
                    }
                }
            }
            xhr.open("POST", url);
            xhr.send(myForm);
            // console.log(myForm);
        });
    }
}

export default User