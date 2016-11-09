<template>
	<section class="ui container mt20">
		<div class="ui segment">
			<h1 class="ui header normal-fw"><span class="titleSquare"></span>新建方案</h1>
			<div class="ui divider"></div>
			<div class="ui form" style="padding-left: 50px;" id="submitMissionForm">
				<div class="inline field">
					<label class="normal-fw fz16 w100">任务名称</label>
					<input class="w500" type="text" :value="missionName" disabled>
					<a :href="missionLink" class="ui button">查看</a>
				</div>
				<div class="inline field">
					<label class="normal-fw fz16 w100">项目原价</label>
					<input class="w500" type="text" :value="originMoney+'  RMB'" disabled>
				</div>
				<inputrow label="方案名称" v-model="formData.solutionName" :eMsg="eMsg.solutionName"></inputrow>
				<moneyrow label="申请价格" v-model="formData.money"></moneyrow>
				<editorrow label="方案说明" v-model="formData.description"></editorrow>
				<agreerow v-model="formData.agree"></agreerow>
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
	import editorrow from '../../compenents/editorRow.vue'
	import agreerow from '../../compenents/agreeRow.vue'


	let data = {
		originMoney:123456,
		missionName:'How to be lazy',
		missionLink:'#mission',
		formData:{
			solutionName:'',
			missionID: 123,
			money: 0,
			description: '',
			agree: false
		},
		eMsg:{
			solutionName:''
		}
	};

	/* 检查表单 */
	function checkForm(){
		if(data.formData.solutionName === ''){
			data.eMsg.solutionName = "方案名不得为空" ;
		}else if(data.formData.solutionName.length > 20){
			data.eMsg.solutionName = "方案名不得大于20个字符" ;
		}else{
			data.eMsg.solutionName = false ;
		}
	}


	export default {
		data() {
			return data;
		},
		components:{
			inputrow,
			moneyrow ,
			editorrow ,
			agreerow
		},
		methods: {
			submitForm() {
				checkForm();
			}
		}
	}
</script>