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

    // 从表单中提取出实际要上传的部分
    static getSubObject(origin, template) {
        let ret = {};
        for (let i = 0; i < template.length; i++) {
            let key = template[i];
            ret[key] = origin[key];
        }
        return ret;
    }

    // 解码图表的时间，转化为H的小时表示
    // 格式 12 H
    // 或 12 M
    // 或 12 S
    static decodeTime(timeStr) {
        // console.log(timeStr);
        let hour, minute, seconds;
        let unit = timeStr[timeStr.length - 1];
        let num = timeStr.substr(0, timeStr.length - 2) - 0;
        // console.log(num);
        switch (unit) {
            case 'H':
                return num * 3600;
            case 'M':
                return num * 60;
            case 'S':
                return num;
            default:
        }
    }

    // 解析为分钟数
    static decodeTimeByMinute(timeStr) {
        // console.log(timeStr);
        let hour, minute, seconds;
        let unit = timeStr[timeStr.length - 1];
        let num = timeStr.substr(0, timeStr.length - 2) - 0;
        // console.log(num);
        switch (unit) {
            case 'H':
                return num * 60;
            case 'M':
                return num;
            case 'S':
                return num / 60;
            default:
        }
    }

    // 将日期数组转化为二维坐标
    static decodeCordinateArrayOfDate(dataArray, todayX) {
        console.log("获取Cordinate坐标中...");
        // 获得今天 00:00:00
        let today = new Date();
        today.setHours(0);
        today.setMinutes(0);
        today.setSeconds(0);
        today.setMilliseconds(0);
        // 今天的坐标
        let today_Y = 6 - today.getDay();
        let today_X = todayX | 20;
        let ret = [];
        for (let i = 0; i < dataArray.length; i++) {
            let dateStr = dataArray[i].name;
            let arr = dateStr.split("-");
            let theday = new Date(arr[0], arr[1] - 1, arr[2], 0, 0, 0);

            // 获取天数差
            let daySpan = (today.getTime() - theday.getTime()) / (24 * 60 * 60 * 1000);
            let detX = Math.floor((daySpan + today_Y) / 7);
            let detY = (daySpan + today_Y) % 7;

            let x = today_X - detX - 1;
            let y = detY;

            ret.push({
                value: [x, y, dataArray[i].value],
                label: {
                    time: dataArray[i].time,
                    name: dataArray[i].name
                }
            });
        }
        // console.log(ret);
        return ret;
    }
}

export default Util