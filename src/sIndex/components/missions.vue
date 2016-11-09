<style>
	
</style>

<template>
<div>
	<div class="ui one column grid">
		<div class="column">
			<a v-for="mission in missions" :href="mission.url" class="my card">
				<h3 class="header">{{ mission.missionName }}</h3>
				<p class="publish-time">发布于{{ mission.publishTime }}</p>
				<div class="money"></div>
				<div class="detail">
					<div class="single-detail">
						<span class="sub-text">大类>小类</span>
						<p class="main-text">产品>需求分析</p>
					</div>
					<div class="single-detail">
						<span class="sub-text">开始日期</span>
						<p class="main-text">2015-05-01</p>
					</div>
					<div class="single-detail">
						<span class="sub-text">截止日期</span>
						<p class="main-text">2015-05-06</p>
					</div>
					<div class="single-detail">
						<span class="sub-text">参与人数</span>
						<p class="main-text">10 人</p>
					</div>
				</div>
				<div class="right-section">
					<div class="money-budget" style="line-height: 110px">
						<span class="money-number">10,000</span>
						<span class="budget-RMB">RMB</span>
					</div>
				</div>
			</a>
		</div>
	</div>
	<a href="#" class="ui fluid button" style="margin-top: 35px;">寻找更多任务</a>
</div>
</template>

<script>
	let data = {
		missions:undefined
	}
	data.missions=[
		{
			missionName:'如何在做前端的时候偷懒',
			publishTime:'2016-5-2 15:59:52'
		},
		{
			missionName:'如何在做前端的时候偷懒',
			publishTime:'2016-5-2 15:59:52'
		}
	]

	export default{
		data() {
			return data;
		}
	}



</script>