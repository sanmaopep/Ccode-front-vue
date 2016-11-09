<template>
  <div>
    <myheader page="3"></myheader>
    <mylist></mylist>
  </div>
</template>

<script>
import myheader from '../compenents/header.vue'
import mylist from './compenents/list.vue'

export default {
  data(){
    return {
    }
  },
  components: {
    myheader,
    mylist
  }
}
</script>
