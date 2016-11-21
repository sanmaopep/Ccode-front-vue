<template>
	<section class="ui container mt20">
		<div class="ui segment">
			<h1 class="ui header normal-fw"><span class="titleSquare"></span>发布任务</h1>
			<div class="ui divider"></div>
			<div class="ui form" style="padding-left: 50px;" id="submitMissionForm">
				<inputrow label="任务名称" v-model="formData.missionName" :eMsg="eMsg.missionName"></inputrow>
				<div class="inline field">
					<label class="normal-fw fz16 w100">任务分类</label>
					<select class="ui fluid dropdown w500" v-model="formData.className">
						<option v-for="option in classList" :value="option.value">
							{{ option.name }}
						</option>
					</select>
				</div>
				<monthrow label="开始日期" v-model="formData.startDate"></monthrow>
				<monthrow label="结束日期" v-model="formData.endDate"></monthrow>
				<moneyrow label="悬赏" v-model="formData.money"></moneyrow>
				<editorrow label="任务说明" v-model="formData.description"></editorrow>
				<agreerow v-model="agree"></agreerow>
      			<div class="inline field">
					<label class="w100"></label>
					<button class="ui button" type="submit" style="width: 135px;" @click="submitForm">提交</button>
      			</div>
			</div>
		</div>
	</section>
</template>

<script>
    import inputrow from '../../compenents/inputRow.vue'
    import moneyrow from '../../compenents/moneyRow.vue'
    import monthrow from '../../compenents/monthRow.vue'
    import editorrow from '../../compenents/editorRow.vue'
    import agreerow from '../../compenents/agreeRow.vue'
    import mission from '../../services/mission.js'
    import Util from '../../services/util.js'

    let classList = [{
        name: '移动开发',
        value: '0'
    }, {
        name: '前端开发',
        value: '1'
    }, {
        name: '后台开发',
        value: '2'
    }]

    let data = {
        formData: {
            missionName: '测试题目',
            className: classList[0].value,
            startDate: '',
            endDate: '',
            money: 0,
            description: ''
        },
        agree: false,
        eMsg: {
            missionName: false
        },
        classList: classList
    };

    /* 检查表单 */
    function checkForm() {
        if (data.formData.missionName === '') {
            data.eMsg.missionName = "任务名不得为空";
            return false;
        } else if (data.formData.missionName.length > 20) {
            data.eMsg.missionName = "任务名不得大于20个字符";
            return false;
        } else {
            data.eMsg.missionName = false;
            return true;
        }
        return true;
    }

    export default {
        data() {
            return data;
        },
        components: {
            inputrow,
            moneyrow,
            monthrow,
            editorrow,
            agreerow
        },
        methods: {
            submitForm() {
                let template = ["missionName", "className", "startDate", "endDate", "money", "description"];
                if (checkForm() && data.agree) {
                    //TODO 添加任务逻辑
                    mission.add(Util.getSubObject(data.formData, template)).then(() => {
                        //添加成功
                    }, (msg) => {
                        // alert(msg);
                    });
                }
            }
        }
    }
</script>