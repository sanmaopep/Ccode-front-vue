<style type="less" scoped>
	.eMsg{ margin-left: 20px; color: red; }
</style>

<template>
	<div class="inline field" :class="{error : eMsg}">
		<label class="normal-fw fz16 w100">{{ label }}</label>
		<input class="w500" type="text" :value="value" @input="onInput">
		<span v-if="eMsg" class="eMsg">{{ eMsg }}</span>
	</div>
</template>

<script>
	export default {
		props: ['eMsg', 'value', 'label'],
		data() {
			return {

			}
		},
		methods: {
			onInput() {
				this.$emit("input", event.target.value)
			}
		}
	}

</script>