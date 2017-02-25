import config from './config'
import Util from './util'
import User from './user'

// 评价接口类
class assessment {

    // 添加Git信息
    static addGit(solutionId, data) {
        return new Promise((resolve, reject) => {
            let url = config.url + "appsolution/addGit";
            data["id"] = solutionId - 0;
            // console.log(data);
            $.post(url, data,
                function(data, textStatus, jqXHR) {
                    if (data.code === "T") {
                        alert(data.msg);
                        resolve();
                    } else {
                        alert(data.msg);
                        reject();
                    }
                },
                "json"
            ).error(() => {
                alert("添加Git失败，请检查网络");
                reject();
            });
        });
    }

    // 获取方案Git信息
    static getGitInfo(solutionId) {
        return new Promise((resolve, reject) => {
            let url = config.url + "appsolution/gitAddr";
            let data = {};
            data["id"] = solutionId - 0;
            $.post(url, data,
                function(data, textStatus, jqXHR) {
                    if (data.code === "T") {
                        resolve(data.data);
                    } else {
                        alert(data.msg);
                        reject();
                    }
                },
                "json"
            ).error(() => {
                alert("获取Git配置失败，请检查网络");
                reject();
            });
        });
    }

    // 进行gitClone
    static gitClone(solutionId) {
        return new Promise((resolve, reject) => {
            let url = config.url + "appsolution/gitClone";
            let data = {};
            data["id"] = solutionId - 0;
            $.post(url, data,
                function(data, textStatus, jqXHR) {
                    console.log(data);
                    if (data.code === "T") {
                        resolve(data.data);
                    } else {
                        alert(data.msg);
                        reject();
                    }
                },
                "json"
            ).error(() => {
                alert("Git Clone请求失败");
                reject();
            });
        });
    }

    // 获取代码分析结果
    static getCodeQueryResult(solutionId) {
        return new Promise((resolve, reject) => {
            let url = config.url + "appsolution/queryCode";
            let data = {};
            data["id"] = solutionId - 0;
            $.post(url, data,
                function(data, textStatus, jqXHR) {
                    console.log(data);
                    if (data.code === "T") {
                        resolve(data.data);
                    } else {
                        alert(data.msg);
                        reject();
                    }
                },
                "json"
            ).error(() => {
                alert("查询结果失败");
                reject();
            });
        });
    }


    // 获取最强语言
    static getLan(personId) {
        return new Promise((resolve, reject) => {
            let url = config.url + "apptalents/topLan";
            let data = {};
            data["id"] = personId - 0;
            $.post(url, data,
                function(data, textStatus, jqXHR) {
                    console.log(data);
                    if (data.code === "T") {
                        let retData = data.data;
                        for (let i = 0; i < retData.length; i++) {
                            retData[i]["name"] = retData[i]["lan"];
                            retData[i]["value"] = Util.decodeTime(retData[i]["time"]);
                        }
                        resolve(retData);
                    } else {
                        alert(data.msg);
                        reject();
                    }
                },
                "json"
            ).error(() => {
                alert("获取用时最多语言失败，请检查网络");
                reject();
            });
        });
    }

    // 获取最强IDE
    static getIDE(personId) {
        return new Promise((resolve, reject) => {
            let url = config.url + "apptalents/topIDE";
            let data = {};
            data["id"] = personId - 0;
            $.post(url, data,
                function(data, textStatus, jqXHR) {
                    console.log(data);
                    if (data.code === "T") {
                        let retData = data.data;
                        for (let i = 0; i < retData.length; i++) {
                            retData[i]["name"] = retData[i]["ide"];
                            retData[i]["value"] = Util.decodeTime(retData[i]["time"]);
                            console.log(retData[i]["name"]);
                        }
                        resolve(retData);
                    } else {
                        alert(data.msg);
                        reject();
                    }
                },
                "json"
            ).error(() => {
                alert("获取用时最多IDE失败，请检查网络");
                reject();
            });
        });
    }

    //获取最近五天
    static getFiveDays(personId) {
        return new Promise((resolve, reject) => {
            let url = config.url + "apptalents/lastFive";
            let data = {};
            data["id"] = personId - 0;
            $.post(url, data,
                function(data, textStatus, jqXHR) {
                    // console.log(data);
                    if (data.code === "T") {
                        let retData = data.data;
                        for (let i = 0; i < retData.length; i++) {
                            retData[i]["name"] = retData[i]["date"];
                            retData[i]["value"] = Util.decodeTimeByMinute(retData[i]["time"]);
                        }
                        resolve(retData);
                    } else {
                        alert(data.msg);
                        reject();
                    }
                },
                "json"
            ).error(() => {
                alert("获取最近五天失败，请检查网络");
                reject();
            });
        });
    }

    // 获取最近半年
    static getHalfYear(personId) {
        return new Promise((resolve, reject) => {
            let url = config.url + "apptalents/allTime";
            let data = {};
            data["id"] = personId - 0;
            $.post(url, data,
                function(data, textStatus, jqXHR) {
                    // console.log(data);
                    if (data.code === "T") {
                        let retData = data.data;
                        for (let i = 0; i < retData.length; i++) {
                            retData[i]["name"] = retData[i]["date"];
                            retData[i]["value"] = Util.decodeTimeByMinute(retData[i]["time"]);
                        }
                        resolve(retData);
                    } else {
                        alert(data.msg);
                        reject();
                    }
                },
                "json"
            ).error(() => {
                alert("获取半年用时失败，请检查网络");
                reject();
            });
        });
    }
}

export default assessment;