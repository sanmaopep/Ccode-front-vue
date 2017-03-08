<template>
    <div>
        <myheader page="3"></myheader>
        <mycontent :mID="$route.params.id" @getuser="knowUser"></mycontent>
        <git :mID="$route.params.id" :isCurrUser="isCurrUser"></git>
        <codelines :mID="$route.params.id" :report="queryResult"></codelines>
        <similarity :mID="$route.params.id" :report="queryResult"></similarity>
        <mycomment :mID="$route.params.id"></mycomment>
        <MyFooter></MyFooter>
    </div>
</template>
<script>
    import myheader from '../compenents/header.vue'
    import MyFooter from '../compenents/footer.vue'
    import mycontent from './compenents/mContent.vue'
    import mycomment from './compenents/mComment.vue'
    import git from './compenents/assessmentGit.vue'
    import similarity from './compenents/assessmentSimilarity.vue'
    import codelines from './compenents/assessmentCodeLines.vue'
    import User from '../services/user.js'

    import assessment from '../services/assessment.js'

    export default {
        data() {
            return {
                isCurrUser: false,
                queryResult: {}
            }
        },
        components: {
            myheader,
            mycontent,
            mycomment,
            git,
            similarity,
            codelines,
            MyFooter
        },
        methods: {
            // 知道了Username是什么
            knowUser(username) {
                console.log("getUsername");
                console.log(username);
                this.isCurrUser = (username == User.getUser().username);
            }
        },
        mounted() {
            let id = this.$route.params.id;
            let self = this;
            window.scrollTo(0, 0);
            assessment.getCodeQueryResult(id).then((res) => {
                // 成功
                self.queryResult = res;
            }, (msg) => {
                // 失败
            })
        }
    }
</script>