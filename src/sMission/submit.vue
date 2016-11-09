<template>
  <div>
    <myheader page="2"></myheader>
    <submitForm></submitForm>
  </div>
</template>

<script>

import myheader from '../compenents/header.vue'
import submitForm from './compenents/submitMissionForm.vue'

export default {
  data(){
    return {
    }
  },
  components: {
    myheader,
    submitForm
  }
}
</script>
