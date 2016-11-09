<style lang="less" scoped>
	.animation{
		transition: all 1s;
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
			<h1 class="ui header normal-fw"><span class="titleSquare"></span>{{ title }}</h1>
			<div class="ui divider" style="margin-bottom: 0px;"></div>
			<div class="row" style="margin-bottom: 20px;">
				<p class="sub-info">
					发布于 {{ publishTime }}
					<span class="ml50">{{ className }}</span>
					<span class="fr">发布者 : {{ writer }}</span>
				</p>
			</div>
			<div id="missionContent" v-html="content">
			</div>
		</div>
		<a href="#" class="ui fluid button">了解发布者</a>
	</section>
</template>

<script>
	let data = {
		hideCard:true,
		title:'如何在做前端的时候偷懒',
		publishTime:'2015年6月23日 12:00',
		className:'前端开发',
		writer:'毛怡伟',
		writerID:123,
		content:'<p>公司之间永远存在竞争，看谁来的早，看谁来的晚，看谁泡面吃的多，看谁黑眼圈最大，然而领先的公司不同，他们比的是看谁更会玩健康，看谁的团队更团结。让我们拭目以待杭城的第一座互联网健身房属于哪一个“最健”团队！</p>',
	}

	export default{
		created(){
			let self = this;
			setTimeout(()=>{
				self.hideCard = false;
			},200);
		},
		data(){
			return data;
		}
	}

</script>