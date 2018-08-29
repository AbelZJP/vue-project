<template>
	<div class="home">
		<div class="swiper">
			<Swiper :swiperlist="swiperlist"></Swiper>
		</div>
		<div class="title-list">
			<ul>
				<router-link :to="'/' + item.text" tag="li" v-for="(item, index) in titleList" :key="index">
					<a href="javascript:void(0);">
						<img :src="item.img" alt="">
						<p>{{item.title}}</p>
					</a>
				</router-link>
			</ul>
		</div>
		<div class="item-ad">
			<ul>
				<li v-for="(item, index) in ad" :key="index">
					<a href="javascript:;">
						<img :src="item.image" alt="" >
					</a>
				</li>
			</ul>
		</div>
		<GoodsList :data="phone" :dataAd="phoneAd"></GoodsList>
		<GoodsList :data="computer" :dataAd="computerAd"></GoodsList>
		<GoodsList :data="parts" :dataAd="partsAd"></GoodsList>
		<GoodsList :data="ai" :dataAd="aiAd"></GoodsList>
		<GoodsList :data="food" :dataAd="foodAd"></GoodsList>

	</div>
</template>

<script>
import Vue from "vue";
import Swiper from "../components/swiper/swiper.vue";
import GoodsList from "../components/goodslist/goodslist.vue";

export default {
	name: 'home',
	components: {
		Swiper,
		GoodsList
	},
	data() {
		return {
			swiperlist: [
			"http://www.51mkf.com/data/upload/mobile/special/s0/s0_05872413913852050.png",
			"http://www.51mkf.com/data/upload/mobile/special/s0/s0_05878310246908667.png",
			"http://www.51mkf.com/data/upload/mobile/special/s0/s0_05883503378391299.png"
			],
			titleList: [
	  		{ id: "1", text: "list", title: "分类", img: "http://www.51mkf.com/wap/images/browse_list_w.png"},
	  		{ id: "2", text: "shoppingcar", title: "购物车", img: "http://www.51mkf.com/wap/images/cart_w.png"},
	  		{ id: "3", text: "me", title: "我的商城", img: "http://www.51mkf.com/wap/images/member_w.png"},
	  		{ id: "5", title: "客户服务", img: "http://www.51mkf.com/wap/images/service_w.png"},
	  		{ id: "7", title: "门店列表", img: "http://www.51mkf.com/wap/images/mico_fenqi.png"}
	  		],
	  		ad: [],
	  		phone:[],
	  		phoneAd: "",
	  		computer:[],
	  		computerAd: "",
	  		parts: [],
	  		partsAd:"",
	  		ai: [],
	  		aiAd: "",
	  		food: [],
	  		foodAd: ""
		}
		
	},
	created() {
		this.$http.get('data/home.json')
		.then(({data}) => {
			this.ad = data.ad
			this.phone = data.phone
			this.phoneAd = data.phone_ad
			this.computer = data.computer
			this.computerAd = data.computer_ad
			//console.log(111,this.computer)
			this.parts = data.parts
			this.partsAd = data.parts_ad
			this.ai = data.ai
			this.aiAd = data.ai_ad
			this.food = data.food
			this.foodAd = data.food_ad
		})
	}
}
</script>
<style lang="less">
	.title-list {
		ul {
			overflow: hidden;
			padding: 20px 0;
    		background-color: #fff;
			li {
				width: 20%;
				float: left;
				padding: 10px 0 5px 0;
				text-align: center;
				a {
					img {
						width: 50px;
						height: 50px;
					}
					p {
						color: #333;
					}
				}
			}
		}
	}
	.item-ad {
		ul {
			overflow: hidden;
			li {
				box-sizing: border-box;
				border-right: 1px solid #eee;
				float: left;
				width: 25%;
				height: 10em;
				&:last-child {
					border-right: none;
				}
				a {
					img {
						width: 100%;
						height: 100%;
					}
				}
			}
		}
	}
	

</style>