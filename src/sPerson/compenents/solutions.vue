<template>
	<section class="ui container animation" style="margin-top: 20px;">
		<div class="ui segment">
			<h2 class="ui header tac normal-fw">TA的方案</h2>
			<solution v-for="(item,index) in list" :data="list[index]"></solution>
		</div>
		<scollTop></scollTop>
	</section>
</template>

<script>
    import solution from './singleSolution.vue'
    import scrollUtil from '../../services/scrollUtil.js'
    import scollTop from '../../compenents/scrollTop.vue'
    import person from '../../services/person.js'

    let data = {
        list: []
    }

    function getList(id) {
        person.getPersonList(id).then((res) => {
            // 获取评论成功
            for (let i = 0; i < res.length; i++) {
                // 添加link
                res[i]["link"] = 'solution.html#/single/' + res[i]["id"];
                data.list.push(res[i]);
            }
        }, () => {
            // 失败
        });
    }


    export default {
        props: ["mID"],
        data() {
            return data;
        },
        created() {
            let self = this;
            getList(self.mID);
        },
        methods: {

        },
        components: {
            solution,
            scollTop
        }
    }
</script>