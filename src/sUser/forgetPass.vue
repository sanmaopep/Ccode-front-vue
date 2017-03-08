<style type="less">

</style>

<template>
    <div>
        <myheader page="4"></myheader>
        <forget></forget>
        <MyFooter></MyFooter>
    </div>
</template>

<script>
    import myheader from '../compenents/header.vue'
    import MyFooter from '../compenents/footer.vue'
    import forget from './components/forgetForm.vue'

    let mydata = {};

    export default {
        data() {
            return mydata;
        },
        components: {
            MyFooter,
            myheader,
            forget
        }
    }
</script>