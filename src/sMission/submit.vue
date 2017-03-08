<template>
  <div>
    <myheader page="2"></myheader>
    <submitForm></submitForm>
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