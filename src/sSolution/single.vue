<template>
	<div>
		<myheader page="3"></myheader>
		<mycontent :mID="$route.params.id"></mycontent>
		<mycomment></mycomment>
	</div>
</template>
<script>
    import myheader from '../compenents/header.vue'
    import mycontent from './compenents/mContent.vue'
    import mycomment from './compenents/mComment.vue'

    export default {
        data() {
            return {}
        },
        components: {
            myheader,
            mycontent,
            mycomment
        }
    }
</script>