export default {
    url: "http://10.10.10.2:8080/CcodeRMS/" //本地测试url
        // url: "http://112.74.177.217:8080/CcodeRMS/" //阿里云测试url
}       opacity: 1;
    }
    
    .hideCard {
        opacity: 0;
    }
</style>


<template>
	<section class="ui container animation" style="margin-top: 20px;">
		<div class="ui segment">
			<h2 class="ui header normal-fw"><span class="titleSquare"></span>评论</h2>
			<div class="ui divider"></div>
			<div class="ui comments">
				<div class="comment" v-for="(item,index) in comments">
					<a class="avatar">
						<img :src="item.avatarUrl">
					</a>
					<div class="content">
						<a class="author">{{ item.name }}</a>
						<div class="metadata">
							<span class="date">{{ item.time }}</span>
						</div>
						<div class="text">
							{{ item.content }}
						</div>
					</div>
				</div>
			</div>
			<div class="ui reply form">
				<div class="field">
					<textarea v-model="replyContent"></textarea>
				</div>
				<button class="ui button" @click="reply">回复</button>
			</div>
		</div>
	</section>
</template>

<script>
    import scroll from '../../services/scrollUtil.js'
    import person from '../../services/person.js'

    let data = {
        hideCard: true,
        comments: [],
        replyContent: ''
    }

    function getComment(id) {
        person.getComments(id).then((res) => {
            // 获取评论成功
            data.comments = res;
        }, () => {
            // 失败
        })
    }

    export default {
        props: ['mID'],
        mounted() {
            let self = this
            scroll.scrollToDOMShow(this.$el, () => {
                setTimeout(() => {
                    self.hideCard = false;
                }, 100);
            });
            getComment(this.mID);
        },
        data() {
            return data;
        },
        methods: {
            reply() {
                if (data.replyContent == '') {
                    alert("评论不得为空");
                } else {
                    let self = this;
                    person.addComments(self.mID, self.replyContent).then(() => {
                        // 添加评论成功
                        // 重新加载评论
                        data.replyContent='';
                        getComment(self.mID);
                    }, () => {
                        // 添加失败
                    });
                }
            }
        }
    }
</script>