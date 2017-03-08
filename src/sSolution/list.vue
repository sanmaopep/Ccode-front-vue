<template>
  <div>
    <myheader page="3"></myheader>
    <mylist></mylist>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
  import myheader from '../compenents/header.vue'
  import MyFooter from '../compenents/footer.vue'
  import mylist from './compenents/list.vue'

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