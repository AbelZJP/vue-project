<template>
	
	<div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="str in swiperlist" :style="{ backgroundImage: 'url(' + str + ')' }"></div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>
<style lang="less">
	 .swiper-container {
        width: 100%;
        height: 10rem;
        .swiper-wrapper {
            width: 100%;
            height: 100%;
	        .swiper-slide {
	            background-position: center;
	            background-size: cover;
	            width: 100%;
	            height: 100%;
           		 img {
	                width: 100%;
	                height: 100%;
	           	}
	        }
        }
        .swiper-pagination-bullet {
            width:0.833rem;
            height: 0.833rem;
            display: inline-block;
            background: #7c5e53;
        }
    }
</style>
<script>
	import Swiper from "swiper";
	import "swiper/dist/css/swiper.min.css";
	export default {
		props: ["swiperlist"],
		
		mounted() {
			var swiper = new Swiper('.swiper-container', {
				// 循环
				loop: true,
				// 自动轮播
				autoplay: {
					// 间隔时间
					delay: 2000,
					// 手动滑动之后是否停止轮播
					disableOnInteraction: false,
				},
				// 分页器
				pagination: {
					// 绑定元素
					el:".swiper-pagination",
					// 样式，小圆点
					type: "bullets",
					// 点击切换
					clickable: true
				}
			})
		}
	}
</script>