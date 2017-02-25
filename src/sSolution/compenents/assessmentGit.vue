<template>
    <section class="ui container">
        <div class="ui segment mt20">
            <h2 class="ui header normal-fw"><span class="titleSquare"></span>Git</h2>
            <div class="ui divider"></div>
            <div class="ui list">
                <div class="item">
                    <div class="content">
                        <div class="header">{{ gitInfo.info }} - {{ gitInfo.description }}</div>
                        <div class="description">{{ gitInfo.url }}</div>
                    </div>
                </div>
            </div>
            <div class="ui two column grid" v-if="isCurrUser">
                <div class="column">
                    <button class="ui fluid button" @click="sendGitClone" :disabled="disableToClickClone">{{ cloneBtnInfo }}</button>
                </div>
                <div class="column">
                    <a class="ui fluid button" onclick="$('#git').modal('show');">GIT 设置</a>
                </div>
                <div class="ui small modal" id="git">
                    <div class="header">Git Clone</div>
                    <div class="content">
                        <div class="ui form">
                            <div class="inline field">
                                <label class="w100">仓库说明</label>
                                <input type="text" class="w500" v-model="formData.gitDescription" />
                            </div>
                            <div class="inline field">
                                <label class="w100">Git地址</label>
                                <input type="text" class="w500" v-model="formData.gitUrl" />
                            </div>
                            <div class="inline field">
                                <label class="w100">用户名</label>
                                <input type="text" class="w500" v-model="formData.gitUsername" />
                            </div>
                            <div class="inline field">
                                <label class="w100">密码</label>
                                <input type="password" class="w500" v-model="formData.gitPassword" />
                            </div>
                            <div class="inline field">
                                <label class="w100"></label>
                                <div class="ui button" style="width: 215px;" @click="submitGitInfo">确定</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    import assessment from '../../services/assessment.js'
    import User from '../../services/user.js'
    import Util from '../../services/util.js'

    export default {
        props: ['mID', 'isCurrUser'],
        data() {
            return {
                cloneBtnInfo: 'Clone你的代码',
                disableToClickClone: false,
                gitInfo: {
                    url: "https://git.oschina.net/sanmaopep",
                    description: '1234',
                    lastClone: "2016/6/9-12:00:00",
                    info: '正在Clone',
                    cloning: 0
                },
                formData: {
                    gitDescription: "万才信息App",
                    gitUrl: "https://git.oschina.net/sanmaopep/wancaiappIOS.git",
                    gitUsername: "sanmaopep",
                    gitPassword: "513513mzq"
                }
            };
        },
        created() {
            let self = this;
            this.loadGitInfo();
            // 每隔10s检查一次clone状态
            setInterval(() => {
                self.loadGitInfo();
            }, 2 * 1000);
        },
        methods: {
            // 提交Git信息
            submitGitInfo() {
                let self = this;
                let template = ["gitDescription", "gitUrl", "gitUsername", "gitPassword"];
                assessment.addGit(self.mID, Util.getSubObject(self.formData, template)).then(() => {
                    // 添加成功
                }, () => {
                    // 添加失败
                });
            },
            // 发送GitClone请求
            sendGitClone() {
                let self = this;
                assessment.gitClone(self.mID).then(() => {
                    // 请求成功
                    self.cloneBtnInfo = "正在下载";
                    self.disableToClickClone = true;
                }, () => {
                    // 失败
                    self.cloneBtnInfo = "Clone你的代码";
                    self.disableToClickClone = false;
                });
            },
            // 加载GitUrl信息
            loadGitInfo() {
                let self = this;
                assessment.getGitInfo(self.mID).then((data) => {
                    // 成功
                    self.gitInfo = data;
                    let flag = self.gitInfo.cloning;
                    if (flag == 0) {
                        self.gitInfo.info = "Git为空";
                        self.cloneBtnInfo = "Clone你的代码";
                        self.disableToClickClone = false;
                    } else if (flag == 1) {
                        self.gitInfo.info = "正在Clone";
                        self.cloneBtnInfo = "正在下载";
                        self.disableToClickClone = true;
                    } else if (flag == 2) {
                        self.gitInfo.info = "Clone完成";
                        self.cloneBtnInfo = "Clone你的代码";
                        self.disableToClickClone = false;
                    }
                }, () => {
                    // 失败
                });
            }
        }
    }
</script>