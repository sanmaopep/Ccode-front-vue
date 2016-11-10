<template>
	<div>
		<div class="ui five column grid" style="margin-top: 35px;padding: 0px 50px;">
			<div class="column" v-for="person in persons">
				<div class="ui move up reveal">
					<div class="visible content" style="width: 100%;background: #ffffff;">
						<img class="fluid-image ui circular image" :src="person.url">
					</div>
					<div class="hidden content">
						<div class="ui fluid card" style="box-shadow: none;padding-top: 15px;">
							<div class="center aligned content">
								<div class="header">{{ person.userName }}</div>
								<div class="meta">
									<a>{{ person.schoolName }}</a>
								</div>
								<div class="description">
									评分 <strong>{{ person.star }}</strong> 星
								</div>
							</div>
							<div class="center aligned extra content">
								完成 {{ person.orderNum }} 单
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<a href="#" class="ui fluid button" style="margin-top: 35px;">寻找更多人才</a>
	</div>
</template>
<script>
	let data = {
		persons: undefined
	}

	data.persons = [
		{
			url:'/resource/头像第二弹.png',
			userName:'十三三长得高',
			schoolName:'蓝翔职业技术学院',
			star:'5',
			orderNum:'10'
		},
		{
			url:'/resource/头像第二弹.png',
			userName:'十三三长得高',
			schoolName:'蓝翔职业技术学院',
			star:'5',
			orderNum:'10'
		},
		{
			url:'/resource/头像第二弹.png',
			userName:'十三三长得高',
			schoolName:'蓝翔职业技术学院',
			star:'5',
			orderNum:'10'
		},
		{
			url:'/resource/头像第二弹.png',
			userName:'十三三长得高',
			schoolName:'蓝翔职业技术学院',
			star:'5',
			orderNum:'10'
		},
		{
			url:'/resource/头像第二弹.png',
			userName:'十三三长得高',
			schoolName:'蓝翔职业技术学院',
			star:'5',
			orderNum:'10'
		}
	]

	export default {
		data () {
			return data;
		}
	}
</script>
<style lang="less">

</style>