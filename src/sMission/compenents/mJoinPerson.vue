<style lang="less" scoped>
	.animation{
		transition: all 1.5s;
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
	<section class="ui container animation" :class="{'hideCard':hideCard}" style="margin-top: 20px;">
		<div class="ui segment">
			<h2 class="ui header normal-fw"><span class="titleSquare"></span>参与方案</h2>
			<div class="ui divider"></div>
			<div class="ui five column grid" style="margin:0 10px;">
				<div class="column" v-for="(item,index) in people">
					<div class="ui move up reveal">
						<!-- 被录用 -->
						<i v-if="item.admited" class="icon admited"></i>
						<div class="visible content" style="width: 100%;background: #ffffff;">
							<img class="fluid-image ui circular image" :src="item.avatarUrl">
						</div>
						<div class="hidden content">
							<div class="ui fluid card" style="box-shadow: none;padding-top: 15px;">
								<div class="center aligned content">
									<div class="header">{{ item.name }}</div>
									<div class="meta">
										<a>{{ item.school }}</a>
									</div>
									<div class="description">
										申请价格 <strong>{{ item.applyMoney }}</strong> RMB
									</div>
								</div>
								<div class="center aligned extra content">
									评分：<strong>{{ item.star }}</strong> 星
								</div>
							</div>
						</div>
					</div>
					<div style="text-align: center;margin-top: 5px;">
						<div class="ui pointing label" style="font-size: 16px;margin-bottom: 10px;line-height: 1.2;">
							{{ item.solutionName }}
						</div>
						<a :href="item.solutionUrl" class="ui fluid button">查看该方案</a>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import scroll from '../../services/scrollUtil.js'

	let data = {
		hideCard: true,
		people:[
			{
				avatarUrl:'resource/rabit.jpg',
				name:'十三三长得高',
				school:'蓝翔技术学院',
				applyMoney:'1000',
				star:5,
				solutionName:'巧妙用复制粘贴大法...',
				solutionUrl:'solution.html#id=1',
				admited:true
			}
		]
	}


	export default{
		mounted(){
			let self = this;
			scroll.scrollToDOMShow(this.$el,() => {
				setTimeout(()=>{
					self.hideCard = false;
				},100);
			});
		},
		data(){
			return data;
		}

	}
</script>