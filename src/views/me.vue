<template>
	<div class="me">
		<div class="me_header">
			<div class="head_pic">
				<router-link to="/login" class="pic">
					<img src="http://www.51mkf.com/wap/images/member_w.png" alt="">
					<p>点击登录</p>
				</router-link>
			</div>
			<div class="tab">
				<ul>
					<li>
						<img src="http://www.51mkf.com/wap/images/favorite_w.png" alt="">
						<p>商品收藏</p>
					</li>
					<li>
						<img src="http://www.51mkf.com/wap/images/store_w.png" alt="">
						<p>店铺搜藏</p>
					</li>
					<li>
						<img src="http://www.51mkf.com/wap/images/goods-browse_w.png" alt="">
						<p>我的足迹</p>
					</li>
				</ul>
			</div>
		</div>
		<div class="me_body">
			<div class="body_top">
				<div class="ordered">
					<h3>我的订单</h3>
					<a>查看全部<span class="sanjiao"></span></a>
				</div>
				<ul class="list">
					<li v-for="(item, index) in list">
						<img :src="item.img" alt="">
						<p>{{item.name}}</p>
					</li>
				</ul>
			</div>
		</div>
		<div class="me_bottom">
			<div class="me_address">
				<h3>收货地址管理</h3>
				<span class="sanjiao"></span>
			</div>
			<div class="set">
				<h3>用户设置</h3>
				<span class="sanjiao"></span>
			</div>
		</div>
	</div>
</template>
<style lang="less">
@import "../base.less";
	.me {
		background-color: #f5f5f5;

		.me_header{
			height: 14em;
			width: 100%;
			background-image: url("http://www.51mkf.com/wap/images/member_top_bg.png");
			background-size: cover;
			background-color: #ED5564;
			position: relative;
			animation: changeBg 15s infinite;
			.head_pic {
				text-align: center;
				padding-top: 2em;
				position: relative;
				.pic {
					width: 10em;
					position: absolute;
					left: 50%;
					margin-left: -5em;
					img {
						padding: .5em;
						width: 4em;
					}
					p {
						font-size: 18px;
						color:#fff;
					}
				}
			}
			@keyframes changeBg {
				0% {
					background-color: #ED5564;
				}
				10% {
					background-color: #FB6E52;
				}
				20% {
					background-color: #FFCE55;
				}
				30% {
					background-color: #A0D468;
				}
				40% {
					background-color: #48CFAE;
				}
				50% {
					background-color: #4FC0E8;
				}
				60% {
					background-color: #5D9CEC;
				}
				70% {
					background-color: #AC92ED;
				}
				80% {
					background-color: #EC87BF;
				}
				90% {
					background-color: #ED5564;
				}
			}
			.tab {
				position: absolute;
				bottom: 0;
				left: 0;
				right: 0;
				height: 4em;
				background-color: rgba(0, 0, 0, .2);
				ul {
					overflow: hidden;
					li {
						float: left;
						width: 33.33%;
						text-align: center;
						padding-top: .5em;
						color: #fff;
						font-size: 14px;
						img {
							width: 18%;
						}
						p {

						}
					}
				}
			}
		}
		.me_body {
			//height: 10em;
			
			.body_top {
				padding: 0 1em;
				margin: 1em 0;
				background-color: #fff;
				.ordered {
					padding: 1em 0;
					overflow: hidden;
					border-bottom: 1px solid #eee;
					h3 {
						float: left;
					}
					a {
						float: right;
						.sanjiao {
							display: inline-block;
							.sanjiaoxing(.5em; .5em; 135deg);
							margin-right: 1em;
						}
					}
				}
				.list {
					overflow: hidden;
					text-align: center;
					padding: 1em 0;
					li {
						float: left;
						width: 20%;
						img {
							width: 30%;
						}
					}
				}
			}
		}
		.me_bottom {
			background-color: #fff;
			.me_address, .set {
				padding: 0 1em;
				height: 3em;
				line-height: 3em;
				overflow: hidden;
				border-bottom: 1px solid #eee;
				h3 {
					float: left;
				}
				.sanjiao {
					float: right;
					display: inline-block;
					.sanjiaoxing(.5em; .5em; 135deg);
					margin-right: 1em;
					margin-top: .8em;
				}
			}
			.set {
				
			}
		}
	}
</style>
<script>
	export default {
		data() {
			return {
				list: [
					{id: 1, name: "代付款", img: "http://www.51mkf.com/wap/images/mcc_01.png"},
					{id: 2, name: "代发货", img: "http://www.51mkf.com/wap/images/mcc_04.png"},
					{id: 3, name: "代收货", img: "http://www.51mkf.com/wap/images/mcc_02.png"},
					{id: 4, name: "代自提", img: "http://www.51mkf.com/wap/images/mcc_03.png"},
					{id: 4, name: "退款/退货", img: "http://www.51mkf.com/wap/images/mcc_05.png"},
				]
			}
		}
	}
</script>