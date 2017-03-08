<template>
    <div>
        <myheader page="2"></myheader>
        <mylist></mylist>
        <MyFooter></MyFooter>
    </div>
</template>

<script>
    import myheader from '../compenents/header.vue'
    import mylist from './compenents/list.vue'
    import MyFooter from '../compenents/footer.vue'

    export default {
        data() {
            return {}
        },
        components: {
            myheader,
            mylist,
            MyFooter
        }
    }
</script>