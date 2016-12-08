import config from './config'
import Util from './util'
import User from './user'

/**
 * 解决方案类
 * @class Solution
 * @author maoyiwei
 */
class Solution {

    /**
     * 添加一个方案
     * POST PRAMAS:
     * solutionName:'任务名'
     * missionID: 123
     * money: 1234
     * description: 'good'
     * token: 'fsadfsadfdsaf'
     * RET:{
     *  code:"T",
     *  msg:'添加成功'
     *  } or {
     *   code:'F',
     *   msg:'添加失败'
     *  }
     * 
     * @static
     * @returns
     * 
     * @memberOf Solution
     */
    static add(data) {
        return new Promise((resolve, reject) => {
            let url = config.url + "appsolution/addSolution";
            let token = User.getUser().token;
            data["token"] = token;
            console.log(data);
            $.post(url, data,
                function(data, textStatus, jqXHR) {
                    if (data.code === "T") {
                        alert(data.msg);
                        Util.changeView('/');
                        resolve();
                    } else {
                        alert(data.msg);
                        reject();
                    }
                },
                "json"
            ).error(() => {
                alert("添加方案失败，请检查网络");
                reject();
            });
        });
    }

    /**
     * 获取方案列表
     * POST PRAMAS:
     * keyword:'关键词'
     * className:'平面设计'
     * state:'进行中'
     * location:'杭州'
     * pageNum:2,
     * pageSize:5
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
     *   msg:'获取失败'
     *  }
     * @static
     * @returns
     * 
     * @memberOf Solution
     */
    static getList(data, pageNum, pageSize) {
        return new Promise((resolve, reject) => {
            let url = config.url + "appsolution/solist";
            data['pageNum'] = pageNum;
            data['pageSize'] = pageSize;
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
                alert("获取方案列表失败，请检查网络");
                reject();
            });
        });
    }

    /**
     * 获取方案内容 getSolutionContent
     * POST PARAMS:
     * id:12
     * RET:{
     *  code:'T',
     *  data:{
     *      title:'如何在做前端的时候偷懒',
     *      publishTime:'2015年6月23日 12:00',
     *      className:'前端开发',
     *      writer:'毛怡伟',
     *      writerID:123,
     *      content:'<p>公司之间永远存在竞争，</p><img src="resource/test-image.png" />'
     *  }
     * } or {
     *  code:'F',
     *  msg:'获取失败'
     * }
     * @param {int} id 方案id
     * @returns
     *
     * @memberOf Solution
     */
    static getContent(id) {
        return new Promise((resolve, reject) => {
            let url = config.url + 'appsolution/getOneSolution';
            let data = { 'id': id };
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
                alert("获取方案内容失败，请检查网络");
                reject();
            });

        });
    }

    /**
     * 获取方案的评价
     * POST PARAMS:
     * id:12
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
     *  msg:'获取失败'
     * }
     * @static
     * @param {int} id
     *
     * @memberOf Mission
     */
    static getComments(id) {
        return new Promise((resolve, reject) => {


        });
    }

    /**
     * 添加方案的评论
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
        return new Promise((resolve, reject) => {});
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
        return new Promise((resolve, reject) => {});
    }
}

export default Solution