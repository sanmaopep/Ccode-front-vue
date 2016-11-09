<template>
	<div class="inline field" :class="{error : eMsg}">
		<label class="w100"></label>
		<div class="ui checkbox">
			<input type="checkbox" v-model="value" @click="onInput" @blur="onBlur">
			<label>同意  
				<a href="#">Ccode服务条款</a>
				<span v-if="eMsg" class="eMsg">&nbsp;&nbsp;&nbsp;{{ eMsg }}</span>
			</label>	
		</div>
	</div>
</template>

<script>
	export default{
		props:['value'],
		data(){
			return {
				eMsg: false
			}
		},
		methods:{
			onInput(event){
				// click事件之后才改变value，所以要反一下，很坑！
				this.$emit("input",!this.value);
			},
			/* 失去焦点 */
			onBlur(event){
				if(this.value === false){
					this.eMsg = '请同意';
				}else{
					this.eMsg = false;
				}
			}
		}
	}
</script>