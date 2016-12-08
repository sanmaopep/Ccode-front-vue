<template>
	<section>
		<div class="ui clearing container">
			<search @search="submitSearch" @change="changeSelect"></search>
			<div class="ui divider"></div>
			<person v-for="(item,index) in list" :data="list[index]"></person>
		</div>
		<scollTop></scollTop>
	</section>
</template>

<script>
    import person from './singleInList.vue'
    import search from './selectList.vue'
    import scrollUtil from '../../services/scrollUtil.js'
    import scollTop from '../../compenents/scrollTop.vue'
    import rPerson from '../../services/person.js'

    let data = {
        className: '',
        location: '',
        keyword: '',
        list: [],
        currPage: 1
    }

    // 重新加载人才列表
    function reloadPerson() {
        data.list = [];
        let req = {
            keyword: data.keyword,
            className: data.className,
            location: data.location
        }
        data.currPage = 1;
        rPerson.getList(req, data.currPage++, 8).then((res) => {
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
                    location: data.location
                }
                rPerson.getList(req, data.currPage++, 8).then((res) => {
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
                data.keyword = '';
                setTimeout(reloadPerson, 100);
            },
            // 按下搜索按钮
            submitSearch(keyword) {
                data.keyword = keyword;
                setTimeout(reloadPerson, 100);
            }
        },
        components: {
            person,
            scollTop,
            search
        }
    }
</script>