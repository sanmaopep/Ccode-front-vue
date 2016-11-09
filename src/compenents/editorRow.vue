<style lang="css">
    #editor-trigger{
        height: 300px;
    }
    .moveup300{
    	position: relative;
    	top: -300px;
    }
    #editor-container{
    	display: inline-block;
        overflow: hidden;
        width: 600px;
        height: 320px;
    }
    .menu-group.clearfix{
        clear:none;
    }
    .menu-item.clearfix{
        clear:none;
    }
</style>

<template>
	<div class="inline field" style="height:320px;">
		<label class="normal-fw fz16 w100 moveup300">{{ label }}</label>
		<div id="editor-container">
	        <div id="editor-trigger">
	        </div>
	    </div>
</template>

<script>
import WangEditor from 'wangeditor'

let data = {
    editorContent: ''
}
let editor;

export default {
    props:['value','label'],
    data() {
        return data;
    },
    mounted() {
        editor = new WangEditor('editor-trigger');
        // 普通的自定义菜单
        editor.config.menus = [
            'bold',
            'underline',
            'italic',
            'strikethrough',
            'eraser',
            'forecolor',
            'bgcolor',
            '|',
            'link',
            'table',
            'emotion',
            '|',
            'img',
            'video',
            'insertcode'
         ];
        let self = this;
        // 变化时通知更改html
        editor.onchange = () => {
            data.editorContent = editor.$txt.html();
            // 触发change事件
            self.$emit('input',data.editorContent);
        }
        editor.create();
    },
    methods:{
        valueChange(event){
            editor.$txt.html(event.target.value);
        }
    }
}
</script>