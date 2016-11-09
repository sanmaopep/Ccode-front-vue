<template lang="html">
    <div id="editor-container">
        <div id="editor-trigger">
        </div>
        <input :bind="value" @change="valueChange">
    </div>
</template>

<script>
import WangEditor from 'wangeditor'

let data = {
    editorContent: ''
}
let editor;

export default {
    props:['value'],
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
            'unlink',
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

<style lang="css">

    #editor-trigger{
        height: 300px;
    }
    #editor-container{
        border-radius: 2px;
        overflow: hidden;
        border: 1px solid #CCC;
        width: 700px;
        height: 300px;
    }
    .menu-group.clearfix{
        clear:none;
    }
    .menu-item.clearfix{
        clear:none;
    }
    

</style>
