<style lang="less">
	
</style>

<template>
	<div class="ui three statistics" style="margin-top: 35px">
		<div class="statistic">
			<div class="value">{{ schoolNum }}</div>
			<div class="label">所高校参与</div>
		</div>
		<div class="statistic">
			<div class="value">{{ peopleNum }}</div>
			<div class="label">人才已入驻</div>
		</div>
		<div class="statistic">
			<div class="value">{{ solutionNum }}</div>
			<div class="label">方案已提交</div>		
		</div>
	</div>
</template>

<script>
	let data = {
		schoolNum: 5,
		peopleNum: 1000,
		solutionNum: 1000
	}

	export default {
		data() {
			return data;
		}
	}
</script>