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

	let solutionList = [
		{
			title:'如何在做前端的时候偷懒',
			avatarUrl:'resource/rabit.jpg',
			detail:'测试内容...',
			className:'移动开发',
			writer:'haha',
			money:'200',
			link:'solution.html#/single/234'
		}
	]

	export default{
		data(){
			return {
				list:solutionList
			}
		},
		mounted(){
			let self = this;
			scrollUtil.addScrollToBottom((event)=>{
				self.loadMore();
			});
		},
		methods:{
			loadMore() {
				
				
			},
			// 更改筛选条件
			changeSelect(selection){
				console.log(selection);
			},
			// 按下搜索按钮
			submitSearch(keyword){
				console.log('搜索：' + keyword);
			}
		},
		components:{
			solution,
			scollTop,
			search
		}
	}
</script>