<style scoped lang="less">
    #username {
        font-size: 20px;
    }
    
    .loginButton.item.button {
        font-size: 18px;
        display: none;
    }
    
    #username.noLogin,
    #quitLogin.noLogin {
        display: none;
    }
    
    .loginButton.item.button.noLogin {
        display: flex;
    }
    
    #quitLogin {
        font-size: 15px;
    }
</style>

<template>
	<header id="header">
		<div class="ui clearing segment">
			<div class="ui clearing container">
				<!-- 菜单栏 -->
				<div class="ui secondary pointing menu" style="border-bottom: 0px;font-size: 20px;">
					<div class="ui floated small image">
						<img src="./assets/header-icon.png" height="381" width="1127" alt="Ccode">
					</div>
					<a href="/" class="item" :class="{'active':page == 0}">首页</a>
					<a href="person.html" class="item" :class="{'active':page == 1}">人才</a>
					<a href="mission.html" class="item" :class="{'active':page == 2}">任务</a>
					<a href="solution.html" class="item" :class="{'active':page == 3}">方案</a>
					<div class="right menu">
						<a href="/singlePeople" id="username" class="item button" v-bind:class="{'noLogin':noLogin}">{{ username }}</a>
						<a id="quitLogin" class="item button" v-bind:class="{'noLogin':noLogin}" @click="quitUser">离开</a>
                        <a href="user.html#/login" class="loginButton item button" v-bind:class="{'noLogin':noLogin}">登录</a>
						<a href="user.html#/register" class="loginButton item button" v-bind:class="{'noLogin':noLogin}">注册</a>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
    import User from '../services/user'
    import Util from '../services/util.js'

    let user = User.getUser();
    console.log(user);

    let data = {
            username: user.username,
            noLogin: false
        }
        // 是否登录
    data.noLogin = (data.username === null || data.username === undefined);

    export default {
        props: ['page'],
        data() {
            return data;
        },
        methods: {
            quitUser() {
                User.quitUser();
                Util.changeView('/');
            }
        }
    }
</script>