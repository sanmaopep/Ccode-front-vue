/**
 * 任务类
 * @class Mission
 * @author maoyiwei
 */
class Mission{

    /**
     * 添加一个任务 addMission
     * POST PARAMS:
     * missionName: '如何在做前端的时候偷懒',
     * className: '移动开发',
     * startDate: '2016/10/10',
     * endDate: '2016/10/11',
     * money: 1234,
     * description: '<p>hello</p>',
     * RET:{
     *  code:"T",
     *  msg:"添加成功"
     * } or {
     *  code:"F",
     *  msg:"添加失败"
     * }
     * @memberOf Mission
     */
    static addMission(data){
        return new Promise((resolve,reject)=>{

        });
    }

    /**
     * 获取任务列表
     * POST PARAMS:(如果为''则代表可选)
     * keyword:'关键词'
     * className:'平面设计'
     * state:'进行中'
     * location:'杭州'
     * pageNum:2,
     * pageSize:5
     * RET:{
     *  code:'T',
     *  data:[
     *      {
     *          title:'如何在做前端的时候偷懒',
     *          publishTime:'2015-6-1 10:00:00',
     *          className:'移动开发',
     *          startDate:'2015-6-1',
     *          endDate:'2015-6-15',
     *          joinNum:'12',
     *          money:'200'
     *      }
     *  ] or {
     *      code:'F',
     *      msg:'获取列表失败'
     *  }
     * }
     * @param {Object} data 检索条件
     * @param {int} pageNum 
     * @param {int} pageSize
     * @returns Promise
     * 
     * @memberOf Mission
     */
    static getMissionList(data,pageNum,pageSize){
        return new Promise((resolve,reject)=>{

        });
    }

    /**
     * 获取任务内容 getMissionContent
     * POST PARAMS:
     * id:12
     * RET:{
     *  code:'T',
     *  data:{
     *      title:'如何在做前端的时候偷懒',
     *      publishTime:'2015年6月23日 12:00',
     *      className:'前端开发',
     *      writer:'毛怡伟',
     *      content:'<p>公司之间永远存在竞争，</p><img src="resource/test-image.png" />',
     *      startTime:'2016/10/31',
     *      endTime:'2016/11/5'
     *  }
     * } or {
     *  code:'F',
     *  msg:'获取失败'
     * }
     * @param {int} id 任务id
     * @returns
     * 
     * @memberOf Mission
     */

    static getMissionContent(id){
        return new Promise((resolve,reject)=>{

        });
    }

    /**
     * 获取任务参加人的信息
     * POST PRAMAS:
     * id:12
     * RET:{
     *  code:"T",
     *  data:[
     *      {
     *          avatarUrl:'resource/rabit.jpg',
     *          name:'十三三长得高',
     *          school:'蓝翔技术学院',
     *          applyMoney:'1000',
     *          star:5,
     *          solutionName:'巧妙用复制粘贴大法...',
     *          admited:true//是否被录取
     *       }
     *  ] } or {
     *   code:'F',
     *   msg:'获取失败'
     *  }
     * }
     * 
     * @param {int} id 任务id
     * 
     * @memberOf Mission
     */
    static getMissionJoin(id){
        return new Promise((resolve,reject)=>{

        });
    }

    /**
     * 获取任务的评价
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
    static getMissionComments(id){
        return new Promise((resolve,reject)=>{
        });
    }

    /**
     * 添加任务的评论
     * POST PRAMAS:
     * id:12
     * content:'如何偷懒'
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
    static addMissionComments(id,content){
        return new Promise((resolve,reject)=>{
        });
    }
}