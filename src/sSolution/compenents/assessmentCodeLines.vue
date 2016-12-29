<template>
    <section class="ui container">
        <div class="ui segment mt20">
            <h2 class="ui header normal-fw"><span class="titleSquare"></span>代码量</h2>
            <div class="ui divider"></div>
            <div class="ui four statistics">
                <div class="statistic">
                    <div class="label">代码总量</div>
                    <div class="value" style="font-size: 3rem;">{{ all }}</div>
                </div>
                <div class="statistic">
                    <div class="label">注释量</div>
                    <div class="value" style="font-size: 3rem;">{{ comment }}</div>
                </div>
                <div class="statistic">
                    <div class="label">空行总数</div>
                    <div class="value" style="font-size: 3rem;">{{ empty }}</div>
                </div>
                <div class="statistic">
                    <div class="label">实际代码量</div>
                    <div class="value" style="font-size: 3rem;">{{ real }}</div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    export default {
        props: ['mID'],
        data() {
            return {
                all:1234,
                comment:123,
                empty:500,
                real:1234
            };
        }
    }
</script>