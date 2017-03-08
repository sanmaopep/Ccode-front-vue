import config from './config'

class constant {

    /**
     * 获取任务类别列表
     * @memberOf constant
     */
    static getClassNameList() {
        return new Promise((resolve, reject) => {
            let url = config.url + "appmission/getclass";
            let data = {};
            $.post(url, data,
                function (data, textStatus, jqXHR) {
                    if (data.code === "T") {
                        resolve(data.classlist);
                    } else {
                        alert("data.msg");
                        reject();
                    }
                },
                "json"
            ).error(() => {
                alert("获取任务类别失败，请检查网络");
                reject();
            });
        });
    }

    /**
     * 获取地区列表
     * @memberOf constant
     */
    static getLocationList() {
        // console.log("获取地区列表");
        return new Promise((resolve, reject) => {
            let url = config.url + "appmission/getarea";
            let data = {};
            $.post(url, data,
                function (data, textStatus, jqXHR) {
                    // console.log(data);
                    if (data.code === "T") {
                        resolve(data.arealist);
                    } else {
                        alert("data.msg");
                        reject();
                    }
                },
                "json"
            ).error(() => {
                alert("获取地区列表失败，请检查网络");
                reject();
            });
        });
    }


}

export default constant;