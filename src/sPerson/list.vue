<template>
    <div>
        <myheader page="1"></myheader>
        <mylist></mylist>
        <myfooter></myfooter>
    </div>
</template>

<script>
    import myheader from '../compenents/header.vue'
    import myfooter from '../compenents/footer.vue'
    import mylist from './compenents/list.vue'

    export default {
        data() {
            return {}
        },
        components: {
            myheader,
            mylist,
            myfooter
        }
    }
</script>