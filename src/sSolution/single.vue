<template>
	<div>
		<myheader page="3"></myheader>
		<mycontent :mID="$route.params.id" @getuser="knowUser"></mycontent>
        <git :mID="$route.params.id" :isCurrUser="isCurrUser"></git>
        <codelines :mID="$route.params.id"></codelines>
        <similarity :mID="$route.params.id"></similarity>
		<mycomment :mID="$route.params.id"></mycomment>
	</div>
</template>
<script>
    import myheader from '../compenents/header.vue'
    import mycontent from './compenents/mContent.vue'
    import mycomment from './compenents/mComment.vue'
    import git from './compenents/assessmentGit.vue'
    import similarity from './compenents/assessmentSimilarity.vue'
    import codelines from './compenents/assessmentCodeLines.vue'
    import User from '../services/user.js'

    export default {
        data() {
            return {
                isCurrUser: false
            }
        },
        components: {
            myheader,
            mycontent,
            mycomment,
            git,
            similarity,
            codelines
        },
        methods: {
            // 知道了Username是什么
            knowUser(username) {
                console.log("getUsername");
                console.log(username);
                this.isCurrUser = (username == User.getUser().username);
            }
        }
    }
</script>