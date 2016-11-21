<style scoped lang="less">
    .dots {
        position: absolute;
        display: block;
        text-align: center;
        width: 100%;
        bottom: 5px;
        li {
            display: inline-block;
            list-style: none;
            margin: 5px;
            width: 14px;
            height: 14px;
            border-radius: 50%;
            border: 2px solid #FFFFFF;
            cursor: pointer;
        }
    }
    
    .dot {
        background-color: #FFFFFF;
    }
</style>
<template>
	<section id="slider">
		<div id="slider-images">
			<a v-for="(image,index) in images" class="slider-img " :class="{'slider-img-show':image.show}" :style="{'background-image': 'url(' + image.url + ')'  }">
			</a>
		</div>
		<a id="turnLeft" class="turn-icon" @click="turnLeft">＜</a>
		<a id="turnRight" class="turn-icon" @click="turnRight">＞</a>
		<ul class="dots">
			<li v-for="(image,index) in images" :class="{'dot':image.show}" @click="showImage(index)"></li>
		</ul>
	</section>
</template>
<script>
    let data = {
        imageNum: 2,
        currImage: 0,
        images: undefined
    }

    let methods = {
        turnRight: (e) => {
            let cur = data.currImage;
            data.images[cur].show = false;
            data.currImage = ++cur > data.imageNum - 1 ? 0 : cur;
            data.images[data.currImage].show = true;
        },
        turnLeft: (e) => {
            let cur = data.currImage;
            data.images[cur].show = false;
            data.currImage = --cur < 0 ? data.imageNum - 1 : cur;
            data.images[data.currImage].show = true;
        },
        showImage: (num) => {
            for (let i = 0; i < data.imageNum; i++) {
                if (num === i) {
                    data.images[i].show = true;
                } else {
                    data.images[i].show = false;
                }
            }
        }
    }

    data.images = [{
        url: 'resource/slider-test.jpg',
        show: true
    }, {
        url: 'resource/test2.jpg',
        show: false
    }];
    data.imageNum = data.images.length;

    export default {
        data() {
            return data;
        },
        methods: methods
    }
</script>