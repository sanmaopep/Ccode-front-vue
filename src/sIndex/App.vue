<template>
    <div>
        <Myheader page="0"></Myheader>
        <slider></slider>
        <story></story>
        <section class="ui clearing container">
            <div class="ui divider"></div>
            <h2 class="ui center aligned header">人才推荐</h2>
            <statistic></statistic>
            <best-person></best-person>
        </section>

        <section class="ui clearing container">
            <div class="ui divider"></div>
            <h2 class="ui center aligned header">最新任务</h2>
            <mission-statistic></mission-statistic>
            <missions></missions>
        </section>

        <MyFooter></MyFooter>
    </div>
</template>

<script>
    import Myheader from '../compenents/header.vue'
    import MyFooter from '../compenents/footer.vue'
    import slider from './components/slider.vue'
    import story from './components/story.vue'
    import statistic from './components/statistic.vue'
    import bestPerson from './components/bestPerson.vue'
    import missionStatistic from './components/missionStatistic.vue'
    import missions from './components/missions.vue'

    export default {
        components: {
            Myheader,
            MyFooter,
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