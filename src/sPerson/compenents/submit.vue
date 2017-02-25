<style scoped>
    #changeInfoAvatar {
        height: 300px;
    }
</style>


<template>
	<section class="ui container mt20">
		<div class="ui segment">
			<h1 class="ui header normal-fw"><span class="titleSquare"></span>用户信息编辑</h1>
			<div class="ui divider"></div>
			<div class="tac" style="margin-bottom: 20px;">
				<img :src="imageSrc" id="changeInfoAvatar" class="ui centered medium circular image"/>
				<h2 class="ui header normal-fw">十三三长得高</h2>
				<a @click="addPic" class="ui button tac w500">上传新头像</a>
				<!--图片上传input隐藏-->
				<input accept="image/*" type="file" id="pic" style="display: none;" @change="preImg('pic','picDisplay')" />
			</div>
			<div class="ui form" style="padding-left: 50px;" id="submitMissionForm">
				<div class="three fields">
					<div class="field tac">
						<label class="normal-fw fz16">擅长领域</label>
						<select class="ui fluid dropdown" v-model="formData.className">
							<option v-for="option in className" :value="option">
								{{ option }}
							</option>
						</select>
					</div>
					<div class="field tac">
						<label class="normal-fw fz16">所属地区</label>
						<select class="ui fluid dropdown" v-model="formData.location">
							<option v-for="option in location" :value="option">
								{{ option }}
							</option>
						</select>
					</div>
					<div class="field tac">
						<label class="normal-fw fz16">所属学校</label>
						<select class="ui fluid dropdown" v-model="formData.school">
							<option v-for="option in school" :value="option">
								{{ option }}
							</option>
						</select>
					</div>
				</div>
				<div class="field tac">
					<label class="normal-fw fz16">个人简介</label>
					<textarea cols="30" rows="10" v-model="formData.content"></textarea>
				</div>
      			<div class="field">
					<button class="ui fluid button" type="submit" @click="submitForm">提交</button>
      			</div>
      			<div class="ui error message w500" style="margin-left: 100px;"></div>	
			</div>
		</div>
	</section>
</template>

<script>
    import User from '../../services/user.js'
    import Person from '../../services/person.js'
    import Util from '../../services/util.js'

    let data = {
        imageSrc: 'resource/rabit.jpg',
        formData: {
            file: '',
            id: User.getUser().id,
            content: '啦啦啦',
            className: '前端开发',
            location: '杭州',
            school: '浙江工业大学'
        },
        className: [
            '全部',
            '平面设计',
            '前端开发',
            'UI设计',
            '移动开发',
            '后端开发'
        ],
        location: [
            '全部',
            '杭州',
            '温州'
        ],
        school: [
            '浙江工业大学',
            '温州大学',
            '杭州电子科技大学',
            '其它'
        ]
    };

    //获取头像
    Person.getContent(data.formData.id).then((res) => {
        data.imageSrc = res.avatarUrl;
    }, (msg) => {
        // alert(msg);
    });

    export default {
        data() {
            return data;
        },
        methods: {
            submitForm() {
                User.editInformation(data.formData).then(() => {
                    // 编辑成功
                    Util.changeView("/");
                }, () => {
                    // 编辑失败
                });
            },
            addPic() {
                var pic = document.getElementById('pic');
                pic.click();
                return;
            },
            preImg(sourceId) {
                if (typeof FileReader === 'undefined') {
                    alert('浏览器等级低于IE9，无法进行头像处理');
                    return;
                }
                var reader = new FileReader();

                reader.onload = function(e) {
                    //set Image Src here
                    data.imageSrc = this.result;
                }
                data.formData.file = document.getElementById(sourceId).files[0];
                reader.readAsDataURL(data.formData.file);
            }
        }
    }
</script>