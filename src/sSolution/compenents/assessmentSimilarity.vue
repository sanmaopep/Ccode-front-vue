<template>
    <section class="ui container">
        <div class="ui segment mt20">
            <h2 class="ui header normal-fw"><span class="titleSquare"></span>查重</h2>
            <div class="ui divider"></div>
            <div class="ui list">
                <!-- 一个相似度 -->
                <div class="item" v-for="(item,index) in simiList">
                    <img class="ui avatar image" :src="item.avatarUrl">
                    <div class="content">
                        <div class="header">{{ item.solutionName }}</div>
                        <div class="description">两者存在相似</div>
                    </div>
                    <div class="right floated content">
                        <a class="ui button" :href="item.solutionUrl">详细</a>
                    </div>
                </div>
                <!-- /一个相似度 -->
            </div>
        </div>
    </section>
</template>
<script>
    export default {
        props: ['mID'],
        data() {
            return {
                simiList: [{
                    solutionName: '如何在做前端的时候偷懒',
                    solutionUrl: '',
                    avatarUrl: '/resource/rabit.jpg'
                }]

            };
        }
    }
</script>