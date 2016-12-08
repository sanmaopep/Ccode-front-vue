<template>
    <section>
        <div class="ui clearing container">
            <search @search="submitSearch" @change="changeSelect"></search>
            <div class="ui divider"></div>
            <mission v-for="(item,index) in list" :data="list[index]"></mission>
        </div>
        <scollTop></scollTop>
    </section>
</template>
<script>
    import mission from './singleInList.vue'
    import search from './selectList.vue'
    import rmission from '../../services/mission.js'
    import scrollUtil from '../../services/scrollUtil.js'
    import scollTop from '../../compenents/scrollTop.vue'

    let data = {
        className: '',
        state: '',
        location: '',
        keyword: '',
        list: [],
        currPage: 1
    }

    // 重新加载任务列表
    function reloadMission() {
        data.list = [];
        let req = {
            keyword: data.keyword,
            className: data.className,
            state: data.state,
            location: data.location
        }
        data.currPage = 1;
        console.log(req);
        rmission.getList(req, data.currPage++, 8).then((res) => {
            for (let i = 0; i < res.length; i++) {
                // 添加link
                res[i]["link"] = '#/single/' + res[i]["id"];
                data.list.push(res[i]);
            }
        }, (msg) => {});
    }

    reloadMission();

    export default {
        data() {
            return data;
        },
        mounted() {
            let self = this;
            scrollUtil.addScrollToBottom((event) => {
                self.loadMore();
            });
        },
        methods: {
            loadMore() {
                let req = {
                    keyword: data.keyword,
                    className: data.className,
                    state: data.state,
                    location: data.location
                }
                rmission.getList(req, data.currPage++, 8).then((res) => {
                    for (let i = 0; i < res.length; i++) {
                        // 添加link
                        res[i]["link"] = '#/single/' + res[i]["id"];
                        data.list.push(res[i]);
                    }
                }, (msg) => {});
            },
            // 更改筛选条件
            changeSelect(selection) {
                data.className = selection.class;
                data.location = selection.location;
                data.state = selection.state;
                data.keyword = '';
                setTimeout(reloadMission, 100);
            },
            // 按下搜索按钮
            submitSearch(keyword) {
                data.keyword = keyword;
                setTimeout(reloadMission, 100);
            }
        },
        components: {
            mission,
            scollTop,
            search
        }
    }
</script>