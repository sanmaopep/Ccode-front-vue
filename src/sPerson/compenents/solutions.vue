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

	let solutionList = [
		{
			title:'如何在做前端的时候偷懒',
			avatarUrl:'resource/rabit.jpg',
			detail:'测试内容...',
			className:'移动开发',
			writer:'haha',
			money:'200',
			link:'#solutionID=12'
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
			
		},
		methods:{
			loadMore() {
				
				
			}
		},
		components:{
			solution,
			scollTop
		}
	}
</script>