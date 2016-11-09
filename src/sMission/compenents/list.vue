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
	import scrollUtil from '../../services/scrollUtil.js'
	import scollTop from '../../compenents/scrollTop.vue'

	let missionList = [
		{
			title:'如何在做前端的时候偷懒',
			publishTime:'2015-6-1 10:00:00',
			className:'移动开发',
			startDate:'2015-6-1',
			endDate:'2015-6-15',
			joinNum:'12',
			money:'200',
			link:'#/single/123'
		},
		{
			title:'如何在做前端的时候偷懒',
			publishTime:'2015-6-1 10:00:00',
			className:'移动开发',
			startDate:'2015-6-1',
			endDate:'2015-6-15',
			joinNum:'12',
			money:'200',
			link:'#/single/124'
		},
		{
			title:'如何在做前端的时候偷懒',
			publishTime:'2015-6-1 10:00:00',
			className:'移动开发',
			startDate:'2015-6-1',
			endDate:'2015-6-15',
			joinNum:'12',
			money:'200',
			link:'#/single/125'
		},
		{
			title:'如何在做前端的时候偷懒',
			publishTime:'2015-6-1 10:00:00',
			className:'移动开发',
			startDate:'2015-6-1',
			endDate:'2015-6-15',
			joinNum:'12',
			money:'200',
			link:'#/single/126'
		}
	]

	export default{
		data(){
			return {
				list:missionList
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
				let list = [
					{
						title:'如何在做前端的时候偷懒',
						publishTime:'2015-6-1 10:00:00',
						className:'移动开发',
						startDate:'2015-6-1',
						endDate:'2015-6-15',
						joinNum:'12',
						money:'200',
						link:'#/single/123'
					}
				]
				for(let i = 0;i < list.length;i++){
					this.list.push(list[i]);
				}
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
			mission,
			scollTop,
			search
		}
	}
</script>