<template>
	<div class="shoppingcar">
		<div class="car_header">
			<span class="sanjiao" @click="back"></span>
			<p>购物车</p>
		</div>
		<div class="tet">
			<!-- <span class="point"></span> -->
			<img src="http://www.51mkf.com/wap/images/store_b.png" alt="">
			<p>官方自营</p>
		</div>
		<ul class="goods_list">
			<li v-for="(data, index) in item">
				<span class="point" @click="chooseOne(data)" :checked="data.checked"></span>
				<div class="shoppingcar-img">
					<img :src="data.goods_image" alt="">
				</div>
				<p>{{data.goods_name}}</p>
				<h5>￥{{data.goods_price}}</h5>
				<h3>￥{{data.goods_price * data.goods_num}}</h3>
				<!-- <h3>￥{{shopPrice(data)}}</h3> -->
				<div class="del" @click="strike(currentgoods)">
					<img src="http://www.51mkf.com/wap/images/del_b.png" alt="">
				</div>
				<div class="inp">
					<span class="reduce" @click="reduce(data)">-</span>
					<input type="text" value="data.goods_num" v-model="data.goods_num">
					<span class="add" @click="add(data)">+</span>
				</div>
			</li>
		</ul>
		<div class="shoppingCarPrice">
			<span class="point" @click="chooseAll(isChooseAll)" :checked="isChooseAll"></span>
			<div class="allprice">合计总金额：<span>￥{{wholePrice}}</span></div>
			<router-link to="/order" class="confirm" tag="span">确认</router-link>
		</div>
		<Alert v-show="alertShowHide" @hidden="hidden"></Alert>
		<div class="null" v-show="this.item.length === 0 ? true : false">
			<div class="null-shoppingcar">
				<p>购物车空空如也……</p>
				<router-link to="/home" class="mall">逛一逛</router-link>
			</div>
		</div>
	</div>
</template>
<style lang="less">
	@import "../base.less";
	
	.shoppingcar {
		// position: relative;
		.car_header {
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
		.point {
			display: inline-block;
			width: 1em;
			height: 1em;
			margin-top: .5em;
			border-radius: 50%;
			border: 1px solid #666;
			background-color: #f5f5f5;
			float: left;

		}
		// .choose {
		// 	background-color: #ED5564!important;
		// 	position: relative;
		// 	border-color: #ED5564;
		// 	&::after {
		// 		content: "";
		// 		width: .2em;
		// 		height: .6em;
		// 		border: 2px solid transparent;
		// 		border-bottom-color: #fff;
		// 		border-right-color: #fff;
		// 		transform: rotate(45deg);
		// 		position: absolute;
		// 		top: 0;
		// 		left: .3em;
		// 	}
		// }
		[checked] {
			background-color: #ED5564!important;
			position: relative;
			border-color: #ED5564;
			&::after {
				content: "";
				width: .2em;
				height: .6em;
				border: 2px solid transparent;
				border-bottom-color: #fff;
				border-right-color: #fff;
				transform: rotate(45deg);
				position: absolute;
				top: 0;
				left: .3em;
			}
		}
		.tet {
			overflow: hidden;
			height: 2em;
			padding: 1em;
			border-bottom: 1px solid #ddd;
			img {
				height: 60%;
				float: left;
				margin: 0.5em 1em;
			}
			p {
				float: left;
				line-height: 2em;
				font-size: 18px;
			}
		}
		.goods_list {
			margin: 1em;
			padding-bottom: 2.5em;
			li {
				height: 6em;
				display: flex;
				position: relative;
				border-bottom: 1px solid #ddd;
				padding: .5em 0;
				span {

				}
				.shoppingcar-img {
					width: 4em;
					height: 4em;
					padding: .4em .2em;
					border: 1px solid #ccc;
					margin-left: 1em;
					img {
						width: 100%;
						height: 100%;
						
					}
				}
				p {
					font-size: 14px;
					flex: 1;
					margin: 0 1em;
					height: 3em;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;  
					overflow: hidden;
				}
				.del {
					width: 2em;
					height: 2em;
					img {
						width: 60%;
						height: 70%;
					}
				}
				h5 {
					position: absolute;
					bottom: 3em;
					left: 8.5em;
					font-size: 14px;
				}
				h3 {
					position: absolute;
					bottom: 1em;
					left: 7.5em;
					color: #DB4453;
					font-size: 16px;
				}
				.inp {
					position: absolute;
					bottom: .8em;
					right: 1em;
					span {
						display: inline-block;
						width: 2em;
						height: 2em;
						line-height: 2em;
						background-color: #FAFAFA;
						border: 1px solid #ccc;
						text-align: center;
						box-sizing: border-box;
						line-height: 2em;
						vertical-align: middle;
						&.reduce {
							border-top-left-radius: .5em;
							border-bottom-left-radius: .5em;
						}
						&.add {
							border-top-right-radius: .5em;
							border-bottom-right-radius: .5em;
						}
					}

					input {
						width: 2em;
						height: 2em;
						border: none;
						outline: none;
						border-bottom: 1px solid #ccc;
						border-top: 1px solid #ccc;
						box-sizing: border-box;
						font-size: 16px;
						text-align: center;
						vertical-align: middle;
					}
				}
			}
		}
		.shoppingCarPrice {
			position: fixed;
			bottom: 0;
			left: 0;
			right: 0;
			height: 3em;
			display: flex;
			padding: 0 0 0 1em;
			background-color: #eee;
			span {
				display: inline-block;
				&.point {
					margin-top: 1em;
					line-height: 3em;
				}
				// &::after {
				// 	content: "";
				// 	width: .8em;
				// 	height: 1.5em;
				// 	border: 2px solid transparent;
				// 	border-bottom-color: #fff;
				// 	border-right-color: #fff;

				// }
				&.confirm {
					width: 5em;
					text-align: center;
					color: #fff;
					background-color: #ed5564;
					font-size: 20px;
					line-height: 2em;
				}
			}
			.allprice {
				flex: 1;
				text-align: right;
				padding: 0 1em;
				line-height: 3em;
				overflow: hidden;
				span {
					font-size: 20px;
					color: #ed5564;
				}

			}
		}
		.null {
			position: absolute;
			top: 3.5em;
			left: 0;
			right: 0;
			bottom: 0;
			background-color: #eee;
			.null-shoppingcar {
				width: 20em;
				height: 6em;
				position: absolute;
				top: 50%;
				left: 50%;
				margin-top: -3em;
				margin-left: -10em;
				text-align: center;
				p {
					color: #ccc;
					font-size: 20px;
					text-align: center;
					padding: 1em;
				}
				.mall{
					width: 5em;
					height: 2em;
					text-align: center;
					line-height: 2em;
					background-color: #fff;
					padding: 0.5em 1em;
					color: #000;
					border: 1px solid #eee;
				} 
			}
		}
	}
</style>
<script>
	import Alert from "../components/alert/alert.vue";
	export default {
		components: {
			Alert
		},
		data() {
			return {
				//存储的商品列表
				item: this.$store.state.goodsList,
				//是否全选
				isChooseAll: false,
				//总价
				wholePrice: 0,
				//弹窗组件显隐状态
				alertShowHide: false,
				//当前要删除的商品
				currentgoods: {}
				
			}
		},
		created() {
			console.log(this.$store.state.goodsList)
			console.log(this.item.length)
		},
		computed: {
			// shopPrice() {
			// 	let price = this.item.goods_price * this.item.goods_num
			// 	return price.toFixed(2)
			// }
		},
		methods: {
			//返回上一页
			back() {
				this.$router.go(-1)
			},
			//单个商品的加
			reduce(data) {
				if(data.goods_num <= 1) {
					data.goods_num = 1;
					return;
				}
				data.goods_num -= 1;
				this.getWholePrice();
			},
			//单个商品的减
			add(data) {
				data.goods_num += 1;
				this.getWholePrice();
			},
			//选择单个产品
			chooseOne(data) {
				//判断当前商品是否有checked属性，没有则添加，有就取反
				if(typeof data.checked === "undefined") {
					this.$set(data, 'checked', true)
				} else {
					data.checked = !data.checked;
				}
				//改变总价
				this.getWholePrice();
				//调用判断全选方法
				this.isSelectedAll();
			},
			//选择全部商品
			chooseAll(flag) {
				//切换全选按钮
				this.isChooseAll = !flag;
				//各个商品的单选按钮
				//遍历商品数组，添加checked属性
				this.item.forEach((value, index) => {
					//判断是否具有checked属性
					if(typeof value.checked === "undefined") {
						this.$set(value, 'checked', !flag)
					}else {
						value.checked = !flag;
					}
				})
				//调用计算总价方法
				this.getWholePrice();
			},
			//删除商品方法
			strike(currentgoods, alertShowHide) {
				//console.log(11)
				//显示弹窗
				this.alertShowHide = true;
				//console.log(22)
				//this.currentgoods = data
				// this.$store.commit('delete', currentgoods)
				this.$store.commit('delete', {
					"currentgoods": currentgoods,
					"alertShowHide": alertShowHide,
					//"wholePrice": wholePrice
				})
				//this.$store.state.alertShowHide = false;
				
			},
			//给alert组件传的事件
			hidden() {	
				this.alertShowHide = false
			},
			//计算总价方法
			getWholePrice() {
				let wholePrice = 0;
				this.item.forEach((value, index) => {
					if(value.checked) {
						wholePrice += value.goods_price * value.goods_num
					}
				})
				this.wholePrice = wholePrice;
			},
			//判断是否全选方法
			isSelectedAll() {
				let flag = true;
				this.item.forEach((value, index) => {
					if(!value.checked) {
						flag = false;

					}
				})
				this.isChooseAll = flag;
			}
		}
	}
</script>