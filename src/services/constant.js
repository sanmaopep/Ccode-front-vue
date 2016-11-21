class constant {

    /**
     * 获取任务类别列表
     * POST PRAMAS:
     * 无
     * RET:{
     *  code:"T",
     *  data:[
     *      '全部',
     *      '平面设计',
     *      '前端开发',
     *      'UI设计',
     *      '移动开发',
     *      '后端开发'
     *  ]
     *  } or {
     *   code:'F',
     *   msg:'获取失败'
     *  }
     * 
     * @static
     * 
     * @memberOf constant
     */
    static getClassNameList() {

    }

    /**
     * 获取地区列表
     * POST PRAMAS:
     * 无
     * RET:{
     *  code:"T",
     *  data:[
     *      '全部',
     *      '杭州',
     *      '温州'
     *  ]
     *  } or {
     *   code:'F',
     *   msg:'获取失败'
     *  }
     * 
     * @static
     * 
     * @memberOf constant
     */
    static getLocationList() {

    }

    /**
     * 获取状态列表
     * POST PRAMAS:
     * 无
     * RET:{
     *  code:"T",
     *  data:[
     *      '全部',
     *      '未开始',
     *      '进行中',
     *      '已结束'
     *  ]
     *  } or {
     *   code:'F',
     *   msg:'获取失败'
     *  }
     * 
     * @static
     * 
     * @memberOf constant
     */
    static getStateList() {

    }


}

export default constant;