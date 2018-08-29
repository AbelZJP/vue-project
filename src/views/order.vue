<template>
	<div class="order">
		<div class="order_header">
			<span class="sanjiao" @click="back"></span>
			<p>订单</p>
		</div>
		<div class="order_body">
			<!-- <div class="address" @click="getinfo">
				<div class="left">
					<div class="people">
						<img src="http://www.51mkf.com/wap/images/location_b.png" alt="">
						<span>收货人:{{item.name}}</span>	
					</div>
					<div class="order_address">
						{{}}
					</div>
				</div>
				<span class="sanjiao"></span>
				<Address v-if="choose"></Address>
			</div> -->
			<router-link to="/address" class="address">
				<div class="left">
					<div class="people">
						<img src="http://www.51mkf.com/wap/images/location_b.png" alt="">
						<span>收货人:{{}}</span>	
					</div>
					<div class="order_address">
						{{}}
					</div>
				</div>
				<span class="sanjiao"></span>
			
			</router-link>
			<div class="pay">
				<div class="left">
					<img src="http://www.51mkf.com/wap/images/mcc_01.png" alt="">
					<span>支付方式：</span>
				</div>
				<span class="sanjiao"></span>
			</div>
			<div class="shop">
				<div class="tet">
					<img src="http://www.51mkf.com/wap/images/store_b.png" alt="">
					<span>官方自营</span>

				</div>
				<ul class="ordered">
					<li v-for="(item,index) in data" v-if="item.checked == true">
						<div class="shoppingcar-img">
							<img :src="item.goods_image" alt="">
						</div>
						<div class="right">
							<p>{{item.goods_name}}</p>
							<h3>￥{{item.goods_price * item.goods_num}}</h3>
							<div class="num">{{item.goods_num}}件</div>
						</div>
					</li>
				</ul>
			</div>
			<div class="order_footer">	
				<div class="allprice">合计总金额：<span>￥{{wholePrice}}</span></div>
				<router-link to="/" class="confirm" tag="span">结算</router-link>
			</div>
		</div>
	</div>
</template>
<style lang="less">
	@import "../base.less";
	.order {
		padding-bottom: 3em;
		.order_header {
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
		.order_body {
			.address, .pay {
				height: 6em;
				padding: 1em;
				display: flex;
				.left {
					flex: 1;
					.people {
						padding: .5em;
						img {
							vertical-align: middle;
							width: 5%;
							margin-right: .5em;
						}
						span {
							font-size: 18px;
							vertical-align: middle;
						}
						
					}
					.order_address {
						padding: .5em;
						font-size: 16px;
					}
				}
				.sanjiao {
					width: 2em;
					display: inline-block;
					.sanjiaoxing(.5em; .5em; 135deg);
					margin-top: 0.3em;
				}
			}
			.pay {
				background-color: #f5f5f5;
				height: 2em;
				font-size: 18px;
				padding: .5em 1em;
				img {
					vertical-align: middle;
					width: 5%;
					margin-right: .5em;
				}
				span {
					font-size: 18px;
					vertical-align: middle;
				}
			}
			.shop {
				.tet {
					padding: .5em 1em 1em;
					border-bottom: 1px solid #ddd;
					img {
						vertical-align: middle;
						width: 5%;
						margin-right: .5em;
					}
					span {
						font-size: 18px;
						vertical-align: middle;
					}
				}
				.ordered {
					padding: 0 1em;
					li {
						display: flex;
						border-bottom: 1px solid #eee;
						height: 6em;
						position: relative;
						padding: .5em 0;
						.shoppingcar-img {
							width: 4em;
							height: 4em;
							padding: .5em;
							border: 1px solid #ddd;
							img {
								width: 100%;
								height: 100%;
							}
						}
						.right {
							flex: 1;
							padding: 0 .5em;
							p {
							
							}
							h3 {
								color: #ed5564;
								padding: .5em 0;
							}
							.num {
								position: absolute;
								bottom: 1.5em;
								right: 1em;
							}
						}
					}
				}
			}
			.order_footer {
				height: 3em;
				position: fixed;
				bottom: 0;
				left: 0;
				right: 0;
				background-color: #f5f5f5;
				display: flex;
				.allprice{
					flex: 1;
					padding: 0 1em;
					text-align: right;
					line-height: 3em;
					span {
						color: #ed5564;
						font-size: 20px;
						font-weight: bold;
					}
				}
				.confirm {
					width: 7em;
					background-color: #ed5564;
					color: #fff;
					text-align: center;
					line-height: 3em;
				}
			}
		}
	}
</style>
<script>
	import Address from "./address.vue"
	export default {
		components: {
			Address
		},
		data() {
			return {
				data: this.$store.state.goodsList,
				//i:[],
				wholePrice: 0,
				show: false,
				item: this.$store.state.info,
				// name: '',
				// address:{
				// 	p: "",
				// 	c: "",
				// 	a: ""
				// },
				// detail: ''
				//choose: false
			}
		},
		created() {
			// dealData(data) {
			// 	this.data.flter((value, idx) => {
			// 		return value.hasOwnProperty('checked')
			// 	})
			// }
			console.log(this.item)
		},
		mounted() {
			this.getWholePrice()
		},
		methods: {
			//返回上一页
			back() {
				this.$router.go(-1)
			},
			
			//计算总价方法
			getWholePrice() {
				let wholePrice = 0;
				this.data.forEach((value, index) => {
					if(value.checked == true) {
						wholePrice += value.goods_price * value.goods_num
					}
				})
				this.wholePrice = wholePrice;
			},
			// getinfo() {
			// 	this.choose = true
			// }
			
		}
	}
</script>