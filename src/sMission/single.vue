<template>
    <div>
        <myheader page="2"></myheader>
        <mycontent :mID="$route.params.id"></mycontent>
        <myjoin :mID="$route.params.id"></myjoin>
        <mycomment :mID="$route.params.id"></mycomment>
        <MyFooter></MyFooter>
    </div>
</template>

<script>
    import myheader from '../compenents/header.vue'
    import MyFooter from '../compenents/footer.vue'
    import mycontent from './compenents/mContent.vue'
    import myjoin from './compenents/mJoinPerson.vue'
    import mycomment from './compenents/mComment.vue'

    let data = {};

    export default {
        data() {
            return data;
        },
        mounted() {
            window.scrollTo(0, 0);
        },
        components: {
            myheader,
            mycontent,
            myjoin,
            mycomment,
            MyFooter
        }
    }
</script>