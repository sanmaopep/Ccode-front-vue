<style lang="less" scoped>
    .animation {
        transition: all 1s;
        position: relative;
        top: 0px;
        opacity: 1;
    }
    
    .hideCard {
        top: 30px;
        opacity: 0;
    }
</style>
<template>
	<section class="ui container animation" style="margin-top: 20px;">
		<div class="ui segment">
			<h1 class="ui header normal-fw"><span class="titleSquare"></span>{{ title }}</h1>
			<div class="ui divider" style="margin-bottom: 0px;"></div>
			<div class="row" style="margin-bottom: 20px;">
				<p class="sub-info">
					发布于 {{ publishTime }}
					<span class="ml50">{{ className }}</span>
					<span class="fr">发布者 : {{ writer }}</span>
				</p>
			</div>
			<div id="missionContent" v-html="content">
			</div>
		</div>
        <a @click="deleteMe" class="ui fluid button" v-if="canDel">删除任务</a>
		<div class="ui segment">
			<div class="ui two statistics">
				<div class="statistic">
					<div class="label">开始时间</div>
					<div class="value">{{ startTime }}</div>
				</div>
				<div class="statistic">
					<div class="label">结束时间</div>
					<div class="value">{{ endTime }}</div>
				</div>
			</div>
		</div>
		<a :href="solutionAddUrl" class="ui fluid button">立即参与</a>   
	</section>
</template>
<script>
    import mission from '../../services/mission.js'
    import User from '../../services/user.js'

    let data = {
        mID: 123,
        hideCard: true,
        title: '如何在做前端的时候偷懒',
        publishTime: '2015年6月23日 12:00',
        className: '前端开发',
        writer: '毛怡伟',
        content: '<p>公司之间永远存在竞争，看谁来的早，看谁来的晚，看谁泡面吃的多，看谁黑眼圈最大，然而领先的公司不同，他们比的是看谁更会玩健康，看谁的团队更团结。让我们拭目以待杭城的第一座互联网健身房属于哪一个“最健”团队！</p><p>公司之间永远存在竞争，看谁来的早，看谁来的晚，看谁泡面吃的多，看谁黑眼圈最大，然而领先的公司不同，他们比的是看谁更会玩健康，看谁的团队更团结。让我们拭目以待杭城的第一座互联网健身房属于哪一个“最健”团队！</p><p>公司之间永远存在竞争，看谁来的早，看谁来的晚，看谁泡面吃的多，看谁黑眼圈最大，然而领先的 <img src = "resource/test-image.png" / > ',
        startTime: '2016/10/31',
        endTime: '2016/11/5',
        money: 123,
        solutionAddUrl: "#",
        canDel: false
    }

    //获取任务内容
    function getMissionContent(id) {
        mission.getContent(id).then((res) => {
            for (let key in res) {
                data[key] = res[key];
            }
            data.solutionAddUrl = "solution.html#/submit/" + id + '/' + data.title + '/' + data.money;
            data.canDel = (User.getUser().username === data.writer);
        }, (msg) => {
            // alert(msg);
        });
    }
    export default {
        props: ['mID'],
        created() {
            let self = this;
            setTimeout(() => {
                self.hideCard = false;
            }, 200);
            getMissionContent(self.mID);
            data.solutionAddUrl = "solution.html#/submit/" + self.mID + '/' + self.title + '/' + self.money;

        },
        data() {
            return data;
        },
        methods: {
            deleteMe() {
                mission.delete(this.mID).then(() => {
                    // 删除成功
                }, () => {
                    // 删除失败
                });
            }
        }
    }
</script>