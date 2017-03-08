<template>
    <section id="selectArea">
        <div class="ui clearing container" style="margin-top: 20px;">
            <div class="ui top attached segment">
                <div class="ui secondary menu">
                    <strong class="item" style="font-weight: bold;">分类:</strong>
                    <a v-for="(item,index) in className" class="item" :class="{'active': index === currClass}" @click="clickSelction(0,index)">{{ item.name }}</a>

                </div>
                <div class="ui secondary menu">
                    <strong class="item" style="font-weight: bold;">地区:</strong>
                    <a v-for="(item,index) in location" class="item" :class="{'active': index === currLocation}" @click="clickSelction(2,index)">{{ item.name }}</a>
                </div>
            </div>
            <div class="ui clearing bottom attached segment" style="padding: 5px;background: #EFF0F4;">
                <div class="header" style="float: left;margin: 5px 27px;">共 <strong>{{itemNum}}</strong> 个项目</div>
                <div class="ui input" id="mysearch" style="float: right;height: 32px;line-height: 1;margin-right: 10px;">
                    <input v-model="keyword" class="prompt" type="text" placeholder="请输入关键字">
                    <button class="ui basic button" type="submit" @click="submitSearch">搜一下</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import constantStore from '../../vStore/constantStore.js'

    // sortNum used in clickSelction
    const CLASS = 0;
    const STATE = 1;
    const LOCATION = 2;

    export default {
        data() {
            return {
                keyword: '',
                itemNum: 12,
                currClass: 0,
                currLocation: 0
            };
        },
        computed: {
            className() {
                return constantStore.state.className;
            },
            state() {
                return constantStore.state.state;
            },
            location() {
                return constantStore.state.location;
            }
        },
        mounted() {
            let data = this;
            let retData = {
                class: data.className[data.currClass].value,
                location: data.location[data.currLocation].value
            }
            this.$emit('change', retData);
        },
        methods: {
            clickSelction(sortNum, index) {
                let data = this;
                switch (sortNum) {
                    case CLASS:
                        data.currClass = index;
                        break;
                    case LOCATION:
                        data.currLocation = index;
                        break;
                    default:
                        break;
                }
                let retData = {
                    class: data.className[data.currClass].value,
                    location: data.location[data.currLocation].value
                }
                this.$emit('change', retData);
            },
            submitSearch() {
                let data = this;
                this.$emit('search', data.keyword);
            }
        }
    }

</script>