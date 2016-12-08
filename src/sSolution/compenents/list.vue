<template>
	<section>
		<div class="ui clearing container">
			<search @search="submitSearch" @change="changeSelect"></search>
			<div class="ui divider"></div>
			<solution v-for="(item,index) in list" :data="list[index]"></solution>
		</div>
		<scollTop></scollTop>
	</section>
</template>

<script>
    import solution from './singleInList.vue'
    import search from './selectList.vue'
    import scrollUtil from '../../services/scrollUtil.js'
    import scollTop from '../../compenents/scrollTop.vue'
    import rsolution from '../../services/solution.js'

    let data = {
        className: '',
        state: '',
        location: '',
        keyword: '',
        list: [],
        currPage: 1
    }

    // 重新加载任务列表
    function reloadSolution() {
        data.list = [];
        let req = {
            keyword: data.keyword,
            className: data.className,
            state: data.state,
            location: data.location
        }
        data.currPage = 1;
        console.log(req);
        rsolution.getList(req, data.currPage++, 8).then((res) => {
            for (let i = 0; i < res.length; i++) {
                // 添加link
                res[i]["link"] = '#/single/' + res[i]["id"];
                data.list.push(res[i]);
            }
        }, (msg) => {});
    }


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
                rsolution.getList(req, data.currPage++, 8).then((res) => {
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
                setTimeout(reloadSolution, 100);
            },
            // 按下搜索按钮
            submitSearch(keyword) {
                data.keyword = keyword;
                setTimeout(reloadSolution, 100);
            }
        },
        components: {
            solution,
            scollTop,
            search
        }
    }
</script>