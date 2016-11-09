<template>
	<div>
    	<myheader page="1"></myheader>
    	<mycontent></mycontent>
    	<solutions></solutions>
    	<mycomment></mycomment>
  	</div>
</template>

<script>
	import myheader from '../compenents/header.vue'
	import mycontent from './compenents/mContent.vue'
	import solutions from './compenents/solutions.vue'
	import mycomment from './compenents/mComment.vue'

	export default {
	  data(){
	    return {
	    }
	  },
	  components: {
	    myheader,
	    mycontent,
	    solutions,
	    mycomment
	  }
	}
</script>