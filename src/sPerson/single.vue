<template>
    <div>
        <myheader page="1"></myheader>
        <mycontent :mID="$route.params.id"></mycontent>
        <solutions :mID="$route.params.id"></solutions>
        <mytime :mID="$route.params.id"></mytime>
        <mycomment :mID="$route.params.id"></mycomment>
    </div>
</template>

<script>
    import myheader from '../compenents/header.vue'
    import mycontent from './compenents/mContent.vue'
    import solutions from './compenents/solutions.vue'
    import mycomment from './compenents/mComment.vue'
    import mytime from './compenents/assessmentTime.vue'

    export default {
        data() {
            return {}
        },
        mounted() {
            window.scrollTo(0, 0);
        },
        components: {
            myheader,
            mycontent,
            solutions,
            mycomment,
            mytime
        }
    }

</script>