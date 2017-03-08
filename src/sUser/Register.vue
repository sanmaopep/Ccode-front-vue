<style type="less">

</style>

<template>
	<div>
		<myheader page="4"></myheader>
		<register></register>
		<MyFooter></MyFooter>
	</div>
</template>

<script>
	import myheader from '../compenents/header.vue'
	import MyFooter from '../compenents/footer.vue'
	import register from './components/registerForm.vue'

	let mydata = {};

	export default {
		data() {
			return mydata;
		},
		components: {
			myheader,
			register,
			MyFooter
		}
	}
</script>