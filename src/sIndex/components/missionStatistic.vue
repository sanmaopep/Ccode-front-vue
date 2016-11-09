<style lang="less">
	
</style>

<template>
	<div class="ui two statistics" style="margin: 35px 0px;">
		<div class="statistic">
			<div class="value">{{ missionNum }}</div>
			<div class="label">任务进行中</div>
		</div>
		<div class="statistic">
			<div class="value">{{ rmbNum }}</div>
			<div class="label">RMB悬赏中</div>		
		</div>
	</div>
</template>

<script>
	let data = {
		missionNum: 1000,
		rmbNum: 100000
	}

	export default {
		data() {
			return data;
		}
	}
</script>