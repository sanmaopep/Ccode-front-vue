<style type="less">

</style>

<template>
	<div>
		<myheader page="4"></myheader>
		<forget></forget>
	</div>
</template>

<script>
    import myheader from '../compenents/header.vue'
    import forget from './components/forgetForm.vue'

    let mydata = {};

    export default {
        data() {
            return mydata;
        },
        components: {
            myheader,
            forget
        }
    }
</script>