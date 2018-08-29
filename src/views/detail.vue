<template>
	<div class="detail">
		<div class="detail_header">
			<span class="sanjiao" @click="back"></span>
			<p>详情</p>
		</div>
		<div class="content">
			<div class="img">
				<img :src="data.goods_image" alt="">
			</div>
			<p>{{data.goods_name}}</p>
			<h3><span>￥</span>{{data.goods_price}}</h3>
		</div>
		<ul class="car">
			<li class="tel">
				<img src="http://www.51mkf.com/wap/images/kefu_b.png" alt="">
				<p>客服</p>
			</li>
			<router-link to="/shoppingcar" class="shoppingcar" tag="li">
				<span class="add-to-car">{{item.length}}</span>
				<img src="http://www.51mkf.com/wap/images/cart_b.png" alt="">
				<p>购物车</p>
			</router-link>
			<!-- <router-link to="/order" class="buy" tag="li"><h2>立即购买</h2></router-link> -->
			<li class="buy"><h2>立即购买</h2></li>
			<li class="joincar" @click="saveOrder(data)"><h2>加入购物车</h2></li>
		</ul>
		<!-- <div class="mask"></div> -->
		<!-- <button @click="$store.commit('changeNum', 10)">按钮</button>
		<h2>num: {{$store.state.num}}</h2> -->
	</div>
</template>
<style lang="less">
	@import "../base.less";
	.detail {
		position: relative;
		// overflow: hidden;
		padding-bottom: 3em;
		.detail_header {
			display: flex;
			height: 2em;
			padding: .5em 1em;
			background-color: #f5f5f5;
			.sanjiao {
				display: inline-block;
				.sanjiaoxing();
				margin-top: 0.3em;
			}
			p {
				font-size: 20px;
				flex: 1;
				text-align: center;
			}
		}
		.content {
			margin: 1em;
			.img {
				text-align: center;
				margin-bottom: 1em;
			}
			p {
				font-size: 16px;
				margin: 1em 0;
			}
			h3 {
				color: #DB4453;
				span {
					font-size: 12px;
					font-weight: normal;
				}
			}
		}
		.car {
			background-color: #eee;
			position: fixed;
			left: 0;
			right: 0;
			bottom: 0;
			height: 3em;
			border-top: 1px solid #ccc;
			li {
				float: left;
				height: 3em;
				text-align: center;
				box-sizing: border-box;
				border-right: 1px solid #ccc;
				h2 {
					font-size: 18px;
				}
			}
			.tel {
				width: 15%;
				padding-top: .3em;
				img {
					width: 30%;
				}
				p {
					font-size: 14px;
				}
			}
			.shoppingcar {
				width: 20%;
				padding-top: .3em;
				position: relative;
				.add-to-car {
					width: 1.3em;
					height: 1.3em;
					position: absolute;
					top: .1em;
					right: .6em;
					border: 1px solid #ED5564;
					color: #ED5564;
					font-size: 0.4em;
					border-radius: 50%;
				}
				img {
					width: 25%;
				}
				p {
					font-size: 14px;
				}
			}
			.buy {
				width: 30%;
				background-color: #ED5564;
				line-height: 3em;
				color: #fff;
			}
			.joincar {
				width: 35%;
				background-color: #FB6E52;
				line-height: 3em;
				color: #fff;
			}
		}
		.mask {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background-color: rgba(0, 0, 0, .5);
			display: none;
		}
		.block {
			display: block;
		}
	}
</style>
<script>
	//import let mask = document.getElementsByClassName("mask")[0];
	export default {
		data() {
			return {
				//num: 0,
				data: this.$store.state.item,
				item: this.$store.state.goodsList
			}
		},
		computed: {
			
		},

		created() {
			//console.log(this.$store.state.item)
			//console.log(this.$store.state.goodsList)
			// this.$http.get("data/home.json")
			// .then(({data}) => {
			// 	this.phone = data.phone[0]
			// })
		},
		methods: {
			//触发innerShoppingCar将data存储到state
			// saveOrder(data) {
				
			// 	this.$store.commit("innerShoppingCar", data);
				
			// }
			back() {
				this.$router.go(-1)
			},
			saveOrder(data) {
				//判断是否已经存在
				if (this.item.find(item => item.goods_id == data.goods_id)){
					alert("该产品已经添加了")
					return;
				}
				this.item.push(data)
			}
		}
	}
</script>