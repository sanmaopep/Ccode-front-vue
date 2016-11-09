<template>
	<div>
    	<myheader page="2"></myheader>
    	<mycontent :mID="$route.params.id"></mycontent>
    	<myjoin></myjoin>
    	<mycomment></mycomment>
  	</div>
</template>

<script>
	import myheader from '../compenents/header.vue'
	import mycontent from './compenents/mContent.vue'
	import myjoin from './compenents/mJoinPerson.vue'
	import mycomment from './compenents/mComment.vue'

	export default {
	  data(){
	    return data;
	  },
	  components: {
	    myheader,
	    mycontent,
	    myjoin,
	    mycomment
	  }
	}
</script>