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
				<img class="fluid-image ui circular image fl" style="width: 110px;height: 110px;" 
				:src="data.avatarUrl">
				<div class="info-section fl" style="margin-left: 30px;">
					<h3 class="header">{{ data.name }}</h3>
					<p class="meta-detail">{{ data.detail }}</p>
					<div class="money"></div>
					<div class="detail">
						<div class="single-detail">
							<span class="sub-text">擅长领域</span>
							<p class="main-text">{{ data.className }}</p>
						</div>
						<div class="single-detail">
							<span class="sub-text">地区</span>
							<p class="main-text">{{ data.location }}</p>
						</div>
						<div class="single-detail">
							<span class="sub-text">学校</span>
							<p class="main-text">{{ data.school }}</p>
						</div>
					</div>
				</div>
				<div class="right-section">
					<div class="money-budget" style="line-height: 110px">
						<span class="money-number">{{ data.score }}</span>
						<span class="budget-RMB">分</span>
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