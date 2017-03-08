<style scoped>
    footer {
        margin-top: 30px;
        padding: 50px;
        border-top: 1px solid rgba(34, 36, 38, .15);
        box-shadow: 0 -1px 2px 0 rgba(34, 36, 38, .15);
    }
    
    .links,
    .company {
        margin-top: 5px;
        text-align: center;
    }
    
    .company {
        color: #BABABA;
    }
    
    .links a {
        color: #999;
        display: inline-block;
        width: 100px;
    }
</style>

<template>
    <footer>
        <div class="links">
            <a href="#">关于我们</a>
            <a href="#">联系我们</a>
            <a href="#">服务条款</a>
            <a href="#">帮助中心</a>
            <a href="#">功能日志</a>
        </div>
        <div class="company">
            浙江省大学生创业学院联盟 @ 杭州奇略网络科技有限公司
        </div>
    </footer>
</template>

<script>
    export default {
        props: ['page'],
        data() {
            return {};
        }
    }
</script>