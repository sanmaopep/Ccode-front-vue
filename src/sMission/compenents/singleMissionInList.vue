<style lang="less" scoped>
	.animation{
		transition: all .7s;
		position: relative;
		top: 0px;
		opacity: 1;
	}
	.hideCard{
		top: 30px;
		opacity: 0;
	}
</style>

<template>
	<div class="ui one column grid">
		<!-- 一个任务 -->
		<div class="column animation" :class="{'hideCard':hideCard}">
			<a :href="data.link" class="my card">
				<h3 class="header">{{ data.title }}</h3>
				<p class="publish-time">发布于{{ data.publishTime }}</p>
				<div class="money"></div>
				<div class="detail">
					<div class="single-detail">
						<span class="sub-text">类别</span>
						<p class="main-text">{{ data.className }}</p>
					</div>
					<div class="single-detail">
						<span class="sub-text">开始日期</span>
						<p class="main-text">{{ data.startDate }}</p>
					</div>
					<div class="single-detail">
						<span class="sub-text">截止日期</span>
						<p class="main-text">{{ data.endDate }}</p>
					</div>
					<div class="single-detail">
						<span class="sub-text">参与人数</span>
						<p class="main-text">{{ data.joinNum }} 人</p>
					</div>
				</div>
				<div class="right-section">
					<div class="money-budget" style="line-height: 110px">
						<span class="money-number">{{ data.money }}</span>
						<span class="budget-RMB">RMB</span>
					</div>
				</div>
			</a>
		</div>
		<!-- /一个任务 -->
	</div>
</template>

<script>
	export default{
		props:['data'],
		data(){
			return {
				hideCard: true
			}
		},
		created(){
			let self = this;
			setTimeout(()=>{
				self.hideCard = false;
			},100);
		},
		methods:{

		}
	}

</script>