<template>
  <div>
    <myheader page="1"></myheader>
    <submitForm></submitForm>
    <myfooter></myfooter>
  </div>
</template>

<script>
  import myheader from '../compenents/header.vue'
  import myfooter from '../compenents/footer.vue'
  import submitForm from './compenents/submit.vue'

  export default {
    data() {
      return {}
    },
    components: {
      myheader,
      submitForm,
      myfooter
    }
  }
</script>