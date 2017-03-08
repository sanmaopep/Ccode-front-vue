<template>
    <section class="ui container mt20">
        <div class="ui segment">
            <h1 class="ui header normal-fw"><span class="titleSquare"></span>用户信息编辑</h1>
            <div class="ui divider"></div>
            <div class="tac" style="margin-bottom: 20px;">
                <img :src="imageSrc" id="changeInfoAvatar" class="ui centered medium circular image" />
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
							<option v-for="option in className" :value="option.value">
								{{ option.name }}
							</option>
						</select>
                    </div>
                    <div class="field tac">
                        <label class="normal-fw fz16">所属地区</label>
                        <select class="ui fluid dropdown" v-model="formData.location">
							<option v-for="option in location" :value="option.value">
								{{ option.name }}
							</option>
						</select>
                    </div>
                    <div class="field tac">
                        <label class="normal-fw fz16">所属学校</label>
                        <input type="text" v-model="formData.school">
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
    import constantStore from '../../vStore/constantStore.js'

    export default {
        data() {
            return {
                imageSrc: 'resource/rabit.jpg',
                formData: {
                    file: '',
                    id: User.getUser().id,
                    content: '啦啦啦',
                    className: '',
                    location: '',
                    school: '浙江工业大学'
                }
            };
        },
        computed: {
            className() {
                return constantStore.state.className;
            },
            location() {
                return constantStore.state.location;
            }
        },
        mounted() {
            let self = this;
            //获取头像
            Person.getContent(data.formData.id).then((res) => {
                self.imageSrc = res.avatarUrl;
            }, (msg) => {
                // alert(msg);
            });
        },
        methods: {
            submitForm() {
                let data = this;
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
                let data = this;
                if (typeof FileReader === 'undefined') {
                    alert('浏览器等级低于IE9，无法进行头像处理');
                    return;
                }
                var reader = new FileReader();

                reader.onload = function (e) {
                    //set Image Src here
                    data.imageSrc = this.result;
                }
                data.formData.file = document.getElementById(sourceId).files[0];
                reader.readAsDataURL(data.formData.file);
            }
        }
    }

</script>