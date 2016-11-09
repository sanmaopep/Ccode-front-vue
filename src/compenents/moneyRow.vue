<template>
	<div class="inline field" >
		<label class="normal-fw fz16 w100">{{ label }}</label>
		<input class="w500" :value="value" @input="onInput" type="number"/>
		RMB
	</div>
</template>

<script>
	export default{
		props:['value','label','eMsg'],
		data(){
			return {
				label:'悬赏',
				value:0
			}
		},
		methods:{
			onInput(event){
				if(event.target.value < 0 || event.target.value==''){
					this.value = 0;
					this.$emit("input",0);
				}else{
					this.$emit("input",event.target.value);
				}
			}
		}
	}
</script>
