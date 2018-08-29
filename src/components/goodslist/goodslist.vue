<template>
	<div class="goods">
		<div class="title">
			<img class="img1" :src="dataAd.img" alt="">
			<!-- <img v-show:"" class="img2" :src="dataAd.img_ad" alt=""> -->		
		</div>
		<div class="goods-list">
			<ul>
				<router-link v-for="(item, index) in dealdata" :to="/detail/ + item.goods_id" :key="index" tag="li">
					<img @click="sendid(item)" :src="item.goods_image" alt="">
					<div>
						<p class="text">{{item.goods_name}}</p>
						<p class="price"><span>￥</span>{{item.goods_price}}</p>
					</div>
				</router-link>
			</ul>
		</div>
	</div>
</template>
<style lang="less">
	.goods {
		.title {
			height: 3em;
			width: 100%;
			background-color: #eee;
			.img1 {
				width: 100%;
				height: 100%;
				margin: 10px 0;
			}
			// .img2 {
			// 	height: 4em;
			// 	width: 100%;
			// }
		}
		.goods-list {
			background-color: rgb(240, 240, 240);
			margin: 10px 0 0 0;
			ul {
				overflow: hidden;
				li {
					float: left;
					width: 50%;
					padding: 15px 8px 0;
					box-sizing: border-box;
					img {
						border-top-right-radius: 8px;
						border-top-left-radius: 8px;
						width: 100%;
						height: 100%;
					}
					div {
						background-color: #fff;
						margin-top: -4px;
						padding: 4px;
						border-bottom-right-radius: 8px;
						border-bottom-left-radius: 8px;
						.text {
							font-size: 14px;
							margin: 5px 0;
							
							display: -webkit-box;
							-webkit-box-orient: vertical;
							-webkit-line-clamp:2;
							text-overflow: ellipsis;
							overflow: hidden;
						}
						.price {
							padding: 5px 0;
							border-top: 1px solid #eee;
							font-weight: bold;
							font-size: 20px;
							color:rgb(219, 68, 83);
							span {
								font-weight: normal;
								font-size: 14px;
							}
						}
					}
				}
			}
		}
	}

</style>
<script>
	import Vue from "vue";
	export default {
		props:["data", "dataAd"],
		data() {
			return {
				// id: this.data.map(function(item, index) {
				// 	return item.goods_id
				// })
				//id: ""
			}
		},
		computed: {
			dealdata() {
				return this.data.filter(item => item.goods_name.indexOf(this.$store.state.word) >=0)
			}
		},
		created() {
			//console.log(this)
		},
		methods: {
			//触发receiveId将item存储到state
			sendid(item) {
				this.$store.commit("receiveId", item)
				//console.log(id)
			}
		}
		
		
	}
</script>