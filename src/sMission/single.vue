<template>
	<div>
    	<myheader page="2"></myheader>
    	<mycontent></mycontent>
    	<myjoin></myjoin>
    	<mycomment></mycomment>
  	</div>
</template>

<script>
	import myheader from '../compenents/header.vue'
	import mycontent from './compenents/mContent.vue'
	import myjoin from './compenents/mJoinPerson.vue'
	import mycomment from './compenents/mComment.vue'

	let data = {
		id:0
	}

	export default {
	  data(){
	    return data;
	  },
	  mounted(){
	  	data.id = this.$route.params.id;
	  },
	  components: {
	    myheader,
	    mycontent,
	    myjoin,
	    mycomment
	  }
	}
</script>