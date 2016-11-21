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
    static getList() {
        return new Promise((resolve, reject) => {});
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
        return new Promise((resolve, reject) => {});
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
        return new Promise((resolve, reject) => {});
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
        return new Promise((resolve, reject) => {});
    }

}

export default Person