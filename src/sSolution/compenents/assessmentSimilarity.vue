<template>
    <section class="ui container">
        <div class="ui segment mt20">
            <h2 class="ui header normal-fw"><span class="titleSquare"></span>查重</h2>
            <div class="ui divider"></div>
            <div class="ui list">
                <!-- 一个相似度 -->
                <div class="item" v-for="(item,index) in report.similarity">
                    <img class="ui avatar image" :src="item.avatarUrl">
                    <div class="content">
                        <div class="header">{{ item.solutionName }}</div>
                        <div class="description">git地址: {{ item.gitUrl }}</div>
                    </div>
                    <div class="right floated content">
                        <div class="ui button" @click="changeSolution(item.id)">详细</div>
                    </div>
                </div>
                <!-- /一个相似度 -->
            </div>
        </div>
    </section>
</template>
<script>
    import Util from '../../services/util.js'

    export default {
        props: ['mID', 'report'],
        data() {
            return {};
        },
        methods: {
            changeSolution(id) {
                Util.changeView("#/single/" + id);
                window.location.reload();
            }
        }
    }
</script>