<template>
    <div>
        <myheader page="3"></myheader>
        <submitForm :title="$route.params.missionTitle" :mID="$route.params.id" :originMoney="$route.params.money"></submitForm>
        <MyFooter></MyFooter>
    </div>
</template>

<script>
    import myheader from '../compenents/header.vue'
    import MyFooter from '../compenents/footer.vue'
    import submitForm from './compenents/submit.vue'

    export default {
        data() {
            return {}
        },
        components: {
            myheader,
            submitForm,
            MyFooter
        }
    }
</script>