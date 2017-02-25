<style lang="less" scoped>
    .animation {
        transition: all 1s;
        opacity: 1;
    }
    
    .hideCard {
        opacity: 0;
    }
</style>

<template>
	<section class="ui container animation" style="margin-top: 20px;">
		<div class="ui segment">
			<div class="tac">
				<img class="ui centered medium circular image" :src="avatarUrl">
			</div>
			<h1 class="tac ui header">
				{{ name }}
			</h1>
			<div id="personDetail" class="tac">
				{{ content }}
			</div>
			<div class="ui divider"></div>
			<div class="ui three statistics" style="margin-top: 20px;">
				<div class="statistic">
					<div class="label">擅长领域</div>
					<div class="text value">{{ className }}</div>
				</div>
				<div class="statistic">
					<div class="label">所在地区</div>
					<div class="text value">{{ location }}</div>
				</div>
				<div class="statistic">
					<div class="label">所在学校</div>
					<div class="text value YaHei">{{ school }}</div>
				</div>
			</div>
		</div>
		<a href="user.html#/changeInfo" class="ui button fluid" v-if="mID == yourId">修改资料</a>
	</section>
</template>

<script>
    import person from '../../services/person'
    import User from '../../services/user.js'

    let data = {
        hideCard: true,
        avatarUrl: 'resource/rabit.jpg',
        location: 'HZ',
        school: 'ZJUT',
        className: '前端开发',
        name: 'Jack',
        content: '',
        yourId: User.getUser().id
    }

    //获取人才内容
    function getPersonContent(id) {
        person.getContent(id).then((res) => {
            for (let key in res) {
                data[key] = res[key];
            }
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
            getPersonContent(self.mID);
        },
        data() {
            return data;
        }
    }
</script>