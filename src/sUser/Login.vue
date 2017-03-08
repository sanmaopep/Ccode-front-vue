<style lang="less">
	#body {
		background-color: #DADADA;
		height: 100%;
	}
	
	#body .grid {
		height: 100%;
	}
	
	#body .image {
		margin-top: -100px;
	}
	
	#body .column {
		max-width: 450px;
	}
</style>

<template>
	<div id="body" class="ui middle aligned center aligned grid">
		<div class="column">
			<h2 class="ui teal image header" style="margin-bottom: 30px;">
				<img src="./assets/header-icon.png" height="381" width="1127" class="ui medium image">
			</h2>
			<div class="ui large form" id="loginForm">
				<div class="ui stacked segment">
					<div class="field">
						<div class="ui left icon input">
							<i class="icon username"></i>
							<input type="text" placeholder="输入用户名" v-model="formData.username">
						</div>
					</div>
					<div class="field">
						<div class="ui left icon input">
							<i class="icon password"></i>
							<input type="password" placeholder="输入密码" v-model="formData.password">
						</div>
					</div>
					<div class="ui fluid large teal submit button" @click="clickLogin">登录</div>
				</div>
				<div class="ui error message"></div>
			</div>
			<div class="ui message clearfix">
				<a class="fl" href="#/register">注册</a>
				<a class="fr" href="#/forget">忘记密码</a>
			</div>
		</div>
	</div>
</template>

<script>
	import User from '../services/user.js'

	let data = {
		formData: {
			username: "",
			password: ""
		}
	};

	let methods = {
		clickLogin: () => {
			User.login(data.formData).then(() => {
				//changeView
			}, (message) => {
				// alert(message);
			});
		}
	}

	export default {
		data() {
			return data;
		},
		methods: methods
	}
</script>