<template lang="jade">
div
  myheader(page="0")
  slider
  story
  section.ui.clearing.container
    .ui.divider
    h2.ui.center.aligned.header 人才推荐
    statistic
    best-person
  section.ui.clearing.container
    .ui.divider
    h2.ui.center.aligned.header 最新任务
    mission-statistic
    missions
</template>

<script>
import Myheader from '../compenents/header.vue'
import slider from './components/slider.vue'
import story from './components/story.vue'
import statistic from './components/statistic.vue'
import bestPerson from './components/bestPerson.vue'
import missionStatistic from './components/missionStatistic.vue'
import missions from './components/missions.vue'

export default {
  components: {
    Myheader,
    slider,
    story,
    statistic,
    bestPerson,
    missionStatistic,
    missions
  }
}
</script>

<style lang="less">
</style>