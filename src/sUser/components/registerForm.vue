<style type="less" scoped>
    .eMsg{ margin-left: 20px; color: red; }
</style>

<template>
<section class="ui container mt20">
	<div class="ui segment">
		<h1 class="ui header normal-fw"><span class="titleSquare"></span>新用户注册</h1>
		<div class="ui divider"></div>
		<div class="ui form" style="padding-left: 50px;" id="registerForm">
			<div class="inline field" :class="{error : eMsg.username}">
				<label class="normal-fw fz16 w100">用户名</label>
				<input class="w500" type="text" v-model="formData.username">
				<span v-if="eMsg.username" class="eMsg">{{ eMsg.username }}</span>
			</div>
			<div class="inline field">
					<label class="normal-fw fz16 w100">任务类别</label>
					<select class="ui fluid dropdown w500" v-model="formData.role">
						<option v-for="option in roleList" :value="option.value">
							{{ option.name }}
						</option>
					</select>
				</div>
			<div class="inline field" :class="{error : eMsg.phone}">
				<label class="normal-fw fz16 w100">手机</label>
				<input style="width: 350px;" v-model="formData.phone">
				<button class="ui button" style="width: 143px;" :disabled="vertifySuccess"
				@click="clickVertify">
				{{ vertifyContent }}</button>
				<span v-if="eMsg.phone" class="eMsg">{{ eMsg.phone }}</span>
			</div>
			<div class="inline field" :class="{error : eMsg.vertifyNum}">
				<label class="normal-fw fz16 w100">验证码</label>
				<input class="w500" type="text" v-model="formData.vertifyNum">
				<span v-if="eMsg.vertifyNum" class="eMsg">{{ eMsg.vertifyNum }}</span>
			</div>
			<div class="inline field" :class="{error : eMsg.password}">
				<label class="normal-fw fz16 w100">密码</label>
				<input class="w500" type="password" v-model="formData.password">
				<span v-if="eMsg.password" class="eMsg">{{ eMsg.password }}</span>
			</div>
			<div class="inline field" :class="{error : eMsg.againPassword}">
				<label class="normal-fw fz16 w100">重复密码</label>
				<input class="w500" type="password" v-model="formData.againPassword">
				<span v-if="eMsg.againPassword" class="eMsg">{{ eMsg.againPassword }}</span>
			</div>
			<div class="inline field" :class="{error : eMsg.agreeCcode}">
				<label class="w100"></label>
				<div class="ui checkbox">
					<input type="checkbox" v-model="formData.checked">
  					<label>同意  
  						<a href="#">Ccode服务条款</a>
						<span v-if="eMsg.agreeCcode" class="eMsg">{{ eMsg.agreeCcode }}</span>
  					</label>
  					
				</div>
  			</div>
  			<div class="inline field">
				<label class="w100"></label>
				<button class="ui button" style="width: 135px;" @click="clickSubmit">提交</button>
  			</div>
  			<div class="ui error message w500" style="margin-left: 100px;"></div>	
		</div>
	</div>
</section>
</template>

<script>
    import MyUser from '../../services/user.js'
    import Util from '../../services/util.js'

    let data = {
        vertifyContent: "获取验证码",
        vertifySuccess: false,
        roleList: [{
            name: "开发",
            value: "DEVELOPER"
        }, {
            name: "企业",
            value: "ENTERPRISE"
        }, {
            name: "教师",
            value: "REVIEWER"
        }],
        formData: {
            username: "sanmaopep1",
            password: "123456",
            // role has:'DEVELOPER','ENTERPRISE','REVIER'
            role: "DEVELOPER",
            againPassword: "123456",
            phone: "17816876927",
            vertifyNum: "",
            checked: false
        },
        eMsg: {
            username: undefined,
            phone: undefined,
            password: undefined,
            againPassword: undefined,
            vertifyNum: undefined,
            agreeCcode: undefined
        }
    }

    let methods = {
        // 按下发送验证码
        clickVertify: () => {
            // 验证手机号码正确性
            if (vertifyPhone()) {
                // 发送手机号码获取验证
                MyUser.requestPhoneVertify(data.formData.phone).then(() => {
                    // 获取验证码成功
                    let seconds = 60;
                    data.vertifyContent = "(60s重新获取)";
                    data.vertifySuccess = true;

                    // n秒后重新获取验证码的提示
                    let interval = setInterval(() => {
                        seconds--;
                        data.vertifyContent = "(" + seconds + "s重新获取)"
                        if (seconds <= 0) {
                            data.vertifySuccess = false;
                            data.vertifyContent = "获取验证码";
                            clearInterval(interval);
                        }
                    }, 1000);
                }, (message) => {
                    alert(message);
                });
            }
        },

        clickSubmit: () => {
            //验证表单
            if (vertifyForm()) {
                // alert("注册成功");
                //点击提交事件
                let template = ["username", "password", "phone", "vertifyNum", "role"];
                MyUser.register(Util.getSubObject(data.formData, template)).then(() => {
                    // 注册成功
                }, (message) => {
                    //TODO 注册失败
                    // alert(message);
                });
            }
        }
    }

    // 验证手机号码
    function vertifyPhone() {
        let formData = data.formData;
        let eMsg = {
            phone: undefined
        };

        if (!Util.vertifyPhone(formData.phone)) {
            eMsg.phone = "手机号码格式有误";
        }

        // 更新后的错误信息进行赋值
        data.eMsg = eMsg;
        let pass = true;
        for (let key in eMsg) {
            if (eMsg[key] !== undefined) {
                pass = false;
            }
        }

        if (pass) {
            return true;
        } else {
            return false;
        }
    }

    // 验证表单
    function vertifyForm() {
        let formData = data.formData;
        let eMsg = {
            username: undefined,
            phone: undefined,
            password: undefined,
            againPassword: undefined,
            vertifyNum: undefined,
            agreeCcode: undefined
        };

        if (formData.username === "") {
            eMsg.username = "用户名为空";
        }

        if (formData.password.length < 4 || formData.password.length > 16) {
            eMsg.password = "密码长度要控制在4~16之间";
        }

        if (formData.password !== formData.againPassword) {
            eMsg.againPassword = "密码不一致"
        }

        if (!Util.vertifyPhone(formData.phone)) {
            eMsg.phone = "手机号码格式有误";
        }

        if (formData.checked === false) {
            eMsg.agreeCcode = "请同意";
        }

        // 更新后的错误信息进行赋值
        data.eMsg = eMsg;

        let pass = true;
        for (let key in eMsg) {
            if (eMsg[key] !== undefined) {
                pass = false;
            }
        }

        if (pass) {
            return true;
        } else {
            return false;
        }
    }

    export default {
        data() {
            return data;
        },
        methods: methods
    }
</script>