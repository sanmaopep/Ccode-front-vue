<style lang="less" scoped>
	.animation{
		transition: all 1.5s;
		opacity: 1;
	}
	.hideCard{
		opacity: 0;
	}
</style>


<template>
	<section class="ui container animation" :class="{'hideCard':hideCard}" style="margin-top: 20px;">
		<div class="ui segment">
			<h2 class="ui header normal-fw"><span class="titleSquare"></span>评论</h2>
			<div class="ui divider"></div>
			<div class="ui comments">
				<div class="comment" v-for="(item,index) in comments">
					<a class="avatar">
						<img :src="item.avatarUrl">
					</a>
					<div class="content">
						<a class="author">{{ item.name }}</a>
						<div class="metadata">
							<span class="date">{{ item.time }}</span>
						</div>
						<div class="text">
							{{ item.content }}
						</div>
					</div>
				</div>
			</div>
			<div class="ui reply form">
				<div class="field">
					<textarea v-model="replyContent"></textarea>
				</div>
				<button class="ui button" @click="reply">回复</button>
			</div>
		</div>
	</section>
</template>

<script>
	import scroll from '../../services/scrollUtil.js'

	let data ={
		hideCard: true,
		comments:[
			{
				avatarUrl:'resource/cute.jpg',
				name:'十三三长得高',
				time:'2016/5/5 12:00',
				content:'话说研究如何在前端偷懒是一件非常有意义的事情'
			}
		],
		replyContent:''
	}

	export default{
		mounted(){
			let self = this
			scroll.scrollToDOMShow(this.$el,() => {
				setTimeout(()=>{
					self.hideCard = false;
				},100);
			});
		},
		data(){
			return data;
		},
		methods:{
			reply(){
				if(data.replyContent == ''){
					alert("评论不得为空");
				}else{
					//TODO 评论不为空的情况
				}
			}
		}
	}
</script>