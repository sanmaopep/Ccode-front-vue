import User from './user'
import config from './config'
import Util from './util'

/**
 * @class some methods about person
 * @author maoyiwei
 */

class Person {

    /**
     * 获取人才列表
     * POST PRAMAS:
     * keyword:'关键词'
     * className:'平面设计'
     * location:'杭州'
     * pageNum:2
     * pageSize:5
     * toekn:'fsdafsafsaf'
     * RET:{
     *  code:"T",
     *  data:[
     *      {
     *          name:'十三三长得高',
     *          avatarUrl:'resource/rabit.jpg',
     *          detail:'我是很棒的哦...',
     *          className:'移动开发',
     *          location:'杭州',
     *          school:'ZJUT',
     *          score:'5.0'
     *      }
     *  ]
     *  } or {
     *   code:'F',
     *   msg:'没有权限访问人才库'
     *  }
     * 
     * @static
     * @returns
     * 
     * @memberOf Solution
     */
    static getList(data, pageNum, pageSize) {
        // console.log("获取人才列表");
        return new Promise((resolve, reject) => {
            let url = config.url + "apptalents/talist";
            let token = User.getUser().token;
            data["token"] = token;
            data['pageNum'] = pageNum;
            data['pageSize'] = pageSize;
            // console.log(data);
            $.post(url, data,
                function(data, textStatus, jqXHR) {
                    // console.log(data);
                    if (data.code === "T") {
                        resolve(data.data);
                    } else {
                        alert(data.msg);
                        reject();
                    }
                },
                "json"
            ).error(() => {
                alert("获取人才列表失败，请检查网络");
                reject();
            });
        });
    }

    /**
     * 获取人才基本信息 getPersonContent
     * POST PARAMS:
     * id:12
     * token:'fadsfsadfsaf'
     * RET:{
     *  code:'T',
     *  data:{
     *      location:'杭州',
     *      school:'浙江工业大学',
     *      className:'前端开发',
     *      name:'毛怡伟',
     *      avatarUrl:'resource/rabit.jpg',
     *      content:'“souyoo，搜游网创造者”，“寓教”品牌缔造者，连续创业者，2015硬件创新奖十强、2015hight客创业硬件件创新奖获得者1999年创办www.souyoo.com搜游网，任CEO 2002～2011年，上海睿网电子有限公司www.rueinet.com，任总经理；'
     *  }
     * } or {
     *  code:'F',
     *  msg:'无权限访问人才库'
     * }
     * @param {int} id 方案id
     * @returns
     *
     * @memberOf Mission
     */
    static getContent(id) {
        return new Promise((resolve, reject) => {
            let url = config.url + 'apptalents/getOnePerson';
            let token = User.getUser().token;
            let data = { 'id': id, 'token': token };
            $.post(url, data,
                function(data, textStatus, jqXHR) {
                    if (data.code === "T") {
                        data.data['avatarUrl'] = Util.changeAvatarUrl(data.data['avatarUrl']);
                        resolve(data.data);
                    } else {
                        alert(data.msg);
                        reject();
                    }
                },
                "json"
            ).error(() => {
                alert("获取人才内容失败，请检查网络");
                reject();
            });

        });
    }

    /**
     * 获取人才的评价
     * POST PARAMS:
     * id:12
     * token:'adasfdsafas'
     * RET:{
     *  code:'T',
     *  data:[
     *      {
     *          avatarUrl:'resource/cute.jpg',
     *          name:'十三三长得高',
     *          time:'2016/5/5 12:00',
     *          content:'话说研究如何在前端偷懒是一件非常有意义的事情'
     *      }
     *  ]} or {
     *  code:'F',
     *  msg:'无权限访问，请联系管理员获取权限'
     * }
     * @static
     * @param {int} id
     *
     * @memberOf Mission
     */
    static getComments(id) {
        return new Promise((resolve, reject) => {
            const url = config.url + 'apptalents/getTaComments';
            let token = User.getUser().token;
            let data = { 'id': id, 'token': token };
            console.log(data);
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
                alert("获取评论失败，请检查网络");
                reject();
            });
        });
    }

    /**
     * 添加人才的评论
     * POST PRAMAS:
     * id:12
     * content:'如何偷懒'
     * token: 'abcddfadfasdf'
     * RET:{
     *  code:"T",
     *  msg:'添加成功'
     *  } or {
     *   code:'F',
     *   msg:'添加失败'
     *  }
     *
     * @static
     * @param {int} id
     * @param {string} content
     * @returns
     *
     * @memberOf Mission
     */
    static addComments(id, content) {
        return new Promise((resolve, reject) => {
            const url = config.url + 'apptalents/addTaComment';
            let token = User.getUser().token;
            let data = { 'id': id, 'content': content, 'token': token };
            // console.log(data);
            $.post(url, data,
                function(data, textStatus, jqXHR) {
                    // console.log(data);
                    if (data.code === "T") {
                        resolve();
                    } else {
                        alert(data.msg);
                        reject();
                    }
                },
                "json"
            ).error(() => {
                alert("添加评论失败，请检查网络");
                reject();
            });


        });
    }

    /**
     * 获取对应人才方案列表
     * POST PRAMAS:
     * personid: 123
     * token: 'dfsafasfasf'
     * RET:{
     *  code:"T",
     *  data:[
     *      {
     *          title:'如何在做前端的时候偷懒',
     *          avatarUrl:'resource/rabit.jpg',
     *          detail:'测试内容...',
     *          className:'移动开发',
     *          writer:'haha',
     *          money:'200',
     *          id:'234
     *      }
     *  ]
     *  } or {
     *   code:'F',
     *   msg:'无权限访问人才库'
     *  }
     * @static
     * @returns
     * 
     * @memberOf Solution
     */
    static getPersonList(id) {
        return new Promise((resolve, reject) => {
            const url = config.url + 'apptalents/getPerSoList';
            let token = User.getUser().token;
            let data = { 'personid': id, 'token': token };
            console.log(data);
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
                alert("获取成长历程失败，请检查网络");
                reject();
            });
        });
    }
}

export default Person